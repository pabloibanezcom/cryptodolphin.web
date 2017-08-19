import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

import { LayoutService } from '../../../layout.service';
import { DataService } from '../../../../shared/services/data.service';
import { CryptocompareService } from '../../../../shared/services/cryptocompare.service';
import { CurrencySelectorService } from '../../../../shared/currency-selector/currency-selector.service';
import { Currency } from '../../../../shared/currency-selector/currency';

@Component({
  selector: 'cd-live-base',
  templateUrl: './live-base.component.html',
  styleUrls: ['./live-base.component.scss']
})
export class LiveBaseComponent implements OnInit {

  public value: any;

  constructor(
    private layoutService: LayoutService,
    private dataService: DataService,
    private cryptocompareService: CryptocompareService,
    private currencySelectorService: CurrencySelectorService
  ) {
    this.clearValue();
  }

  ngOnInit() {
    this.dataService.get('live').subscribe(balance => {
      // Currency changes
      this.currencySelectorService.observeCurrency().subscribe(currency => {
        if (currency.code) {
          this.generateValue(balance, currency);
        }
      });
    });
  }

  generateValue(balance: any, currency: Currency) {
    this.clearValue();
    this.value.currency = currency;
    const requests = this.generateRequests(balance);
    Observable.forkJoin(requests).subscribe(responses => {
      responses.forEach((res, i) => {
        const body = JSON.parse(res['_body']);
        const coinCode = Object.keys(body)[0];
        this.value[coinCode] = balance[coinCode] * body[coinCode][currency.code];
        this.value['total'] += this.value[coinCode];
      });
      this.layoutService.setLoaded();
    });
  };

  generateRequests(balance: any) {
    const result = [];
    Object.keys(balance).forEach(coin => {
      result.push(this.cryptocompareService.getCoinPrices(coin));
    });
    return result;
  }

  clearValue() {
    this.value = { total: 0 };
  }

}
