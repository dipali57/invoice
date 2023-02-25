import {
  IsNumber,
  IsPositive,
  IsOptional,
  IsString,
  Validate,
} from 'class-validator';
import { DateValidator } from '../../invoice/DateValidator';
export class UpdateDTO {
  @IsString()
  @IsOptional()
  invoiceNumber: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  amount: number;

  @IsString()
  @IsOptional()
  @Validate(DateValidator, ['invoiceDate'], {
    message: 'InvoiceDate must be a date instance',
  })
  invoiceDate: string;

  @IsString()
  @IsOptional()
  createdBy: string;

  @IsString()
  @IsOptional()
  buyerName: string;

  @IsString()
  @IsOptional()
  sellerName: string;
}
