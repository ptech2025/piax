import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { QuickEstimateConnector } from './quickestimate.connector';
import { Home360Connector } from './home360.connector';
import { PoraConnector } from './pora.connector';
import { ProductKey } from '@prisma/client';

export const CONNECTOR_REGISTRY = 'CONNECTOR_REGISTRY';

@Module({
  imports: [HttpModule.register({ timeout: 10_000 })],
  providers: [
    QuickEstimateConnector,
    Home360Connector,
    PoraConnector,
    {
      provide: CONNECTOR_REGISTRY,
      useFactory: (qe: QuickEstimateConnector, h360: Home360Connector, pora: PoraConnector) => ({
        [ProductKey.QUICKESTIMATE]: qe,
        [ProductKey.HOME360]: h360,
        [ProductKey.PORA]: pora,
      }),
      inject: [QuickEstimateConnector, Home360Connector, PoraConnector],
    },
  ],
  exports: [CONNECTOR_REGISTRY],
})
export class ConnectorsModule {}
