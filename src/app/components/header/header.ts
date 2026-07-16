import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly menuOpen = signal(false);
  protected readonly menuAnimated = signal(false);

  protected toggleMenu(): void {
    this.menuAnimated.set(true);
    this.menuOpen.update((isOpen) => !isOpen);
  }
}
