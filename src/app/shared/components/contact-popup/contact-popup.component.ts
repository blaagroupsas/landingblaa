import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-popup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-popup.component.html',
  styleUrls: ['./contact-popup.component.scss'],
})
export class ContactPopupComponent {
  @Output() closeEvent = new EventEmitter<void>();

  isVisible = false;
  contactForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      service: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  show() {
    this.isVisible = true;
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body
  }

  close() {
    this.isVisible = false;
    document.body.style.overflow = ''; // Restaurar scroll del body
    this.closeEvent.emit();
  }

  closePopup(event: Event) {
    if (
      (event.target as HTMLElement).classList.contains('contact-popup-overlay')
    ) {
      this.close();
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', this.contactForm.value);

    // Simulación de éxito
    this.success = true;
    this.submitted = false;
    this.contactForm.reset();

    // Cerrar el popup después de mostrar mensaje de éxito
    setTimeout(() => {
      this.success = false;
      this.close();
    }, 3000);
  }
}
