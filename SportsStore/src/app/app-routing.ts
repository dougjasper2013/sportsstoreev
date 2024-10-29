import { Routes } from '@angular/router';
import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { StoreFirstGuard } from "./storeFirst.guard";

export const routes: Routes = [    
    {
    path: "cart", component: CartDetailComponent,
    canActivate: [StoreFirstGuard]
    },
    {
    path: "checkout", component: CheckoutComponent,
    canActivate: [StoreFirstGuard]
    },
    { path: '', redirectTo: '/store', pathMatch: 'full' },
    { path: "**", redirectTo: "/store" }
    ];