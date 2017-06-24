import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacebookService } from 'ngx-facebook';

import { AuthenticationRouting } from './authentication.routing';
import { AuthenticationService } from './authentication.service';
import { LoginComponent } from './login/login.component';


@NgModule({
  imports: [
    CommonModule,
    AuthenticationRouting
  ],
  providers: [
    FacebookService,
    AuthenticationService
  ],
  declarations: [LoginComponent]
})
export class AuthenticationModule { }
