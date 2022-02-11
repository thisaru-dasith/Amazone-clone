import { Injectable } from '@angular/core';
import {DUMMY_DATA} from "../dummy-data";
import {Item} from "../dto/item";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http : HttpClient) { }


  getAllItem() : Observable<Array<Item>>{
    return this.http.get<Array<Item>>('http://localhost:8080/items/');
  }

  getItem(code: string): Item | null {
    const item = DUMMY_DATA.find(item => item.code === code);

    return item? item: null;
  }

}
