import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { TranslocoService } from '@jsverse/transloco';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly titleService = inject(Title);
  private readonly translocoService = inject(TranslocoService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);

  protected readonly footerSloped = signal(this.isSubpage(this.router.url));

  constructor() {
    this.translocoService
      .selectTranslate('pageTitle')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((title) => this.titleService.setTitle(title));

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((event) => this.footerSloped.set(this.isSubpage(event.urlAfterRedirects)));
  }

  private isSubpage(url: string): boolean {
    const path = url.split(/[?#]/, 1)[0];
    return path !== '' && path !== '/';
  }
}
