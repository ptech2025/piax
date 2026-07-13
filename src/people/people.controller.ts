import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { PeopleService } from './people.service';
import { CreatePersonDto } from './dto';
import { PiaxAdminGuard } from '../auth/piax-admin.guard';

@Controller('people')
@UseGuards(PiaxAdminGuard)
export class PeopleController {
  constructor(private readonly people: PeopleService) {}

  @Post()
  create(@Body() dto: CreatePersonDto) {
    return this.people.create(dto);
  }

  @Get()
  findAll() {
    return this.people.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.people.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.people.remove(id);
  }
}
