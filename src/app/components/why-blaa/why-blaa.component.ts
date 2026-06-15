import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { DIFFERENTIALS } from '../../shared/data/differentials.data';
import { Differential } from '../../shared/models';

@Component({
  selector: 'app-why-blaa',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  templateUrl: './why-blaa.component.html',
  styleUrl: './why-blaa.component.scss',
})
export class WhyBlaaComponent {
  readonly differentials: Differential[] = DIFFERENTIALS;
}
