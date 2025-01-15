import { IsArray, IsBoolean, IsOptional, IsString } from 'class-validator';

export class SvyChecklistDto {
  @IsString()
  @IsOptional()
  _id?: string;

  @IsBoolean()
  @IsOptional()
  privateInfo?: boolean;

  @IsBoolean()
  @IsOptional()
  sensitiveInfo?: boolean;

  @IsBoolean()
  @IsOptional()
  political?: boolean;

  @IsString()
  @IsOptional()
  comment?: string;
}

export class SvyChecklistDetailDto {
  @IsString()
  @IsOptional()
  _id?: string;

  @IsArray()
  @IsOptional()
  isPrivate?: string[];

  @IsArray()
  @IsOptional()
  isSensitive?: string[];

  @IsArray()
  @IsOptional()
  isPolitical?: string[];
}
