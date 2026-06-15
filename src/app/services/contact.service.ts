import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactForm, ContactResponse } from '../models';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);

  submit(form: ContactForm, recaptchaToken: string): Observable<ContactResponse> {
    return this.http.post<ContactResponse>(`${environment.apiUrl}/contacts`, {
      ...form,
      recaptcha_token: recaptchaToken,
    });
  }
}
