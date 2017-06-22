import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cd-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('layout.component');
  }

}
