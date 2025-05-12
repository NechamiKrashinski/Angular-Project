import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { secretaryGuardGuard } from './secretary-guard.guard';

describe('secretaryGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => secretaryGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
