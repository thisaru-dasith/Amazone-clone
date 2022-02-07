import { Injectable } from '@angular/core';
import {DUMMY_DATA} from "../dummy-data";
import {Item} from "../dto/item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getAllItem() : Array<Item>{
    return DUMMY_DATA;
  }
}
