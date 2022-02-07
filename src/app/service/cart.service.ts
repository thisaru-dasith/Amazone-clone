import { Injectable } from '@angular/core';
import {Item} from "../dto/item";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItem : Array<{code:String, qty : number}> = []
  totalItem = new Subject<number>();

  constructor() { }

  updateCart(it: Item,toCart: number) {
   const item = this.cartItem.find(i => i.code === it.code);

   if (item){
     item.qty = toCart;

     if (item.qty === 0){
       this.cartItem.splice(this.cartItem.indexOf(item), 1);
     }
   }else{
     this.cartItem.push({code: it.code, qty: toCart});
   }
    this.calculateTotalItems();

 }

  private calculateTotalItems(){
    let totalItems = 0;

    this.cartItem.forEach(item => totalItems += item.qty);
    this.totalItem.next(totalItems);
  }

 getTotalItemInCart() : Subject<number>{
    return this.totalItem;
  }

  getQtyInCart(code: string): number{
    const item = this.cartItem.find(i => i.code === code);

    return item? item.qty: 0;
  }
}


