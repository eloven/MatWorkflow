import { TestBed } from '@angular/core/testing';

import { NgxTableService } from './ngx-table.service';

describe('NgxTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxTableService = TestBed.get(NgxTableService);
    expect(service).toBeTruthy();
  });
});
