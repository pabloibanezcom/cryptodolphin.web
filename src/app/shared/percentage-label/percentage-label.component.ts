import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'cd-percentage-label',
  templateUrl: './percentage-label.component.html',
  styleUrls: ['./percentage-label.component.scss']
})
export class PercentageLabelComponent implements OnInit, OnChanges {

  @Input() numberA: number;
  @Input() numberB: number;
  @Input() showDiff: boolean;
  @Input() currencyCode: string;

  private pct: number;

  constructor() { }

  ngOnInit() {
    this.updatePercentage();
  }

  ngOnChanges(...args: any[]) {
    this.updatePercentage();
  }

  updatePercentage(): void {
    this.pct =  parseFloat(((this.numberB - this.numberA) / this.numberA * 100).toFixed(2));
  }

}
