import { Component, OnInit } from '@angular/core';
import {CartService} from "../service/cart.service";
import {ItemService} from "../service/item.service";
import {ActivatedRoute} from "@angular/router";
import {DUMMY_DATA} from "../dummy-data";
import {Item} from "../dto/item";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

   item: Item = DUMMY_DATA[0];
  constructor(private cartService : CartService,
              private  itemService : ItemService,
              private activeRoute : ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activeRoute.snapshot.paramMap.get('code'));
  }

}
