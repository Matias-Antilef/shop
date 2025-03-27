import { Routes } from '@angular/router';
import { AppLayout } from './common/components/layout/app-layout.component';
import { PageNotFoundComponent } from './common/components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: AppLayout,
    children: [
      {
        path: '',
        redirectTo: 'shop',
        pathMatch: 'full',
      },
      {
        path: 'shop',
        loadChildren: () =>
          import('./pages/shop/shop.routes').then((m) => m.ShopRoutes),
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.routes').then((m) => m.AuthRoutes),
  },

  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
    pathMatch: 'full',
  },
];
