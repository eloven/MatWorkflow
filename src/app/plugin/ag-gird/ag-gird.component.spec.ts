import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGirdComponent } from './ag-gird.component';

describe('AgGirdComponent', () => {
  let component: AgGirdComponent;
  let fixture: ComponentFixture<AgGirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgGirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
