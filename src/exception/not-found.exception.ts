import { HttpException, HttpStatus, Logger } from '@nestjs/common';

export class IdNotFoundException extends HttpException {
  constructor(private id: number) {
    super(`id number ${id} not found`, HttpStatus.NOT_FOUND);
    Logger.error(`id number ${id} not found`);
  }
}
