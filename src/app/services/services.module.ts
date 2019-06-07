import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ItemService } from "./item/item.service";

@NgModule({
  declarations: [ItemService],
  exports: [ItemService],
  imports: [CommonModule]
})
export class ServicesModule {}
