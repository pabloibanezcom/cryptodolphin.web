import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRouting } from './authentication.routing';
import { LoginComponent } from './login/login.component';


@NgModule({
  imports: [
    CommonModule,
    AuthenticationRouting
  ],
  declarations: [LoginComponent]
})
export class AuthenticationModule { }
