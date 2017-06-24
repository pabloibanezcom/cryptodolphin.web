import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable, ReplaySubject } from 'rxjs/Rx';

import { HttpService } from '../../shared/services/http.service';
import { CoinsService } from '../../shared/services/coins.service';
import { CryptocompareService } from '../../shared/services/cryptocompare.service';

import { Coin } from '../../shared/models/coin';

@Injectable()
export class DashboardService {

  coins: Coin[];
  coinsResult: ReplaySubject<Coin[]>;

  constructor(
    private http: HttpService,
    private coinsService: CoinsService,
    private cryptocompareService: CryptocompareService
  ) {
    this.coinsResult = new ReplaySubject(1);
  }

  getAll() {
    this.getCoins().subscribe(coins => this.refreshPrice(coins));
  }

  getPortfolios() {
    return this.http.get('portfolios');
  }

  getCoins() {
    return this.http.get('assets/data/coins.json');
  }

  refreshPrice(coins: Coin[]) {
    this.cryptocompareService.coinPrices()
      .subscribe(coinPrices => this.setCurrenciesPrice(coins, JSON.parse(coinPrices['_body'])));
  }

  private setCurrenciesPrice(coins: Coin[], coinPrices: any) {
    coins.map((coin) => {
      coin.prices = coinPrices[coin.name];
    });
    this.coinsResult.next(coins);
  }

  private handleError(error: Response) {
    return '500 internal server error';
  }

}
