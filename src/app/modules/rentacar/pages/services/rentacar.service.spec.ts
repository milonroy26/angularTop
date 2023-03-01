import { TestBed } from '@angular/core/testing';

import { RentacarService } from './rentacar.service';

describe('RentacarService', () => {
  let service: RentacarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentacarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
