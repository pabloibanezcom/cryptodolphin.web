import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { Dashboard1Component } from "./dashboard1.component";
import { Dashboard2Component } from "./dashboard2.component";
import { Dashboard5Component } from "./dashboard5.component";

// Chart.js Angular 2 Directive by Valor Software (npm)
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { FlotModule } from '../../components/charts/flotChart';
import { PeityModule } from '../../components/charts/peity';
import { SparklineModule } from '../../components/charts/sparkline';
import { JVectorMapModule } from '../../components/map/jvectorMap';


@NgModule({
  declarations: [Dashboard1Component, Dashboard2Component, Dashboard5Component],
  imports: [BrowserModule, ChartsModule, FlotModule, PeityModule, SparklineModule, JVectorMapModule],
  exports: [Dashboard1Component, Dashboard2Component, Dashboard5Component],
})

export class DashboardsModule { }
