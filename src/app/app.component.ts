import {Component, OnInit} from '@angular/core';
import {CurrencyService} from "./services/currency.service";
import {Observable, tap} from "rxjs";
import {Currencies} from "./models/currencies";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

}
