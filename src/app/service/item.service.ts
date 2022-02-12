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

  readonly ITEM_SERVICE_API = 'http://localhost:8080/amazon/items';

  getAllItems() : Observable<Array<Item>>{
    return this.http.get<Array<Item>>(this.ITEM_SERVICE_API);
  }

  getItem(code: string): Observable<Item> {
    return this.http.get<Item>(`${this.ITEM_SERVICE_API}?code=${code}`);
  }

}
