import { IsBoolean, IsEnum, IsNumber } from 'class-validator';
import { CostType, PurchaseTargetType } from '@app/shared/enums/cost';

export class CostCalculationCountDto {
  @IsNumber()
  sampleCount: number;
  @IsNumber()
  questionCount: number;
}

export class CostCalculationDto extends CostCalculationCountDto {
  @IsEnum(CostType)
  costType: CostType;
  @IsBoolean()
  useTargetData: boolean;
  @IsEnum(PurchaseTargetType)
  targetType: PurchaseTargetType;
}

export class PanelCostValues {
  @IsNumber()
  unitPrice: number;
  @IsNumber()
  defaultPrice: number;
}

export class CostBodyDto extends CostCalculationDto {}
