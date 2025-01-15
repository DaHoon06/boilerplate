import {
  ArrayNotEmpty,
  IsArray,
  IsBoolean,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { TypeOptionDto } from './type.option.dto';
import { Type } from 'class-transformer';

class TypeDescDataDto {
  @IsString()
  @IsOptional()
  ALIGN: string;
  @IsString()
  @IsOptional()
  CSS: string;
  @IsString()
  @IsOptional()
  HTML: string;
}
class TypeReDirectsDto {
  @IsString()
  @IsOptional()
  NAME: string;
  @IsString()
  @IsOptional()
  URL: string;
}
export class TypeDescDto extends TypeOptionDto {
  @IsArray()
  @IsOptional()
  @ValidateNested({ each: false })
  @Type(() => TypeReDirectsDto)
  REDIRECTS: TypeReDirectsDto[];
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: false })
  @Type(() => TypeDescDataDto)
  DATA: TypeDescDataDto[];
  @IsBoolean()
  @IsOptional()
  NO_BACKGROUND: boolean;
  @IsString()
  @IsOptional()
  BG: string;
  @IsString()
  @IsOptional()
  BORDER: string;
  @IsBoolean()
  @IsOptional()
  SURVEY_END: boolean;
}

export class TypeTitleDto extends TypeOptionDto {
  @IsString()
  @IsOptional()
  HTML: string;
  @IsString()
  @IsOptional()
  BG: string;
  //표시시간제어 부분이나 배경색BG 부분 getdata에서는 기능이 없음
}
