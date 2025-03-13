import { NestFactory } from '@nestjs/core';
import { TelegramModule } from './telegram.module';

async function bootstrap() {
  const app = await NestFactory.create(TelegramModule);

  // Enable CORS with custom options
  app.enableCors({
    origin: '*', // Allows all origins. Change to specific domains if needed.
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept, Authorization',
    credentials: true, // If cookies/auth tokens are needed
  });

  await app.listen(4077);
}
bootstrap();
