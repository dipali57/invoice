import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { LoggingInterceptor } from '../interceptor/logging.interceptor';
import { InvoiceDTO } from './dtos/invoice.dtos';
import { QueryDTO } from './dtos/query.dtos';
import { UpdateDTO } from './dtos/update.dtos';
import { InvoiceService } from './invoice.service';
import { AuthGuard } from '../guards/auth.guards';
@Controller('invoice')
@UseGuards(AuthGuard)
@UseInterceptors(LoggingInterceptor)
export class InvoiceController {
  constructor(private invoiceService: InvoiceService) {}
  @Post()
  async createInvoice(@Body() invData: InvoiceDTO) {
    return await this.invoiceService.createInvoice(invData);
  }

  @Get('/:id')
  async findInvoice(@Param('id') id: number): Promise<InvoiceDTO> {
    return await this.invoiceService.findInvoice(id);
  }

  @Get()
  getAllInvoice(@Query() query: QueryDTO): Promise<InvoiceDTO> {
    return this.invoiceService.getAllInvoice(query);
  }

  @Delete('/:id')
  deleteInvoice(@Param('id') id: number): Promise<InvoiceDTO> {
    return this.invoiceService.deleteInvoice(id);
  }

  @Patch('/:id')
  updateInvoice(@Param('id') id: number, @Body() body: UpdateDTO) {
    return this.invoiceService.updateInvoice(id, body);
  }
}
