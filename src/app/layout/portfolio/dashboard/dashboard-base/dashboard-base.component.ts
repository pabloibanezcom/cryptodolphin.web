import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

import { CryptocompareService } from '../../../../shared/services/cryptocompare.service';
import { CurrencySelectorService } from '../../../../shared/currency-selector/currency-selector.service';
import { PeriodSelectorService } from '../../../../shared/period-selector/period-selector.service';
import { LayoutService } from '../../../layout.service';
import { PortfolioService } from '../../portfolio.service';
import { Portfolio } from '../../portfolio';

import { Currency } from '../../../../shared/currency-selector/currency';
import { Period } from '../../../../shared/period-selector/period';

@Component({
  selector: 'cd-dashboard-base',
  templateUrl: './dashboard-base.component.html',
  styleUrls: ['./dashboard-base.component.scss']
})
export class DashboardBaseComponent implements OnInit, OnDestroy {

  public portfolio: Portfolio;
  public prices: any;
  public currency: Currency;
  public period: Period;

  private subscriptions: Subscription[];

  constructor(
    private cryptocompareService: CryptocompareService,
    private currencySelectorService: CurrencySelectorService,
    private periodSelectorService: PeriodSelectorService,
    private layoutService: LayoutService,
    private portfolioService: PortfolioService
  ) {
    this.prices = {};
    this.portfolio = null;
    this.subscriptions = [];
  }

  ngOnInit() {
    this.portfolioService.getPortfolio().subscribe(portfolio => {
      this.portfolio = portfolio;
      this.updateCoinPricesPeriod();
      this.layoutService.setLoaded();
    });
    this.cryptocompareService.coinPrices().subscribe(currentPrices => {
      this.prices = this.cryptocompareService.updatePrices(this.prices, currentPrices, null);
    });
    // Currency changes
    this.subscriptions.push(this.currencySelectorService.observeCurrency().subscribe(currency => {
      this.currency = currency;
    }));

    // Period changes
    this.subscriptions.push(this.periodSelectorService.observePeriod().subscribe(period => {
      this.period = period;
      this.updateCoinPricesPeriod();
    }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  private updateCoinPricesPeriod(): void {
    if (this.period && this.period.name && this.portfolio) {
        this.cryptocompareService.getCoinPricesForPeriod(this.portfolio.coins, this.period).subscribe(previousPrices => {
          this.prices = this.cryptocompareService.updatePrices(this.prices, null, previousPrices);
        });
      }
  }
}
