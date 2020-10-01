import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from "@nestjs/config";
import { CurrencyModule } from './modules/currency/currency.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }), CurrencyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
