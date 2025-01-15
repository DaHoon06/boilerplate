import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {
  COLLECTIONS,
  DatabaseName,
} from '@app/shared/database/connection.enum';
import { TypeSvyConfigDto } from '@app/shared/schema/dto/svy.info.dto';
import { TypeMakeDto } from '@app/shared/schema/dto/type.make.dto';
import { TypeLastMsg } from '@app/shared/schema/dto/svy.addInfo.dto';

@Schema({ versionKey: false, collection: COLLECTIONS.QUESTION })
export class Question {
  @Prop({ required: true, type: Number, default: 0 })
  _id: number;
  @Prop({ required: false, type: String })
  TITLE: string;
  @Prop({ required: false, type: String })
  PLACEHOLDER: string;
  @Prop({ type: Object, required: true }) //, enum: ['ADMIN', 'USER']
  ROLE: { OWNER: string[] };
  @Prop({ type: TypeSvyConfigDto, required: true })
  CONFIG: TypeSvyConfigDto;
  @Prop({ type: Array(Object), required: true })
  DATA: TypeMakeDto[];
  @Prop({ type: Boolean, required: false })
  isUse: boolean;
  @Prop({ type: Date, required: false })
  regDate: Date;

  @Prop({ type: Date, required: false })
  modDate: Date;
  @Prop({ type: TypeLastMsg, required: false })
  LAST_MSG: TypeLastMsg;
  @Prop({ type: Array, required: false })
  DATA_GUIDE: [];
  @Prop({ type: Array, required: false })
  DATA_HEAD: [];
  @Prop({ required: false, type: String })
  PID: string;
  @Prop({ required: false, type: String })
  REF: string;
  @Prop({ required: false, type: Date })
  INSERT_DT: Date;
  //설문 리스트 정보
  @Prop({ type: Object, required: false })
  LIST: {};
  //설문 리스트 정보의 데이터
  @Prop({ type: Object, required: false })
  LISTDATA: {};
  @Prop({ type: Array, required: false })
  DATA_ALL_HEAD: [];
  @Prop({ type: Array, required: false })
  FILES: [];
}

export const QuestionSchema = SchemaFactory.createForClass(Question);

export type QuestionDocument = HydratedDocument<Question>;

export const QuestionFeature = (databaseName: DatabaseName) =>
  MongooseModule.forFeature(
    [
      {
        name: Question.name,
        schema: QuestionSchema,
      },
    ],
    databaseName,
  );
