import { TestBed } from '@angular/core/testing';

import { FauxApiService } from './faux-api.service';

describe('FauxApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FauxApiService = TestBed.get(FauxApiService);
    expect(service).toBeTruthy();
  });
});
