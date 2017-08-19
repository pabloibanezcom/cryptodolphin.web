import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { CryptocompareService } from '../../../../shared/services/cryptocompare.service';
import { ChartsService } from '../../../../shared/services/charts.service';
import { PortfolioService } from '../../portfolio.service';

import { Portfolio } from '../../portfolio';
import { Currency } from '../../../../shared/currency-selector/currency';
import { Period } from '../../../../shared/period-selector/period';

@Component({
  selector: 'cd-portfolio-overview',
  templateUrl: './portfolio-overview.component.html',
  styleUrls: ['./portfolio-overview.component.scss']
})
export class PortfolioOverviewComponent implements OnInit, OnChanges {

  public options: any;
  public historyData: any;
  public colors: any[];
  public overview: any;

  @Input() portfolio: Portfolio;
  @Input() currency: Currency;
  @Input() period: Period;
  @Input() prices: any;

  constructor(
    private portfolioService: PortfolioService,
    private cryptocompareService: CryptocompareService,
    private chartsService: ChartsService
  ) { }

  ngOnInit() {
    this.chartsService.getChartOptions('bar').subscribe(options => {
      this.options = options;
    });
    this.colors = this.chartsService.getColors(this.portfolio.coins);
  }

  ngOnChanges() {
    this.cryptocompareService.coinHistory(this.portfolio.coins, this.currency.code, this.period).subscribe(history => {
      this.historyData =
      this.chartsService.transformHistory(this.portfolioService.mergeHistoryPricesWithPortfolio(this.portfolio, history));
    });
    console.log(this.portfolioService.getTotals(this.portfolio, this.prices));
  }
}
