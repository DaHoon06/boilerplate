import {
  ArrayNotEmpty,
  IsBoolean,
  IsDefined,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { TypeOptionDto } from './type.option.dto';
import { Type } from 'class-transformer';
import { TypeAnswerDto, TypeHDto, TypeValueDto } from './type.make.dto';
import { CHILD_TYPE } from '@app/shared/enums/question.enum';

export class TypeRadioDto extends TypeOptionDto {
  @IsDefined()
  @ValidateNested({ each: true })
  @ArrayNotEmpty()
  @Type(() => TypeAnswerDto)
  ANSWERS: TypeAnswerDto[];
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

export class TypeRadioSetDto extends TypeOptionDto {
  //응답값 머릿말 옵션 삭제
  @IsString()
  @IsOptional()
  H_HEAD?: string;
  @IsDefined()
  @ValidateNested({ each: true })
  @ArrayNotEmpty()
  @Type(() => TypeAnswerDto)
  ANSWERS: any[];
}

export class TypeRadioSetsDto extends TypeOptionDto {
  @IsString()
  @IsOptional()
  H_HEAD?: string;
  @IsBoolean()
  @IsOptional()
  BY_LINE: boolean;
  @IsBoolean()
  @IsOptional()
  MOBILE_UI: boolean;
  @IsString()
  @IsOptional()
  COL_WIDTHS: boolean;
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

export class TypeRadioSetsHDto extends TypeOptionDto {
  @IsString()
  @IsOptional()
  H_HEAD?: string;
  @IsBoolean()
  @IsOptional()
  BY_LINE: boolean;
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

export class TypeHRadioDto extends TypeOptionDto {
  @IsDefined()
  @ValidateNested({ each: true })
  @ArrayNotEmpty()
  @Type(() => TypeAnswerDto)
  ANSWERS: TypeAnswerDto[];
  @IsString()
  @IsOptional()
  COLUMN_HEAD: string;
}

export class TypeRadioTableDto extends TypeOptionDto {
  @IsString()
  @IsOptional()
  MAX_GRADE: string;
  @IsString()
  @IsOptional()
  MIN_GRADE: string;
  @IsString()
  @IsOptional()
  THEAD_C1: string;
  @IsString()
  @IsOptional()
  WIDTH_C1: string;
  @IsString()
  @IsOptional()
  THEAD_C2: string;
  @IsString()
  @IsOptional()
  WIDTH_C2: string;
  @IsString()
  @IsOptional()
  THEAD_C3: string;
  @IsString()
  @IsOptional()
  WIDTH_C3: string;
  @IsString()
  @IsOptional()
  WIDTH_ANSWER: string;
  @IsString()
  @IsOptional()
  THEAD_ANSWER: string;
  @IsDefined()
  @ValidateNested({ each: true })
  @ArrayNotEmpty()
  @Type(() => TypeAnswerDto)
  ANSWERS: TypeAnswerDto[];
}

export class TypeRadioBothDto extends TypeOptionDto {
  //척도형 두항목간의 만족도 조사 start
  @IsString()
  @IsOptional()
  LEFT_HEAD?: string;
  @IsString()
  @IsOptional()
  LEFT_ARROW_DESC?: string;
  @IsString()
  @IsOptional()
  RIGHT_ARROW_DESC?: string;
  @IsString()
  @IsOptional()
  LEFT_NUM_DESC?: string;
  @IsString()
  @IsOptional()
  RIGHT_NUM_DESC?: string;
  @IsBoolean()
  @IsOptional()
  CROSS_CHECK?: boolean;
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
  //척도형 두항목간의 만족도 조사 end
}

//슬라이더
export class TypeSliderDto extends TypeOptionDto {
  @IsDefined()
  @ValidateNested({ each: true })
  @ArrayNotEmpty()
  @Type(() => TypeValueDto)
  V: TypeValueDto[];
  @IsDefined({ message: '최소값을 적어주세요.' })
  @IsNumber()
  @IsOptional()
  MIN_VALUE: string;
  @IsDefined({ message: '최대값을 적어주세요.' })
  @IsString()
  MAX_VALUE: string;
  @IsString({ message: '최소값 문구를 적어주세요.' })
  MIN_TEXT: string;
  @IsString({ message: '최대값 문구를 적어주세요.' })
  MAX_TEXT: string;
  @IsDefined({ message: '간격을 설정해주세요.' })
  @IsNumber()
  STEP: string; //간격
  @IsString()
  @IsOptional()
  HANDLE_NAME: string; //손잡이 이름
  @IsDefined({ message: '바의 범위 활성화 옵션을 확인 부탁합니다.' })
  @IsBoolean()
  RANGE: boolean; //범위 선택 기본적으로 false
  @IsBoolean()
  @IsOptional()
  HANDLE_SCORE: boolean; //손잡이에 점수 표기
}
