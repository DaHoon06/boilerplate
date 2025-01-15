import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ObjectId } from 'mongodb';
import {
  COLLECTIONS,
  DatabaseName,
} from '@app/shared/database/connection.enum';
import {
  DEPART_ID,
  LOGIN_TYPE,
  USER_RATING,
  USER_TYPE,
} from '@app/shared/enums/user.enum';
import { UserFavoriteDto } from '@app/shared/schema/dto/user.favorite.dto';

@Schema({ versionKey: false, collection: COLLECTIONS.USERS })
export class User {
  @Prop({ required: true, type: String })
  _id: string;

  @Prop({ required: true, type: String })
  PWD: string;

  @Prop({ default: 'USER', required: false, type: String })
  ROLE: string;

  @Prop({ default: true, required: false, type: Boolean })
  USE: boolean;

  @Prop({ default: 'PMI', required: false, type: String })
  COMPANY_ID: string;

  @Prop({ default: 'PMI', required: false, type: String })
  COMPANY_NAME: string;

  @Prop({ required: true, type: String })
  NAME: string;

  @Prop({ required: true, type: String })
  NICKNAME: string;
  @Prop({ default: ['ONLINE'], required: false, type: Array(String) })
  ROLES: string[];

  @Prop({ required: false, type: String, default: DEPART_ID })
  DEPART_ID: string;

  @Prop({ default: Date.now, required: false, type: Date })
  LAST_LOGIN_DT: Date;

  @Prop({ required: false, type: String })
  LAST_LOGIN_IP: string;

  @Prop({ default: [], required: true, type: Array(Number) })
  PROJECT: number[];

  @Prop({ required: true, type: String })
  PHONE: string;

  @Prop({ required: false, type: Array(Object), default: [] })
  FAVORITE: UserFavoriteDto[];

  @Prop({ default: false, required: false, type: Boolean })
  EMAIL_AUTH: boolean;

  @Prop({ required: false, type: Date })
  EMAIL_AUTH_DT: Date;

  @Prop({ default: false, required: false, type: Boolean })
  MARKETING_AUTH: boolean;

  @Prop({ required: false, type: Date })
  MARKETING_AUTH_DT: Date;

  @Prop({ required: true, type: ObjectId, default: () => new ObjectId() })
  OBJECT_ID: ObjectId;

  @Prop({ required: false, default: new Date(), type: Date })
  REGIST_DT: Date;

  @Prop({ default: 'PMI', required: false, type: String })
  REGIST_UID: string;

  @Prop({ default: 0, type: Number })
  LOGIN_FAILED_COUNT: number;

  @Prop({ default: false, type: Boolean })
  ACCOUNT_LOCK: boolean;

  /**
   * @description: 계정 유형 (메타서베이 계정과 구분 용도)
   */
  @Prop({ default: 'UNISURVEY', required: false, type: String })
  REGIST_TYPE: string;
  /**
   * @description: 회원 타입
   */
  @Prop({
    required: true,
    enum: USER_TYPE,
    type: String,
    default: USER_TYPE.NORMAL,
  })
  USER_TYPE: USER_TYPE;

  @Prop({ required: false, type: String })
  ENTERPRISE: string;
  /**
   * @description: 회원 등급
   */
  @Prop({
    default: USER_RATING.BRONZE,
    required: false,
    enum: USER_RATING,
    type: String,
  })
  USER_RATING: USER_RATING;

  @Prop({ required: false, type: Date, default: new Date() })
  UNLOCK_DATE: Date;

  /** @description: 알림 확인(어드민 용) */
  @Prop({ required: false, type: Array, default: () => [] })
  ALERT_CHECK: Array<{
    adminId: string;
    date: Date;
  }>;

  @Prop({
    default: () => [LOGIN_TYPE.NORMAL],
    required: false,
    enum: LOGIN_TYPE,
    type: String,
  })
  LOGIN_TYPE: string[];

  @Prop({ default: [] })
  SAMPLE_PRJ: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);

export type UserDocument = HydratedDocument<User>;

export const UserFeature = (databaseName: DatabaseName) =>
  MongooseModule.forFeature(
    [
      {
        name: User.name,
        schema: UserSchema,
      },
    ],
    databaseName,
  );
