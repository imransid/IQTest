import { NestFactory } from '@nestjs/core';
import { TelegramModule } from './telegram.module';

async function bootstrap() {
  const app = await NestFactory.create(TelegramModule);
  await app.listen(4077);

  app.enableCors();

  // Enable CORS
  // app.enableCors({
  //   origin: '*', // Allow all origins (change to specific origin for security)
  //   methods: 'GET,POST,PUT,DELETE',
  //   allowedHeaders: 'Content-Type,Authorization',
  // });
}
bootstrap();
