"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const not_found_exception_1 = require("../exception/not-found.exception");
const invoice_entity_1 = require("./invoice.entity");
let InvoiceService = class InvoiceService {
    constructor(repository) {
        this.repository = repository;
    }
    async createInvoice(invData) {
        return await this.repository.save(invData);
    }
    async getAllInvoice(query) {
        const { amountMax, amountMin } = query, restQuery = __rest(query, ["amountMax", "amountMin"]);
        const invoiceQuery = await this.repository.createQueryBuilder('Invoice');
        if (query.amountMin && query.amountMax) {
            invoiceQuery
                .where('amount > :amountMin', {
                amountMin: amountMin,
            })
                .andWhere('amount < :amountMax', {
                amountMax: amountMax,
            });
        }
        else if (query.amountMin) {
            invoiceQuery.andWhere('amount > :amountMin', {
                amountMin: amountMin,
            });
        }
        else if (query.amountMax) {
            invoiceQuery.andWhere('amount < :amountMax', {
                amountMax: amountMax,
            });
        }
        invoiceQuery.andWhere(Object.assign({}, restQuery));
        const invoiceList = await invoiceQuery.getMany();
        return invoiceList;
    }
    async findInvoice(id) {
        const invoice = await this.repository.findOne(id);
        if (!invoice) {
            throw new not_found_exception_1.IdNotFoundException(id);
        }
        return invoice;
    }
    async deleteInvoice(id) {
        const invoice = await this.findInvoice(id);
        if (!invoice) {
            throw new not_found_exception_1.IdNotFoundException(id);
        }
        return this.repository.remove(invoice);
    }
    async updateInvoice(id, updateInv) {
        const invoice = await this.findInvoice(id);
        if (!invoice) {
            throw new not_found_exception_1.IdNotFoundException(id);
        }
        return await this.repository.update(id, updateInv);
    }
};
InvoiceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(invoice_entity_1.Invoice)),
    __metadata("design:paramtypes", [Object])
], InvoiceService);
exports.InvoiceService = InvoiceService;
//# sourceMappingURL=invoice.service.js.map