import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpModule, Http, Response } from "@angular/http";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { GoalsComponent } from './goals/goals.component';
import { MonthlyspendingComponent } from './monthlyspending/monthlyspending.component';
import { UserpodComponent } from './userpod/userpod.component';
import { UserinputComponent } from './userinput/userinput.component';
import { IncomeComponent } from './income/income.component';
import { InvestmentsComponent } from './investments/investments.component';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';
import { SubtotalComponent } from './subtotal/subtotal.component';
import { BudgetdataService } from "./budgetdata.service";
import { TopnavComponent } from './topnav/topnav.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { BenefitsComponent } from './benefits/benefits.component';
import {routes } from "./app.routes";
import { StockmarketComponent } from './stockmarket/stockmarket.component';
import { TwitterComponent } from './twitter/twitter.component';
import { WeatherComponent } from './weather/weather.component';
import { StepsComponent } from './steps/steps.component';
import { SideStatusComponent } from './side-status/side-status.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalsComponent,
    MonthlyspendingComponent,
    UserpodComponent,
    UserinputComponent,
    IncomeComponent,
    InvestmentsComponent,
    MiscellaneousComponent,
    SubtotalComponent,
    TopnavComponent,
    CalculatorComponent,
    BenefitsComponent,
    StockmarketComponent,
    TwitterComponent,
    WeatherComponent,
    StepsComponent,
    SideStatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    routes
  ],
  providers: [BudgetdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
