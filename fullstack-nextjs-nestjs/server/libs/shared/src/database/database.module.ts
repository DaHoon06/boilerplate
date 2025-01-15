import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Connection, DatabaseName } from '@app/shared/database/connection.enum';
import { Module } from '@nestjs/common';

const mongooseModule = (connectionName: Connection, dbName: DatabaseName) => {
  return MongooseModule.forRootAsync({
    imports: [ConfigModule],
    connectionName,
    useFactory: async (configService: ConfigService) => {
      const uri = configService.get<string>('MONGO_URI') as string;
      return {
        uri,
        dbName,
      };
    },
    inject: [ConfigService],
  });
};

@Module({
  imports: [
    mongooseModule(Connection.SIMPLE_SURVEY, DatabaseName.SIMPLE_SURVEY),
    mongooseModule(Connection.GET_DATA, DatabaseName.GET_DATA),
    mongooseModule(Connection.SURVEY_MATE, DatabaseName.SURVEY_MATE),
    mongooseModule(
      Connection.SURVEY_MATE_PLATFORM,
      DatabaseName.SURVEY_MATE_PLATFORM,
    ),
  ],
})
export class DatabaseModule {}
