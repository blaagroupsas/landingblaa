import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss'],
})
export class SocialMediaComponent {
  contactForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    // Aquí iría la lógica para enviar el formulario a un backend
    console.log('Formulario enviado:', this.contactForm.value);

    // Simulamos éxito (en producción, esto se haría después de recibir respuesta del backend)
    this.success = true;
    this.contactForm.reset();
    this.submitted = false;

    // Resetear mensaje de éxito después de 5 segundos
    setTimeout(() => {
      this.success = false;
    }, 5000);
  }
}
