import { IsString, IsNumber, IsOptional } from 'class-validator';

export class SvyListDto {
  @IsString()
  @IsOptional()
  userId?: string;

  @IsNumber()
  @IsOptional()
  pageNum?: number;

  @IsString()
  @IsOptional()
  searchWord?: string;

  @IsString()
  @IsOptional()
  status?: string;

  @IsNumber()
  @IsOptional()
  parPage?: number;
}

export class SvyDupDto {
  @IsString()
  TITLE: string;
}
