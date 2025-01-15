import {
  IsArray,
  IsBoolean,
  IsDefined,
  IsEnum,
  IsNotEmptyObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import {
  TypeRadioBothDto,
  TypeRadioDto,
  TypeRadioSetDto,
  TypeRadioSetsDto,
  TypeRadioSetsHDto,
  TypeRadioTableDto,
  TypeSliderDto,
} from './type.radio.dto';
import {
  TypeCheckDto,
  TypeCheckSetsDto,
  TypeCheckSetsHDto,
} from './type.check.dto';
import { TypeDescDto, TypeTitleDto } from './type.desc.dto';
import {
  TypeDropDownDto,
  TypeGradeClickDto,
  TypeGradeDto,
  TypeImageClickDto,
} from './type.rank.dto';
import { TypeCompleteDto } from './type.complete.dto';
import { TypeMultiTextDto, TypeTextAreaDto } from './type.open.dto';
import { QUESTION_TYPE } from '@app/api/enums/question.type';
import { QUESTION_MOVE_TYPE } from '@app/shared/enums/question.enum';
import { TypeTextDto } from '@app/shared/schema/dto/type.option.dto';

export class TypeQuestionDto {
  //단일문항들 Start
  @IsOptional()
  @ValidateNested()
  @Type(() => TypeRadioDto)
  RADIO: TypeRadioDto;
  @IsOptional()
  @ValidateNested()
  @Type(() => TypeRadioSetDto)
  RADIOSET: TypeRadioSetDto;
  @IsOptional()
  @ValidateNested()
  @Type(() => TypeRadioSetsDto)
  RADIOSETS: TypeRadioSetsDto;
  @IsOptional()
  @ValidateNested()
  @Type(() => TypeRadioSetsHDto)
  RADIOSETS_H: TypeRadioSetsHDto;
  @IsOptional()
  @ValidateNested()
  @Type(() => TypeRadioTableDto)
  RADIO_TABLE: TypeRadioTableDto;
  @IsOptional()
  @ValidateNested()
  @Type(() => TypeRadioBothDto)
  RADIO_BOTH: TypeRadioBothDto;
  @IsOptional()
  @ValidateNested()
  @Type(() => TypeSliderDto)
  SLIDER: TypeSliderDto;
  //단일문항들 End
  //복수문항들 Start
  @IsOptional()
  @ValidateNested()
  @Type(() => TypeCheckDto)
  CHECK: TypeCheckDto;
  @IsOptional()
  @ValidateNested()
  @Type(() => TypeCheckSetsDto)
  CHECKSETS: TypeCheckSetsDto;
  @IsOptional()
  @ValidateNested()
  @Type(() => TypeCheckSetsHDto)
  CHECKSETS_H: TypeCheckSetsHDto;
  //복수문항들 End
  //순위형 문항들 start
  @IsOptional()
  @ValidateNested()
  @Type(() => TypeGradeDto)
  GRADE: TypeGradeDto;
  @IsOptional()
  @ValidateNested()
  @Type(() => TypeGradeClickDto)
  GRADE_CLICK: TypeGradeClickDto;
  @IsOptional()
  @ValidateNested()
  @Type(() => TypeDropDownDto)
  DROPDOWN: TypeDropDownDto;
  @IsOptional()
  @ValidateNested()
  @Type(() => TypeImageClickDto)
  IMAGE_CLICK: TypeImageClickDto;
  //순위형 문항들 end
  //오픈형 문항들 start
  //오픈형 문항들 end
  //기타문항들 Start
  @IsOptional()
  @ValidateNested()
  @Type(() => TypeDescDto)
  DESC: TypeDescDto;
  @IsOptional()
  @ValidateNested()
  @Type(() => TypeTitleDto)
  TITLE: TypeTitleDto;
  @IsOptional()
  @ValidateNested()
  @Type(() => TypeCompleteDto)
  COMPLETE: TypeCompleteDto;
  //기타문항들 End
  //주관식 단답형 start
  @IsOptional()
  @ValidateNested()
  @Type(() => TypeMultiTextDto)
  MULTI_TEXT: TypeMultiTextDto;
  @IsOptional()
  @ValidateNested()
  @Type(() => TypeTextAreaDto)
  TEXTAREA: TypeTextAreaDto;
  //주관식 단답형 end
}

export class TypeMakeDto {
  @IsEnum(QUESTION_TYPE)
  TYPE: QUESTION_TYPE;
  @IsOptional()
  @IsString()
  NAME: string;
  @IsDefined()
  @IsNotEmptyObject()
  @Type(() => TypeQuestionDto)
  @ValidateNested()
  question: TypeQuestionDto;
  @IsBoolean()
  @IsOptional()
  CREATE: boolean;
  @IsOptional()
  FILE: any;
  @IsString()
  @IsOptional()
  QNUM: string;
  @IsString()
  @IsOptional()
  TARGET: string;
  @IsOptional()
  @IsEnum(QUESTION_MOVE_TYPE)
  MOVE_TYPE: QUESTION_MOVE_TYPE;
  @IsString()
  @IsOptional()
  QUESTION: string;
  @IsString()
  @IsOptional()
  PARENT_NAME: string;
  @IsOptional()
  ANSWERS: TypeAnswerDto[];
  @IsOptional()
  H: TypeAnswerDto[];
  @IsOptional()
  V: TypeAnswerDto[];
  @IsArray()
  @IsOptional()
  CHILD_NAMES?: string[];

  @IsOptional()
  MATCH?: Array<{
    MIN: string;
    MAX: string;
    K: string;
    V: string;
    N: string;
    SRC_K?: string;
    SRC_V?: string;
  }>;

  // MARK; QUOTA 관련 선언
  ROW1?: string;
  ROW2?: string;
  COL1?: string;
  COL2?: string;

  QUOTA?: {
    [key: string]: {
      row1k: string;
      row2k: string;
      col1k: string;
      col2k: string;
      row1v: string;
      row2v: string;
      col1v: string;
      col2v: string;
      quota: string;
      quota_src: string;
      quotaType: string;
    };
  };

  // 기타 오픈 TEXT_1, TEXT_2는 동적 키값이라 따로 뺌
  @IsOptional()
  etcTextObj: {
    [key: string]: TypeTextDto;
  };
}

export class TypeModifyDto {
  @IsEnum(QUESTION_TYPE)
  TYPE: QUESTION_TYPE;
  @IsDefined()
  @IsNotEmptyObject()
  @Type(() => TypeQuestionDto)
  @ValidateNested()
  question: TypeQuestionDto;

  // 기타 오픈 TEXT_1, TEXT_2는 동적 키값이라 따로 뺌
  @IsOptional()
  etcTextObj: {
    [key: string]: TypeTextDto;
  };
}

// MARK: RADIO & CHECK
export class TypeAnswerDto {
  @IsString()
  K: string;
  @IsString()
  V: string;
  @IsString()
  @IsOptional()
  N: string;
  @IsString()
  @IsOptional()
  C1: string;
  @IsString()
  @IsOptional()
  C2: string;
  @IsString()
  @IsOptional()
  C3: string;
  @IsString()
  @IsOptional()
  Y_GO: string;
  @IsString()
  @IsOptional()
  N_GO: string;
  @IsBoolean()
  @IsOptional()
  SINGLE: boolean;
  @IsBoolean()
  @IsOptional()
  DIVIDER: boolean;
  @IsString()
  @IsOptional()
  MIN: string;
  @IsString()
  @IsOptional()
  MAX: string;
  @IsString()
  @IsOptional()
  SUM: string;
  @IsBoolean()
  @IsOptional()
  CREATE: boolean;
  @IsBoolean()
  @IsOptional()
  ETC?: boolean;

  @IsOptional()
  IMG_LOCATION: string;
}

export class TypeValueDto {
  @IsString()
  K: string;
  @IsString()
  V: string;
  @IsString()
  @IsOptional()
  VL: string;
  @IsString()
  @IsOptional()
  VR: string;
  @IsString()
  @IsOptional()
  N: string;
  @IsString()
  @IsOptional()
  C1: string;
  @IsString()
  @IsOptional()
  C2: string;
  @IsString()
  @IsOptional()
  C3: string;
  @IsString()
  @IsOptional()
  Y_GO: string;
  @IsString()
  @IsOptional()
  N_GO: string;
  @IsBoolean()
  @IsOptional()
  SINGLE: boolean;
  @IsBoolean()
  @IsOptional()
  DIVIDER: boolean;
  @IsString()
  @IsOptional()
  M: string;
  @IsString()
  @IsOptional()
  END: string;
  @IsString()
  @IsOptional()
  TEXT: string;
  @IsString()
  @IsOptional()
  LAST: string;
  @IsString()
  @IsOptional()
  MAX: string;
  @IsBoolean()
  @IsOptional()
  CREATE: boolean;
  @IsBoolean()
  @IsOptional()
  ETC: boolean;
}

export class TypeHDto {
  @IsString()
  @IsOptional()
  K: string;
  @IsString()
  @IsOptional()
  V: string;
  @IsString()
  @IsOptional()
  NUM: string;
  @IsString()
  @IsOptional()
  N: string;
  @IsString()
  @IsOptional()
  C1: string;
  @IsBoolean()
  @IsOptional()
  SINGLE: boolean;
  @IsBoolean()
  @IsOptional()
  DIVIDER: boolean;
  @IsString()
  @IsOptional()
  LAST: string;
  @IsString()
  @IsOptional()
  MAX: string;
  @IsBoolean()
  @IsOptional()
  CREATE: boolean;
}
