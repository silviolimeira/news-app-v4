import { Component, Input } from "@angular/core";
import { Item } from "src/app/models/item";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"]
})
export class ItemComponent {
  // @Input() item: Item = {
  //   id: 1,
  //   title: "fake title",
  //   url: "fake url",
  //   by: "fake by",
  //   time: 0,
  //   score: 0,
  //   text: "fake text",
  //   descendants: 0,
  //   kids: []
  // };
  @Input() item: Item;
}
