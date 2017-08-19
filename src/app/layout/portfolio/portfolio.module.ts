import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioBaseComponent } from './portfolio-base/portfolio-base.component';

import { PortfolioRouting } from './portfolio.routing';
import { PortfolioService } from './portfolio.service';

@NgModule({
  imports: [
    CommonModule,
    PortfolioRouting
  ],
  providers: [
    PortfolioService
  ],
  declarations: [PortfolioBaseComponent]
})
export class PortfolioModule { }
