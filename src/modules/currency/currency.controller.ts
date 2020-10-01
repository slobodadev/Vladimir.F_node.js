import { Controller, Get, HttpException, Render } from '@nestjs/common';
import {CurrencyService} from "./currency.service";

@Controller()
export class CurrencyController {

  constructor(private readonly currencyService: CurrencyService) {}

  @Get()
  @Render('currency/index.hbs')
  async getTodayCurrencies() {
    let data;
    try {
      data = await this.currencyService.getTodayCurrencies();
    } catch (e) {
      throw new HttpException('Server error, unable to get data from remote server.', 500);
    }

    return { cash: data[0], cashless: data[1] };
  }
}
