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

  getPortfolios(): Observable<any> {
    return this.http.get('portfolios');
  }

  getPortfolio(): Observable<any> {
    return this.http.get('portfolios/' + this.portfolio.id);
  }

}
