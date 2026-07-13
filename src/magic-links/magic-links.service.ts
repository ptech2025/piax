import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ProductKey } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CONNECTOR_REGISTRY } from '../connectors/connectors.module';
import { ProductConnector } from '../connectors/connector.types';

type ConnectorRegistry = Record<ProductKey, ProductConnector>;

@Injectable()
export class MagicLinksService {
  constructor(
    private prisma: PrismaService,
    @Inject(CONNECTOR_REGISTRY) private connectors: ConnectorRegistry,
  ) {}

  /**
   * Generates a one-click login link for a person into a specific product.
   * Requires that person already have an ACTIVE grant for that product —
   * PIAX won't hand out a working link for access it hasn't granted.
   */
  async create(personId: string, product: ProductKey, expiresInMinutes: number | null, actor: string) {
    const person = await this.prisma.person.findUnique({
      where: { id: personId },
      include: { grants: { where: { product } } },
    });
    if (!person) throw new NotFoundException('Person not found');
    if (!person.grants.length || person.grants[0].status !== 'ACTIVE') {
      throw new NotFoundException(
        `${person.email} does not have an active grant for ${product} yet — grant access first.`,
      );
    }

    const result = await this.connectors[product].createMagicLink(person.email, expiresInMinutes);

    const record = await this.prisma.magicLinkRequest.create({
      data: {
        personId,
        product,
        url: result.url,
        expiresAt: result.expiresAt ? new Date(result.expiresAt) : null,
      },
    });

    await this.prisma.auditLog.create({
      data: { actor, action: 'create_magic_link', targetPersonId: personId, product, success: true },
    });

    return record;
  }
}
