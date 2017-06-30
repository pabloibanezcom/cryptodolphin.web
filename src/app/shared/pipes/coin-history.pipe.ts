import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coinHistory'
})
export class CoinHistoryPipe implements PipeTransform {

  transform(value: any, balance: any): any {
    value.balances = [];
    balance.forEach(element => {
      value.balances.push({date: element.date, amount: element.coins[value.name]});
    });
    return value;
  }

}
