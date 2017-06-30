import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DataService } from './services/data.service';
import { CoinsService } from './services/coins.service';
import { CryptocompareService } from './services/cryptocompare.service';
import { CurrencySelectorService } from './topnavbar/currency-selector/currency-selector.service';

import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { CoinWidgetComponent } from './widgets/coin-widget/coin-widget.component';
import { TransactionsTableComponent } from './widgets/transactions-table/transactions-table.component';
import { EightDigitsPipe } from './pipes/eight-digits.pipe';
import { CoinPipe } from './pipes/coin.pipe';
import { CoinHistoryPipe } from './pipes/coin-history.pipe';
import { CurrencySelectorComponent } from './topnavbar/currency-selector/currency-selector.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    FooterComponent,
    NavigationComponent,
    TopnavbarComponent,
    CoinWidgetComponent,
    TransactionsTableComponent,
    EightDigitsPipe,
    CoinPipe,
    CoinHistoryPipe,
    CurrencySelectorComponent
  ],
  providers: [
    DataService,
    CoinsService,
    CryptocompareService,
    CurrencySelectorService
  ],
  exports: [
    FooterComponent,
    NavigationComponent,
    TopnavbarComponent,
    CoinWidgetComponent,
    TransactionsTableComponent,
    CoinHistoryPipe
  ]
})
export class SharedModule { }
