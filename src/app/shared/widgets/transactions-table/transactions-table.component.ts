import { Component, OnInit, Input } from '@angular/core';

import { Transaction } from '../../models/transaction';

@Component({
  selector: 'cd-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss']
})
export class TransactionsTableComponent implements OnInit {

  @Input() transactions: Transaction[];

  constructor() { }

  ngOnInit() {
  }

}
