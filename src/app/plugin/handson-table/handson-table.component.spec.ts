import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandsonTableComponent } from './handson-table.component';

describe('HandsonTableComponent', () => {
  let component: HandsonTableComponent;
  let fixture: ComponentFixture<HandsonTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandsonTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandsonTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
