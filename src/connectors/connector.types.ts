export interface GrantAccessInput {
  email: string;
  name: string;
  role: string;
  /** ISO string or null for "never expires" */
  expiresAt: string | null;
}

export interface GrantAccessResult {
  externalUserId: string;
}

export interface MagicLinkResult {
  url: string;
  expiresAt: string | null;
}

/**
 * Every product connector implements this same three-method contract.
 * PIAX never talks to a product's database directly — it only calls this
 * product's own small internal endpoint, authenticated with a shared secret.
 * That keeps PIAX from needing production DB credentials for three different
 * services, and keeps each product's access rules inside that product's own
 * codebase (where they can be reasoned about and tested).
 */
export interface ProductConnector {
  grantAccess(input: GrantAccessInput): Promise<GrantAccessResult>;
  createMagicLink(email: string, expiresInMinutes: number | null): Promise<MagicLinkResult>;
  revokeAccess(email: string): Promise<void>;
}
