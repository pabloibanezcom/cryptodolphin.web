import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'cd-portfolio-base',
  templateUrl: './portfolio-base.component.html',
  styleUrls: ['./portfolio-base.component.scss']
})
export class PortfolioBaseComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private portfolioService: PortfolioService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.portfolioId === 'portfolio') {
        this.portfolioService.getPortfolios().subscribe(portfolios => {
          this.router.navigate(['portfolio/' + portfolios[0].id + '/dashboard']);
        });
      }
      this.portfolioService.setPortfolioId(params.portfolioId);
    });
  }

}
