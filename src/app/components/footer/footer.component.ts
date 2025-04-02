import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'Nosotros', link: '#nosotros' },
    { label: 'Servicios', link: '#servicios' },
    { label: 'Portafolio', link: '#portafolio' },
    { label: 'Testimonios', link: '#testimonios' },
    { label: 'Contacto', link: '#contacto' },
  ];

  socialLinks = [
    { icon: 'bi-facebook', link: '#' },
    { icon: 'bi-instagram', link: '#' },
    { icon: 'bi-linkedin', link: '#' },
    { icon: 'bi-twitter-x', link: '#' },
  ];
}
