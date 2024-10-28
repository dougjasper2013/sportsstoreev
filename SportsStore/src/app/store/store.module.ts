import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";

import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { CommonModule } from "@angular/common";

import { CounterDirective } from "./counter.directive";
import { CartSummaryComponent } from "./cartSummary.component";

@NgModule({
 imports: [ModelModule, CommonModule, FormsModule],
 declarations: [StoreComponent, CounterDirective, CartSummaryComponent],
 exports: [StoreComponent]
})
export class StoreModule { }