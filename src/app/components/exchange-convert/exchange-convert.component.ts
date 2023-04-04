import { Component } from '@angular/core';
import {currencies as currenciesConfig, Currency} from "../../config/currency.config";
import {currencyLabel, currencySymbol} from "../../config/currency.config";
import {ConvertService} from "../../services/convert.service";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-exchange-convert',
  templateUrl: './exchange-convert.component.html',
  styleUrls: ['./exchange-convert.component.scss']
})
export class ExchangeConvertComponent {

  currencies = currenciesConfig
  currencyLabel = currencyLabel
  currencySymbol = currencySymbol
  currencyControl: Currency = 'EUR'
  amountFirst: number = 0
  currencyControl2: Currency = 'USD'
  amountSecond$: Observable<number> = new Observable<number>()
  constructor(private convertService: ConvertService) {
  }


  getConvert () {
    console.log('click')
    this.amountSecond$ = this.convertService.getConvert(
      this.currencyControl,
      this.currencyControl2,
      this.amountFirst).pipe(
      map(data => {
        return data.converted_amount
      })
    )
  };

}
