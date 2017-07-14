import { TestBed, inject } from '@angular/core/testing';

import { PeriodSelectorService } from './period-selector.service';

describe('PeriodSelectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeriodSelectorService]
    });
  });

  it('should be created', inject([PeriodSelectorService], (service: PeriodSelectorService) => {
    expect(service).toBeTruthy();
  }));
});
