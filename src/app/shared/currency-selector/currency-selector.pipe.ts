import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { ICurrency } from './ICurrency';

@Pipe({
  name: 'currencySelector'
})
export class CurrencySelectorPipe implements PipeTransform {

  private currencyCode: string;

  constructor(
    private currencyPipe: CurrencyPipe
  ) {
  }

  transform(value: any, currency: ICurrency): any {

    if (!value) {
      return null;
    }

    return this.currencyPipe.transform(value[currency.code], currency.code, true);
  }

}
