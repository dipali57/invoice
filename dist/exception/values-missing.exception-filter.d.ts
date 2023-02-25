import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { UpdateValuesMissingError } from 'typeorm';
export declare class UpdateValuesMissingErrorFilter implements ExceptionFilter {
    catch(exception: UpdateValuesMissingError, host: ArgumentsHost): void;
}
