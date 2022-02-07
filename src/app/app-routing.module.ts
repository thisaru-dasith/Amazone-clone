import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ItemComponent} from "./item/item.component";
import {HomeComponent} from "./home/home.component";
import {CartComponent} from "./cart/cart.component";

const routes : Routes = [

  {
    path: "item",
    component:ItemComponent
  },
  {
    path: "home",
    component:HomeComponent
  },
  {
    path:"cart",
    component: CartComponent
  },
  {
    path:"",
    pathMatch: 'full',
    redirectTo:"/home"
  },
  {
    path: "*",
    redirectTo: "/home"
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration : "disabled"})
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
