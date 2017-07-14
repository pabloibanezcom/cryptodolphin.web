import { Component, Input } from '@angular/core';
import { Coin } from '../../models/coin';
import { ICurrency } from '../../currency-selector/ICurrency';

@Component({
  selector: 'cd-coin-widget',
  templateUrl: './coin-widget.component.html',
  styleUrls: ['./coin-widget.component.scss']
})
export class CoinWidgetComponent {

  @Input() coin: Coin;
  @Input() price: any;
  @Input() currency: ICurrency;

  constructor() {
  }

}
