import { Injectable } from '@angular/core';
import {Item} from "../dto/item";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItem : Array<{code:String, qty : number}> = []

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
 }
}
