import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ItemComponent } from "./item/item.component";
import { TimeAgoPipe } from "./time-ago/time-ago.pipe";

@NgModule({
  declarations: [ItemComponent, TimeAgoPipe],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [ItemComponent]
})
export class ComponentsModule {}
