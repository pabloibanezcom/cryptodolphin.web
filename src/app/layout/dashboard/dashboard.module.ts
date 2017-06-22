import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { DashboardRouting } from './dashboard.routing';
import { DashboardService } from './dashboard.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashboardRouting
  ],
  providers: [
    DashboardService
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
