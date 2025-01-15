import { IsString } from 'class-validator';
import { TypeOptionDto } from './type.option.dto';

export class TypeUploadDto extends TypeOptionDto {
  @IsString()
  CSS?: string;
  @IsString()
  SRC?: string; //이미지 업로드 경로
  @IsString()
  WIDTH?: string;
}
