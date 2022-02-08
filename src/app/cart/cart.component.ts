import { Component, OnInit } from '@angular/core';
import {CartService} from "../service/cart.service";
import {ItemService} from "../service/item.service";
import {Item} from "../dto/item";
import {DUMMY_DATA} from "../dummy-data";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  constructor(private cartService : CartService,
               private itemService : ItemService) { }

  ngOnInit(): void {
      this.loadAllCartItems();
  }

  loadAllCartItems(){

  }

}
