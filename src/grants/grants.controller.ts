import { Body, Controller, Delete, Param, Post, Req, UseGuards } from '@nestjs/common';
import { ProductKey } from '@prisma/client';
import { GrantsService } from './grants.service';
import { GrantDto } from './dto';
import { PiaxAdminGuard } from '../auth/piax-admin.guard';

@Controller('people/:personId/grants')
@UseGuards(PiaxAdminGuard)
export class GrantsController {
  constructor(private readonly grants: GrantsService) {}

  @Post()
  grant(@Param('personId') personId: string, @Body() dto: GrantDto, @Req() req: any) {
    return this.grants.grant(personId, dto.product, dto.expiresAt, req.piaxActor);
  }

  @Delete(':product')
  revoke(@Param('personId') personId: string, @Param('product') product: ProductKey, @Req() req: any) {
    return this.grants.revoke(personId, product, req.piaxActor);
  }
}
