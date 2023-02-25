import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IdNotFoundException } from '../exception/not-found.exception';
import { InvoiceDTO } from './dtos/invoice.dtos';
import { QueryDTO } from './dtos/query.dtos';
import { UpdateDTO } from './dtos/update.dtos';
import { Invoice } from './invoice.entity';

@Injectable()
export class InvoiceService {
  constructor(@InjectRepository(Invoice) private readonly repository) {}

  async createInvoice(invData: InvoiceDTO) {
    return await this.repository.save(invData);
  }

  async getAllInvoice(query: QueryDTO): Promise<InvoiceDTO> {
    const { amountMax, amountMin, ...restQuery } = query;

    const invoiceQuery = await this.repository.createQueryBuilder('Invoice');

    if (query.amountMin && query.amountMax) {
      invoiceQuery
        .where('amount > :amountMin', {
          amountMin: amountMin,
        })
        .andWhere('amount < :amountMax', {
          amountMax: amountMax,
        });
    } else if (query.amountMin) {
      invoiceQuery.andWhere('amount > :amountMin', {
        amountMin: amountMin,
      });
    } else if (query.amountMax) {
      invoiceQuery.andWhere('amount < :amountMax', {
        amountMax: amountMax,
      });
    }

    invoiceQuery.andWhere({ ...restQuery });
    const invoiceList = await invoiceQuery.getMany();

    return invoiceList;
  }

  async findInvoice(id: number): Promise<InvoiceDTO> {
    const invoice = await this.repository.findOne(id);
    if (!invoice) {
      throw new IdNotFoundException(id);
    }
    return invoice;
  }

  async deleteInvoice(id: number): Promise<InvoiceDTO> {
    const invoice = await this.findInvoice(id);
    if (!invoice) {
      throw new IdNotFoundException(id);
    }
    return this.repository.remove(invoice);
  }

  async updateInvoice(id: number, updateInv: UpdateDTO) {
    const invoice = await this.findInvoice(id);
    if (!invoice) {
      throw new IdNotFoundException(id);
    }
    return await this.repository.update(id, updateInv);
  }
}
