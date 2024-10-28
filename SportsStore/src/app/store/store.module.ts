import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";

import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { CommonModule } from "@angular/common";

import { CounterDirective } from "./counter.directive";

@NgModule({
 imports: [ModelModule, CommonModule, FormsModule],
 declarations: [StoreComponent, CounterDirective],
 exports: [StoreComponent]
})
export class StoreModule { }