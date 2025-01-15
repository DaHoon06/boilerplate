import {
  IsArray,
  IsBoolean,
  IsDate,
  IsDefined,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class InJoin {
  @IsString()
  @IsOptional()
  FILE_DOMAIN: string;

  @IsString()
  @IsOptional()
  MAX_WIDTH: string;

  @IsString()
  @IsOptional()
  MOBILE_ONLY: string;

  @IsString()
  @IsOptional()
  MOBILE_RESTRICT: string;
}
export class InLogo {
  @IsString()
  @IsOptional()
  CLICK_URL: string;

  @IsString()
  @IsOptional()
  HEIGHT: string;

  @IsString()
  @IsOptional()
  POSITION: string;

  @IsString()
  @IsOptional()
  SCALE: string;
}
export class InTest {
  @IsBoolean()
  @IsOptional()
  MEMO: boolean;
}
export class InConfig {
  @IsString()
  STATUS: string;

  @IsString()
  STATUS_HOLD_MSG: string;

  @IsString()
  STATUS_STOP_MSG: string;

  @IsString()
  STATUS_CANCEL_MSG: string;

  @IsString()
  STATUS_END_MSG: string;

  @IsString()
  MULTI_ANSWER_DIVIDER: string;

  @IsString()
  @IsOptional()
  FILE_SERVER: string;

  @IsString()
  SKIN: string;

  @IsString()
  @IsOptional()
  VERSION: string;

  @IsString()
  @IsOptional()
  COMMON_SCRIPT: string;

  @IsArray()
  @IsOptional()
  REF_QUESTION: string[];

  @IsString()
  @IsOptional()
  COMMON_CSS: string;

  @IsBoolean()
  @IsOptional()
  ASK: boolean;

  @IsBoolean()
  COMPLETE_JOIN_CLOSE: boolean;

  @IsString()
  @IsOptional()
  DOWNLOAD_FILENAME: string;

  @IsString()
  @IsOptional()
  FONT: string;

  @IsBoolean()
  @IsOptional()
  FONTSIZE_CONTROL: boolean;

  @IsString()
  @IsOptional()
  IS_CATI_CONTROL: string;

  @IsDefined()
  @IsNotEmptyObject()
  @Type(() => InJoin)
  @ValidateNested()
  JOIN: InJoin;

  @IsString()
  LANG: string;

  @IsDefined()
  @IsNotEmptyObject()
  @Type(() => InLogo)
  @ValidateNested()
  LOGO: InLogo;

  @IsString()
  NAVI: string;

  @IsDate()
  OPEN_END_DT: Date;

  @IsDate()
  OPEN_START_DT: Date;

  @IsBoolean()
  PROGRESS: boolean;

  @IsString()
  @IsOptional()
  TARGET_COUNT: string;

  @IsString()
  @IsOptional()
  TARGET_OVER_MSG: string;

  @IsDefined()
  @IsNotEmptyObject()
  @Type(() => InTest)
  @ValidateNested()
  TEST: InTest;
}
export class InRole {
  @IsArray()
  OWNER: string[];
}
export class QuestionDto {
  @IsNotEmpty()
  _id: number;

  @IsDefined()
  @Type(() => InRole)
  @ValidateNested()
  ROLE: InRole;

  @IsDefined()
  @IsNotEmptyObject()
  @Type(() => InConfig)
  @ValidateNested()
  CONFIG: InConfig;
  @IsDefined()
  TITLE: string;

  @IsDefined()
  DATA: [];
}

export class MakeQuotaGenderDto {
  @IsNumber()
  male: number;

  @IsNumber()
  female: number;

  @IsNumber()
  _id: number;
}

export class MakeQuotaRangeDto {
  @IsString()
  key: string;

  @IsNumber()
  min: number;

  @IsNumber()
  max: number;

  @IsNumber()
  total: number;
}

export class MakeQuotaDto {
  @IsNumber()
  quota: number;
  @IsNumber()
  total: number;
}

export class TEST {
  quota: MakeQuotaDto[];
  region: number[];
}
