import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';
export default class typeOrmConfig {
    static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions;
}
export declare const typeOrmConfigAsync: TypeOrmModuleAsyncOptions;
