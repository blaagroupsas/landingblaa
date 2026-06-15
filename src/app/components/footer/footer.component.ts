import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly year = new Date().getFullYear();

  readonly navLinks = [
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: '¿Por qué Blaa?', href: '#por-que-blaa' },
    { label: 'Clientes', href: '#clientes' },
    { label: 'Contacto', href: '#contacto' },
  ];

  readonly socialLinks = [
    {
      label: 'Facebook Blaa Group',
      href: 'https://www.facebook.com/BlaaGroup',
      fill: true,
      icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
      extra: null,
    },
    {
      label: 'Instagram Blaa Group',
      href: 'https://www.instagram.com/blaa_group/',
      fill: false,
      icon: 'M4 2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2z',
      extra: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01',
    },
    {
      label: 'LinkedIn Blaa Group',
      href: 'https://www.linkedin.com/company/blaa-group/',
      fill: true,
      icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 100 4 2 2 0 000-4z',
      extra: null,
    },
    {
      label: 'X (Twitter) Blaa Group',
      href: 'https://x.com/BlaaGroup',
      fill: true,
      icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
      extra: null,
    },
  ];
}
