import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { COLLECTIONS, Connection } from '@app/shared/database/connection.enum';
import { CostType } from '@app/shared/enums/cost';
import { HydratedDocument } from 'mongoose';

@Schema({ versionKey: false, collection: COLLECTIONS.LIST_COST })
export class ListCost {
  @Prop({ required: true, type: Number })
  sampleMin: number;

  @Prop({ required: true, type: Number })
  sampleMax: number;

  @Prop({ required: true, type: Number })
  questionMin: number;

  @Prop({ required: true, type: Number })
  questionMax: number;

  @Prop({ required: true, type: Number })
  unitPrice: number;

  @Prop({ required: true, enum: CostType, type: String })
  target: CostType;
}

export const ListCostSchema = SchemaFactory.createForClass(ListCost);

export type ListCostDocument = HydratedDocument<ListCost>;

/**
 * @description 해당 스키마는 서베이메이트에만 존재합니다.
 * 유니서베이에는 존재하지않습니다.
 */

export const ListCostFeature = MongooseModule.forFeature(
  [
    {
      name: ListCost.name,
      schema: ListCostSchema,
    },
  ],
  Connection.SURVEY_MATE_PLATFORM,
);
