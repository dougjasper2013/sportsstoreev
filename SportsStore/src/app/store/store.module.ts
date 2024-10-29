import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";

import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { CommonModule } from "@angular/common";

import { CounterDirective } from "./counter.directive";
import { CartSummaryComponent } from "./cartSummary.component";
import { CartDetailComponent } from "./cartDetail.component";
import { CheckoutComponent } from "./checkout.component";
import { RouterModule, RouterOutlet } from "@angular/router";


@NgModule({
 imports: [ModelModule, CommonModule, FormsModule, RouterModule, RouterOutlet],
 declarations: [StoreComponent, CounterDirective, CartSummaryComponent,
    CartDetailComponent, CheckoutComponent
 ],
 exports: [StoreComponent, CartDetailComponent, CheckoutComponent]
})
export class StoreModule { }