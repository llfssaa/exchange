export interface Currencies {
  base: string,
  last_updated: string,
  exchange_rates: {
    EUR: string,
    GBP: string,
    JPY: string,
    CNY: string
  }
}
export interface ExchangeRates {
  flag: string,
  currency: string
  value: number
  change: number
}
export interface Flags {
  [key: string]: string;
}
export interface Changes {
  [key: string]: number;
}
export interface Rates {
  [key: string]: string;
}
