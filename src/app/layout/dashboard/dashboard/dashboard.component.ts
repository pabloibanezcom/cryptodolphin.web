import { Component, OnInit } from '@angular/core';

import { LayoutService } from '../../layout.service';
import { CryptocompareService } from '../../../shared/services/cryptocompare.service';
import { DashboardService } from '../dashboard.service';
import { CurrencySelectorService } from '../../../shared/currency-selector/currency-selector.service';

import { Portfolio } from '../../../shared/models/portfolio';
import { Currency } from '../../../shared/currency-selector/currency';

@Component({
  selector: 'cd-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public portfolio: Portfolio;
  public prices: any;
  public currency: Currency;

  constructor(
    private layoutService: LayoutService,
    private cryptocompareService: CryptocompareService,
    private dashboardService: DashboardService,
    private currencySelectorService: CurrencySelectorService
  ) { }

  ngOnInit() {
    this.dashboardService.getPortfolios().subscribe(portfolios => {
      this.portfolio = portfolios[0];
      this.dashboardService.getBalances(this.portfolio._id).subscribe(balances => {
        this.portfolio.balances = balances;
        this.layoutService.setLoaded();
      });
    });
    this.cryptocompareService.coinPrices().subscribe(prices => {
      this.prices = prices;
    });
    this.currencySelectorService.observeCurrency().subscribe(currency => {
      this.currency = currency;
    });
  }

}
