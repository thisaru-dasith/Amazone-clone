import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from "../dto/item";
import {CartService} from "../service/cart.service";
import {ItemService} from "../service/item.service";
import {Router, Routes} from "@angular/router";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input()
  item!: Item;

  cartItem = 0;


  constructor(private cartService: CartService,
              private itemService : ItemService,
              private router : Router) {

  }

  ngOnInit(): void {
    this.loadInCartQty()
  }

  updateCart(increment: boolean) {
    increment? this.cartItem ++ : this.cartItem--;
    this.cartService.updateCart(this.item, this.cartItem);

  }

  navigateToItem() {
    this.router.navigate(['/item', this.item.code])
  }
  loadInCartQty(){
    this.cartItem = this.cartService.getQtyInCart(this.item.code);
  }

}
