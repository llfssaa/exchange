import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ConvertAmount} from "../models/currencies";


@Injectable({
  providedIn: 'root'
})
export class ConvertService {


  constructor(private http: HttpClient) {
  }

  getConvert(base: string, target: string, baseAmount: number): Observable<ConvertAmount> {
    return this.http.get<ConvertAmount>(`https://exchange-rates.abstractapi.com/v1/convert?api_key=0f923212ac5944cc8c05b57fc6d9ef24&base=${base}&target=${target}&base_amount=${baseAmount}`
    )
  }

}
