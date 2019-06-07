import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Items } from "../../models/items";

@Injectable({
  providedIn: "root"
})
export class ItemService {
  constructor() {}

  load(offset: number, limit: number): Observable<Items> {
    return of({ offset: 0, limit: 0, total: 0, results: [] });
  }
}
