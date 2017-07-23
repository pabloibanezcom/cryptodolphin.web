import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRouting } from './layout.routing'

import { LayoutService } from './layout.service';

import { SharedModule } from '../shared/shared.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { LayoutBaseComponent } from './layout-base/layout-base.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRouting,
    SharedModule,
    PortfolioModule
  ],
  providers: [
    LayoutService
  ],
  declarations: [
    LayoutBaseComponent,
    LoadingScreenComponent
  ]
})
export class LayoutModule { }
