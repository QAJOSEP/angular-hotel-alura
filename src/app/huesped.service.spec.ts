import { TestBed } from '@angular/core/testing';

import { HuespedService } from './huesped.service';

describe('HuespedService', () => {
  let service: HuespedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HuespedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
