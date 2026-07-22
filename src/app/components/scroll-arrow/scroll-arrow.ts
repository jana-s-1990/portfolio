import { AfterViewInit, Component, ElementRef, Input, OnDestroy, inject, signal } from '@angular/core';

@Component({
  selector: 'app-scroll-arrow',
  imports: [],
  templateUrl: './scroll-arrow.html',
  styleUrl: './scroll-arrow.scss',
})
export class ScrollArrow implements AfterViewInit, OnDestroy {
  @Input() side: 'left' | 'right' = 'left';

  protected readonly isVisible = signal(false);

  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (typeof IntersectionObserver === 'undefined') {
      this.isVisible.set(true);
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => this.isVisible.set(entry.isIntersecting),
      { threshold: 0.35 },
    );
    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
