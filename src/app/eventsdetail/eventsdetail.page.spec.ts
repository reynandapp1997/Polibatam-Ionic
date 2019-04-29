import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsdetailPage } from './eventsdetail.page';

describe('EventsdetailPage', () => {
  let component: EventsdetailPage;
  let fixture: ComponentFixture<EventsdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsdetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
