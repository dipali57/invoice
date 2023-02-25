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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceController = void 0;
const common_1 = require("@nestjs/common");
const logging_interceptor_1 = require("../interceptor/logging.interceptor");
const invoice_dtos_1 = require("./dtos/invoice.dtos");
const query_dtos_1 = require("./dtos/query.dtos");
const update_dtos_1 = require("./dtos/update.dtos");
const invoice_service_1 = require("./invoice.service");
const auth_guards_1 = require("../guards/auth.guards");
let InvoiceController = class InvoiceController {
    constructor(invoiceService) {
        this.invoiceService = invoiceService;
    }
    async createInvoice(invData) {
        return await this.invoiceService.createInvoice(invData);
    }
    async findInvoice(id) {
        return await this.invoiceService.findInvoice(id);
    }
    getAllInvoice(query) {
        return this.invoiceService.getAllInvoice(query);
    }
    deleteInvoice(id) {
        return this.invoiceService.deleteInvoice(id);
    }
    updateInvoice(id, body) {
        return this.invoiceService.updateInvoice(id, body);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [invoice_dtos_1.InvoiceDTO]),
    __metadata("design:returntype", Promise)
], InvoiceController.prototype, "createInvoice", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InvoiceController.prototype, "findInvoice", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_dtos_1.QueryDTO]),
    __metadata("design:returntype", Promise)
], InvoiceController.prototype, "getAllInvoice", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InvoiceController.prototype, "deleteInvoice", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_dtos_1.UpdateDTO]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "updateInvoice", null);
InvoiceController = __decorate([
    (0, common_1.Controller)('invoice'),
    (0, common_1.UseGuards)(auth_guards_1.AuthGuard),
    (0, common_1.UseInterceptors)(logging_interceptor_1.LoggingInterceptor),
    __metadata("design:paramtypes", [invoice_service_1.InvoiceService])
], InvoiceController);
exports.InvoiceController = InvoiceController;
//# sourceMappingURL=invoice.controller.js.map