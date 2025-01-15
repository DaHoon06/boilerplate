import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { QUESTION_TYPE } from '@app/api/enums/question.type';
import { QuestionChartDto } from '@app/shared/schema/dto/chart.dto';

export class TypeTextDenyDto {
  @IsString()
  @IsOptional()
  REG: string;
  @IsString()
  @IsOptional()
  MSG: string;
  @IsString()
  @IsOptional()
  FLAG: string;
}

export class TypeHideDto {
  @IsString()
  @IsOptional()
  CONDITION: string;
  @IsString()
  @IsOptional()
  TARGET: string;
}

export class TypeShowDto {
  @IsString()
  @IsOptional()
  CONDITION: string;
  @IsString()
  @IsOptional()
  TARGET: string;
}

export class TypeSkipDto {
  @IsString()
  @IsOptional()
  CONDITION: string;
  @IsString()
  @IsOptional()
  NAME?: string;
  @IsString()
  @IsOptional()
  VALUE?: string;
}

export class TypeTextDto {
  @IsString()
  @IsOptional()
  K: string;
  @IsString()
  @IsOptional()
  IDX: string;
  @IsString()
  @IsOptional()
  WIDTH: string;
  @IsString()
  @IsOptional()
  ALIGN: string;
  @IsString()
  @IsOptional()
  MIN_LENGTH: string;
  @IsString()
  @IsOptional()
  MAX_LENGTH: string;
  @IsBoolean()
  @IsOptional()
  REQUIRED: boolean;
  @IsString()
  @IsOptional()
  GUIDE: string;
}

export class TypeNumberDto {
  @IsString()
  @IsOptional()
  K: string;
  @IsString()
  @IsOptional()
  IDX: string;
  @IsString()
  @IsOptional()
  WIDTH: string;
  @IsString()
  @IsOptional()
  ALIGN: string;
  @IsString()
  @IsOptional()
  MIN: string;
  @IsString()
  @IsOptional()
  MAX: string;
  @IsBoolean()
  @IsOptional()
  REQUIRED: boolean;
  @IsString()
  @IsOptional()
  GUIDE: string;
}

export class TypeOptionDto {
  @Type(() => TypeTextDenyDto)
  @IsOptional()
  TEXT_DENY?: TypeTextDenyDto[];

  @IsEnum(QUESTION_TYPE)
  TYPE: QUESTION_TYPE;
  @IsString()
  NAME: string;
  @IsOptional()
  @IsBoolean()
  CREATE?: boolean;
  @IsBoolean()
  @IsOptional()
  PAGE_END: boolean;
  @IsString()
  @IsOptional()
  QUESTION?: string;
  @IsBoolean()
  @IsOptional()
  AUTO_NEXT?: boolean;
  //필수 응답
  @IsBoolean()
  @IsOptional()
  ANSWER_CHECK?: boolean;
  @IsString()
  @IsOptional()
  QNUM?: string;
  //보기 로테이션
  @IsString()
  @IsOptional()
  RANDOM?: string;
  //응답값 로테이션
  @IsOptional()
  @IsString()
  RANDOM_H?: string;
  @IsString()
  @IsOptional()
  BTN_HIDE?: string;
  @IsString()
  @IsOptional()
  NEXT?: string;
  @IsString()
  @IsOptional()
  LOOP_QUESTION?: string;
  @IsString()
  @IsOptional()
  NUM_IN_ROW?: string;
  //로직제어 boolean 타입 추가
  @IsBoolean()
  @IsOptional()
  LOGIC_FLAG?: boolean;
  //by 21.06.29 mclee 보기 관련 로직, 문항관련 로직 추후 논의 한다고 했습니다.
  //문항 제시
  @IsArray()
  @IsOptional()
  @ValidateNested({ each: false })
  @Type(() => TypeSkipDto)
  NOTSKIP?: TypeSkipDto[];
  //문항 생략
  @IsArray()
  @IsOptional()
  @ValidateNested({ each: false })
  @Type(() => TypeSkipDto)
  SKIP?: TypeSkipDto[];
  //분류 위치
  @IsBoolean()
  @IsOptional()
  LEFT_CATEGORY?: boolean;
  @IsString()
  @IsOptional()
  LEFT_CATEGORY_WIDTHS?: string;
  @IsString()
  @IsOptional()
  DESC?: string;
  @IsString()
  @IsOptional()
  TOP_DESC?: string;
  @IsString()
  @IsOptional()
  BOTTOM_DESC?: string;
  //start: ETC 기타, NONE 없음(SINGLE) 삭제 예정 프론트 에서 처리함
  @IsBoolean()
  @IsOptional()
  ETC?: boolean;
  @IsBoolean()
  @IsOptional()
  NONE?: boolean;
  @IsBoolean()
  @IsOptional()
  NONE_COMM?: boolean;
  //end: ETC 기타, NONE 없음(SINGLE) 삭제 예정 프론트 에서 처리함
  @IsBoolean()
  @IsOptional()
  KEY_SHOW?: boolean;
  @IsString()
  @IsOptional()
  BACKGROUND?: string;
  @IsBoolean()
  @IsOptional()
  BY_CARD?: boolean;
  //모바일 UI 옵션 사용 안함(모바일 UI 스크립트를 통해 전체 문항 공통 제어)
  /*@IsBoolean()
    @IsOptional()
    MOBILE_UI: boolean;*/
  @IsString()
  @IsOptional()
  V_WIDTH?: string;
  @IsString()
  @IsOptional()
  H_WIDTH?: string;
  @IsString()
  @IsOptional()
  V_HEAD?: string;
  @IsString()
  @IsOptional()
  MAX_COUNT?: string;
  //TEXT_1로 구성됨 TYPE: TEXT
  @IsOptional()
  @ValidateNested({ each: false })
  @Type(() => TypeTextDto)
  TEXT_1?: TypeTextDto;
  //숫자 입력 TYPE: TEXT
  @IsOptional()
  @ValidateNested({ each: false })
  @Type(() => TypeNumberDto)
  NUMBER_1?: TypeNumberDto;
  @IsOptional()
  @ValidateNested({ each: false })
  @Type(() => TypeNumberDto)
  NUMBER_2?: TypeNumberDto;
  @IsOptional()
  @ValidateNested({ each: false })
  @Type(() => TypeNumberDto)
  NUMBER_3?: TypeNumberDto;
  @IsOptional()
  @ValidateNested({ each: false })
  @Type(() => TypeNumberDto)
  NUMBER_4?: TypeNumberDto;
  // start: 텍스처 입력시 제한 하는 옵션 삭제예정
  @IsBoolean()
  @IsOptional()
  VOWEL_DENY?: boolean;
  @IsBoolean()
  @IsOptional()
  NUMBER_DENY?: boolean;
  @IsBoolean()
  @IsOptional()
  KOR_DENY?: boolean;
  @IsBoolean()
  @IsOptional()
  ENG_DENY?: boolean;
  @IsBoolean()
  @IsOptional()
  BLANK_DENY?: boolean;
  @IsBoolean()
  @IsOptional()
  SPE_CHAR_DENY?: boolean;
  // end: 텍스처 입력시 제한 하는 옵션 삭제예정
  @IsOptional()
  @IsString()
  @IsOptional()
  SCRIPT?: string;
  //보기 가져오기 옵션?

  //getdata 가림조건
  @IsArray()
  @IsOptional()
  @ValidateNested({ each: false })
  @Type(() => TypeHideDto)
  HIDE?: TypeHideDto[];
  //getdata 보여짐 조건
  @IsArray()
  @IsOptional()
  @ValidateNested({ each: false })
  @Type(() => TypeShowDto)
  SHOW?: TypeShowDto[];
  //쿼터 숨겨야 되는 문항필드
  @IsBoolean()
  @IsOptional()
  HIDE_QUESTION?: boolean;
  @IsOptional()
  @Type(() => QuestionChartDto)
  CHART_INFO?: QuestionChartDto;
  @IsArray()
  @IsOptional()
  _WARNINGS?: string[];
  @IsString()
  @IsOptional()
  VERSION?: string;
  @IsArray()
  @IsOptional()
  RESTRICT?: [];
  @IsArray()
  @IsOptional()
  CHILD_NAMES?: string[];
}
