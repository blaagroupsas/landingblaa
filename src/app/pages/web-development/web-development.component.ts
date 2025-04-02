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
  selector: 'app-web-development',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './web-development.component.html',
  styleUrls: ['./web-development.component.scss'],
})
export class WebDevelopmentComponent {
  contactForm: FormGroup;

  // Array de proyectos web que ofrecemos
  proyectos = [
    {
      titulo: 'Sitios Web Corporativos',
      descripcion:
        'Creamos sitios web profesionales que reflejan la identidad de tu empresa y conectan con tu audiencia.',
      icono: 'bi bi-building',
    },
    {
      titulo: 'Tiendas Online',
      descripcion:
        'Desarrollamos e-commerce optimizados para ventas, con experiencias de compra fluidas y seguras.',
      icono: 'bi bi-cart',
    },
    {
      titulo: 'Aplicaciones Web',
      descripcion:
        'Diseñamos aplicaciones web personalizadas para resolver necesidades específicas de tu negocio.',
      icono: 'bi bi-window',
    },
    {
      titulo: 'Landing Pages',
      descripcion:
        'Creamos páginas de aterrizaje enfocadas en la conversión para tus campañas de marketing.',
      icono: 'bi bi-graph-up',
    },
  ];

  // Array de tecnologías que utilizamos
  tecnologias = [
    { nombre: 'Angular', icono: 'bi bi-code-slash' },
    { nombre: 'React', icono: 'bi bi-code-square' },
    { nombre: 'Node.js', icono: 'bi bi-hdd-network' },
    { nombre: 'TypeScript', icono: 'bi bi-file-earmark-code' },
    { nombre: 'MongoDB', icono: 'bi bi-database' },
    { nombre: 'AWS', icono: 'bi bi-cloud' },
  ];

  // Array de casos de éxito
  casosExito = [
    {
      cliente: 'TechSolutions Inc.',
      descripcion:
        'Rediseñamos su plataforma de servicios, logrando un aumento del 45% en conversiones y reducción del 30% en tiempo de carga.',
      imagen: 'assets/images/caso1.jpg',
    },
    {
      cliente: 'E-Market Group',
      descripcion:
        'Desarrollamos una tienda online que logró incrementar las ventas en un 120% durante los primeros 6 meses de implementación.',
      imagen: 'assets/images/caso2.jpg',
    },
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required]],
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
