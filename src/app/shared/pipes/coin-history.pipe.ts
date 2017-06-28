import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coinHistory'
})
export class CoinHistoryPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
