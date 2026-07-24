import { DOCUMENT } from '@angular/common';
import { Component, HostListener, OnDestroy, Renderer2, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';
import { LanguageSwitch } from '../language-switch/language-switch';
import { NavFooter } from '../nav-footer/nav-footer';
import { NavLinks } from '../nav-links/nav-links';

@Component({
  selector: 'app-header',
  imports: [LanguageSwitch, NavFooter, NavLinks, RouterLink, TranslocoPipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnDestroy {
  protected readonly menuOpen = signal(false);
  protected readonly menuAnimated = signal(false);

  private readonly document = inject(DOCUMENT);
  private readonly renderer = inject(Renderer2);

  protected toggleMenu(): void {
    this.menuAnimated.set(true);
    this.setMenuOpen(!this.menuOpen());
  }

  protected closeMenu(): void {
    if (this.menuOpen()) {
      this.setMenuOpen(false);
    }
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.closeMenu();
  }

  ngOnDestroy(): void {
    this.renderer.removeStyle(this.document.body, 'overflow');
  }

  private setMenuOpen(isOpen: boolean): void {
    this.menuOpen.set(isOpen);

    if (isOpen) {
      this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
    } else {
      this.renderer.removeStyle(this.document.body, 'overflow');
    }
  }
}
