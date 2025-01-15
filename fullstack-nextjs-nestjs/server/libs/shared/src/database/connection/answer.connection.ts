import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Db, MongoClient } from 'mongodb';
import { DatabaseName } from '@app/shared/database/connection.enum';

@Global()
@Module({
  providers: [
    {
      provide: 'AnswerConnection',
      inject: [ConfigService],
      useFactory: async (configService: ConfigService): Promise<Db> => {
        try {
          const mongoUri = configService.get<string>('MONGO_URI') as string;
          const client = await MongoClient.connect(mongoUri, {});
          return client.db(DatabaseName.ANSWER);
        } catch (e) {
          throw e;
        }
      },
    },
  ],
  exports: ['AnswerConnection'],
})
export class AnswerConnection {}
