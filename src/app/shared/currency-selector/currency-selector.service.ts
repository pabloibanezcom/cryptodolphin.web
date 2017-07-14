import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

import { DataService } from '../services/data.service';
import { ICurrency } from './ICurrency';

@Injectable()
export class CurrencySelectorService {

    private currency: BehaviorSubject<any>;
    private currencyObservable: Observable<{}>;

    constructor(private dataService: DataService) {
        this.currency = new BehaviorSubject({});
    }

    getCurrencies(): Observable<ICurrency[]> {
        return this.dataService.get('currencies');
    }

    getCurrency(): Observable<ICurrency> {
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

    observeCurrency(): Observable<ICurrency> {
        if (!this.currencyObservable) {
            this.currencyObservable = this.currency.asObservable();
        }
        return this.currencyObservable.share();
    }

    setCurrency(currency: ICurrency): void {
        localStorage.setItem('currency', JSON.stringify(currency));
        this.currency.next(currency);
    }
}
