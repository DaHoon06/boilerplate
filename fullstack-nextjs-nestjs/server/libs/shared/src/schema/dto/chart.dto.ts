import { IsNumber, IsOptional, IsString } from 'class-validator';

export class QuestionChartDto {
  @IsNumber()
  @IsOptional()
  SNUM?: number;
  @IsString()
  @IsOptional()
  userId?: string;
  @IsString()
  @IsOptional()
  NAME?: string;
  @IsString()
  @IsOptional()
  SHOW_CHART?: string;
}
