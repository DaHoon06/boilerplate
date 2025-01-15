import { IsDate, IsNumber, IsOptional } from 'class-validator';

export class UserFavoriteDto {
  @IsNumber()
  SNUM: number;

  @IsDate()
  @IsOptional()
  registrationDate?: Date;
}
