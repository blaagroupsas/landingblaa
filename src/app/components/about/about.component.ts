import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  // Método para obtener URL completa de assets
  getUrl(imageName: string): string {
    return `images/${imageName}`;
  }

  teamMembers = [
    {
      id: 1,
      name: 'Sandra Paola Moncaleano Tusso',
      position: 'Art Director & UX Designer',
      description:
        'Directora de Arte y Diseñadora UX con amplia experiencia en diseño digital y gráfico. Especialista en guiones instruccionales, redacción creativa y creación de contenidos impactantes.',
      image: 'profile2.jpg',
    },
    {
      id: 2,
      name: 'Jorge Daniel León Prieto',
      position: 'Full Stack Developer',
      description:
        'Desarrollador Full Stack especializado en tecnologías Front-end y Back-end. Aporta soluciones técnicas innovadoras y escalables para los proyectos más desafiantes de nuestros clientes.',
      image: 'profile1.jpg',
    },
  ];
}
