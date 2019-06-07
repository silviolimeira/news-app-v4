import { Injectable } from "@angular/core";
import { Observable, Subject, of } from "rxjs";

import * as range from "lodash.range";
import { Items } from "../../models/Items";
import { Item } from "../../models/Item";
import { map, startWith } from "rxjs/operators";

@Injectable()
export class ItemServiceMock {
  load(offset?: number, limit?: number): Observable<Items> {
    const results: Item[] = range(offset, offset + limit).map(index => ({
      id: index,
      title: `Item ${index + 1}`,
      url: `http://www.example.com/item${index}`,
      by: `demo`,
      time: new Date().getTime() / 1000,
      score: index
    }));
    return of({ offset, limit, total: offset + limit, results });
  }

  load1({ offset, limit }: { offset: number; limit: number }): Observable<any> {
    const itemsObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.generateItems({ offset, limit }));
      }, 1000);
    });
    return itemsObservable;
  }
  generateItems({ offset, limit }: { offset: number; limit: number }): Items {
    let items: Item[] = range(offset, offset + limit).map(index => ({
      id: index,
      title: `Item ${index + 1}`,
      url: `http://www.example.com/item${index}`,
      by: `demo`,
      time: new Date().getTime() / 1000,
      score: index
    }));

    let page: Items = { offset: 0, limit: 10, total: 10, results: items };
    return page;
  }
}
