import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TopStoriesComponent } from "./top-stories.component";
import { By } from "@angular/platform-browser";
import { ItemService } from "../services/item/item.service";
import { ItemServiceMock } from '../services/item/item.service.mock';
import { TestUtils } from 'src/test-utils';
import { ItemsComponent } from '../components/items/items.component';
import { ItemComponent } from '../components/item/item.component';
import { TimeAgoPipe } from '../components/time-ago/time-ago.pipe';

let fixture: ComponentFixture<TopStoriesComponent> = null;
let component: any = null;

describe('top stories page', () => {
  beforeEach(async(() => {
    TestUtils.beforeEachCompiler(
      [TopStoriesComponent, ItemsComponent, ItemComponent, TimeAgoPipe],
      [{provide: ItemService, useClass: ItemServiceMock}]
    ).then(
      compiled => {
        fixture = compiled.fixture;
        component = compiled.instance;
      }
    )
  }))

  it('should display a list of 10 items', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() =>{
      fixture.detectChanges();
      let debugElements = fixture.debugElement.queryAll(By.css('h2'));
      expect(debugElements.length).toBe(10);
      expect(debugElements[0].nativeElement.textContent).toContain('Item 1');
      expect(debugElements[1].nativeElement.textContent).toContain('Item 2');
    })
  }))

});
