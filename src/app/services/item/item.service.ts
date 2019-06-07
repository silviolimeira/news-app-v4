import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Items } from "../../models/items";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ItemService {
  constructor(private httpClient: HttpClient) {}

  load(offset: number, limit: number): Observable<Items> {
    const url = "http://localhost:3333";
    return this.httpClient.get<Items>(url);
  }
}
