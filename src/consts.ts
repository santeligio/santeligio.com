// Site-wide constants. Italian-language site.

export const SITE = {
  url: 'https://www.santeligio.com',
  title: "Compagnia di Sant'Eligio",
  description:
    "Sito ufficiale della Compagnia di Sant'Eligio di Vernante: la storia dei Carrettieri della Valle Vermenagna, i soci e le novità della Compagnia.",
  lang: 'it',
  email: 'info@santeligio.com',
} as const;

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Storia', href: '/storia' },
  { label: 'News', href: '/news' },
  { label: 'Galleria', href: '/galleria' },
  { label: 'Contatti', href: '/contatti' },
] as const;
