import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpProductConnector } from './http-product.connector';

/**
 * Pora Cloud is built on Clerk (not better-auth) and — per the repo README —
 * has no billing/subscription gate at all yet. Its internal endpoint is a
 * thin wrapper (see patches/pora-cloud) that uses Clerk's own backend API
 * (createUser + createSignInToken) to satisfy the same external contract, so
 * this connector needs no special-casing on the PIAX side.
 */
@Injectable()
export class PoraConnector extends HttpProductConnector {
  protected readonly logger = new Logger(PoraConnector.name);
  protected readonly baseUrl: string;
  protected readonly sharedSecret: string;

  constructor(http: HttpService, config: ConfigService) {
    super(http);
    this.baseUrl = config.getOrThrow<string>('PORA_INTERNAL_URL');
    this.sharedSecret = config.getOrThrow<string>('PORA_PIAX_SECRET');
  }
}
