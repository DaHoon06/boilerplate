import { IsOptional, IsString } from 'class-validator';

export class TypeCompleteDto {
  @IsString()
  @IsOptional()
  RESULT: string;
}
