import { InvoiceDTO } from './dtos/invoice.dtos';
import { QueryDTO } from './dtos/query.dtos';
import { UpdateDTO } from './dtos/update.dtos';
import { InvoiceService } from './invoice.service';
export declare class InvoiceController {
    private invoiceService;
    constructor(invoiceService: InvoiceService);
    createInvoice(invData: InvoiceDTO): Promise<any>;
    findInvoice(id: number): Promise<InvoiceDTO>;
    getAllInvoice(query: QueryDTO): Promise<InvoiceDTO>;
    deleteInvoice(id: number): Promise<InvoiceDTO>;
    updateInvoice(id: number, body: UpdateDTO): Promise<any>;
}
