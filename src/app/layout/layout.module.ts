import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRouting } from './layout.routing'

import { LayoutService } from './layout.service';

import { SharedModule } from '../shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LayoutComponent } from './layout/layout.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRouting,
    SharedModule,
    DashboardModule
  ],
  providers: [
    LayoutService
  ],
  declarations: [
    LayoutComponent,
    LoadingScreenComponent
  ]
})
export class LayoutModule { }
