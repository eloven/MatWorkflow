import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginPageComponent } from './plugin-page.component';

describe('PluginPageComponent', () => {
  let component: PluginPageComponent;
  let fixture: ComponentFixture<PluginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PluginPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
