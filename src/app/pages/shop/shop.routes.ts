import { Routes } from '@angular/router';

export const ShopRoutes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    loadComponent: () =>
      import('./main/main.component').then((c) => c.MainComponent),
  },
];
