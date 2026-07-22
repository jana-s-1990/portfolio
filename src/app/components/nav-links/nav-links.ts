import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-links',
  imports: [],
  templateUrl: './nav-links.html',
  styleUrl: './nav-links.scss',
})
export class NavLinks {
  @Output() readonly linkSelected = new EventEmitter<void>();
}
