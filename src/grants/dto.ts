import { IsEnum, IsISO8601, IsOptional } from 'class-validator';
import { ProductKey } from '@prisma/client';

export class GrantDto {
  @IsEnum(ProductKey)
  product: ProductKey;

  @IsOptional()
  @IsISO8601()
  expiresAt?: string; // omit for "never expires"
}
