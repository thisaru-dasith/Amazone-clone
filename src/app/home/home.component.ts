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


  ngOnInit(): void {
  }

}
