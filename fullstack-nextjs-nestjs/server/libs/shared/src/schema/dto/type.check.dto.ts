import {
  ArrayNotEmpty,
  IsBoolean,
  IsDefined,
  IsEnum,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { TypeOptionDto } from './type.option.dto';
import { Type } from 'class-transformer';
import { TypeAnswerDto, TypeHDto, TypeValueDto } from './type.make.dto';
import { CHILD_TYPE } from '@app/shared/enums/question.enum';

export class TypeCheckDto extends TypeOptionDto {
  @IsDefined()
  @ValidateNested({ each: true })
  @ArrayNotEmpty()
  @Type(() => TypeAnswerDto)
  ANSWERS: TypeAnswerDto[];
  @IsString()
  @IsOptional()
  MIN_CHECK?: string;
  @IsString()
  @IsOptional()
  MAX_CHECK?: string;
  //보기문항 복사할 대상문항
  @IsString()
  @IsOptional()
  target?: string;
  //SHOW_KEY 할건지 HIDE_KEY 할것인지 여부
  @IsOptional()
  @IsEnum(CHILD_TYPE)
  showHide?: CHILD_TYPE;
  @IsString()
  @IsOptional()
  PARENT_NAME?: string;
}

export class TypeHCheckDto extends TypeOptionDto {
  @IsDefined()
  @ValidateNested({ each: true })
  @ArrayNotEmpty()
  @Type(() => TypeAnswerDto)
  ANSWERS: TypeAnswerDto[];
  @IsString()
  @IsOptional()
  COLUMN_HEAD: string;
  @IsString()
  @IsOptional()
  MIN_CHECK?: string;
  @IsString()
  @IsOptional()
  MAX_CHECK?: string;
}

export class TypeCheckSetsDto extends TypeOptionDto {
  @IsDefined()
  @ValidateNested({ each: true })
  @ArrayNotEmpty()
  @Type(() => TypeValueDto)
  V: TypeValueDto[];
  @IsDefined()
  @ValidateNested({ each: true })
  @ArrayNotEmpty()
  @Type(() => TypeHDto)
  H: TypeHDto[];
  @IsBoolean()
  @IsOptional()
  BY_LINE: boolean;
  @IsString()
  @IsOptional()
  MIN_CHECK?: string;
  @IsString()
  @IsOptional()
  MAX_CHECK?: string;
  @IsBoolean()
  @IsOptional()
  MOBILE_UI: boolean;
}

export class TypeCheckSetsHDto extends TypeOptionDto {
  //척도형 멀티
  @IsDefined()
  @ValidateNested({ each: true })
  @ArrayNotEmpty()
  @Type(() => TypeValueDto)
  V: TypeValueDto[];
  @IsBoolean()
  @IsOptional()
  BY_LINE?: boolean;
  @IsBoolean()
  @IsOptional()
  FIX_THEAD?: boolean;
  @IsString()
  @IsOptional()
  MIN_CHECK?: string;
}
