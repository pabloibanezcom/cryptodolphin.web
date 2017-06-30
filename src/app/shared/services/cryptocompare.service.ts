import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

import { environment } from '../../../environments/environment';

@Injectable()
export class CryptocompareService {

  private prices: any;
  private prices$: BehaviorSubject<any>;
  private pricesObservable$: Observable<any>;

  baseUrl = 'https://min-api.cryptocompare.com/data';

  constructor(private http: Http) {
    this.prices = [];
    this.prices$ = new BehaviorSubject([]);
    this.watchCoinPrices();
  }

  coinPrices(): Observable<any> {
    if (!this.pricesObservable$) {
      this.pricesObservable$ = this.prices$.asObservable();
    }
    return this.pricesObservable$.share();
  }

  private getCoinPrices() {
    return this.http.get(this.baseUrl + '/pricemulti?fsyms=BTC,ETH,LTC,XRP&tsyms=USD,EUR,GBP');
  }

  private watchCoinPrices() {
    Observable.interval(environment.refreshInterval).subscribe(x => {
      this.getCoinPrices().subscribe(res => {
        this.prices = JSON.parse(res['_body']);
        this.prices$.next(this.prices);
      });
    });
  }

}
