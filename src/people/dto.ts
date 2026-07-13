import { IsEmail, IsIn, IsNotEmpty, IsString } from 'class-validator';

export const PERSON_ROLES = [
  'CMO',
  'Business Development',
  'Internal Staff',
  'Strategic Partner',
  'Investor',
  'Administrator',
] as const;

export class CreatePersonDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  role: string; // extensible on purpose — not restricted to PERSON_ROLES at the DB layer
}
