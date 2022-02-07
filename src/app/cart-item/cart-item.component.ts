import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from "../dto/item";
import {CartService} from "../service/cart.service";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input()
  item!: Item;

  cartItem = 0;

  @Output()
  cartOnChange = new EventEmitter<number>();

  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
  }

  updateCart(increment: boolean) {
    increment? this.cartItem ++ : this.cartItem--;
    this.cartOnChange.emit(this.cartItem);

  }
}
