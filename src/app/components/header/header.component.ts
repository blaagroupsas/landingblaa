import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactPopupComponent } from '../../shared/components/contact-popup/contact-popup.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactPopupComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('contactPopup') contactPopup!: ContactPopupComponent;

  openContactPopup() {
    this.contactPopup.show();
  }
}
