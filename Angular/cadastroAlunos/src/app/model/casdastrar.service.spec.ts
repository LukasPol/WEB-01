import { TestBed } from '@angular/core/testing';

import { CasdastrarService } from './casdastrar.service';

describe('CasdastrarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CasdastrarService = TestBed.get(CasdastrarService);
    expect(service).toBeTruthy();
  });
});
