import { TestBed } from '@angular/core/testing';

import { MachineDataApiService } from './machine-data-api.service';

describe('MachineDataApiService', () => {
  let service: MachineDataApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachineDataApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
