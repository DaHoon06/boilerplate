import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {
  COLLECTIONS,
  DatabaseName,
} from '@app/shared/database/connection.enum';
import { ObjectId } from 'mongodb';
import { TypeLastMsg } from '@app/shared/schema/dto/svy.addInfo.dto';
import { TypeMakeDto } from '@app/shared/schema/dto/type.make.dto';
import { TypeSvyConfigDto } from '@app/shared/schema/dto/svy.info.dto';

@Schema({ versionKey: false, collection: COLLECTIONS.PROJECT })
export class Project {
  @Prop({ required: true, type: ObjectId })
  _id: string;

  @Prop({ type: Number, required: true })
  SNUM: number;

  @Prop({ type: String, required: false })
  TITLE: string;

  @Prop({ type: String, required: true })
  PLACEHOLDER: string;

  @Prop({ type: Date, required: false })
  regDate: Date;

  @Prop({ type: Date, required: false })
  modDate: Date;
  // 프로젝트 상단 고정 했는지
  @Prop({ type: Boolean, default: false })
  surveyFix: boolean;
  // 프로젝트 사용 여부
  @Prop({ type: Boolean, default: true })
  isUse: boolean;

  @Prop({ type: TypeLastMsg, required: false })
  LAST_MSG: TypeLastMsg;

  @Prop({ type: Array(Object), required: false })
  DATA: TypeMakeDto[];

  @Prop({ type: Object, required: true }) //, enum: ['ADMIN', 'USER']
  ROLE: { OWNER: string[] };

  @Prop({ type: TypeSvyConfigDto, required: true })
  CONFIG: TypeSvyConfigDto;

  @Prop({ type: Boolean, required: false, default: () => false })
  ALERT_CHECK: boolean;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);

export type ProjectDocument = HydratedDocument<Project>;

export const ProjectFeature = (databaseName: DatabaseName) =>
  MongooseModule.forFeature(
    [
      {
        name: Project.name,
        schema: ProjectSchema,
      },
    ],
    databaseName,
  );
