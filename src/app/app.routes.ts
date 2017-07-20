import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { CalculatorComponent } from "../app/calculator/calculator.component";
import { BenefitsComponent } from "../app/benefits/benefits.component";


export const router: Routes = [
    {path:'',redirectTo: '/Calculator', pathMatch: 'full'},
    {path: 'Calculator', component: CalculatorComponent},
    // {path: 'Benefits', component: BenefitsComponent}    
];

export const routes:ModuleWithProviders = RouterModule.forRoot(router);