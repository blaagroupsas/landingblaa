import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  services = [
    {
      id: 1,
      title: 'Gestión de Redes Sociales',
      description:
        'Creación de contenido, publicidad, engagement y análisis de resultados',
      icon: 'bi-graph-up',
    },
    {
      id: 2,
      title: 'Desarrollo Web',
      description: 'Landing pages, e-commerce, UI/UX y desarrollo a medida',
      icon: 'bi-code-slash',
    },
    {
      id: 3,
      title: 'SEO y Posicionamiento',
      description: 'Google Ads, SEM, estrategias de conversión',
      icon: 'bi-search',
    },
    {
      id: 4,
      title: 'Branding y Diseño',
      description: 'Identidad visual, video marketing',
      icon: 'bi-palette',
    },
    {
      id: 5,
      title: 'E-learning y Formación Digital',
      description:
        'Plataformas educativas, cursos online y capacitación virtual',
      icon: 'bi-mortarboard',
    },
  ];
}
