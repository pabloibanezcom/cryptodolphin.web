import { Injectable } from '@angular/core';

import { DataService } from './data.service';

import { Coin } from '../models/coin';

@Injectable()
export class ChartsService {

  constructor(private dataService: DataService) { }

  getChartOptions(type: string): any {
    return this.dataService.get('chart-' + type);
  }

  getColors(coins: Coin[]): any[] {
    return coins.map(coin => {
      return { backgroundColor: coin.color };
    });
  }

  transformHistory(history: any[][]) {
    const result = {};
    // Generate labels
    result['labels'] = history[0]['data'].map(item => {
      return item['date'];
    });
    // Generate data
    result['data'] = history.map(itemsCollection => {
      return {
        data: itemsCollection['data'].map(item => {
          return item.portfolio.value;
        }),
        label: itemsCollection['coinName']
      }
    });
    return result;
  }

}
