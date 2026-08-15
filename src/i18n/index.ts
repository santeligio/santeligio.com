import { it } from './it';
import { en } from './en';

export const DEFAULT_LOCALE = 'it';

export const dictionaries = { it, en };

export type Locale = keyof typeof dictionaries;
export type Dictionary = typeof it;

/** Locales in the order the language switcher should list them. */
export const LOCALES = Object.keys(dictionaries) as Locale[];

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && value in dictionaries;
}

/** Copy for a locale, falling back to Italian for anything unrecognised. */
export function useTranslations(lang: string | undefined): Dictionary {
  return isLocale(lang) ? dictionaries[lang] : it;
}

/**
 * Locale of the page currently being rendered, derived from its URL. The
 * default locale is unprefixed, so anything without a known prefix is Italian.
 */
export function localeFromUrl(url: URL): Locale {
  const [first] = url.pathname.split('/').filter(Boolean);
  return isLocale(first) && first !== DEFAULT_LOCALE ? first : 'it';
}

/**
 * The path of `pathname` in `lang`. The default locale lives at the root, the
 * others under a prefix, so this strips any existing prefix before adding one.
 */
export function localePath(pathname: string, lang: Locale): string {
  const segments = pathname.split('/').filter(Boolean);
  if (isLocale(segments[0]) && segments[0] !== DEFAULT_LOCALE) segments.shift();
  const rest = segments.join('/');
  const base = lang === DEFAULT_LOCALE ? `/${rest}` : `/${lang}/${rest}`;
  // Keep Astro's trailing slash so the switcher never points at a redirect.
  return base.endsWith('/') ? base : `${base}/`;
}

/** Replace {placeholders} in a copy string. */
export function fill(
  template: string,
  values: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (match, key) =>
    key in values ? String(values[key]) : match,
  );
}
