import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';

import { LiveRouting } from './live.routing';
import { LiveBaseComponent } from './live-base/live-base.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LiveRouting
  ],
  declarations: [
    LiveBaseComponent,
  ]
})
export class LiveModule { }
