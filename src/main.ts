import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // it will remove all fields which there aren't in DTOs
      forbidNonWhitelisted: true, // it will throw an error if there is no such field in DTOs
      transform: true, // now data will be instance of DTO class
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Destinations')
    .setDescription('The destinations API description')
    .setVersion('1.0')
    .addTag('destinations')
    .addTag('tweets')
    .addTag('users')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
