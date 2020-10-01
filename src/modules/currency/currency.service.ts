import { HttpService, Injectable } from '@nestjs/common';
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { PrivatApiCurrency } from "./dto/PrivatApiCurrencies.dto";

@Injectable()
export class CurrencyService {
  private readonly endpoints = {
    getTodayCashCurrencies: 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',
    getTodayCashlessCurrencies: 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11'
  };

  constructor(private httpService: HttpService) {}

  getTodayCurrencies(): Promise<Array<Array<PrivatApiCurrency>>> {
    return Promise.all([
      this.getTodayCashCurrencies().toPromise(),
      this.getTodayCashlessCurrencies().toPromise()
    ]);
  }

  private getTodayCashCurrencies(): Observable<Array<PrivatApiCurrency>> {
    return this.httpService
      .get(this.endpoints.getTodayCashCurrencies)
      .pipe(
        map(response => response.data)
      );
  }

  private getTodayCashlessCurrencies(): Observable<Array<PrivatApiCurrency>> {
    return this.httpService
      .get(this.endpoints.getTodayCashlessCurrencies)
      .pipe(
        map(response => response.data)
      );
  }
}
