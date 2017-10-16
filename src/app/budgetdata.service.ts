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
  public get test(){
    return console.log('testing the service');
  }//test your new service with this 
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
  public get incomeSummary(){
        return sum(this.incomes, 'incomeAmount');
  }//getter incomeSummary()= sums up the income in the "incomeAmount"
  public get incomeInputLimit(){
        if(this.incomes.length === 2){
          let incomeBtn = document.getElementById('addIncomeBtn');
          incomeBtn.setAttribute("disabled","disabled")
          return incomeBtn.style.opacity = "0.4";
        }
  }//incomeInputLimit() = diables button
  public get monthlySummary(){
        return +this.incomeWTaxes / 12;
  }// getter monthlySummary() = monthly amount function
  public get monthlyFreeCash(){
    let freeCash = this.monthlySummary - this.budgetSummary;
    return freeCash;
  }// getter monthlyFreeCash() = subtracts the diffrence in the monthly summary and the budget sum
  public get incomeWTaxes(){
    if (this.incomeSummary < 9325) {
      return this.incomeSummary - this.incomeSummary * .10;
    }
    if (this.incomeSummary < 37950) {
      return this.incomeSummary - this.incomeSummary * .15;          
    }
    if (this.incomeSummary < 91900) {
      return this.incomeSummary - this.incomeSummary * .25;          
    }
    if (this.incomeSummary < 191650) {
      return this.incomeSummary - this.incomeSummary * .28;                
    }
    if (this.incomeSummary < 416700) {
      return this.incomeSummary - this.incomeSummary * .33;        
    } 
    if (this.incomeSummary < 418400) {
      return this.incomeSummary - this.incomeSummary * .35;          
    } else {
      return console.log('here comes the IRS');
    }
  }// getter incomeWTaxes() = calculates the tax for every income added 
    addIncomeOwner(value:any){
    console.log('addincomeOwner()');
    this.incomes.push(
      {
        "incomeOwner":value.incomeOwner,
        "incomeAmount":value.incomeAmount
      })
      console.log(`this is the montly summar ${this.monthlySummary}
      ,and this i the total summmary ${this.incomeSummary}`);
  }//addincomeowner() = function adds the owner to the income

}//end of Service
