import {Component, OnInit} from '@angular/core';
import {CurrencyService} from "../../services/currency.service";
import {defaultIfEmpty, filter, map, Observable, tap} from "rxjs";
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
    filter(data => data != null),
    map(data => {
      const rates: Rates = data.exchange_rates;
      const result: ExchangeRates[] = [];
      for (let key in rates) {
        const currency = key;
        const value = Number(rates[key]);
        const flag = this.getFlag(currency)
        const rate = {flag, currency, value}

        result.push(rate)
      }
      return result
    }),
    defaultIfEmpty([]),
    tap(data => console.log(data))
  )


  getFlag(currency: string): string {
    const flags: Flags = {
      EUR: '🇪🇺',
      GBP: '🇬🇧',
      JPY: '🇯🇵',
      CNY: '🇨🇳'
    };
    return flags[currency] || ''
  }

  columnsToDisplay: string[] = ['flag', 'currency', 'value'];
}
