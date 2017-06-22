import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../dashboard.service';

import { Coin } from '../../../shared/models/coin';

@Component({
  selector: 'cd-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public coins: Coin[];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getCoins();
  }

}
