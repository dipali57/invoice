import { InvoiceDTO } from './dtos/invoice.dtos';
import { QueryDTO } from './dtos/query.dtos';
import { UpdateDTO } from './dtos/update.dtos';
export declare class InvoiceService {
    private readonly repository;
    constructor(repository: any);
    createInvoice(invData: InvoiceDTO): Promise<any>;
    getAllInvoice(query: QueryDTO): Promise<InvoiceDTO>;
    findInvoice(id: number): Promise<InvoiceDTO>;
    deleteInvoice(id: number): Promise<InvoiceDTO>;
    updateInvoice(id: number, updateInv: UpdateDTO): Promise<any>;
}
