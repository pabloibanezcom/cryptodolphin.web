import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '../../../shared/shared.module';

import { DashboardRouting } from './dashboard.routing';
import { DashboardBaseComponent } from './dashboard-base/dashboard-base.component';
import { PortfolioOverviewComponent } from './portfolio-overview/portfolio-overview.component';


@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    SharedModule,
    DashboardRouting
  ],
  declarations: [
    DashboardBaseComponent,
    PortfolioOverviewComponent
  ]
})
export class DashboardModule { }
