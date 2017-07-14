import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

import { DataService } from '../services/data.service';
import { Period } from './period';

@Injectable()
export class PeriodSelectorService {

  private period: BehaviorSubject<any>;
  private periodObservable: Observable<{}>;

  constructor(private dataService: DataService) {
    this.period = new BehaviorSubject({});
  }

  getPeriods(): Observable<Period[]> {
    return this.dataService.get('periods');
  }

  getPeriod(): Observable<Period> {
    const period = JSON.parse(localStorage.getItem('period'));
    if (!period) {
      this.getPeriods().subscribe(periods => {
        this.setPeriod(periods[0]);
        this.period.next(periods[0]);
      });
    } else {
      this.period.next(period);
    }
    return this.period;
  }

  observePeriod(): Observable<Period> {
    if (!this.periodObservable) {
      this.periodObservable = this.period.asObservable();
    }
    return this.periodObservable.share();
  }

  setPeriod(period: Period): void {
    localStorage.setItem('period', JSON.stringify(period));
    this.period.next(period);
  }

}
