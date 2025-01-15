import { IsNumber, IsOptional } from 'class-validator';
import { FilterQuery } from 'mongoose';
import { Project } from '@app/shared/schema/project.schema';

export class PagingDto {
  @IsNumber()
  @IsOptional()
  pageNum: number;

  @IsNumber()
  @IsOptional()
  RowPerPage: number;

  @IsOptional()
  query: FilterQuery<Project>;

  @IsOptional()
  sortQuery: sortQueryDto;
}

export class sortQueryDto {
  @IsOptional()
  @IsNumber()
  _id?: number;
  @IsOptional()
  @IsNumber()
  surveyFix?: number;
  @IsOptional()
  @IsNumber()
  modDate?: number;
}
