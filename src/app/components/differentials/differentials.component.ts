import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-differentials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './differentials.component.html',
  styleUrls: ['./differentials.component.scss'],
})
export class DifferentialsComponent {
  differentials = [
    {
      id: 1,
      number: '+5',
      title: 'Equipo experto',
      description: 'Años de experiencia en marketing digital',
    },
    {
      id: 2,
      number: '+50',
      title: 'Clientes destacados',
      description: 'Marcas líderes que confían en nuestro trabajo',
    },
  ];
}
