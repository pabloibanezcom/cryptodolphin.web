import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { Currency } from './currency';

@Pipe({
  name: 'currencySelector'
})
export class CurrencySelectorPipe implements PipeTransform {

  private currencyCode: string;

  constructor(
    private decimalPipe: DecimalPipe
  ) {
  }

  transform(value: any, currency: Currency): any {

    if (!value) {
      return null;
    }

    return currency.symbol + ' ' + this.decimalPipe.transform(value[currency.code], '.2-2');
  }

}
