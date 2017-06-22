import { Component, OnInit, Input } from '@angular/core';
import { Coin } from '../../models/coin';

@Component({
  selector: 'cd-coin-widget',
  templateUrl: './coin-widget.component.html',
  styleUrls: ['./coin-widget.component.scss']
})
export class CoinWidgetComponent implements OnInit {

  @Input() coin: Coin;

  constructor() { }

  ngOnInit() {
    console.log(this.coin);
  }

}
