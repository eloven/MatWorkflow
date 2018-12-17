import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchematicPageComponent } from './schematic-page.component';

describe('SchematicPageComponent', () => {
  let component: SchematicPageComponent;
  let fixture: ComponentFixture<SchematicPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchematicPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchematicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
