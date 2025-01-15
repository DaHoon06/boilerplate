import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  COLLECTIONS,
  DatabaseName,
} from '@app/shared/database/connection.enum';
import { ObjectId } from 'mongodb';
import { QUOTA_SQ1, QUOTA_SQ3 } from '@app/shared/enums/question.enum';
import { RouteStatus, SurveyType } from '@app/shared/enums/route.enum';
import { HydratedDocument } from 'mongoose';

@Schema({ versionKey: false, collection: COLLECTIONS.ROUTE_LOG })
export class RouteLog {
  @Prop({ required: true, type: ObjectId, default: () => new ObjectId() })
  _id: ObjectId;

  @Prop({ required: true, type: String })
  accessKey: string;

  @Prop({ required: true, type: Number })
  snum: number;

  @Prop({ required: true, type: String })
  uid: string;

  @Prop({ required: true, default: () => new Date() })
  createDate: Date;

  @Prop({ required: true, default: () => new Date() })
  joinDate: Date;

  @Prop({
    required: false,
    type: String,
    enum: RouteStatus,
    default: RouteStatus.DROP,
  })
  status: RouteStatus;

  @Prop({ required: false, default: 1900, set: (val: string) => +val })
  birthYear?: number;

  @Prop({
    required: false,
    type: String,
    enum: QUOTA_SQ3,
    default: QUOTA_SQ3.V1,
  })
  region?:
    | QUOTA_SQ3.V1
    | QUOTA_SQ3.V2
    | QUOTA_SQ3.V3
    | QUOTA_SQ3.V4
    | QUOTA_SQ3.V5
    | QUOTA_SQ3.V6
    | QUOTA_SQ3.V7
    | QUOTA_SQ3.V8
    | QUOTA_SQ3.V9
    | QUOTA_SQ3.V10
    | QUOTA_SQ3.V11
    | QUOTA_SQ3.V12
    | QUOTA_SQ3.V13
    | QUOTA_SQ3.V14
    | QUOTA_SQ3.V15
    | QUOTA_SQ3.V16
    | QUOTA_SQ3.V17;

  @Prop({
    required: false,
    type: String,
    enum: QUOTA_SQ1,
    default: QUOTA_SQ1.V1,
  })
  gender?: QUOTA_SQ1.V1 | QUOTA_SQ1.V2;

  @Prop({ required: false, type: String, enum: SurveyType })
  surveyType: SurveyType;
}

export const RouteLogSchema = SchemaFactory.createForClass(RouteLog);

export type RouteLogDocument = HydratedDocument<RouteLog>;

export const RouteLogFeature = (databaseName: DatabaseName) =>
  MongooseModule.forFeature(
    [{ name: RouteLog.name, schema: RouteLogSchema }],
    databaseName,
  );
