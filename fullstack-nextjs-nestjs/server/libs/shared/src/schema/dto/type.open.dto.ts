import { IsString, IsBoolean, IsOptional, IsDefined, ValidateNested, ArrayNotEmpty } from 'class-validator';
import { TypeOptionDto, TypeTextDenyDto } from './type.option.dto';
import { Type } from 'class-transformer';
import { TypeAnswerDto, TypeHDto, TypeValueDto } from './type.make.dto';

export class TypeConditionsDto {
  @IsString()
  @IsOptional()
  DESC: string;
  @IsString()
  @IsOptional()
  CONDITION: string;
  @IsString()
  @IsOptional()
  N: string;
}

export class TypeOpenDto extends TypeOptionDto {
  @IsString()
  @IsOptional()
  HTML: string; //보기부분
}

export class TypeNumberOpenDto extends TypeOptionDto {
  @IsString()
  @IsOptional()
  HTML?: string; //보기부분
}

export class TypeTextAreaDto extends TypeOptionDto {
  //보기부분
  @IsString()
  @IsOptional()
  HTML?: string;
  //주관식 서술형 TYPE: TEXTAREA
  @IsString()
  @IsOptional()
  MIN_LENGTH?: string;
  @IsString()
  @IsOptional()
  MAX_LENGTH?: string;
  //입력할게 없을때 없음 기능
  @IsString()
  @IsOptional()
  PASS?: string;
  // 문자열 제한
  @ValidateNested({ each: false })
  @Type(() => TypeTextDenyDto)
  TEXT_DENY?: TypeTextDenyDto[];
  // 문자열 통과
  @ValidateNested({ each: false })
  @Type(() => TypeTextDenyDto)
  TEXT_ALLOW?: TypeTextDenyDto[];
  @IsString()
  @IsOptional()
  HEIGHT: string;
}

export class TypeMultiTextDto extends TypeOptionDto {
  //멀티 응답 start TYPE: MULTI_TEXT

  @IsString()
  @IsOptional()
  PASS?: string;
  @IsString()
  @IsOptional()
  MIN_COUNT: string;
  @IsString()
  @IsOptional()
  MIN_LENGTH: string;
  @IsString()
  @IsOptional()
  MAX_LENGTH: string;
  @IsString()
  @IsOptional()
  HEAD: string;
  @IsString()
  @IsOptional()
  TAIL: string;
  // 문자열 제한
  @ValidateNested({ each: false })
  @Type(() => TypeTextDenyDto)
  TEXT_DENY?: TypeTextDenyDto[];
  // 문자열 통과
  @ValidateNested({ each: false })
  @Type(() => TypeTextDenyDto)
  TEXT_ALLOW?: TypeTextDenyDto[];
  @IsString()
  @IsOptional()
  WIDTH: string;
}

export class TypeHNumber extends TypeOptionDto {
  @IsString()
  @IsOptional()
  HTML: string;
  @IsOptional()
  @ValidateNested({ each: false })
  @ArrayNotEmpty()
  @Type(() => TypeAnswerDto)
  ANSWERS: TypeAnswerDto[];
  @IsString()
  @IsOptional()
  COLUMN_HEAD: string;
}

export class TypeSumsDto extends TypeOptionDto {
  //SUM 숫자 더하기 start TYPE: SUM
  @IsString()
  @IsOptional()
  HEAD?: string;
  @IsString()
  @IsOptional()
  TAIL?: string;
  @IsString()
  @IsOptional()
  SUM?: string;
  @IsOptional()
  @ValidateNested({ each: false })
  @ArrayNotEmpty()
  @Type(() => TypeAnswerDto)
  ANSWERS: TypeAnswerDto[];

  @IsString()
  @IsOptional()
  ANSWER_HEAD?: string;

  @IsString()
  @IsOptional()
  COLUMN_HEAD?: string;

  @IsBoolean()
  @IsOptional()
  AUTO_ZERO_ROW?: boolean;

  @IsString()
  @IsOptional()
  MAX: string;

  @IsString()
  @IsOptional()
  ALIGN: string;

  @IsString()
  @IsOptional()
  MIN: string;

  @IsBoolean()
  @IsOptional()
  COMMA?: boolean;

  @IsBoolean()
  @IsOptional()
  ALLOW_FLOAT: boolean;

  @IsOptional()
  @IsBoolean()
  SHOW_REMAIN: boolean;
  //SUM 숫자 더하기 end
}

//NUMBER_1~n 부분 만큼 늘어 날수 있음 TEXT_1~n로 사용할수도 있음
export class TypeMatrixDto extends TypeOptionDto {
  @IsOptional()
  @ValidateNested({ each: false })
  @Type(() => TypeConditionsDto)
  CONDITIONS: TypeConditionsDto[];

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
}
