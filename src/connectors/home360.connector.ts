import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpProductConnector } from './http-product.connector';

@Injectable()
export class Home360Connector extends HttpProductConnector {
  protected readonly logger = new Logger(Home360Connector.name);
  protected readonly baseUrl: string;
  protected readonly sharedSecret: string;

  constructor(http: HttpService, config: ConfigService) {
    super(http);
    this.baseUrl = config.getOrThrow<string>('HOME360_INTERNAL_URL');
    this.sharedSecret = config.getOrThrow<string>('HOME360_PIAX_SECRET');
  }
}
