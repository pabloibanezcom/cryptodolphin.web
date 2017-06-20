import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap';

import { StandardLayoutComponent } from './standard-layout/standard-layout.component';
import { BlanklayoutComponent } from './blanklayout/blanklayout.component';

import { NavigationComponent } from './../navigation/navigation.component';
import { FooterComponent } from './../footer/footer.component';
import { TopnavbarComponent } from './../topnavbar/topnavbar.component';
import { TopnavigationnavbarComponent } from './../topnavigationnavbar/topnavigationnavbar.component';

@NgModule({
  declarations: [
    FooterComponent,
    StandardLayoutComponent,
    BlanklayoutComponent,
    NavigationComponent,
    TopnavbarComponent,
    TopnavigationnavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BsDropdownModule.forRoot()
  ],
  exports: [
    FooterComponent,
    StandardLayoutComponent,
    BlanklayoutComponent,
    NavigationComponent,
    TopnavbarComponent,
    TopnavigationnavbarComponent
  ],
})

export class LayoutsModule { }
