import { Component, OnInit } from '@angular/core';
import { BudgetdataService } from "../budgetdata.service";
import { trigger,state,style,transition,animate,keyframes} from "@angular/animations";

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss'],
  animations:[
    trigger('incomeAnim',[
      state('active',style({
        opacity:'1'
      })),
      transition('void => *',[
        style({transform:'translateX(-30px)',opacity:'0'}),
        animate('700ms ease-in-out')
      ]),
      transition('* => void',[
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class IncomeComponent implements OnInit {
  incomes;
  monthlySalary;
  addTaxes;
  incomeSalaryTotal;
  incomeWTaxesIn;
  incomeSalaryIn;
  incomeLimit;
  investmentPercentage;
  investmentAnually;
  investmentMonthly;
  state = 'active';
  constructor(private incomeservice:BudgetdataService) {}
  
  investmentCard = false;

  toggelInvestmentCard() {
    this.investmentCard = !this.investmentCard;
  }

  ngOnInit() {
    this.incomes = this.incomeservice.incomes;
    this.incomeSalaryTotal = this.incomeservice.incomeSummary;  
    this.monthlySalary = this.incomeservice.monthlySummary;
    this.incomeWTaxesIn = this.incomeservice.incomeWTaxes; 
  }
  addIncomeOwner(value:any){
    this.investmentCard = false;
    this.incomeservice.addIncomeOwner(value);
    this.monthlySalary = this.incomeservice.monthlySummary;
    this.incomeWTaxesIn = this.incomeservice.incomeWTaxes;  
    this.incomeSalaryIn =this.incomeservice.incomeSummary;
    this.incomeLimit = this.incomeservice.incomeInputLimit;
    this.investmentPercentage = this.incomeservice.investmentPercentage;
    this.investmentAnually = this.incomeservice.investmentAnually;
    this.investmentMonthly = this.incomeservice.investmentMonthly;
  }
  delete(){
    var index = this.incomes.indexOf(this);
    this.incomes.splice(index, 1);
  }
}
