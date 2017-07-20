import { Component, OnInit } from '@angular/core';
import { BudgetdataService } from "../budgetdata.service";
import { Http,Response } from "@angular/http";

@Component({
  selector: 'app-stockmarket',
  templateUrl: './stockmarket.component.html',
  styleUrls: ['./stockmarket.component.scss']
})
export class StockmarketComponent implements OnInit {
stockBase;
stockName;
testIt;
  constructor(private stockServ:BudgetdataService) { }

  ngOnInit() {
    this.stockServ.getStockMarket('MSFT').subscribe(
      (res:Response)=>{
        const stockMSFT = res.json();
        this.stockName = stockMSFT;  
      }
    );//getStockMarket()
  }

}
