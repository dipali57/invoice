"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDate = void 0;
function toDate(value) {
    return new Date(value).toISOString().split('T')[0];
}
exports.toDate = toDate;
//# sourceMappingURL=cast.helper.js.map