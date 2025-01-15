import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class SurveyFixDto {
  @IsBoolean()
  surveyFix: boolean;
  @IsString()
  TITLE: string;
  @IsNumber()
  SNUM: number;
  @IsNumber()
  @IsOptional()
  pageNum?: number;
}
