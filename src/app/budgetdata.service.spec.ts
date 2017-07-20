import { TestBed, inject } from '@angular/core/testing';

import { BudgetdataService } from './budgetdata.service';

describe('BudgetdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BudgetdataService]
    });
  });

  it('should be created', inject([BudgetdataService], (service: BudgetdataService) => {
    expect(service).toBeTruthy();
  }));
});
