import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../dashboard.service';

import { Portfolio } from '../../../shared/models/portfolio';

@Component({
  selector: 'cd-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public portfolio: Portfolio;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getPortfolios().subscribe(portfolios => {
      this.portfolio = portfolios[0];
      this.dashboardService.getBalances(this.portfolio._id).subscribe(balances => {
        this.portfolio.balances = balances;
        console.log(this.portfolio);
      });
    });
  }

}
