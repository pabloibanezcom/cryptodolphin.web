import { Pipe, PipeTransform } from '@angular/core';

import { CoinsService } from '../services/coins.service';

@Pipe({
  name: 'coin'
})
export class CoinPipe implements PipeTransform {

  constructor(private coinsService: CoinsService) {
  }

  transform(value: any, args?: any): any {
    let result
    this.coinsService.getCoin(value).subscribe(res => {
      result = res;
      console.log(result);
      return value;
    });
  }

}
