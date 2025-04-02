import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-seo',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './seo.component.html',
  styleUrls: ['./seo.component.scss'],
})
export class SeoComponent {
  contactForm: FormGroup;

  // Servicios específicos de SEO
  servicios = [
    {
      titulo: 'SEO On-Page',
      descripcion:
        'Optimizamos cada elemento de tu sitio web para mejorar su posicionamiento en los motores de búsqueda.',
      icono: 'bi bi-file-code',
    },
    {
      titulo: 'SEO Off-Page',
      descripcion:
        'Estrategias de construcción de enlaces y presencia digital para aumentar la autoridad de tu sitio.',
      icono: 'bi bi-link-45deg',
    },
    {
      titulo: 'Análisis de Competencia',
      descripcion:
        'Estudiamos a tus competidores para identificar oportunidades y crear estrategias que te destaquen.',
      icono: 'bi bi-graph-up',
    },
    {
      titulo: 'SEO Local',
      descripcion:
        'Posicionamos tu negocio para búsquedas locales aumentando tu visibilidad en tu área geográfica.',
      icono: 'bi bi-geo-alt',
    },
  ];

  // Métricas clave
  metricas = [
    {
      valor: '85%',
      titulo: 'Aumento en tráfico orgánico',
      descripcion: 'Promedio de crecimiento en los primeros 6 meses',
    },
    {
      valor: 'Top 10',
      titulo: 'Posiciones en Google',
      descripcion: 'Para palabras clave principales del negocio',
    },
    {
      valor: '40%',
      titulo: 'Reducción de rebote',
      descripcion: 'Mejora en la retención de usuarios',
    },
    {
      valor: '3x',
      titulo: 'Aumento de conversiones',
      descripcion: 'Mayor tasa de conversión desde buscadores',
    },
  ];

  // Proceso de trabajo
  proceso = [
    {
      paso: 1,
      titulo: 'Análisis Inicial',
      descripcion:
        'Evaluamos tu sitio web y su posición actual en los buscadores.',
    },
    {
      paso: 2,
      titulo: 'Estrategia Personalizada',
      descripcion:
        'Desarrollamos un plan específico para tus necesidades y objetivos.',
    },
    {
      paso: 3,
      titulo: 'Implementación',
      descripcion:
        'Aplicamos técnicas de SEO on-page y off-page para mejorar tu posicionamiento.',
    },
    {
      paso: 4,
      titulo: 'Seguimiento y Optimización',
      descripcion:
        'Monitoreamos resultados y ajustamos la estrategia para maximizar el rendimiento.',
    },
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      sitioWeb: ['', [Validators.required]],
      mensaje: [''],
    });
  }

  // Método para enviar el formulario
  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Aquí iría la lógica para enviar el formulario a un servicio
      this.contactForm.reset();
      // Mostrar mensaje de éxito
    }
  }
}
