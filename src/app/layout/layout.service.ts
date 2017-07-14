import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class LayoutService {

  private isLoaded$: BehaviorSubject<boolean>;
  private isLoadedObservable$: Observable<boolean>;

  constructor() {
    this.isLoaded$ = new BehaviorSubject(false);
  }

  observeLoaded(): Observable<boolean> {
    if (!this.isLoadedObservable$) {
      this.isLoadedObservable$ = this.isLoaded$.asObservable();
    }
    return this.isLoadedObservable$.share();
  }

  setLoaded(): void {
    this.isLoaded$.next(true);
  }

}
