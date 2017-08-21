import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

import { HttpService } from '../../shared/services/http.service';

import { Portfolio } from './portfolio';

@Injectable()
export class PortfolioService {

  private portfolio: Portfolio;
  private portfolio$: BehaviorSubject<Portfolio>;
  private portfolioObservable$: Observable<Portfolio>;

  constructor(private http: HttpService) {
    this.portfolio = new Portfolio();
  }

  setPortfolioId(portfolioId: string): void {
    this.portfolio.id = portfolioId;
  }

  getPortfolioId(): string {
    return this.portfolio.id;
  }

  getPortfolios(): Observable<any> {
    return this.http.get('portfolios');
  }

  getPortfolio(): Observable<any> {
    return this.http.get('portfolios/' + this.portfolio.id);
  }

  mergeHistoryPricesWithPortfolio(portfolio: Portfolio, coinsHistory: any[]) {
    coinsHistory.forEach(coin => {
      const amount = portfolio.coins.find(c => c.coinName === coin.coinName)['balances'][0].amount;
      coin.data.forEach(dataElement => {
        dataElement.portfolio = {
          value: (dataElement.close * amount).toFixed(2),
          amount: amount
        };
      });
    });
    return coinsHistory;
  }

  getTotals(portfolio: Portfolio, prices: any) {
    return {
      currentValue: this.getTotalCurrentValue(portfolio, prices)
    };
  }

  private getTotalCurrentValue(portfolio: Portfolio, prices: any) {
    let value = 0;
    for (const property in prices) {
      if (prices.hasOwnProperty(property)) {
        value = value + prices[property]['USD'] * portfolio.balances[0].coins[property];
      }
    }
    return value;
  }

}
