import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPageComponent } from './ui-page.component';

describe('UiPageComponent', () => {
  let component: UiPageComponent;
  let fixture: ComponentFixture<UiPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
