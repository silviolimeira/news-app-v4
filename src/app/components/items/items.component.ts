import { Component, Input } from "@angular/core";

import { Items } from "../../models/items";

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.scss"]
})
export class ItemsComponent {
  @Input() items: Items;
}
