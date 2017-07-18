import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe  } from '@angular/common';

import { Currency } from '../currency-selector/currency';

@Pipe({
  name: 'cdCurrency'
})
export class CdCurrencyPipe implements PipeTransform {

  constructor(
    private decimalPipe: DecimalPipe
  ) {
  }

  transform(value: any, currency: Currency): any {
    return currency.symbol + ' ' + this.decimalPipe.transform(value, '.2-2');
  }

}
