import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  COLLECTIONS,
  DatabaseName,
} from '@app/shared/database/connection.enum';
import { HydratedDocument } from 'mongoose';
import { ObjectId } from 'mongodb';

@Schema({ versionKey: false, collection: COLLECTIONS.PALETTE })
export class Palette {
  @Prop({ required: true, type: ObjectId })
  _id: number;
  @Prop({ required: true })
  color: string;
  @Prop({ required: true })
  priority: number;
  @Prop({ required: true })
  default: boolean;
}

export const PaletteSchema = SchemaFactory.createForClass(Palette);

export type PaletteDocument = HydratedDocument<Palette>;

export const PaletteFeature = (databaseName: DatabaseName) =>
  MongooseModule.forFeature(
    [
      {
        name: Palette.name,
        schema: PaletteSchema,
      },
    ],
    databaseName,
  );
