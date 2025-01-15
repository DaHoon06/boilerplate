import { IsBoolean } from 'class-validator';
import { TypeOptionDto } from './type.option.dto';

export class TypeAddressDto extends TypeOptionDto {
  @IsBoolean()
  DETAIL_HIDE?: boolean;
  @IsBoolean()
  DETAIL_NEED?: boolean;
  @IsBoolean()
  DORO_HIDE?: boolean;
}
