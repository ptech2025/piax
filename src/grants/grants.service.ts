import { Inject, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { GrantStatus, ProductKey } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CONNECTOR_REGISTRY } from '../connectors/connectors.module';
import { ProductConnector } from '../connectors/connector.types';

type ConnectorRegistry = Record<ProductKey, ProductConnector>;

@Injectable()
export class GrantsService {
  private readonly logger = new Logger(GrantsService.name);

  constructor(
    private prisma: PrismaService,
    @Inject(CONNECTOR_REGISTRY) private connectors: ConnectorRegistry,
  ) {}

  /**
   * Grants (or re-grants) a person access to one product. Idempotent: calling
   * this again for the same person+product updates the existing grant rather
   * than creating a duplicate.
   */
  async grant(personId: string, product: ProductKey, expiresAt: string | undefined, actor: string) {
    const person = await this.prisma.person.findUnique({ where: { id: personId } });
    if (!person) throw new NotFoundException('Person not found');

    const connector = this.connectors[product];

    try {
      const result = await connector.grantAccess({
        email: person.email,
        name: person.name,
        role: person.role,
        expiresAt: expiresAt ?? null,
      });

      const grant = await this.prisma.productGrant.upsert({
        where: { personId_product: { personId, product } },
        update: {
          status: GrantStatus.ACTIVE,
          expiresAt: expiresAt ? new Date(expiresAt) : null,
          externalUserId: result.externalUserId,
          lastError: null,
        },
        create: {
          personId,
          product,
          status: GrantStatus.ACTIVE,
          expiresAt: expiresAt ? new Date(expiresAt) : null,
          externalUserId: result.externalUserId,
        },
      });

      await this.prisma.auditLog.create({
        data: { actor, action: 'grant_access', targetPersonId: personId, product, success: true },
      });

      return grant;
    } catch (err) {
      this.logger.error(`grantAccess failed for ${person.email} on ${product}`, err as Error);

      await this.prisma.productGrant.upsert({
        where: { personId_product: { personId, product } },
        update: { status: GrantStatus.FAILED, lastError: String((err as Error).message ?? err) },
        create: {
          personId,
          product,
          status: GrantStatus.FAILED,
          lastError: String((err as Error).message ?? err),
        },
      });

      await this.prisma.auditLog.create({
        data: {
          actor,
          action: 'grant_access',
          targetPersonId: personId,
          product,
          success: false,
          detail: { error: String((err as Error).message ?? err) },
        },
      });

      throw err;
    }
  }

  async revoke(personId: string, product: ProductKey, actor: string) {
    const person = await this.prisma.person.findUnique({ where: { id: personId } });
    if (!person) throw new NotFoundException('Person not found');

    await this.connectors[product].revokeAccess(person.email);

    const grant = await this.prisma.productGrant.update({
      where: { personId_product: { personId, product } },
      data: { status: GrantStatus.REVOKED },
    });

    await this.prisma.auditLog.create({
      data: { actor, action: 'revoke_access', targetPersonId: personId, product, success: true },
    });

    return grant;
  }
}
