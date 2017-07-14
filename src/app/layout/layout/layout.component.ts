import { Component, OnInit } from '@angular/core';
import { detectBody } from '../../app.helpers';

import { LayoutService } from '../layout.service';

declare var jQuery: any;

@Component({
  selector: 'cd-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public loaded: boolean;

  constructor(private layoutService: LayoutService) {
    this.layoutService.observeLoaded().subscribe(loaded => {
      this.loaded = loaded;
    });
  }

  ngOnInit(): any {
    detectBody();
  }

  onResize() {
    detectBody();
  }

}
