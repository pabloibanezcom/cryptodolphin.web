import { Component } from '@angular/core';
import { smoothlyMenu } from '../../app.helpers';
declare var jQuery: any;

@Component({
  selector: 'cd-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.scss']
})
export class TopnavbarComponent {

  toggleNavigation(): void {
    jQuery('body').toggleClass('mini-navbar');
    smoothlyMenu();
  }

}
