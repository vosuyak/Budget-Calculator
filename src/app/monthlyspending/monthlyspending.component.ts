import { Component, OnInit } from '@angular/core';
import { BudgetdataService } from "../budgetdata.service";
@Component({
  selector: 'app-monthlyspending',
  templateUrl: './monthlyspending.component.html',
  styleUrls: ['./monthlyspending.component.scss']
})
export class MonthlyspendingComponent implements OnInit {
  budgets;
  monthlyBudgetTotal;
  constructor(private monthlySpendingServ:BudgetdataService) {}

  ngOnInit() {
    this.budgets = this.monthlySpendingServ.budgets;
    this.monthlyBudgetTotal = this.monthlySpendingServ.budgetSummary;
  }
  addBudget(value:any){
    this.monthlySpendingServ.addBudget(value);
    this.monthlyBudgetTotal = this.monthlySpendingServ.budgetSummary;
  }
}
