import { IsEnum, IsInt, IsOptional, Min } from 'class-validator';
import { ProductKey } from '@prisma/client';

export class CreateMagicLinkDto {
  @IsEnum(ProductKey)
  product: ProductKey;

  @IsOptional()
  @IsInt()
  @Min(1)
  expiresInMinutes?: number; // omit for "never expires"
}
