import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import {
  SvyDataDto,
  SvyJoinHistoryDto,
  SvyQuotaDto,
} from '@app/shared/schema/dto/svy.answer.dto';

export class AnswerCompleteDto {
  @IsNumber()
  @IsNotEmpty()
  _id: number;

  @IsNumber()
  @IsNotEmpty()
  SNUM: number;

  @IsString()
  @IsOptional()
  UID: string;

  @IsString()
  @IsOptional()
  LAST_ACCESS_KEY: string;

  @IsString()
  @IsOptional()
  LAST_ACCESS_KEY_NAME: string;

  @IsBoolean()
  @IsOptional()
  TEST: boolean;

  @IsNumber()
  @IsOptional()
  SEQ: number;

  @IsDate()
  @IsOptional()
  LAST_DT: Date;

  @IsString()
  @IsOptional()
  LAST_QUESTION: string;

  @IsString()
  @IsOptional()
  PROGRESS: string;

  @IsOptional()
  QUOTA: SvyQuotaDto;

  @IsString()
  @IsOptional()
  COMPLETE: string;

  @IsDate()
  @IsOptional()
  COMPLETE_DT: Date;

  @IsNumber()
  @IsOptional()
  RESULT_ORD: number;

  @IsOptional()
  DATA: SvyDataDto[];

  @IsOptional()
  JOIN_HISTORY: SvyJoinHistoryDto[];
}

export class SingleQuotaDto {
  @IsString()
  _id: string;
  @IsOptional()
  QUOTA: QuotaData[];
}

export class QuotaData {
  @IsString()
  MODULE_TYPE: string;
  @IsOptional()
  QUOTA: QUOTA[];
  @IsString()
  QUOTA_TYPE: string;
  @IsString()
  ROW1: string;
  @IsString()
  ROW2: string;
  @IsString()
  COL1: string;
  @IsString()
  COL2: string;
  @IsString()
  NEXT: string;
  @IsDate()
  DT: Date;
  @IsNumber()
  SEQ: number;
}

export class QUOTA {
  @IsString()
  row1k: string;
  @IsString()
  row2k: string;
  @IsString()
  col1k: string;
  @IsString()
  col2k: string;
  @IsString()
  row1v: string;
  @IsString()
  row2v: string;
  @IsString()
  col1v: string;
  @IsString()
  col2v: string;
  @IsString()
  quota: string;
  @IsString()
  quota_src: string;
  @IsString()
  quotaType: string;
}

export class QuotaRegionDto {
  @IsOptional()
  _id: string[];
  @IsNumber()
  total: number;
}

export class QuotaDataDto {
  @IsString()
  key: string;
  @IsNumber()
  quota: number;
  @IsNumber()
  remains: number;
  @IsNumber()
  total: number;
  @IsOptional()
  region: QuotaArea[];
}

export class QuotaArea {
  @IsString()
  area: string;
  @IsNumber()
  total: number;
}
