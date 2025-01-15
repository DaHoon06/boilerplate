import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {
  COLLECTIONS,
  DatabaseName,
} from '@app/shared/database/connection.enum';
import { TypeQuotaInterDto } from '@app/shared/schema/dto/type.quota.dto';
import {
  IKeyValueIsNumber,
  IKeyValueIsString,
} from '@app/shared/interface/common.interface';

@Schema({ versionKey: false, collection: COLLECTIONS.NEW_PROJECT_SETTING })
export class NewProjectSetting {
  @Prop({ required: false })
  _id: number;

  @Prop({ required: false, type: Array })
  RESPONDENT_COUNT: IKeyValueIsNumber[];

  @Prop({ required: false, type: Object })
  QUOTA: {
    GENDER: IKeyValueIsString[];
    AGE_UNIT: IKeyValueIsString[];
    AGE_5: IKeyValueIsString[];
    AGE_10: IKeyValueIsString[];
  };

  @Prop({ required: false, type: Array })
  ALLOCATE: IKeyValueIsString[];

  @Prop({ required: false, type: Array })
  AREA: IKeyValueIsString[];
  @Prop({ required: false, type: Object })
  QUOTA_TABLE: TypeQuotaInterDto;
}

export const NewProjectSettingSchema =
  SchemaFactory.createForClass(NewProjectSetting);

export type NewProjectSettingDocument = HydratedDocument<NewProjectSetting>;

export const NewProjectSettingFeature = (databaseName: DatabaseName) =>
  MongooseModule.forFeature(
    [
      {
        name: NewProjectSetting.name,
        schema: NewProjectSettingSchema,
      },
    ],
    databaseName,
  );
