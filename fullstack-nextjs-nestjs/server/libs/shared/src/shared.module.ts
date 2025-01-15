import { Module } from '@nestjs/common';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { I18nModule } from '@app/shared/modules/i18n/i18n.module';
import { AxiosModule } from '@app/shared/lib/axios.module';
import { DatabaseModule } from '@app/shared/database/database.module';

@Module({
  imports: [
    DatabaseModule,
    AxiosModule,
    I18nModule,
    ThrottlerModule.forRoot([
      {
        ttl: 1000,
        limit: 10,
      },
    ]),
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
  controllers: [],
  exports: [],
})
export class SharedModule {}
