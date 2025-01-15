import {
  ArrayNotEmpty,
  IsBoolean,
  IsDefined,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { TypeOptionDto } from './type.option.dto';
import { Type } from 'class-transformer';
import { TypeValueDto } from './type.make.dto';

class TypeQuotaValDto {
  @IsString()
  @IsOptional()
  row1k: string;
  @IsString()
  @IsOptional()
  row2k: string;
  @IsString()
  @IsOptional()
  col1k: string;
  @IsString()
  @IsOptional()
  col2k: string;
  @IsString()
  @IsOptional()
  row1v: string;
  @IsString()
  @IsOptional()
  row2v: string;
  @IsString()
  @IsOptional()
  col1v: string;
  @IsString()
  @IsOptional()
  col2v: string;
  @IsString()
  @IsOptional()
  quota: string;
  @IsString()
  @IsOptional()
  quota_src: string;
  @IsString()
  @IsOptional()
  quotaType: string;
}
export class TypeQuotaDto extends TypeOptionDto {
  @IsString()
  @IsOptional()
  OVER_NEXT: string;

  @IsString()
  @IsOptional()
  ROW1: string;

  @IsString()
  @IsOptional()
  ROW2: string;

  @IsString()
  @IsOptional()
  COL1: string;

  @IsOptional()
  QUOTA_LIST: string[];

  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => TypeQuotaValDto)
  QUOTA: TypeQuotaValDto;

  /*
  1//1/": {
    "row1k": "1",
    "row2k": "",
    "col1k": "1",
    "col2k": "",
    "row1v": "A",
    "row2v": "",
    "col1v": "A1",
    "col2v": "",
    "quota": "20",
    "quota_src": "20",
    "quotaType": "1//1/"
  },
*/
}

export class TypeGroupRotationDto extends TypeOptionDto {
  @IsDefined()
  @ValidateNested({ each: true })
  @ArrayNotEmpty()
  @Type(() => TypeValueDto)
  V: TypeValueDto[];

  @IsString()
  @IsOptional()
  ROTATION_END: string;
}

export class TypeGateWayDto extends TypeOptionDto {
  @IsDefined()
  @ValidateNested({ each: true })
  @ArrayNotEmpty()
  @Type(() => TypeValueDto)
  V: TypeValueDto[];

  @IsBoolean()
  @IsOptional()
  AGAINABLE: boolean;

  @IsString()
  @IsOptional()
  GATEWAY_END: string;
}
