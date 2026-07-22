export type SupportedLanguage = 'en' | 'de';

const storageKey = 'portfolio-language';

export function getInitialLanguage(): SupportedLanguage {
  try {
    const storedLanguage = globalThis.localStorage?.getItem(storageKey);

    if (storedLanguage === 'en' || storedLanguage === 'de') {
      return storedLanguage;
    }
  } catch {
    // Storage can be unavailable in privacy mode. Browser language remains the fallback.
  }

  return globalThis.navigator?.language.toLowerCase().startsWith('de') ? 'de' : 'en';
}

export function persistLanguage(language: SupportedLanguage): void {
  try {
    globalThis.localStorage?.setItem(storageKey, language);
  } catch {
    // The selected language still works for the current session without storage.
  }
}
