import {
  Component,
  ChangeDetectionStrategy,
  signal,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RevealDirective } from '../../shared/reveal.directive';
import { SERVICES } from '../../shared/data/services.data';
import { Service } from '../../shared/models';
import { Dialog } from 'primeng/dialog';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-services',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective, Dialog, Button],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  private readonly platformId = inject(PLATFORM_ID);

  readonly services: Service[] = SERVICES;
  activeService = signal<Service | null>(null);
  dialogVisible = signal(false);

  openModal(service: Service): void {
    this.activeService.set(service);
    this.dialogVisible.set(true);
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden';
    }
  }

  closeModal(): void {
    this.dialogVisible.set(false);
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
    setTimeout(() => this.activeService.set(null), 300);
  }

  onDialogVisibleChange(visible: boolean): void {
    if (!visible) this.closeModal();
  }
}
