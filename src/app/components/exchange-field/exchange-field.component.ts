import {Component, OnInit} from '@angular/core';
import {CurrencyService} from "../../services/currency.service";
import {map, Observable, tap} from "rxjs";
import {Changes, Currencies, ExchangeRates, Flags, Rates} from "../../models/currencies";

@Component({
  selector: 'app-exchange-field',
  templateUrl: './exchange-field.component.html',
  styleUrls: ['./exchange-field.component.scss']
})

export class ExchangeFieldComponent {

  constructor(private currencyService: CurrencyService) {
  }

  currencies$: Observable<ExchangeRates[]> = this.currencyService.getCurrencies().pipe(
    map(data => {
      const rates: Rates = data.exchange_rates;
      const result: ExchangeRates[] = [];
      for (let key in rates) {
        const currency = key;
        const value = Number(rates[key]);
        const flag = this.getFlag(currency)
        const change = this.getChange(currency, value)
        const rate = {flag, currency, value, change}

        result.push(rate)
      }
      return result
    }),
    tap(data => console.log(data))
  )


  getFlag(currency: string): string {
    const flags: Flags = {
      USD: '🇺🇸',
      EUR: '🇪🇺',
      GBP: '🇬🇧',
      JPY: '🇯🇵',
      CNY: '🇨🇳'
    };
    return flags[currency] || ''
  }
  getChange(currency: string, value: number): number {
    const baseValues:Changes = {
      USD: 1.00,
      EUR: 0.86,
      GBP: 0.73,
      JPY: 111.58,
      CNY: 6.46
    };
    const change = value - baseValues[currency];
    return Math.round(change * 100) / 100;
  }

  exchangeRates = [
    {flag: '🇺🇸', currency: 'USD', value: 1.00, change: 0.00},
    {flag: '🇲🇩', currency: 'MDL', value: 17.74, change: -0.04},
    {flag: '🇪🇺', currency: 'EUR', value: 0.86, change: -0.01},
    {flag: '🇬🇧', currency: 'GBP', value: 0.73, change: -0.02},
    {flag: '🇯🇵', currency: 'JPY', value: 111.58, change: +0.12},
    {flag: '🇨🇳', currency: 'CNY', value: 6.46, change: +0.03},
  ];
  columnsToDisplay: string[] = ['flag', 'currency', 'value', 'change'];
}
