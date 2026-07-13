import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePersonDto } from './dto';

@Injectable()
export class PeopleService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreatePersonDto) {
    return this.prisma.person.create({ data: dto });
  }

  findAll() {
    return this.prisma.person.findMany({
      include: { grants: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const person = await this.prisma.person.findUnique({
      where: { id },
      include: { grants: true, magicLinks: { orderBy: { createdAt: 'desc' }, take: 10 } },
    });
    if (!person) throw new NotFoundException('Person not found');
    return person;
  }

  remove(id: string) {
    return this.prisma.person.delete({ where: { id } });
  }
}
