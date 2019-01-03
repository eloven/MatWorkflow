import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashPageComponent } from './dash-page.component';

describe('DashPageComponent', () => {
  let component: DashPageComponent;
  let fixture: ComponentFixture<DashPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
