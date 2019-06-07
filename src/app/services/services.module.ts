import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ItemService } from "./item/item.service";
import { HttpClientModule } from "@angular/common/http";
import { ItemServiceMock } from "./item/item.service.mock";

@NgModule({
  declarations: [],
  exports: [],
  imports: [CommonModule, HttpClientModule],
  providers: [ItemService, ItemServiceMock]
})
export class ServicesModule {}
