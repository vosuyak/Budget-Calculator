import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-userinput',
  templateUrl: './userinput.component.html',
  styleUrls: ['./userinput.component.scss']
})
export class UserinputComponent implements OnInit {
  goals = [
    {
      "goalTitle":"Pay 1st semesters tuition",
      "goalAmount":"$6500",
      "goalDate":"04/16/1994"
    }
  ];
  goalTitle:string = '';
  goalAmount:string = '';
  goalDate:string = '';
  addGoal(value:any){
    this.goals.push(
      {
        'goalTitle':value.goalTitle,
        'goalAmount':value.goalAmount,
        'goalDate':value.goalDate        
      }
    )
  }
  constructor() { }

  ngOnInit() {
  }

}
