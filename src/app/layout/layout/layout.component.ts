import { Component, OnInit } from '@angular/core';
import { detectBody } from '../../app.helpers';

declare var jQuery: any;

@Component({
  selector: 'cd-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): any {
    detectBody();
  }

  onResize() {
    detectBody();
  }

}
