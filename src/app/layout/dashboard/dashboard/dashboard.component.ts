import { Component, OnInit } from '@angular/core';

import { CryptocompareService } from '../../../shared/services/cryptocompare.service';
import { DashboardService } from '../dashboard.service';

import { Portfolio } from '../../../shared/models/portfolio';

@Component({
  selector: 'cd-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public portfolio: Portfolio;
  public prices: any;

  constructor(
    private cryptocompareService: CryptocompareService,
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.dashboardService.getPortfolios().subscribe(portfolios => {
      this.portfolio = portfolios[0];
      this.dashboardService.getBalances(this.portfolio._id).subscribe(balances => {
        this.portfolio.balances = balances;
      });
    });
    this.cryptocompareService.coinPrices().subscribe(prices => {
      this.prices = prices;
    });
  }

}
