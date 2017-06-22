import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class CryptocompareService {

  baseUrl = 'https://min-api.cryptocompare.com/data';

  constructor(private http: Http) { }

  coinPrices() {
    return this.http.get(this.baseUrl + '/pricemulti?fsyms=BTC,ETH,LTC,XRP&tsyms=USD,EUR,GBP');
  }

}
