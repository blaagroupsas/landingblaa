import {
  Component,
  ChangeDetectionStrategy,
  DestroyRef,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';

// Duración total de la intro: 2.8s de espera + 0.8s de salida (ver intro.component.scss)
const INTRO_DURATION_MS = 3600;
const SKIP_DURATION_MS = 450;

// Flag a nivel de módulo: sobrevive a re-creaciones del componente dentro de la misma carga
// de página (hidratación, re-render), así la intro solo se reproduce una vez por carga.
let introPlayed = false;

@Component({
  selector: 'app-intro',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
})
export class IntroComponent {
  // Arranca en false: la intro NO va en el HTML prerenderizado ni en la hidratación.
  // Se monta solo en el navegador, una vez, después del primer render.
  readonly visible = signal(false);
  readonly skipping = signal(false);

  private timer?: ReturnType<typeof setTimeout>;
  private skipTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      if (introPlayed) return;
      introPlayed = true;

      this.visible.set(true);
      this.timer = setTimeout(() => this.visible.set(false), INTRO_DURATION_MS);
    });

    destroyRef.onDestroy(() => {
      clearTimeout(this.timer);
      clearTimeout(this.skipTimer);
    });
  }

  // Clic o tecla: la intro sale rápido para no bloquear a quien ya quiere ver la página
  skip(): void {
    if (this.skipping() || !this.visible()) return;
    this.skipping.set(true);
    clearTimeout(this.timer);
    this.skipTimer = setTimeout(() => this.visible.set(false), SKIP_DURATION_MS);
  }
}
