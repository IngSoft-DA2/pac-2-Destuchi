import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CounterService } from './app.counter.service';

export const reflectionGuard: CanActivateFn = () => {
  const counter = inject(CounterService);
  const router = inject(Router);
  counter.increment();
  if (counter.value > 20) {
    router.navigateByUrl('/');
    return false;
  }
  return true;
};
