import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class SvyJoinHistoryDto {
  @IsString()
  @IsOptional()
  IP?: string;
  @IsString()
  @IsOptional()
  AGENT?: string;
  @IsString()
  @IsOptional()
  ACCESS_KEY?: string;
  @IsString()
  @IsOptional()
  ACCESS_KEY_NAME?: string;
  @IsDate()
  @IsOptional()
  DT?: Date;
}
export class SvyQuotaDto {
  @IsOptional()
  GAGE1?: string[];
  @IsOptional()
  GAGE2?: string[];
}

export class SvyDataDto {
  @IsString()
  @IsOptional()
  '1'?: string;
  @IsString()
  @IsOptional()
  NAME?: string;
  @IsDate()
  @IsOptional()
  DT?: Date;
  @IsNumber()
  @IsOptional()
  SEQ?: number;
  @IsString()
  @IsOptional()
  A?: string;
  @IsString()
  @IsOptional()
  SK?: string;
  @IsString()
  @IsOptional()
  SV?: string;
  @IsString()
  @IsOptional()
  V?: string;
  @IsString()
  @IsOptional()
  NEXT?: string;
  @IsString()
  @IsOptional()
  MODULE_TYPE?: string;
  @IsString()
  @IsOptional()
  ROW1?: string;
  @IsString()
  @IsOptional()
  ROW2?: string;
  @IsString()
  @IsOptional()
  COL1?: string;
  @IsString()
  @IsOptional()
  COL2?: string;
  @IsOptional()
  QUOTA?: [];
  @IsOptional()
  QUOTA_TYPE?: string[];
  @IsString()
  @IsOptional()
  RESULT?: string;
  @IsString()
  @IsOptional()
  TEST?: string;
  @IsString()
  @IsOptional()
  REDIRECT?: string;
}
