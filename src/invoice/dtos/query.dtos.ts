import { IsOptional } from 'class-validator';
export class QueryDTO {
  @IsOptional()
  invoiceNumber: string;

  @IsOptional()
  amount: number;

  @IsOptional()
  amountMin: number;

  @IsOptional()
  amountMax: number;

  @IsOptional()
  invoiceDate: string;

  @IsOptional()
  createdBy: string;

  @IsOptional()
  buyerName: string;

  @IsOptional()
  sellerName: string;
}
