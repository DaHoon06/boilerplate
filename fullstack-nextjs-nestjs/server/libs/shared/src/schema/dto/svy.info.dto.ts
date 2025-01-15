import {
  IsArray,
  IsBoolean,
  IsDate,
  IsDefined,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { TypeMakeDto } from './type.make.dto';
import { TypeLastMsg } from './svy.addInfo.dto';
import { TypeQuotaSaveDto } from './type.quota.dto';
import { Types } from 'mongoose';
import {
  CREATE_REGION,
  CREATE_TYPE,
  LINK_STATUS,
  QUESTION_STATUS,
} from '@app/shared/enums/question.enum';
import { SvyChecklistDto } from '@app/shared/schema/dto/svy.checklist.dto';

export class TypeJoinDto {
  @IsOptional()
  @IsString()
  FILE_DOMAIN?: string;

  @IsOptional()
  @IsString()
  MAX_WIDTH?: string;

  @IsOptional()
  @IsString()
  MOBILE_ONLY?: string;

  @IsOptional()
  @IsString()
  MOBILE_RESTRICT?: string;
  @IsString()
  @IsOptional()
  BAD_SECOND?: string;
  @IsBoolean()
  @IsOptional()
  IMG_ZOOM?: boolean;
}

export class TypeLogoDto {
  @IsOptional()
  @IsString()
  CLICK_URL?: string;

  @IsOptional()
  @IsString()
  HEIGHT?: string;

  @IsOptional()
  @IsString()
  POSITION?: string;

  @IsOptional()
  @IsString()
  SCALE?: string;

  @IsOptional()
  @IsString()
  FILENAME?: string;
  @IsOptional()
  @IsString()
  MIMETYPE?: string;
  @IsOptional()
  @IsString()
  PATH?: string;
  @IsOptional()
  @IsString()
  PATHNAME?: string;
  @IsOptional()
  @IsNumber()
  SIZE?: number;
  @IsOptional()
  @IsString()
  URL?: string;
}

export class TypeTestDto {
  @IsOptional()
  @IsBoolean()
  MEMO: boolean;
}

export class TypeSvyConfigDto {
  @IsOptional()
  @IsBoolean()
  ASK?: boolean;

  @IsOptional()
  @IsBoolean()
  COMPLETE_JOIN_CLOSE?: boolean;

  @IsOptional()
  @IsString()
  DOWNLOAD_FILENAME?: string;

  @IsOptional()
  @IsString()
  FILE_SERVER?: string;

  @IsOptional()
  @IsString()
  FONT?: string;

  @IsOptional()
  @IsBoolean()
  FONTSIZE_CONTROL?: boolean;

  @IsOptional()
  @IsBoolean()
  GO_LINK?: boolean;

  @IsOptional()
  @IsString()
  IS_CATI_PROJECT?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => TypeJoinDto)
  JOIN?: TypeJoinDto;

  @IsString()
  @IsOptional()
  LANG?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => TypeLogoDto)
  LOGO?: TypeLogoDto;

  @IsOptional()
  @IsString()
  MULTI_ANSWER_DIVIDER?: string;

  @IsOptional()
  @IsString()
  NAVI?: string;

  @IsOptional()
  @IsString()
  OPEN_END_DT?: string;

  @IsOptional()
  @IsString()
  OPEN_START_DT?: string;

  @IsOptional()
  PROGRESS?: string | boolean;

  @IsOptional()
  @IsString()
  SKIN?: string;

  @IsDefined({ message: '설문상태를 확인해주세요!' })
  @IsString()
  STATUS: string;
  @IsOptional()
  @IsString()
  STATUS_EDIT_MSG?: string;

  @IsOptional()
  @IsString()
  STATUS_CANCEL_MSG?: string;

  @IsOptional()
  @IsString()
  STATUS_END_MSG?: string;

  @IsOptional()
  @IsString()
  STATUS_HOLD_MSG?: string;

  @IsOptional()
  @IsString()
  STATUS_STOP_MSG?: string;

  @IsOptional()
  @IsString()
  TARGET_COUNT?: string;
  @IsOptional()
  @IsString()
  TARGET_OVER_MSG?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => TypeTestDto)
  TEST?: TypeTestDto;
  @IsString()
  @IsOptional()
  VERSION?: string;
  @IsString()
  @IsOptional()
  DEFAULT_FONTSIZE_QUESTION?: string;
  @IsString()
  @IsOptional()
  DEFAULT_FONTSIZE_ANSWER?: string;
  @IsString()
  @IsOptional()
  DEFAULT_FONTSIZE_DESC?: string;
  @IsString()
  @IsOptional()
  JOIN_COUNT?: string;
  @IsString()
  @IsOptional()
  JOIN_OVER_MSG?: string;
  @IsString()
  @IsOptional()
  LOOP_DIVIDER?: string;
  @IsBoolean()
  @IsOptional()
  MULTI_COMMA?: boolean;
  @IsBoolean()
  @IsOptional()
  SAVE_NOW?: boolean;
  @IsBoolean()
  @IsOptional()
  GUIDE_CREATED?: boolean;
  @IsString()
  @IsOptional()
  FROM_EMAIL?: string;
  @IsBoolean()
  @IsOptional()
  QUOTACHECK_ON_REJOIN?: boolean;
  @IsString()
  @IsOptional()
  COMMON_SCRIPT?: string;

  @IsString()
  @IsOptional()
  INTERVIEWER?: string;
  @IsString()
  @IsOptional()
  LIST_ALL_EMAIL_SEND?: string;

  @IsString()
  @IsOptional()
  COMPLETE_CNT?: string;

  @IsBoolean()
  @IsOptional()
  SIMPLE_SURVEY?: boolean;

  /**
   * 설문 생성 타입
   */
  @IsEnum(CREATE_TYPE)
  @IsOptional()
  SIMPLE_SURVEY_TYPE?: CREATE_TYPE;

  //링크 생성 상태
  @IsEnum(LINK_STATUS)
  @IsOptional()
  LINK_STATUS?: LINK_STATUS;

  @IsOptional()
  @IsArray()
  REGION?: CREATE_REGION[]; // 쿼터 지역

  @IsOptional()
  @IsNumber()
  QUOTA_TOTAL?: number; //쿼터 전체 갯수

  @IsOptional()
  SIMPLE_SURVEY_QUOTA?: TypeQuotaSaveDto;

  @IsOptional()
  PAYMENT_ID: string;

  @IsOptional()
  @IsNumber()
  SIMPLE_SURVEY_INDEX?: number;

  @IsOptional()
  PAYMENT_INFO?: {
    _id: Types.ObjectId;
    projectId: number;
    receipt_id: string;
    event: string;
    status: number;
    message: string;
    userId: string;
    data: any;
    regDate: Date;
  };

  /** (관리자) 검수항목 */
  @IsOptional()
  SIMPLE_SURVEY_CHECKLIST?: SvyChecklistDto;

  // 링크 생성 후 설문을 만들었을 때
  @IsOptional()
  @IsString()
  VERSION_CLOUD: string;

  @IsOptional()
  @Type(() => VersionType)
  VERSION_CLOUD_HISTORY: VersionType[];

  @IsOptional()
  @IsString()
  VERSION_CLOUD_LOCATION: string;
}

export class VersionType {
  @IsString()
  Bucket: string;

  @IsString()
  ETag: string;

  @IsString()
  Key: string;

  @IsString()
  Location: string;

  @IsString()
  VersionId: string;

  @IsString()
  key: string;
}

export class roleDto {
  @IsOptional()
  OWNER: string[];
}

export class TypeSvyInfoDtoInProject {
  @IsNumber()
  @IsOptional()
  SNUM: number;

  @IsString({ message: '설문 제목을 적어주세요.' })
  TITLE: string;

  @IsString()
  PLACEHOLDER: string;

  @ValidateNested()
  @Type(() => roleDto)
  ROLE: roleDto;

  @ValidateNested()
  @Type(() => TypeSvyConfigDto)
  CONFIG: TypeSvyConfigDto;

  @ValidateNested()
  @Type(() => TypeMakeDto)
  DATA: TypeMakeDto[];

  @IsBoolean()
  @IsOptional()
  isUse: boolean;

  @IsDate()
  @IsOptional()
  regDate: Date;

  @IsDate()
  @IsOptional()
  modDate: Date;

  @IsOptional()
  @IsBoolean()
  surveyFix: boolean;
}

export class TypeSvyInfoDto {
  @IsNumber()
  @IsOptional()
  _id: number;

  @IsString({ message: '설문 제목을 적어주세요.' })
  TITLE: string;

  @IsString()
  PLACEHOLDER: string;

  @ValidateNested()
  @Type(() => roleDto)
  ROLE: roleDto;

  @ValidateNested()
  @Type(() => TypeSvyConfigDto)
  CONFIG: TypeSvyConfigDto;

  @ValidateNested()
  @Type(() => TypeMakeDto)
  DATA: TypeMakeDto[];

  @IsBoolean()
  @IsOptional()
  isUse: boolean;

  @IsDate()
  @IsOptional()
  regDate: Date;

  @IsDate()
  @IsOptional()
  INSERT_DT: Date;

  @IsDate()
  @IsOptional()
  modDate: Date;

  @IsOptional()
  @Type(() => TypeLastMsg)
  LAST_MSG: TypeLastMsg;
}

export class TypeCreateSvyQuotaDto {
  @IsString()
  userId: string;
  @IsString()
  TITLE: string;
  @IsOptional()
  @ValidateNested()
  @Type(() => TypeQuotaSaveDto)
  QUOTA: TypeQuotaSaveDto;
  @IsOptional()
  @IsEnum(CREATE_TYPE)
  createType?: CREATE_TYPE;
  @IsString()
  @IsOptional()
  PLACEHOLDER: string;
}

export class StatusConfigDto {
  @IsNumber()
  @IsOptional()
  SNUM?: number;
  @IsEnum(QUESTION_STATUS)
  @IsOptional()
  STATUS?: QUESTION_STATUS;
  @IsString()
  @IsOptional()
  STATUS_CANCEL_MSG?: string;
  @IsString()
  @IsOptional()
  STATUS_END_MSG?: string;
  @IsString()
  @IsOptional()
  STATUS_HOLD_MSG?: string;
  @IsString()
  @IsOptional()
  STATUS_STOP_MSG?: string;
  @IsString()
  @IsOptional()
  STATUS_EDIT_MSG?: string;
  @IsString()
  @IsOptional()
  OPEN_START_DT?: string;
  @IsString()
  @IsOptional()
  OPEN_END_DT?: string;
}
