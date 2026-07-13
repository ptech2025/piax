import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { PeopleModule } from './people/people.module';
import { GrantsModule } from './grants/grants.module';
import { MagicLinksModule } from './magic-links/magic-links.module';
import { LandingModule } from './landing/landing.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    PeopleModule,
    GrantsModule,
    MagicLinksModule,
    LandingModule,
  ],
})
export class AppModule {}
