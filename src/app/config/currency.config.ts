export type Currency = 'EUR' | 'USD' | 'GBP' | 'JPY' | 'CNY';

export const currencies: Currency[] = ["EUR", "USD", "GBP", "JPY", "CNY"]

type CurrencyLiteralsType = {
  [key in Currency]: string;
};


export const currencyLabel: CurrencyLiteralsType = {
  EUR: 'Euro',
  USD: 'Dollar',
  GBP: 'Pound sterling',
  JPY: 'Japanese Yen',
  CNY: 'Chinese Yuan'
}

export const currencySymbol: CurrencyLiteralsType = {
  EUR: '€',
  USD: '$',
  GBP: '£',
  JPY: '¥',
  CNY: '¥'
}

