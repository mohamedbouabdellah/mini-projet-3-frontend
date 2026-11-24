import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { phoneGuard } from './phone-guard';

describe('phoneGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => phoneGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
