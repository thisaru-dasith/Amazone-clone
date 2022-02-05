import { Component } from '@angular/core';
import {DUMMY_DATA} from "./dummy-data";
import {Item} from "./dto/item";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  item = DUMMY_DATA;
  cartItem : Array<{code:String, qty : number}> = []

  updateCart(inCart: number, it: Item) {
    const item = this.cartItem.find(i => i.code === it.code);

    if (item){
      item.qty = inCart;

      if (item.qty === 0){
        this.cartItem.splice(this.cartItem.indexOf(item), 1);
      }
    }else{
      this.cartItem.push({code: it.code, qty: inCart});
    }
  }


  getTotalItemsInCart(): number{
    let totalItems = 0;

    this.cartItem.forEach(item => totalItems += item.qty);
    return totalItems;
  }
}
