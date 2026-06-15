import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

interface BrandValue {
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  values: BrandValue[] = [
    {
      title: 'Excelencia',
      description: 'Buscamos la máxima calidad en cada proyecto que emprendemos.',
    },
    {
      title: 'Innovación',
      description: 'Aplicamos las últimas tendencias y tecnologías del marketing digital.',
    },
    {
      title: 'Resultados',
      description: 'Nos enfocamos en métricas y objetivos claros que impactan tu negocio.',
    },
  ];
}
