import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ItemComponent } from "./item/item.component";
import { TimeAgoPipe } from "./time-ago/time-ago.pipe";
import { ItemsComponent } from "./items/items.component";

@NgModule({
  declarations: [ItemComponent, TimeAgoPipe, ItemsComponent],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [ItemComponent, ItemsComponent]
})
export class ComponentsModule {}
