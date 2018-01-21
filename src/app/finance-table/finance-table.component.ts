import { Component, OnInit } from '@angular/core';
import { BudgetdataService } from "../budgetdata.service";
@Component({
  selector: 'app-finance-table',
  templateUrl: './finance-table.component.html',
  styleUrls: ['./finance-table.component.scss']
})
export class FinanceTableComponent implements OnInit {

  constructor(private incomeservice:BudgetdataService) { }
  incomes;
  incomeSalaryTotal;
  monthlySalary;
  incomeWTaxesIn;
  incomeSalaryIn;
  incomeLimit;
  investmentPercentage;
  investmentAnually;
  investmentMonthly;
  ngOnInit() {
    this.incomes = this.incomeservice.incomes;   
    this.incomeSalaryTotal = this.incomeservice.incomeSummary;  
    this.monthlySalary = this.incomeservice.monthlySummary;
    this.incomeWTaxesIn = this.incomeservice.incomeWTaxes; 
    this.incomeSalaryIn =this.incomeservice.incomeSummary;
    this.incomeLimit = this.incomeservice.incomeInputLimit;
    this.investmentPercentage = this.incomeservice.investmentPercentage;
    this.investmentAnually = this.incomeservice.investmentAnually;
    this.investmentMonthly = this.incomeservice.investmentMonthly; 
  }

}
