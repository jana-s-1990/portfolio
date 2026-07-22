import { DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { SupportedLanguage, persistLanguage } from '../../core/i18n/language';

@Component({
  selector: 'app-language-switch',
  imports: [TranslocoPipe],
  templateUrl: './language-switch.html',
  styleUrl: './language-switch.scss',
})
export class LanguageSwitch {
  private readonly document = inject(DOCUMENT);
  private readonly translocoService = inject(TranslocoService);

  protected readonly activeLanguage = toSignal(this.translocoService.langChanges$, {
    initialValue: this.translocoService.getActiveLang() as SupportedLanguage,
  });

  constructor() {
    this.document.documentElement.lang = this.activeLanguage();
  }

  protected selectLanguage(language: SupportedLanguage): void {
    this.translocoService.setActiveLang(language);
    persistLanguage(language);
    this.document.documentElement.lang = language;
  }
}
