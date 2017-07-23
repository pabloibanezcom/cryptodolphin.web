import { TestBed, inject } from '@angular/core/testing';

import { CryptocompareHistoryService } from './cryptocompare.history.service';

describe('CryptocompareHistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CryptocompareHistoryService]
    });
  });

  it('should be created', inject([CryptocompareHistoryService], (service: CryptocompareHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
