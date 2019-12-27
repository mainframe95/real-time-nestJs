import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [

    TypeOrmModule.forRoot({
      type: 'mongodb',
      // authSource: 'admin',
      host: 'localhost',
      port: 27017,
      username: '',
      password: '',
      database: 'essai',
      // logger: 'advanced-console',
      // logging: 'all',
      entities: [
      ],
      // useUnifiedTopology: true,
      // ssl: true,
      // loggerLevel: 'info',
      // sslValidate: false,
      synchronize: true,
      // authMechanism: 'SCRAM-SHA-256',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
