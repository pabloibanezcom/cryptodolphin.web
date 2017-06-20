import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { smoothlyMenu } from '../../../app.helpers';
declare var jQuery: any;

@Component({
  selector: 'cd-topnavigationnavbar',
  templateUrl: './topnavigationnavbar.component.html',
  styleUrls: ['./topnavigationnavbar.component.scss']
})
export class TopnavigationnavbarComponent {

  toggleNavigation(): void {
    jQuery('body').toggleClass('mini-navbar');
    smoothlyMenu();
  }

}
