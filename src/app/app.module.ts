import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ClickOutsideModule } from 'ng-click-outside';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { HttpService } from './shared/services/http.service';

import { DataService } from './shared/services/data.service';
import { CoinsService } from './shared/services/coins.service';
import { CryptocompareService } from './shared/services/cryptocompare.service';
import { CryptocompareHistoryService } from './shared/services/cryptocompare.history.service';
import { ChartsService } from './shared/services/charts.service';
import { CurrencySelectorService } from './shared/currency-selector/currency-selector.service';
import { PeriodSelectorService } from './shared/period-selector/period-selector.service';

import { SharedModule } from './shared/shared.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { LayoutModule } from './layout/layout.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  providers: [
    AuthenticationGuard,
    HttpService,
    DataService,
    CoinsService,
    CryptocompareService,
    CryptocompareHistoryService,
    ChartsService,
    CurrencySelectorService,
    PeriodSelectorService
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    SharedModule,
    AuthenticationModule,
    LayoutModule,
    ClickOutsideModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
