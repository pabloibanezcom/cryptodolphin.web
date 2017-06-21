import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FooterComponent,
    NavigationComponent,
    TopnavbarComponent
  ],
  exports: [
    FooterComponent,
    NavigationComponent,
    TopnavbarComponent
  ]
})
export class SharedModule { }
