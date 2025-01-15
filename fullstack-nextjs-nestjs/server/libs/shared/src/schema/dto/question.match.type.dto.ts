import { IsNumber, IsOptional, IsString } from 'class-validator';
import { QUESTION_TYPE } from '@app/api/enums/question.type';

export class QuestionMatchTypeDto {
  @IsString()
  @IsOptional()
  NAME: string;

  @IsString()
  @IsOptional()
  QNUM: string;

  @IsString()
  @IsOptional()
  TYPE: QUESTION_TYPE;

  @IsNumber({})
  COL_CNT: number;

  @IsNumber({})
  ROW_CNT: number;

  @IsString()
  QUESTION: string;

  COL_LABEL: { TEXT: string[]; KEY: string[] };

  ROW_LABEL: { TEXT: string[]; KEY: string[] };
}
