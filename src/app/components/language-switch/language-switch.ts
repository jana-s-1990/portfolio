import { DOCUMENT } from '@angular/common';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-language-switch',
  imports: [],
  templateUrl: './language-switch.html',
  styleUrl: './language-switch.scss',
})
export class LanguageSwitch {
  protected readonly activeLanguage = signal<'en' | 'de'>('en');

  private readonly document = inject(DOCUMENT);

  protected selectLanguage(language: 'en' | 'de'): void {
    this.activeLanguage.set(language);
    this.document.documentElement.lang = language;
  }
}
