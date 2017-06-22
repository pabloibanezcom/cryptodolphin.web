import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRouting } from './layout.routing'

import { SharedModule } from '../shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRouting,
    SharedModule,
    DashboardModule
  ],
  declarations: [
    LayoutComponent
  ]
})
export class LayoutModule { }
