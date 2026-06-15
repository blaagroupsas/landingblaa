import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { from, Observable, of } from 'rxjs';

declare const grecaptcha: {
  ready: (cb: () => void) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
};

@Injectable({ providedIn: 'root' })
export class RecaptchaService {
  private readonly platformId = inject(PLATFORM_ID);
  private scriptLoaded = false;

  load(siteKey: string): void {
    if (!isPlatformBrowser(this.platformId) || this.scriptLoaded || !siteKey) return;
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    this.scriptLoaded = true;
  }

  execute(siteKey: string, action: string): Observable<string> {
    if (!siteKey) return of(''); // omitir en local si no hay key
    return from(
      new Promise<string>((resolve, reject) => {
        grecaptcha.ready(() => {
          grecaptcha.execute(siteKey, { action }).then(resolve).catch(reject);
        });
      }),
    );
  }
}
