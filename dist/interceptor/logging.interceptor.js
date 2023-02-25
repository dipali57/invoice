"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
class LoggingInterceptor {
    intercept(context, next) {
        const now = Date.now();
        return next
            .handle()
            .pipe((0, operators_1.tap)(() => common_1.Logger.log(`Execution Successful.. ${context.getClass().name} => ${context.getHandler().name}, ${Date.now() - now}ms`)));
    }
}
exports.LoggingInterceptor = LoggingInterceptor;
//# sourceMappingURL=logging.interceptor.js.map