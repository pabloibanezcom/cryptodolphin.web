import { Component, OnInit } from '@angular/core';

import { CurrencySelectorService } from './currency-selector.service';
import { Currency } from './currency';

@Component({
  selector: 'cd-currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.scss']
})
export class CurrencySelectorComponent implements OnInit {

  currencies: Currency[];
  selectedCurrency: Currency;
  showMenu: boolean;

  constructor(private currencySelectorService: CurrencySelectorService) {
    this.currencySelectorService.getCurrencies().subscribe(currencies => {
      this.currencies = currencies;
    });
  }

  ngOnInit() {
    this.currencySelectorService.getCurrency().subscribe(currency => this.selectedCurrency = currency);
  }

  selectCurrency(currency: Currency): void {
    this.selectedCurrency = currency;
    this.currencySelectorService.setCurrency(currency);
    this.showMenu = false;
  }

}
