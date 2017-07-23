import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';

import { DashboardRouting } from './dashboard.routing';
import { DashboardBaseComponent } from './dashboard-base/dashboard-base.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashboardRouting
  ],
  declarations: [DashboardBaseComponent]
})
export class DashboardModule { }
