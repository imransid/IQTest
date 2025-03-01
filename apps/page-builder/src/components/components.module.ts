import { Module } from '@nestjs/common';

// import { QuoteService } from './quotes/quote.service';
// import { QuoteResolver } from './quotes/quote.resolver';

import { PrismaModule } from '../../../../prisma/prisma.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    PrismaModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: {
          expiresIn: 3600,
        },
      }),
    }),
  ],
  providers: [JwtService, ConfigService], // QuoteService, QuoteResolver,
})
export class ComponentsModule {}
