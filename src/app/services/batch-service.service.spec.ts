import { TestBed, inject } from '@angular/core/testing';

import { BatchServiceService } from './batch-service.service';

describe('BatchServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BatchServiceService]
    });
  });

  it('should be created', inject([BatchServiceService], (service: BatchServiceService) => {
    expect(service).toBeTruthy();
  }));
});
