import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // 하나의 모듈에서 어플리케이션을 생성
  await app.listen(3000);
}
bootstrap();
