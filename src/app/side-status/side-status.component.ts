import { Component, OnInit } from '@angular/core';
import { BudgetdataService } from 'app/budgetdata.service';

@Component({
  selector: 'app-side-status',
  templateUrl: './side-status.component.html',
  styleUrls: ['./side-status.component.scss']
})
export class SideStatusComponent implements OnInit {
  buttonStatus = true;
  freeCash;
  goals;
  fullName;
  budgetCount;
  constructor(public user:BudgetdataService) { }

  ngOnInit() {
    this.fullName = this.user.incomes;
    this.freeCash = this.user.monthlyFreeCash;
    this.goals = this.user.budgets;
    this.budgetCount = this.user.budgetCount;    
  }

}
