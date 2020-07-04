import { TestBed } from '@angular/core/testing';

import { DataFetcherServiceService } from './data-fetcher-service.service';

describe('DataFetcherServiceService', () => {
  let service: DataFetcherServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataFetcherServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
