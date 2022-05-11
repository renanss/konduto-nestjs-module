import { NestFactory } from '@nestjs/core';
import { KondutoModule } from './konduto/konduto.module';
import 'reflect-metadata';
import { ValidationPipe } from '@nestjs/common';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(KondutoModule);
  await app.listen(3000);
  app.useGlobalPipes(new ValidationPipe({
    skipUndefinedProperties: true,

  }));

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
