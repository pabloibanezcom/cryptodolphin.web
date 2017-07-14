import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

import { environment } from '../../../environments/environment';

import { CoinsService } from './coins.service';
import { Coin } from '../models/coin';

import { PeriodSelectorService } from '../period-selector/period-selector.service';
import { Period } from '../period-selector/period';

@Injectable()
export class CryptocompareService {

  private prices: any;
  private prices$: BehaviorSubject<any>;
  private pricesObservable$: Observable<any>;

  private coinsString: string;
  private coins: Coin[];
  private currenciesString: string;

  baseUrl = 'https://min-api.cryptocompare.com/data';

  constructor(
    private http: Http,
    private coinsService: CoinsService,
    private periodSelectorService: PeriodSelectorService
  ) {
    this.prices = [];
    this.prices$ = new BehaviorSubject([]);
    this.currenciesString = 'USD,EUR,GBP';

    // we get the coins from coinsService
    this.coinsService.getCoins().subscribe(coins => {
      this.coins = coins;
      this.coinsString = this.coinsService.getCoinsString(this.coins);
      this.createPricesObject();
      this.autoWatchPeriod();
      this.autoWatchCoinPrices();
    });
  }

  coinPrices(): Observable<any> {
    if (!this.pricesObservable$) {
      this.pricesObservable$ = this.prices$.asObservable();
    }
    return this.pricesObservable$.share();
  }

  private getCoinPrices(): Observable<Response> {
    return this.http.get(this.baseUrl + '/pricemulti?fsyms=' + this.coinsString + '&tsyms=' + this.currenciesString);
  }

  private getCoinPricesHistorical(coinCode: string, timeStamp: string): Observable<Response> {
    return this.http.get(this.baseUrl + '/pricehistorical?fsym=' + coinCode + '&tsyms=' + this.currenciesString + '&ts=' + timeStamp);
  }

  private getCoinPricesForPeriod(period: Period): Observable<any> {
    const updatedPeriod = this.getPeriodTimeStamp(period);
    const requests = this.generateCoinPricesRequests(this.coins, updatedPeriod.timeStamp);
    return Observable.create(observer => {
      Observable.forkJoin(requests).subscribe(responses => {
        responses.forEach(res => {
          this.setPreviousPrice(JSON.parse(res['_body']), updatedPeriod);
        });
        observer.next();
      });
    });
  }

  private generateCoinPricesRequests(coins: Coin[], timeStamp: string): Observable<Response>[] {
    const result = [];
    this.coins.forEach(coin => {
      result.push(this.getCoinPricesHistorical(coin.name, timeStamp));
    });
    return result;
  }

  private createPricesObject(): void {
    this.coins.forEach(coin => {
      this.prices[coin.name] = {};
    });
  }

  private setPreviousPrice(previousPrice: any, period: Period) {
    const coinPropertyName = Object.keys(previousPrice)[0];
    this.prices[coinPropertyName].previous = previousPrice[coinPropertyName];
    this.prices[coinPropertyName].previous.period = period;
  }

  private setCurrentPrice(currentPrices: any) {
    Object.keys(currentPrices).forEach(coinName => {
      this.prices[coinName].current = currentPrices[coinName];
    });
  }

  private autoWatchCoinPrices(): void {
    this.watchCoinPrices();
    Observable.interval(environment.refreshInterval).subscribe(x => {
      this.watchCoinPrices();
    });
  }

  private watchCoinPrices(): void {
    this.getCoinPrices().subscribe(res => {
      this.setCurrentPrice(JSON.parse(res['_body']));
      this.prices$.next(this.prices);
    });
  }

  private autoWatchPeriod(): void {
    this.periodSelectorService.observePeriod().subscribe(period => {
      this.getCoinPricesForPeriod(period).subscribe(res => { });
    });
  }

  private createObservable(data: any): Observable<any> {
    return Observable.create(observer => {
      observer.next(data);
      observer.complete();
    });
  }

  private getPeriodTimeStamp(period: Period): Period {
    return Object.assign(period, { timeStamp: (Math.round(new Date().getTime() / 1000) - period.timeStampDiff).toString() });
  }

}
