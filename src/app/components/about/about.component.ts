import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { BrandValue } from '../../models';

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
      title: 'Estrategia antes que táctica',
      description: 'Antes de publicar un solo peso en pauta, entendemos tu negocio, tu mercado y a quién le hablas.',
    },
    {
      title: 'Medición constante',
      description: 'Cada decisión tiene un número detrás. Reportamos lo que importa, no lo que se ve bien en pantalla.',
    },
    {
      title: 'Foco en el mercado local',
      description: 'Conocemos el mercado colombiano: sus ritmos, sus plataformas y cómo compra el cliente hoy.',
    },
  ];
}
