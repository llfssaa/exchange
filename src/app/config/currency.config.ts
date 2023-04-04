export type Currency = 'EUR' | 'USD' | 'GBP';

export const currencies: Currency[] = ["EUR", "USD", "GBP"]

type CurrencyLiteralsType = {
  [key in Currency]: string;
};


export const currencyLabel: CurrencyLiteralsType = {
  EUR: 'Euro',
  USD: 'Dollar',
  GBP: 'Pound sterling'
}

export const currencySymbol: CurrencyLiteralsType = {
  EUR: '€',
  USD: '$',
  GBP: '£'
}

