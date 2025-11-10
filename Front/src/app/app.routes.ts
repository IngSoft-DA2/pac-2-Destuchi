import { Routes } from '@angular/router';
import { reflectionGuard } from './reflection.guard';

export const routes: Routes = [
  {
    path: 'reflection',
    canActivate: [reflectionGuard],
    loadComponent: () =>
      import('./shared/components/reflection/reflection.component').then(m => m.ReflectionComponent)
  },
  { path: '', pathMatch: 'full', redirectTo: 'reflection' }
];
