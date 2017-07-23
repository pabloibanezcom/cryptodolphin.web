import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DecimalPipe } from '@angular/common';

import { ChartsModule } from 'ng2-charts';

import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { CoinWidgetComponent } from './widgets/coin-widget/coin-widget.component';
import { TransactionsTableComponent } from './widgets/transactions-table/transactions-table.component';
import { EightDigitsPipe } from './pipes/eight-digits.pipe';
import { CoinHistoryPipe } from './pipes/coin-history.pipe';
import { CurrencySelectorComponent } from './currency-selector/currency-selector.component';
import { CurrencySelectorPipe } from './currency-selector/currency-selector.pipe';
import { PeriodSelectorComponent } from './period-selector/period-selector.component';
import { PercentageLabelComponent } from './percentage-label/percentage-label.component';
import { CdCurrencyPipe } from './pipes/cd-currency.pipe';
import { PortfolioOverviewComponent } from './portfolio-overview/portfolio-overview.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ChartsModule
  ],
  declarations: [
    FooterComponent,
    NavigationComponent,
    TopnavbarComponent,
    CoinWidgetComponent,
    TransactionsTableComponent,
    EightDigitsPipe,
    CoinHistoryPipe,
    CurrencySelectorComponent,
    CurrencySelectorPipe,
    PeriodSelectorComponent,
    PercentageLabelComponent,
    CdCurrencyPipe,
    PortfolioOverviewComponent
  ],
  providers: [
    DecimalPipe
  ],
  exports: [
    FooterComponent,
    NavigationComponent,
    TopnavbarComponent,
    CoinWidgetComponent,
    PortfolioOverviewComponent,
    TransactionsTableComponent,
    CoinHistoryPipe,
    CdCurrencyPipe
  ]
})
export class SharedModule { }
