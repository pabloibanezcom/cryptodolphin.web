import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

import { DataService } from '../services/data.service';
import { Currency } from './currency';

@Injectable()
export class CurrencySelectorService {

    private currency: BehaviorSubject<any>;
    private currencyObservable: Observable<Currency>;

    constructor(private dataService: DataService) {
        this.currency = new BehaviorSubject({});
    }

    getCurrencies(): Observable<Currency[]> {
        return this.dataService.get('currencies');
    }

    getCurrency(): Observable<Currency> {
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

    observeCurrency(): Observable<Currency> {
        if (!this.currencyObservable) {
            this.currencyObservable = this.currency.asObservable();
        }
        return this.currencyObservable.share();
    }

    setCurrency(currency: Currency): void {
        localStorage.setItem('currency', JSON.stringify(currency));
        this.currency.next(currency);
    }
}
