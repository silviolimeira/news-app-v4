import { TestBed } from "@angular/core/testing";

import { ItemService } from "./item.service";
import { HttpClientModule } from "@angular/common/http";

describe("ItemService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
  );

  it("should be created", () => {
    const service: ItemService = TestBed.get(ItemService);
    expect(service).toBeTruthy();
  });

  it("get top list items", () => {
    const service: ItemService = TestBed.get(ItemService);
    console.log(service.load(10, 10));
  });

});
