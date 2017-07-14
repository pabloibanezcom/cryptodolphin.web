import { Component, Input } from '@angular/core';
import { Coin } from '../../models/coin';
import { Currency } from '../../currency-selector/currency';

@Component({
  selector: 'cd-coin-widget',
  templateUrl: './coin-widget.component.html',
  styleUrls: ['./coin-widget.component.scss']
})
export class CoinWidgetComponent {

  @Input() coin: Coin;
  @Input() price: any;
  @Input() currency: Currency;

  constructor() {
  }

}
