"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateValidator = void 0;
const class_validator_1 = require("class-validator");
let DateValidator = class DateValidator {
    validate(invoiceDate) {
        if (typeof invoiceDate !== 'string') {
            return false;
        }
        if (invoiceDate) {
            const regex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
            if (invoiceDate.match(regex) === null) {
                return false;
            }
            const date = new Date(invoiceDate);
            return date.toISOString().startsWith(invoiceDate);
        }
        return false;
    }
};
DateValidator = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'invoiceDate', async: true })
], DateValidator);
exports.DateValidator = DateValidator;
//# sourceMappingURL=DateValidator.js.map