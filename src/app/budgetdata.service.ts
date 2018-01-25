import { Injectable } from '@angular/core';
import { Http,Response } from "@angular/http";

//const for monthly summary
const sum = (items, prop) => items.reduce((a,b)=> a + b[prop] ,0);
@Injectable()
export class BudgetdataService {
  constructor(private http:Http) {}
  
  public getStockMarket(symbol){
    const _url = `https://www.quandl.com/api/v3/datasets/EOD/${symbol}.json?api_key=Kp7MUfZpCzigxkq3Gq8W`;
    return this.http.get(_url);
  }//getStockMarket() API

  budgets = [];
  public get budgetSummary(){
          return sum(this.budgets, 'budgetAmount');
  }//getter budgetSummary() == sums up the budget in the "budgetAmount"

  addBudget(value:any){
    this.budgets.push(
            {
          "budgetTitle":value.budgetTitle,
          "budgetAmount":value.budgetAmount
   })
          console.log('total'+this.budgetSummary);
  }//addBudget()= function adds budgets onj to the budgets []

  public get budgetCount(){
      return this.budgets.length;
  }//budgetCount()= counts how many objects are in budgets[]

              // ==========Income Math============ //
  incomes = [];//array
  public get investmentPercentage(){
    let target = sum(this.incomes, 'percentage');
    let percent = target * .01;
    return percent;
  }

  public get incomeSummary(){
        return sum(this.incomes, 'incomeAmount');
  }//getter incomeSummary()= sums up the income in the "incomeAmount"
  public get investmentAnually(){
        return this.incomeSummary * this.investmentPercentage;
  }//getter investmentAnnually() sums of  annual amount at 15% invested
  public get investmentMonthly(){
        return this.investmentAnually / 12;
  }//getter investmentMonthly() monthly amount of suggest investment
  public get incomeInputLimit(){
        if(this.incomes.length === 1){
          let incomeBtn = document.getElementById('addIncomeBtn');
          incomeBtn.setAttribute("disabled","disabled")
          return incomeBtn.style.opacity = "0.4";
        }
  }//incomeInputLimit() = diables button
  public get monthlySummary(){
        return this.incomeWTaxes / 12;
  }// getter monthlySummary() = monthly amount function
  public get monthlyFreeCash(){
    let freeCash = this.monthlyIncomeWTax - this.budgetSummary;
    freeCash = freeCash - 30.82;
    return freeCash;
  }// getter monthlyFreeCash() = subtracts the diffrence in the monthly summary and the budget sum
  public get salaryWTax(){
    return this.incomeSummary - this.incomeWTaxes;
  }
  public get monthlyIncomeWTax(){
    return this.salaryWTax / 12;
  }
  public get incomeWTaxes(){
    if (this.incomeSummary < 13225) {
      let taxAdded = this.incomeSummary;
      taxAdded = taxAdded - 3700;
      taxAdded = taxAdded * .10;
      taxAdded = taxAdded + 0;
      return taxAdded;
    }
    if (this.incomeSummary < 42400) {
      let taxAdded = this.incomeSummary; 
      taxAdded = taxAdded - 13225;
      taxAdded = taxAdded * .12;
      taxAdded = taxAdded + 952.50;
      return taxAdded;      
    }
    if (this.incomeSummary < 86200) {
      let taxAdded = this.incomeSummary; 
      taxAdded = taxAdded - 42400;
      taxAdded = taxAdded * .22;
      taxAdded = taxAdded + 4453.50;
      return taxAdded;      
    }
    if (this.incomeSummary < 161200) {
      let taxAdded = this.incomeSummary;
      taxAdded = taxAdded - 86200;
      taxAdded = taxAdded * .24;
      taxAdded = taxAdded + 14089.50; 
      return taxAdded;      
    }
    if (this.incomeSummary < 203700) {
      let taxAdded = this.incomeSummary;  
      taxAdded = taxAdded - 161200;
      taxAdded = taxAdded * .32;
      taxAdded = taxAdded + 32089.50;
      return taxAdded;      
    } 
    if (this.incomeSummary < 503700) {
      let taxAdded = this.incomeSummary;
      taxAdded = taxAdded - 203700;
      taxAdded = taxAdded * .35;
      taxAdded = taxAdded + 45689.50;
      return taxAdded;      
    }
    if (this.incomeSummary > 503701) {
      let taxAdded = this.incomeSummary;
      taxAdded = taxAdded - 503700;
      taxAdded = taxAdded * .37;
      taxAdded = taxAdded + 150689.50; 
      return taxAdded;      
    } else {
      return console.log('here comes the IRS');
    }
  }// getter incomeWTaxes() = calculates the tax for every income added 
  addIncomeOwner(value:any){
  console.log('addincomeOwner()');
  this.incomes.push(
    {
      "incomeOwner":value.incomeOwner,
      "incomeAmount":value.incomeAmount,
      "percentage":value.percentage
    })
    console.log(`this is the montly summar ${this.monthlySummary}
                ,and this i the total summmary ${this.incomeSummary} 
                this is the investment amount ${this.investmentAnually}
                this is how much to invest monthly ${this.investmentMonthly}
                this is the percentage ${this.investmentPercentage}`);
  }//addincomeowner() = function adds the owner to the income

}//end of Service
