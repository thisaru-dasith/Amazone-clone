import { Component, OnInit } from '@angular/core';
import {DUMMY_DATA} from "../dummy-data";
import {Item} from "../dto/item";
import {ItemService} from "../service/item.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  item  : Array<Item>;
  //cartItem : Array<{code:String, qty : number}> = []

  constructor(private itemService :ItemService) {
    this.item = itemService.getAllItem()
  }

  /*updateCart(inCart: number, it: Item) {
    const item = this.cartItem.find(i => i.code === it.code);

    if (item){
      item.qty = inCart;

      if (item.qty === 0){
        this.cartItem.splice(this.cartItem.indexOf(item), 1);
      }
    }else{
      this.cartItem.push({code: it.code, qty: inCart});
    }
  }*/
  ngOnInit(): void {
  }

}
