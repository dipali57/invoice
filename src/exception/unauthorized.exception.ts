import { HttpException, HttpStatus, Logger } from '@nestjs/common';

export class UnauthorizedException extends HttpException {
  constructor() {
    super('Unauthorized', HttpStatus.UNAUTHORIZED);
    Logger.error('Unauthorized');
  }
}
