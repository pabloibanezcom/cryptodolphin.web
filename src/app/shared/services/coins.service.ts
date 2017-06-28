import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { HttpService } from './http.service';
import { Coin } from '../models/coin';

@Injectable()
export class CoinsService {

  private coins: Coin[];

  constructor(private httpService: HttpService) {}

  getCoins(): Observable<Coin[]> {
    if (this.coins) {
      return this.createObservable(this.coins);
    } else {
      return this.getHttpCoins();
    }
  }

  getCoin(name: string): Observable<Coin> {
    if (!name) {
      return this.createObservable(null);
    }
    this.getCoins().subscribe(result => {
      return this.createObservable(result.find(c => c.name === name));
    });
  }

  private createObservable(data: any): Observable<any> {
    return Observable.create(function (observer) {
      observer.next(data);
      observer.complete();
    });
  }

  private getHttpCoins(): Observable<any> {
    return this.httpService.get('coins')
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || '500 internal server error');
  }

}
