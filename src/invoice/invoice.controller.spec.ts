import { HttpStatus } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AuthGuard } from '../../src/guards/auth.guards';
import { InvoiceDTO } from './dtos/invoice.dtos';
import { QueryDTO } from './dtos/query.dtos';
import { UpdateDTO } from './dtos/update.dtos';
import { InvoiceController } from './invoice.controller';
import { InvoiceService } from './invoice.service';
describe('InvoiceController', () => {
  let controller: InvoiceController;
  let fakeInvoiceService: Partial<InvoiceService>;

  beforeEach(async () => {
    fakeInvoiceService = {
      createInvoice: () => {
        return Promise.resolve();
      },
      findInvoice: (id: number) => {
        return Promise.resolve(new InvoiceDTO());
      },

      getAllInvoice: (dto: QueryDTO) => {
        return Promise.resolve(new InvoiceDTO());
      },
      deleteInvoice: (id: number) => {
        return Promise.resolve(new InvoiceDTO());
      },
      updateInvoice: (id: number, updateInv: UpdateDTO) => {
        return Promise.resolve();
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        InvoiceService,
        {
          provide: InvoiceService,
          useValue: fakeInvoiceService,
        },
        {
          provide: AuthGuard,
          useValue: jest.fn().mockImplementation(() => true),
        },
      ],
      controllers: [InvoiceController],
    }).compile();

    controller = module.get<InvoiceController>(InvoiceController);
  });

  it('should defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a invoices', async () => {
    const dto: InvoiceDTO = {
      invoiceNumber: '323',
      amount: 4000,
      invoiceDate: '2022-10-01',
      createdBy: 'adas',
      buyerName: 'psd',
      sellerName: 'wee',
    };
    await controller.createInvoice(dto);
    expect({ status: HttpStatus.OK });
  });

  it('find all invoices returns a list of invoice with given id', async () => {
    const invoice = await controller.findInvoice(1);
    expect(invoice).toBeDefined();
  });

  it('list all invoices', async () => {
    const dto: QueryDTO = {
      invoiceNumber: '323',
      amount: 4000,
      invoiceDate: '2022-10-01',
      createdBy: 'adas',
      buyerName: 'psd',
      sellerName: 'wee',
      amountMin: 0,
      amountMax: 0,
    };
    const invoice = await controller.getAllInvoice(dto);
    expect(invoice).toBeDefined();
  });

  it('delete invoice by id', async () => {
    const invoiceId = 1;
    const invoice = await controller.deleteInvoice(invoiceId);
    expect(invoice).toBeDefined();
  });

  it('update invoice', async () => {
    const id = 5;
    const dto: UpdateDTO = {
      invoiceNumber: '323',
      amount: 4000,
      invoiceDate: '2022-10-01',
      createdBy: 'adas',
      buyerName: 'psd',
      sellerName: 'wee',
    };
    await controller.updateInvoice(id, dto);
    expect({ status: HttpStatus.OK });
  });
});
