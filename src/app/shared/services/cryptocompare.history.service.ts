import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

import { Coin } from '../models/coin';
import { Period } from '../period-selector/period';

@Injectable()
export class CryptocompareHistoryService {

  baseUrl = 'https://min-api.cryptocompare.com/data';

  constructor(
    private http: Http
  ) { }

  getHistory(coins: Coin[], currency: string, period: Period): Observable<any> {
    const requests = this.generateCoinHistoryRequests(coins, currency, period);
    return Observable.forkJoin(requests);
  }

  private getHistoryCoin(coin: Coin, currency: string, period: Period): Observable<Response> {
    return this.http.get(this.baseUrl + '/' +
      period.historyUrl + '?aggregate=' +
      period.aggregate + '&fsym=' +
      coin.name + '&limit=' +
      period.limit + '&tryConversion=false&tsym=' +
      currency);
  }

  private generateCoinHistoryRequests(coins: Coin[], currency: string, period: Period): Observable<Response>[] {
    const result = [];
    if (!coins) {
      return result;
    }
    coins.forEach(coin => {
      result.push(this.getHistoryCoin(coin, currency, period));
    });
    return result;
  }

}
