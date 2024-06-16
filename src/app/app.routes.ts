import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'clean-row',
    pathMatch: 'full',
  },
  {
    path: 'clean-row',
    loadComponent: () => import('./routes/clean-row/clean-row.component').then(m => m.CleanRowComponent),
  },
];
