import { Component, OnInit } from '@angular/core';
import { BudgetdataService } from "../budgetdata.service";

@Component({
  selector: 'app-finance-table',
  templateUrl: './finance-table.component.html',
  styleUrls: ['./finance-table.component.scss']
})
export class FinanceTableComponent implements OnInit {
  budgetCount: any;
  goals: any;
  freeCash: any;
  fullName: any;
  incomes;
  incomeSalaryTotal;
  monthlySalary;
  incomeWTaxesIn;
  incomeSalaryIn;
  incomeLimit;
  investmentPercentage;
  investmentAnually;
  investmentMonthly;
  constructor(public tableService:BudgetdataService) { }

  ngOnInit() {
    this.incomes = this.tableService.incomes;   
    this.monthlySalary = this.tableService.monthlySummary;
    this.incomeWTaxesIn = this.tableService.incomeWTaxes; 
    this.incomeSalaryIn =this.tableService.incomeSummary;
    this.investmentPercentage = this.tableService.investmentPercentage;
    this.investmentAnually = this.tableService.investmentAnually;
    this.investmentMonthly = this.tableService.investmentMonthly; 
    console.log(` ${this.incomeWTaxesIn}, ${this.investmentAnually}, ${this.investmentMonthly}`);

    this.fullName = this.tableService.incomes;
    this.freeCash = this.tableService.monthlyFreeCash;
    this.goals = this.tableService.budgets;
    this.budgetCount = this.tableService.budgetCount;   

  }

}
