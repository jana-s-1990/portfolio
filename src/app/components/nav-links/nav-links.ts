import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-nav-links',
  imports: [RouterLink, TranslocoPipe],
  templateUrl: './nav-links.html',
  styleUrl: './nav-links.scss',
})
export class NavLinks {
  @Output() readonly linkSelected = new EventEmitter<void>();
}
