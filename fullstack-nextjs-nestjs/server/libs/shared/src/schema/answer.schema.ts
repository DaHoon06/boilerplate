import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { COLLECTIONS, Connection } from '@app/shared/database/connection.enum';
import {
  SvyDataDto,
  SvyJoinHistoryDto,
  SvyQuotaDto,
} from '@app/shared/schema/dto/svy.answer.dto';
import { HydratedDocument } from 'mongoose';

@Schema({ versionKey: false, collection: COLLECTIONS.ANSWER })
export class Answer {
  @Prop({ required: true })
  _id: number;
  @Prop({ required: false })
  SNUM?: number;
  @Prop({ required: false })
  UID?: string;
  @Prop({ required: false })
  LAST_ACCESS_KEY?: string;
  @Prop({ required: false })
  LAST_ACCESS_KEY_NAME?: string;
  @Prop({ required: false, type: Boolean })
  TEST?: boolean;
  @Prop({ required: false })
  SEQ?: number;
  @Prop({ required: false })
  LAST_DT?: Date;
  @Prop({ required: false })
  LAST_QUESTION?: string;
  @Prop({ required: false })
  PROGRESS?: string;
  @Prop({ required: false, type: Object })
  QUOTA?: SvyQuotaDto;
  @Prop({ required: false })
  COMPLETE: string;
  @Prop({ required: false })
  COMPLETE_DT: Date;
  @Prop({ required: false })
  RESULT_ORD: number;
  @Prop({ required: false, type: Array })
  DATA: SvyDataDto[];
  @Prop({ required: false, type: Array })
  JOIN_HISTORY: SvyJoinHistoryDto[];
}

export const AnswerSchema = SchemaFactory.createForClass(Answer);

export type AnswerDocument = HydratedDocument<Answer>;

export const AnswerFeature = MongooseModule.forFeature(
  [
    {
      name: Answer.name,
      schema: AnswerSchema,
    },
  ],
  Connection.GET_DATA,
);
