// Site-wide constants. Italian-language site.

export const SITE = {
  url: 'https://www.santeligio.com',
  title: "Compagnia di Sant'Eligio",
  description:
    "Sito ufficiale della Compagnia di Sant'Eligio di Vernante: la storia dei Carrettieri della Valle Vermenagna, i soci e le novità della Compagnia.",
  lang: 'it',
  email: 'info@santeligio.com',
} as const;

// Members of the Compagnia, in order of seniority; the first holds the office
// of Priore. Names are data, not copy, so they live here rather than being
// repeated in every locale's dictionary.
export const SOCI = [
  'Macario Livio',
  'Macario Fulvio',
  'Macario Andrea',
  'Macario Loris',
  'Pettavino Adriana',
  'Pettavino Miriana',
  'Macario Christian',
  'Risso Francesco',
  'Pettavino Paolo',
  'Macario Gianpaolo',
  'Bertaina Mario',
  'Macario Gianmarco',
] as const;

// `key` looks the label up in the per-locale dictionaries (src/i18n); the href
// is the unprefixed Italian path, which localePath() maps into each locale.
export const NAV = [
  { key: 'home', href: '/' },
  { key: 'storia', href: '/storia' },
  { key: 'baja', href: '/baja' },
  { key: 'news', href: '/news' },
  { key: 'galleria', href: '/galleria' },
  { key: 'contatti', href: '/contatti' },
] as const;
