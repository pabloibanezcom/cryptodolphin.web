import { Component, OnInit } from '@angular/core';

import { PeriodSelectorService } from './period-selector.service'
import { Period } from './period';

@Component({
  selector: 'cd-period-selector',
  templateUrl: './period-selector.component.html',
  styleUrls: ['./period-selector.component.scss']
})
export class PeriodSelectorComponent implements OnInit {

  periods: Period[];
  selectedPeriod: Period;
  showMenu: boolean;

  constructor(private periodSelectorService: PeriodSelectorService) {
    this.periodSelectorService.getPeriods().subscribe(periods => {
      this.periods = periods;
    });
  }

  ngOnInit() {
    this.periodSelectorService.getPeriod().subscribe(period => this.selectedPeriod = period);
  }

  selectPeriod(period: Period): void {
    this.selectedPeriod = period;
    this.periodSelectorService.setPeriod(period);
    this.showMenu = false;
  }

}
