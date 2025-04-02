// Contenido para app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'nosotros',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'servicios',
    children: [
      {
        path: 'redes-sociales',
        loadComponent: () =>
          import('./pages/social-media/social-media.component').then(
            (m) => m.SocialMediaComponent
          ),
        title: 'Gestión de Redes Sociales | Blaa Group',
      },
      {
        path: 'desarrollo-web',
        loadComponent: () =>
          import('./pages/web-development/web-development.component').then(
            (m) => m.WebDevelopmentComponent
          ),
        title: 'Desarrollo Web | Blaa Group',
      },
      {
        path: 'seo',
        loadComponent: () =>
          import('./pages/seo/seo.component').then((m) => m.SeoComponent),
        title: 'SEO y Posicionamiento | Blaa Group',
      },
      {
        path: 'branding',
        loadComponent: () =>
          import('./pages/branding/branding.component').then(
            (m) => m.BrandingComponent
          ),
        title: 'Branding y Diseño | Blaa Group',
      },
      {
        path: 'e-learning',
        loadComponent: () =>
          import('./pages/elearning/elearning.component').then(
            (m) => m.ElearningComponent
          ),
        title: 'E-learning y Formación Digital | Blaa Group',
      },
      { path: '', redirectTo: '/', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: '/' },
];
