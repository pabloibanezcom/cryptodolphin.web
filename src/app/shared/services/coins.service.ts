import { Injectable } from '@angular/core';
import { Coin } from '../models/coin';

import { DataService } from './data.service'

@Injectable()
export class CoinsService {

  constructor(private dataService: DataService) { }

  getCoins() {
    return this.dataService.get('/coins');
  }

}
