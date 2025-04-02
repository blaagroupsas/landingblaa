import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent {
  testimonials = [
    {
      id: 1,
      quote:
        'Aumentamos nuestras ventas en un 200% en solo 6 meses gracias a las estrategias implementadas por Blaa Group.',
      name: 'Ana García',
      position: 'CEO - Empresa de Retail',
      image: 'images/testimonial.jpg',
    },
    {
      id: 2,
      quote:
        'Las mejores estrategias de marketing para nuestra marca. Profesionales, atentos y con excelentes resultados.',
      name: 'Luis Pérez',
      position: 'Director de Marketing - StartUp',
      image: 'images/testimonial.jpg',
    },
    {
      id: 3,
      quote:
        'Profesionales comprometidos con resultados medibles. Han transformado nuestra presencia digital.',
      name: 'María López',
      position: 'CMO - Empresa Internacional',
      image: 'images/testimonial.jpg',
    },
  ];
}
