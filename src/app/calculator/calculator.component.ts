import { Component, OnInit } from '@angular/core';
import { SeoService } from "../seo.service";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})

export class CalculatorComponent implements OnInit {

  constructor(private seo:SeoService) { }

  ngOnInit() {
    this.seo.generateTags({
      site: 'Monthly Budget Calculator',
      site_name: 'Monthly Budget Calculator',      
      title: 'Monthly Budget Calculator', 
      description: 'Find out you Net income after entering your gross salary, monthly expenses. Take control of your finances and discover how much you owe in federal taxes.', 
      image: 'https://budget-and-api.firebaseapp.com/assets/monthlyBudgetSEOimage.jpg',
      slug: 'https://budget-and-api.firebaseapp.com/Calculator'
    })
  }

}
