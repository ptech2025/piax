import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/**
 * V1 simplification: PIAX only needs to be usable by you (and whoever else
 * you hand the admin token to) — it is not yet a multi-admin RBAC system.
 * A single bearer token, set as PIAX_ADMIN_TOKEN, gates every /people and
 * /grants route. When you need more than one named admin with separate
 * audit trails, swap this for real accounts (e.g. better-auth) — the rest
 * of the app doesn't need to change, since AuditLog already records an
 * "actor" string per action.
 */
@Injectable()
export class PiaxAdminGuard implements CanActivate {
  constructor(private config: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    const authHeader: string | undefined = req.headers['authorization'];
    const expected = this.config.getOrThrow<string>('PIAX_ADMIN_TOKEN');

    if (!authHeader || authHeader !== `Bearer ${expected}`) {
      throw new UnauthorizedException('Missing or invalid PIAX admin token');
    }

    // Attach a simple "actor" identity for audit logging.
    req.piaxActor = this.config.get<string>('PIAX_ADMIN_EMAIL') ?? 'admin';
    return true;
  }
}
