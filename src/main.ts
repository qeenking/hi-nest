import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//npm i class-transformer 덕분에 ValidationPipe사용이 가능한 것

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //dto @IsString등의 유효성 검사를 안하는 자료 요청은 유효성 검사 전에 거름
      forbidNonWhitelisted: true, //잘못된 요청 자체를 거부(whitelistr 먼저 설정 필요)
      transform: true, //url은 뭘 적든 string으로 판단되지만, 이 옵션으로 실제 타입으로 자동변형
    }),
  );
  await app.listen(3000);
}
bootstrap();
