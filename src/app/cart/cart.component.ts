import { Component, OnInit } from '@angular/core';
import {CartService} from "../service/cart.service";
import {ItemService} from "../service/item.service";
import {Item} from "../dto/item";
import {DUMMY_DATA} from "../dummy-data";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  total: number = 0;
  cartItems!: Array<{item: Item, qty: number}>;

  constructor(private cartService : CartService,
               public itemService : ItemService,
              public router : Router) {
    this.calculateNetTotal();
  }

  ngOnInit(): void {
      this.loadAllCartItems();
  }

  loadAllCartItems(){
    this.cartItems =  this.cartService.getAllCartItems();

  }

  /*getItem(code: string): Observable<Item> {
    return this.itemService.getItem(code);
  }*/

  navigateToItem(code: string) {
    this.router.navigate(['/items', code]);
  }

  calculateNetTotal() :void {
    this.total = this.cartService.getNetTotal();
  }
}
