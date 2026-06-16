import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { CLIENTS } from '../../shared/data/clients.data';
import { Client } from '../../shared/models';

@Component({
  selector: 'app-clients',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
})
export class ClientsComponent {
  readonly clients: Client[] = CLIENTS;

  readonly marqueeTrack1: Client[] = [...CLIENTS, ...CLIENTS];
  readonly marqueeTrack2: Client[] = [
    ...CLIENTS.slice(6), ...CLIENTS.slice(0, 6),
    ...CLIENTS.slice(6), ...CLIENTS.slice(0, 6),
  ];
}
