"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const values_missing_exception_filter_1 = require("./exception/values-missing.exception-filter");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
    }));
    app.useGlobalFilters(new values_missing_exception_filter_1.UpdateValuesMissingErrorFilter());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map