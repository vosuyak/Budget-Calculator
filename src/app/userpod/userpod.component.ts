import { Component, OnInit } from '@angular/core';
import { BudgetdataService } from "../budgetdata.service";
@Component({
  selector: 'app-userpod',
  templateUrl: './userpod.component.html',
  styleUrls: ['./userpod.component.scss']
})
export class UserpodComponent implements OnInit {
buttonStatus = true;
freeCash;
goals;
fullName;
budgetCount;
  constructor(private user:BudgetdataService) { }
  // constructor(private http:Http){}
  ngOnInit() {
    this.fullName = this.user.incomes;
    this.freeCash = this.user.monthlyFreeCash;
    this.goals = this.user.budgets;
    this.budgetCount = this.user.budgetCount;
  }
}
// olanning tag invite