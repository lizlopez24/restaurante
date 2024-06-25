import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { privilegiosGuard } from './privilegios.guard';

describe('privilegiosGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => privilegiosGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
