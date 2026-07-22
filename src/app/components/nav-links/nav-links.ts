import { Component, EventEmitter, Output } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-nav-links',
  imports: [TranslocoPipe],
  templateUrl: './nav-links.html',
  styleUrl: './nav-links.scss',
})
export class NavLinks {
  @Output() readonly linkSelected = new EventEmitter<void>();
}
