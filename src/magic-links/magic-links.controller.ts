import { Body, Controller, Param, Post, Req, UseGuards } from '@nestjs/common';
import { MagicLinksService } from './magic-links.service';
import { CreateMagicLinkDto } from './dto';
import { PiaxAdminGuard } from '../auth/piax-admin.guard';

@Controller('people/:personId/magic-links')
@UseGuards(PiaxAdminGuard)
export class MagicLinksController {
  constructor(private readonly magicLinks: MagicLinksService) {}

  @Post()
  create(@Param('personId') personId: string, @Body() dto: CreateMagicLinkDto, @Req() req: any) {
    return this.magicLinks.create(personId, dto.product, dto.expiresInMinutes ?? null, req.piaxActor);
  }
}
