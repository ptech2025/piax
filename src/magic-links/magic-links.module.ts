import { Module } from '@nestjs/common';
import { MagicLinksController } from './magic-links.controller';
import { MagicLinksService } from './magic-links.service';
import { ConnectorsModule } from '../connectors/connectors.module';

@Module({
  imports: [ConnectorsModule],
  controllers: [MagicLinksController],
  providers: [MagicLinksService],
})
export class MagicLinksModule {}
