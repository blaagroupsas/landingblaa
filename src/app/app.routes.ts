import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Blaa Group | Agencia de Marketing Digital para Pymes Colombianas',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
