import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { UpdateValuesMissingErrorFilter } from 'exception/values-missing.exception-filter';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  app.useGlobalFilters(new UpdateValuesMissingErrorFilter());
  await app.listen(3000);
}
bootstrap();
