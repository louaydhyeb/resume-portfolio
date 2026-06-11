import { en } from './en';
import { fr } from './fr';
import type { Lang, Translation } from './types';

export type { Lang, Translation };

export const translations: Record<Lang, Translation> = { fr, en };

export const defaultLang: Lang = 'fr';

export function detectBrowserLang(): Lang {
  if (typeof navigator === 'undefined') return defaultLang;
  return navigator.language.startsWith('fr') ? 'fr' : 'en';
}
