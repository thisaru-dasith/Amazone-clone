import { Component, OnInit } from '@angular/core';
import {CartService} from "../service/cart.service";
import {ItemService} from "../service/item.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DUMMY_DATA} from "../dummy-data";
import {Item} from "../dto/item";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  item!: Item;

  constructor(private cartService: CartService,
              private itemService: ItemService,
              private activeRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loadItem();
  }

  loadItem() {
    const itemCode = this.activeRoute.snapshot.paramMap.get('code');

    if (itemCode) {
      const item = this.itemService.getItem(itemCode);

      if (!item) {
        this.router.navigateByUrl('/home');
      } else {
        this.item = item;
      }
    } else {
      this.router.navigateByUrl('/home');
    }

  }
}
