"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDate = void 0;
const date_fns_1 = require("date-fns");
function toDate(value) {
    const date = (0, date_fns_1.format)(new Date(value), 'dd/mm/yy');
    return new Date(date);
}
exports.toDate = toDate;
//# sourceMappingURL=custom.helper.js.map