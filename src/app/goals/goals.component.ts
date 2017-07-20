import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
    goals = [
      {
        "goalTitle": "pay credit card",
        "goalAmount": "$600",
        "goalDate":"01/00/1192"
      }
    ];
    goalTitle:string= "";
    goalAmount:string= "";
    goalDate:string= "";
    
    addBudget(value:any){
      this.goals.push(
        {
         "goalTitle":value.goalTitle,
         "goalAmount":value.goalAmount,
         "goalDate":value.goalDate
        })
      this.goalTitle = "";
      this.goalAmount = "";
      this.goalDate = "";
    }
  constructor() { }

  ngOnInit() {
  }

}
