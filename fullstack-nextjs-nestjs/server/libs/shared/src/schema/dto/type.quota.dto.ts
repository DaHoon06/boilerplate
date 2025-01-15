import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { TypeOptionDto } from './type.option.dto';
import { CREATE_REGION } from '@app/shared/enums/question.enum';

export class TypeQuotaInDto {
  @IsString()
  @IsOptional()
  row1k?: string;
  @IsString()
  @IsOptional()
  row2k?: string;
  @IsString()
  @IsOptional()
  col1k?: string;
  @IsString()
  @IsOptional()
  col2k?: string;
  @IsString()
  @IsOptional()
  row1v?: string;
  @IsString()
  @IsOptional()
  row2v?: string;
  @IsString()
  @IsOptional()
  col1v?: string;
  @IsString()
  @IsOptional()
  col2v?: string;
  @IsString()
  @IsOptional()
  quota?: string;
  @IsString()
  @IsOptional()
  quota_src?: string;
  @IsString()
  @IsOptional()
  quotaType?: string;
  @IsNumber()
  @IsOptional()
  cnt?: number;
}

export class TypeQuotaValDto {
  @IsOptional()
  @ValidateNested({ each: false })
  @Type(() => TypeQuotaInDto)
  '1//1/'?: TypeQuotaInDto;
  @IsOptional()
  @ValidateNested({ each: false })
  @Type(() => TypeQuotaInDto)
  '1//2/'?: TypeQuotaInDto;
  @IsOptional()
  @ValidateNested({ each: false })
  @Type(() => TypeQuotaInDto)
  '1//3/'?: TypeQuotaInDto;
  @IsOptional()
  @ValidateNested({ each: false })
  @Type(() => TypeQuotaInDto)
  '1//4/'?: TypeQuotaInDto;
  @IsOptional()
  @ValidateNested({ each: false })
  @Type(() => TypeQuotaInDto)
  '1//5/'?: TypeQuotaInDto;
  @IsOptional()
  @ValidateNested({ each: false })
  @Type(() => TypeQuotaInDto)
  '1//6/'?: TypeQuotaInDto;
  @IsOptional()
  @ValidateNested({ each: false })
  @Type(() => TypeQuotaInDto)
  '1//7/'?: TypeQuotaInDto;
  @IsOptional()
  @ValidateNested({ each: false, always: false })
  @Type(() => TypeQuotaInDto)
  '1//8/'?: TypeQuotaInDto;
  @IsOptional()
  @ValidateNested({ each: false })
  @Type(() => TypeQuotaInDto)
  '1//9/'?: TypeQuotaInDto;
  @IsOptional()
  @ValidateNested({ each: false })
  @Type(() => TypeQuotaInDto)
  '1//10/'?: TypeQuotaInDto;
  @IsOptional()
  @ValidateNested({ each: false })
  @Type(() => TypeQuotaInDto)
  '1//11/'?: TypeQuotaInDto;
  @IsOptional()
  @ValidateNested({ each: false })
  @Type(() => TypeQuotaInDto)
  '2//1/'?: TypeQuotaInDto;
  @IsOptional()
  @ValidateNested({ each: false })
  @Type(() => TypeQuotaInDto)
  '2//2/'?: TypeQuotaInDto;
  @IsOptional()
  @ValidateNested({ each: false })
  @Type(() => TypeQuotaInDto)
  '2//3/'?: TypeQuotaInDto;
  @IsOptional()
  @ValidateNested({ each: false })
  @Type(() => TypeQuotaInDto)
  '2//4/'?: TypeQuotaInDto;
  @IsOptional()
  @ValidateNested({ each: false })
  @Type(() => TypeQuotaInDto)
  '2//5/'?: TypeQuotaInDto;
  @IsOptional()
  @ValidateNested({ each: false })
  @Type(() => TypeQuotaInDto)
  '2//6/'?: TypeQuotaInDto;
  @IsOptional()
  @ValidateNested({ each: false })
  @Type(() => TypeQuotaInDto)
  '2//7/'?: TypeQuotaInDto;
  @IsOptional()
  @ValidateNested({ each: false })
  @Type(() => TypeQuotaInDto)
  '2//8/'?: TypeQuotaInDto;
  @IsOptional()
  @ValidateNested({ each: false })
  @Type(() => TypeQuotaInDto)
  '2//9/'?: TypeQuotaInDto;
  @IsOptional()
  @ValidateNested({ each: false })
  @Type(() => TypeQuotaInDto)
  '2//10/'?: TypeQuotaInDto;
  @IsOptional()
  @ValidateNested({ each: false })
  @Type(() => TypeQuotaInDto)
  '2//11/'?: TypeQuotaInDto;

  @IsOptional()
  @ValidateNested({ each: false })
  @Type(() => TypeQuotaInDto)
  '2///'?: TypeQuotaInDto;
}

export class TypeQuota10Dto {
  @IsOptional()
  @IsArray()
  QUOTA_LIST: string[];
  @IsOptional()
  @ValidateNested()
  @Type(() => TypeQuotaValDto)
  QUOTA: TypeQuotaValDto;
}

export class TypeQuota5Dto {
  @IsOptional()
  @IsArray()
  QUOTA_LIST: string[];
  @IsOptional()
  @ValidateNested()
  @Type(() => TypeQuotaValDto)
  QUOTA: TypeQuotaValDto;
}

export class TypeQuotaInterDto {
  @IsOptional()
  @ValidateNested()
  @Type(() => TypeQuota10Dto)
  QUOTA_10?: TypeQuota10Dto;
  @IsOptional()
  @ValidateNested()
  @Type(() => TypeQuota5Dto)
  QUOTA_5?: TypeQuota5Dto;
}

export class TypeQuotaCntDto {
  @IsString()
  @IsOptional()
  '1//1/'?: string;
  @IsString()
  @IsOptional()
  '1//2/'?: string;
  @IsString()
  @IsOptional()
  '1//3/'?: string;
  @IsString()
  @IsOptional()
  '1//4/'?: string;
  @IsString()
  @IsOptional()
  '1//5/'?: string;
  @IsString()
  @IsOptional()
  '1//6/'?: string;
  @IsString()
  @IsOptional()
  '1//7/'?: string;
  @IsString()
  @IsOptional()
  '1//8/'?: string;
  @IsString()
  @IsOptional()
  '1//9/'?: string;
  @IsString()
  @IsOptional()
  '1//10/'?: string;
  @IsString()
  @IsOptional()
  '1//11/'?: string;
  @IsString()
  @IsOptional()
  '2//1/'?: string;
  @IsString()
  @IsOptional()
  '2//2/'?: string;
  @IsString()
  @IsOptional()
  '2//3/'?: string;
  @IsString()
  @IsOptional()
  '2//4/'?: string;
  @IsString()
  @IsOptional()
  '2//5/'?: string;
  @IsString()
  @IsOptional()
  '2//6/'?: string;
  @IsString()
  @IsOptional()
  '2//7/'?: string;
  @IsString()
  @IsOptional()
  '2//8/'?: string;
  @IsString()
  @IsOptional()
  '2//9/'?: string;
  @IsString()
  @IsOptional()
  '2//10/'?: string;
  @IsString()
  @IsOptional()
  '2//11/'?: string;
}

export class QuotaTotalDto {
  @IsString()
  @IsNotEmpty()
  key: string;

  @IsNumber()
  @IsNotEmpty()
  sNum: number;
}

export class TypeQuotaSaveDto {
  @IsNumber()
  RESPONSE_CNT: number;
  @IsString()
  GENDER: string; // 0: all 1: 남 2: 여
  @IsString()
  AGE_UNIT: string; // 0: 전체 1: 10세단위 2: 5세단위
  @IsOptional()
  @IsArray()
  AGE_10?: string[]; //["20~29", "30~39","40~49","50~59"],
  @IsOptional()
  @IsArray()
  AGE_5?: string[];
  @IsString()
  @IsOptional()
  QUOTA_SET?: string; //0: 없음 1: 인구비례 2: 임의
  @IsOptional()
  @ValidateNested()
  @Type(() => TypeQuotaCntDto)
  QUOTA_CNT?: TypeQuotaCntDto;
  @IsOptional()
  @IsArray()
  AREA?: CREATE_REGION[]; // 4: 전국 1: 서울 2: 인천/경기 3: 지방 5대 광역시
  //1인구비례, 3균등
  @IsOptional()
  @IsNumber()
  key: number;
}

export class TypeQuotaDto extends TypeOptionDto {
  @IsString()
  @IsOptional()
  OVER_NEXT?: string;
  @IsString()
  @IsOptional()
  ROW1?: string;
  @IsString()
  @IsOptional()
  COL1?: string;
  @IsOptional()
  QUOTA_LIST?: string[];
  @IsOptional()
  @ValidateNested()
  @Type(() => TypeQuotaValDto)
  QUOTA?: TypeQuotaValDto;
  @IsString()
  @IsOptional()
  FILTER?: string;
  @IsOptional()
  _WARNINGS?: [];
}

export class QuotaData {
  @IsNumber()
  '0': number;
  @IsNumber()
  '2': number;
  @IsNumber()
  '3': number;
  @IsNumber()
  '4': number;
  @IsNumber()
  '5': number;
  @IsNumber()
  '6': number;
  @IsNumber()
  '7': number;
  @IsNumber()
  '8': number;
  @IsNumber()
  '9': number;
  @IsNumber()
  '10': number;
  @IsNumber()
  '11': number;
}

export class QuotaGage {
  @IsOptional()
  @IsArray()
  GAGE1?: string[];
  @IsOptional()
  @IsArray()
  GAGE2?: string[];
}

export class QuotaCountDto {
  @IsString()
  UID: string;
  @IsBoolean()
  TEST: boolean;
  @IsOptional()
  @ValidateNested()
  @Type(() => QuotaGage)
  QUOTA: QuotaGage;
}

export class QuotaTableSumDto {
  @IsNumber()
  @IsOptional()
  male?: number;
  @IsNumber()
  @IsOptional()
  allMale?: number;
  @IsNumber()
  @IsOptional()
  female?: number;
  @IsNumber()
  @IsOptional()
  allFemale?: number;
  @IsNumber()
  @IsOptional()
  val?: number;
  @IsNumber()
  @IsOptional()
  cnt?: number;
}

export class QuotaTableGageDto {
  @IsOptional()
  @ValidateNested()
  @Type(() => QuotaTableSumDto)
  SUM_GENDER?: QuotaTableSumDto;
  @IsOptional()
  @ValidateNested()
  @Type(() => QuotaTableSumDto)
  SUM_AGE?: QuotaTableSumDto[][];
  @IsOptional()
  @ValidateNested()
  @Type(() => TypeQuotaInDto)
  table?: TypeQuotaInDto;
}

export class QuotaTableDto {
  @IsOptional()
  @ValidateNested()
  @Type(() => QuotaTableGageDto)
  GAGE1?: QuotaTableGageDto;
  @IsOptional()
  @ValidateNested()
  @Type(() => QuotaTableGageDto)
  GAGE2?: QuotaTableGageDto;
}

export class QuotaCalculatorObjDto {
  @IsNumber()
  @IsOptional()
  '남성'?: number;
  @IsNumber()
  @IsOptional()
  '여성'?: number;
  @IsNumber()
  @IsOptional()
  '20~29세'?: number;
  @IsNumber()
  @IsOptional()
  '30~39세'?: number;
  @IsNumber()
  @IsOptional()
  '40~49세'?: number;
  @IsNumber()
  @IsOptional()
  '50~59세'?: number;
  @IsNumber()
  @IsOptional()
  '60~69세'?: number;
  @IsNumber()
  @IsOptional()
  '20~24세'?: number;
  @IsNumber()
  @IsOptional()
  '25~29세'?: number;
  @IsNumber()
  @IsOptional()
  '30~34세'?: number;
  @IsNumber()
  @IsOptional()
  '35~39세'?: number;
  @IsNumber()
  @IsOptional()
  '40~44세'?: number;
  @IsNumber()
  @IsOptional()
  '45~49세'?: number;
  @IsNumber()
  @IsOptional()
  '50~54세'?: number;
  @IsNumber()
  @IsOptional()
  '55~59세'?: number;
  @IsNumber()
  @IsOptional()
  '60~64세'?: number;
  @IsNumber()
  @IsOptional()
  '65~69세'?: number;
  @IsNumber()
  @IsOptional()
  '그외 지역'?: number;
  @IsNumber()
  @IsOptional()
  '서울'?: number;
  @IsNumber()
  @IsOptional()
  '인천/경기'?: number;
  @IsNumber()
  @IsOptional()
  '5대 광역시'?: number;
}
