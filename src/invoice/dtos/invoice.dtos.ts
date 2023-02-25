import {
  IsNumber,
  IsNotEmpty,
  IsPositive,
  IsString,
  Validate,
} from 'class-validator';
import { DateValidator } from '../../invoice/DateValidator';

export class InvoiceDTO {
  @IsString()
  @IsNotEmpty()
  invoiceNumber: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  @IsString()
  @Validate(DateValidator, ['invoiceDate'], {
    message: 'InvoiceDate must be a date instance',
  })
  invoiceDate: string;

  @IsString()
  @IsNotEmpty()
  createdBy: string;

  @IsString()
  @IsNotEmpty()
  buyerName: string;

  @IsString()
  @IsNotEmpty()
  sellerName: string;
}
