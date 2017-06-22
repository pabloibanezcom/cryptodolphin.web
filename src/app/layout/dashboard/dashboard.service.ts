import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { CoinsService } from '../../shared/services/coins.service';
import { CryptocompareService } from '../../shared/services/cryptocompare.service';


@Injectable()
export class DashboardService {

  coins: any[];

  constructor(
    private coinsService: CoinsService,
    private cryptocompareService: CryptocompareService
  ) { }

  getCoins() {
    this.coinsService.getCoins()
    .subscribe(data => this.refreshPrice(data));
      // //.map(res => res.json())
      // .do(data => this.refreshPrice(data))
      // .catch(this.handleError);
  }

  refreshPrice(coins: any) {
    this.cryptocompareService.coinPrices()
      .subscribe(data => { console.log(data); return coins });
  }

  private handleError(error: Response) {
    return '500 internal server error';
  }

}
