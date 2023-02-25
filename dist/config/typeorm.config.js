"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfigAsync = void 0;
const config_1 = require("@nestjs/config");
const path = require("path");
class typeOrmConfig {
    static getOrmConfig(configService) {
        return {
            type: 'postgres',
            host: configService.get('DB_HOST'),
            port: configService.get('DB_PORT'),
            username: configService.get('DB_USERNAME'),
            password: configService.get('DB_PASSWORD'),
            keepConnectionAlive: true,
            database: configService.get('DB_DATABASE_NAME'),
            entities: [path.resolve(__dirname + '/../**/*.entity{.ts,.js}')],
            autoLoadEntities: true,
            synchronize: true,
        };
    }
}
exports.default = typeOrmConfig;
exports.typeOrmConfigAsync = {
    imports: [config_1.ConfigModule],
    useFactory: async (configService) => typeOrmConfig.getOrmConfig(configService),
    inject: [config_1.ConfigService],
};
//# sourceMappingURL=typeorm.config.js.map