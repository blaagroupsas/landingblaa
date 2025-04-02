import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-branding',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './branding.component.html',
  styleUrls: ['./branding.component.scss'],
})
export class BrandingComponent {
  contactForm: FormGroup;
  isSubmitted = false;

  services = [
    {
      title: 'Identidad Visual',
      description:
        'Creación de logos, paletas de colores y elementos visuales que definan la personalidad de tu marca.',
      icon: 'bi bi-palette',
    },
    {
      title: 'Diseño de Marca',
      description:
        'Desarrollo completo de tu marca, incluyendo logo, tipografía, colores y guía de estilo.',
      icon: 'bi bi-vector-pen',
    },
    {
      title: 'Diseño Editorial',
      description:
        'Diseño de materiales impresos como catálogos, revistas, folletos y otros documentos corporativos.',
      icon: 'bi bi-journal-richtext',
    },
    {
      title: 'Presencia Digital',
      description:
        'Adaptación de tu identidad visual a medios digitales, redes sociales y plataformas web.',
      icon: 'bi bi-laptop',
    },
  ];

  processSteps = [
    {
      number: '01',
      title: 'Descubrimiento',
      description:
        'Entendemos tu negocio, valores y objetivos mediante entrevistas y análisis.',
    },
    {
      number: '02',
      title: 'Estrategia',
      description:
        'Desarrollamos el concepto y la dirección creativa basados en la investigación.',
    },
    {
      number: '03',
      title: 'Diseño',
      description:
        'Creamos propuestas visuales alineadas con tu estrategia de marca.',
    },
    {
      number: '04',
      title: 'Implementación',
      description:
        'Finalizamos los elementos de marca y entregamos los archivos en todos los formatos necesarios.',
    },
  ];

  portfolioItems = [
    {
      title: 'Rediseño de marca',
      client: 'Empresa de Tecnología',
      imageUrl: 'assets/images/portfolio-1.jpg',
    },
    {
      title: 'Identidad corporativa',
      client: 'Cafetería Artesanal',
      imageUrl: 'assets/images/portfolio-2.jpg',
    },
    {
      title: 'Branding completo',
      client: 'Estudio Creativo',
      imageUrl: 'assets/images/portfolio-3.jpg',
    },
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
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
