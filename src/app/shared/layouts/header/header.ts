import { DOCUMENT } from '@angular/common';
import { Component, HostListener, inject, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnDestroy {
  private readonly document = inject(DOCUMENT);
  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((isOpen) => !isOpen);
    this.document.body.classList.toggle('menu-open', this.menuOpen());
  }

  @HostListener('document:keydown.escape')
  protected closeMenu(): void {
    this.menuOpen.set(false);
    this.document.body.classList.remove('menu-open');
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('menu-open');
  }
}
