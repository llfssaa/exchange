import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Currencies} from "../models/currencies";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  getCurrencies():Observable<Currencies>{
    return this.http.get<Currencies>('https://exchange-rates.abstractapi.com/v1/live?api_key=0f923212ac5944cc8c05b57fc6d9ef24&base=USD&target=EUR,GBP,JPY,CNY')
  }

}
