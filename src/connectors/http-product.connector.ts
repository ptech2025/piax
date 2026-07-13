import { HttpService } from '@nestjs/axios';
import { Logger } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import {
  GrantAccessInput,
  GrantAccessResult,
  MagicLinkResult,
  ProductConnector,
} from './connector.types';

/**
 * Shared base for the two products (QuickEstimate, Home360) that expose the
 * standard `/internal/piax/*` contract described in
 * patches/<repo>/README-INTEGRATION.md. Pora Cloud is different (Clerk-based,
 * no billing) so it gets its own connector — see pora.connector.ts.
 */
export abstract class HttpProductConnector implements ProductConnector {
  protected abstract readonly logger: Logger;
  protected abstract readonly baseUrl: string;
  protected abstract readonly sharedSecret: string;

  constructor(protected readonly http: HttpService) {}

  private get headers() {
    return { 'x-piax-secret': this.sharedSecret, 'content-type': 'application/json' };
  }

  async grantAccess(input: GrantAccessInput): Promise<GrantAccessResult> {
    const { data } = await firstValueFrom(
      this.http.post(`${this.baseUrl}/internal/piax/grant-access`, input, {
        headers: this.headers,
      }),
    );
    return data;
  }

  async createMagicLink(email: string, expiresInMinutes: number | null): Promise<MagicLinkResult> {
    const { data } = await firstValueFrom(
      this.http.post(
        `${this.baseUrl}/internal/piax/magic-link`,
        { email, expiresInMinutes },
        { headers: this.headers },
      ),
    );
    return data;
  }

  async revokeAccess(email: string): Promise<void> {
    await firstValueFrom(
      this.http.post(`${this.baseUrl}/internal/piax/revoke-access`, { email }, { headers: this.headers }),
    );
  }
}
