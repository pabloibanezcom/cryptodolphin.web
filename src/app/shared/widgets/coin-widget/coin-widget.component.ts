import { Component, OnInit, Input } from '@angular/core';
import { Coin } from '../../models/coin';
import { Currency } from '../../currency-selector/currency';

@Component({
  selector: 'cd-coin-widget',
  templateUrl: './coin-widget.component.html',
  styleUrls: ['./coin-widget.component.scss']
})
export class CoinWidgetComponent implements OnInit {

  @Input() coin: Coin;
  @Input() price: any;
  @Input() currency: Currency;

  constructor() {
  }

  ngOnInit() {
    console.log(this.coin);
  }

}
