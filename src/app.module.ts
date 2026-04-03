import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TweetModule } from './tweet/tweet.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { DestinationsModule } from './destinations/destinations.module';
import envValidation from './config/env.validation';
import appConfig from './config/app.config';
import databaseConfig from './config/database.config';

// const enviroment = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
      // envFilePath: !enviroment ? '.env' : `.env.${process.env.NODE_ENV}`,
      validationSchema: envValidation,
      load: [appConfig, databaseConfig],
    }),
    PrismaModule,
    UsersModule,
    TweetModule,
    DestinationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
