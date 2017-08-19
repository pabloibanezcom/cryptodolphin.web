import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

import { environment } from '../../../environments/environment';

import { CryptocompareHistoryService } from './cryptocompare.history.service';
import { CoinsService } from './coins.service';
import { Coin } from '../models/coin';

import { Period } from '../period-selector/period';

@Injectable()
export class CryptocompareService {

  private prices$: BehaviorSubject<any>;
  private pricesObservable$: Observable<any>;

  private coinsString: string;
  private coins: Coin[];
  private currenciesString: string;

  baseUrl = 'https://min-api.cryptocompare.com/data';

  constructor(
    private http: Http,
    private cryptocompareHistoryService: CryptocompareHistoryService,
    private coinsService: CoinsService
  ) {
    this.prices$ = new BehaviorSubject([]);
    this.currenciesString = 'USD,EUR,GBP';

    // we get the coins from coinsService
    this.coinsService.getCoins().subscribe(coins => {
      this.coins = coins;
      this.coinsString = this.coinsService.getCoinsString(this.coins);
      this.autoWatchCoinPrices();
    });
  }

  coinPrices(): Observable<any> {
    if (!this.pricesObservable$) {
      this.pricesObservable$ = this.prices$.asObservable();
    }
    return this.pricesObservable$.share();
  }

  coinHistory(coins: Coin[], currency: string, period: Period): Observable<any> {
    return this.cryptocompareHistoryService.getHistory(coins, currency, period);
  }

  getCoinPricesForPeriod(coins: Coin[], period: Period): Observable<any> {
    const updatedPeriod = this.getPeriodTimeStamp(period);
    const requests = this.generateCoinPricesRequests(this.coins, updatedPeriod.timeStamp);
    const result = {};
    return Observable.create(observer => {
      Observable.forkJoin(requests).subscribe(responses => {
        responses.forEach(res => {
          this.updatePreviousPrice(result, JSON.parse(res['_body']), updatedPeriod);
        });
        observer.next(result);
      });
    });
  }

  updatePrices(prices: any, currentPrices: any, previousPrices: any) {
    if (currentPrices) {
      this.updatePricesFromObject(prices, currentPrices, 'current');
    }
    if (previousPrices) {
      this.updatePricesFromObject(prices, previousPrices, 'previous');
    }
    return prices;
  }

  getCoinPrices(coinString: string): Observable<Response> {
    const coinStr = coinString ? coinString : this.coinsString;
    return this.http.get(this.baseUrl + '/pricemulti?fsyms=' + coinStr + '&tsyms=' + this.currenciesString);
  }

  private updatePricesFromObject(prices: any, pricesSet: any, timeLabel: string) {
    for (const property in pricesSet) {
        if (pricesSet.hasOwnProperty(property)) {
          if (!prices[property]) {
            prices[property] = {};
          }
          prices[property][timeLabel] = pricesSet[property];
        }
      }
  }

  private getCoinPricesHistorical(coinCode: string, timeStamp: string): Observable<Response> {
    return this.http.get(this.baseUrl + '/pricehistorical?fsym=' + coinCode + '&tsyms=' + this.currenciesString + '&ts=' + timeStamp);
  }

  private generateCoinPricesRequests(coins: Coin[], timeStamp: string): Observable<Response>[] {
    const result = [];
    this.coins.forEach(coin => {
      result.push(this.getCoinPricesHistorical(coin.name, timeStamp));
    });
    return result;
  }

  private updatePreviousPrice(prices: any, previousPrice: any, period: Period) {
    const coinPropertyName = Object.keys(previousPrice)[0];
    prices[coinPropertyName] = {};
    prices[coinPropertyName] = previousPrice[coinPropertyName];
    prices[coinPropertyName].period = period;
    return prices;
  }

  private autoWatchCoinPrices(): void {
    this.watchCoinPrices();
    Observable.interval(environment.refreshInterval).subscribe(x => {
      this.watchCoinPrices();
    });
  }

  private watchCoinPrices(): void {
    this.getCoinPrices(null).subscribe(res => {
      this.prices$.next(JSON.parse(res['_body']));
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
