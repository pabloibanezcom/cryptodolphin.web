import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { HttpService } from './shared/services/http.service';

import { SharedModule } from './shared/shared.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { LayoutModule } from './layout/layout.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  providers: [
    AuthenticationGuard,
    HttpService
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    SharedModule,
    AuthenticationModule,
    LayoutModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
