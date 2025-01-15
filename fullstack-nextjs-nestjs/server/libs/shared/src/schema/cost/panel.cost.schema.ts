import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { COLLECTIONS, Connection } from '@app/shared/database/connection.enum';
import { CostType, PurchaseTargetType } from '@app/shared/enums/cost';
import { HydratedDocument } from 'mongoose';

@Schema({ versionKey: false, collection: COLLECTIONS.PANEL_COST })
export class PanelCost {
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

  @Prop({ enum: CostType, type: String })
  target: CostType;

  @Prop()
  purchaseTargetPrice: number;

  @Prop({ enum: PurchaseTargetType, type: String })
  purchaseTargetType: PurchaseTargetType;
}

export const PanelCostSchema = SchemaFactory.createForClass(PanelCost);

export type PanelCostDocument = HydratedDocument<PanelCost>;

/**
 * @description 해당 스키마는 서베이메이트에만 존재합니다.
 * 유니서베이에는 존재하지않습니다.
 */
export const PanelCostFeature = MongooseModule.forFeature(
  [
    {
      name: PanelCost.name,
      schema: PanelCostSchema,
    },
  ],
  Connection.SURVEY_MATE_PLATFORM,
);
