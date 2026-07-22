import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, isDevMode, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideTransloco } from '@jsverse/transloco';

import { routes } from './app.routes';
import { getInitialLanguage } from './core/i18n/language';
import { TranslocoHttpLoader } from './core/i18n/transloco-http-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideTransloco({
      config: {
        availableLangs: ['en', 'de'],
        defaultLang: getInitialLanguage(),
        fallbackLang: 'en',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
  ],
};
