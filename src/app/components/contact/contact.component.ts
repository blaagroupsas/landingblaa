import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
  inject,
  afterNextRender,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { switchMap } from 'rxjs';
import { RevealDirective } from '../../shared/reveal.directive';
import { ContactService } from '../../services/contact.service';
import { RecaptchaService } from '../../services/recaptcha.service';
import { ContactForm } from '../../models';
import { environment } from '../../../environments/environment';
import { InputText } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { Textarea } from 'primeng/textarea';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-contact',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective, FormsModule, InputText, Select, Textarea, Button],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly contactService = inject(ContactService);
  private readonly recaptchaService = inject(RecaptchaService);

  constructor() {
    afterNextRender(() => {
      this.recaptchaService.load(environment.recaptchaSiteKey);
    });
  }

  readonly sectors = [
    'Salud y Estética',
    'Servicios Profesionales',
    'Restaurantes y Gastronomía',
    'Educación',
    'Comercio y Retail',
    'Tecnología',
    'Otro',
  ];

  form = signal<ContactForm>({ name: '', whatsapp: '', sector: '', message: '' });
  submitted = signal(false);
  submitting = signal(false);
  submitError = signal(false);

  readonly isValid = computed(() => {
    const f = this.form();
    return f.name.trim().length >= 2 && f.whatsapp.trim().length >= 7 && f.sector !== '';
  });

  updateField(field: keyof ContactForm, value: string): void {
    this.submitError.set(false);
    this.form.update((f) => ({ ...f, [field]: value }));
  }

  onSubmit(): void {
    if (!this.isValid() || this.submitting()) return;

    this.submitting.set(true);
    this.submitError.set(false);

    const f = this.form();

    this.recaptchaService
      .execute(environment.recaptchaSiteKey, 'contact')
      .pipe(switchMap((token) => this.contactService.submit(f, token)))
      .subscribe({
        next: () => {
          this.submitting.set(false);
          this.submitted.set(true);
        },
        error: () => {
          this.submitting.set(false);
          this.submitError.set(true);
        },
      });
  }

  reset(): void {
    this.submitted.set(false);
    this.submitError.set(false);
    this.form.set({ name: '', whatsapp: '', sector: '', message: '' });
  }
}
