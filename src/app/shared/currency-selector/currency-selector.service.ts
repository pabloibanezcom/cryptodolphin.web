import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs/Rx';

import { DataService } from '../services/data.service';
import { ICurrency } from './ICurrency';

@Injectable()
export class CurrencySelectorService {

  private currency: ReplaySubject<{}>;

  constructor(private dataService: DataService) { }

  getCurrencies(): Observable<ICurrency[]> {
    return this.dataService.get('currencies');
  }

  getCurrency(): Observable<ICurrency> {
    this.currency = new ReplaySubject<ICurrency>();
    const currency = JSON.parse(localStorage.getItem('currency'));
    if (!currency) {
      this.getCurrencies().subscribe(currencies => {
        this.setCurrency(currencies[0]);
        this.currency.next(currencies[0]);
      });
    } else {
      this.currency.next(currency);
    }
    return this.currency;
  }

  setCurrency(currency: ICurrency): void {
    localStorage.setItem('currency', JSON.stringify(currency));
  }


}
