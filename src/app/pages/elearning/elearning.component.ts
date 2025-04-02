import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-elearning',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './elearning.component.html',
  styleUrls: ['./elearning.component.scss'],
})
export class ElearningComponent {
  contactForm: FormGroup;
  isSubmitted = false;

  solutions = [
    {
      title: 'Plataformas LMS Personalizadas',
      description:
        'Desarrollo de entornos de aprendizaje adaptados a las necesidades específicas de tu organización.',
      icon: 'bi bi-laptop',
    },
    {
      title: 'Contenido Interactivo',
      description:
        'Creación de materiales didácticos multimedia que mejoran la retención y el compromiso.',
      icon: 'bi bi-file-earmark-richtext',
    },
    {
      title: 'Formación Corporativa',
      description:
        'Programas de capacitación a medida para empleados con seguimiento de progreso y certificaciones.',
      icon: 'bi bi-briefcase',
    },
    {
      title: 'Microlearning',
      description:
        'Contenidos formativos breves y específicos para aprendizaje efectivo en entornos laborales dinámicos.',
      icon: 'bi bi-hourglass-split',
    },
  ];

  benefits = [
    {
      title: 'Flexibilidad Horaria',
      description:
        'Acceso a la formación en cualquier momento y desde cualquier lugar, adaptándose a las necesidades de cada alumno.',
      icon: 'bi bi-clock',
    },
    {
      title: 'Reducción de Costes',
      description:
        'Elimina gastos de desplazamiento, material físico y otros costes asociados a la formación tradicional.',
      icon: 'bi bi-piggy-bank',
    },
    {
      title: 'Personalización',
      description:
        'Itinerarios formativos adaptados al ritmo y necesidades específicas de cada alumno o grupo.',
      icon: 'bi bi-person-gear',
    },
    {
      title: 'Datos y Analítica',
      description:
        'Medición precisa del progreso, compromiso y resultados de los programas formativos.',
      icon: 'bi bi-graph-up',
    },
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      company: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.isSubmitted = true;

    if (this.contactForm.valid) {
      // Aquí iría la lógica para enviar el formulario
      console.log('Formulario enviado', this.contactForm.value);
      this.contactForm.reset();
      this.isSubmitted = false;
    }
  }

  scrollToContact() {
    document
      .getElementById('contact-section')
      ?.scrollIntoView({ behavior: 'smooth' });
  }
}
