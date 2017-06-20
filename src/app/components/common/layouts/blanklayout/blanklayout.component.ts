import { Component, AfterViewInit, OnDestroy } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'cd-blanklayout',
  templateUrl: './blanklayout.component.html',
  styleUrls: ['./blanklayout.component.scss']
})
export class BlanklayoutComponent implements AfterViewInit, OnDestroy {

  ngAfterViewInit() {
    jQuery('body').addClass('gray-bg');
  }

  ngOnDestroy() {
    jQuery('body').removeClass('gray-bg');
  }

}
