import { TestBed } from '@angular/core/testing';

import { MasumService } from './masum.service';

describe('MasumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MasumService = TestBed.get(MasumService);
    expect(service).toBeTruthy();
  });
});
