import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RevealDirective } from '../../shared/reveal.directive';
import { InputText } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { Textarea } from 'primeng/textarea';
import { Button } from 'primeng/button';

interface ContactForm {
  name: string;
  whatsapp: string;
  sector: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective, FormsModule, InputText, Select, Textarea, Button],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly sectors = [
    'Salud y Estética',
    'Servicios Profesionales',
    'Restaurantes y Gastronomía',
    'Educación',
    'Comercio y Retail',
    'Tecnología',
    'Otro',
  ];

  form = signal<ContactForm>({
    name: '',
    whatsapp: '',
    sector: '',
    message: '',
  });

  submitted = signal(false);
  submitting = signal(false);

  readonly isValid = computed(() => {
    const f = this.form();
    return f.name.trim().length >= 2 && f.whatsapp.trim().length >= 7 && f.sector !== '';
  });

  updateField(field: keyof ContactForm, value: string): void {
    this.form.update((f) => ({ ...f, [field]: value }));
  }

  onSubmit(): void {
    if (!this.isValid() || this.submitting()) return;
    this.submitting.set(true);

    const f = this.form();
    const text = encodeURIComponent(
      `Hola, soy ${f.name} 👋\n` +
        `Sector: ${f.sector}\n` +
        (f.message ? `\n${f.message}` : '')
    );

    window.open(`https://wa.me/573016742814?text=${text}`, '_blank');

    this.submitting.set(false);
    this.submitted.set(true);
  }

  reset(): void {
    this.submitted.set(false);
    this.form.set({ name: '', whatsapp: '', sector: '', message: '' });
  }
}
