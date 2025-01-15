import { IsString, IsBoolean, IsDefined, ValidateNested, ArrayNotEmpty, IsOptional, IsArray } from 'class-validator';
import { TypeOptionDto } from './type.option.dto';
import { Type } from 'class-transformer';
import { TypeAnswerDto, TypeValueDto } from './type.make.dto';

export class TypeGradeDto extends TypeOptionDto {
  @IsDefined()
  @ValidateNested({ each: true })
  @ArrayNotEmpty()
  @Type(() => TypeValueDto)
  V: TypeValueDto[];
  //V?: { C1: string; K: string; V: string; LAST: string; SINGLE: boolean }[];
  @IsString()
  @IsOptional()
  MAX_GRADE?: string;
  @IsString()
  @IsOptional()
  MIN_GRADE?: string;
  @IsString()
  @IsOptional()
  LANG_MIN_GRADE: string;
  @IsString()
  @IsOptional()
  HIDE_TYPE: string;
  @IsString()
  @IsOptional()
  GRADE_TEXT: string;
}

export class TypeConfirmDto {
  @IsString()
  CONDITION: string;
  @IsString()
  COUNT: string;
  @IsString()
  MSG: string;
  @IsString()
  Y: string;
  @IsString()
  N: string;
  @IsBoolean()
  SCREEN: boolean;
}

export class TypeGradeClickDto extends TypeOptionDto {
  @IsDefined()
  @ValidateNested({ each: true })
  @ArrayNotEmpty()
  @Type(() => TypeValueDto)
  V: TypeValueDto[];
  @IsString()
  @IsOptional()
  MAX_GRADE?: string;
  @IsString()
  @IsOptional()
  MIN_GRADE?: string;
  @IsString()
  @IsOptional()
  DATA_PROTOTYPE: string;
  @IsString()
  @IsOptional()
  LANG_MIN_GRADE: string;
  @IsBoolean()
  @IsOptional()
  SELECTED_SHOW: boolean;
  @IsArray()
  @IsOptional()
  CONFIRM?: TypeConfirmDto[];
  @IsOptional()
  @IsBoolean()
  CREATE: boolean;
}

export class TypeHGradeDto extends TypeOptionDto {
  @IsDefined()
  @ValidateNested({ each: true })
  @ArrayNotEmpty()
  @Type(() => TypeValueDto)
  V: TypeValueDto[];
  @IsString()
  @IsOptional()
  COLUMN_HEAD: string;
  @IsString()
  @IsOptional()
  MIN_GRADE: string;
  @IsString()
  @IsOptional()
  MAX_GRADE: string;
}

export class TypeDropDownDto extends TypeOptionDto {
  @IsDefined()
  @ValidateNested({ each: true })
  @ArrayNotEmpty()
  @Type(() => TypeAnswerDto)
  ANSWERS: TypeAnswerDto[];
  @IsString()
  @IsOptional()
  MAX_CHECK: string;
  @IsString()
  @IsOptional()
  MIN_CHECK: string;
}

export class TypeImageClickDto extends TypeOptionDto {
  @IsString()
  @IsOptional()
  WIDTH: string;
  @IsString()
  @IsOptional()
  HEIGHT: string;
  @IsString()
  @IsOptional()
  MAX_GRADE: string;
  @IsString()
  @IsOptional()
  MIN_GRADE: string;
  @IsString()
  @IsOptional()
  SRC: string; //이미지 경로
  @IsString()
  @IsOptional()
  CSS: string;
  @IsString()
  @IsOptional()
  DATA_PROTOTYPE: string;
  @IsBoolean()
  @IsOptional()
  SHOW_GRADE: boolean;
  @IsDefined()
  @ValidateNested({ each: true })
  @ArrayNotEmpty()
  @Type(() => TypeValueDto)
  V: TypeValueDto[];
}
