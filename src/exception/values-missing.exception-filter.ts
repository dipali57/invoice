import { ArgumentsHost, Catch, ExceptionFilter, Logger } from '@nestjs/common';
import { Response } from 'express';
import { UpdateValuesMissingError } from 'typeorm';

@Catch(UpdateValuesMissingError)
export class UpdateValuesMissingErrorFilter implements ExceptionFilter {
  catch(exception: UpdateValuesMissingError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    response.status(400).json({
      statusCode: 400,
      message: 'Values are missing',
    });
    Logger.error('Values are missing');
  }
}
