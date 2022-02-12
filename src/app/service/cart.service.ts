import { Injectable } from '@angular/core';
import {Item} from "../dto/item";
import {Subject} from "rxjs";
import {ItemService} from "./item.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItem: Array<{item: Item, qty: number}> = [];
  totalItem = new Subject<number>();

  constructor() { }

  updateCart(it: Item,toCart: number) {
    const item = this.cartItem.find(i => i.item === it);

   if (item){
     item.qty = toCart;

     if (item.qty === 0){
       this.cartItem.splice(this.cartItem.indexOf(item), 1);
     }
   }else{
     this.cartItem.push({item: it, qty: toCart});
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
    const item = this.cartItem.find(i => i.item.code === code);

    return item? item.qty: 0;
  }

  getAllCartItems(): Array<{item: Item, qty: number}>{
    return this.cartItem;
  }

  removeItemFromCart(code: string): void{
    this.cartItem = this.cartItem.filter(i => i.item.code !== code);
    this.calculateTotalItems();
  }

  getNetTotal(): number{
    let total = 0;
      this.cartItem.forEach(ci => {
        total += ci.item.price * ci.qty;
    })

    return total;
}

}


