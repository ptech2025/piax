import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpProductConnector } from './http-product.connector';

@Injectable()
export class QuickEstimateConnector extends HttpProductConnector {
  protected readonly logger = new Logger(QuickEstimateConnector.name);
  protected readonly baseUrl: string;
  protected readonly sharedSecret: string;

  constructor(http: HttpService, config: ConfigService) {
    super(http);
    this.baseUrl = config.getOrThrow<string>('QUICKESTIMATE_INTERNAL_URL');
    this.sharedSecret = config.getOrThrow<string>('QUICKESTIMATE_PIAX_SECRET');
  }
}
