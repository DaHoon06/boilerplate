import { IsString, IsOptional } from 'class-validator';

export class TypeLastMsg {
  @IsString()
  @IsOptional()
  TXT_COMPLETE: string;

  @IsString()
  @IsOptional()
  TXT_OVER: string;

  @IsString()
  @IsOptional()
  TXT_OUT: string;

  @IsString()
  @IsOptional()
  TXT_BAD: string;
}
