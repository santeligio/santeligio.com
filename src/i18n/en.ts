import type { it } from './it';

// English copy. Piedmontese and historical terms are deliberately left in the
// original — Baja, Abbà, Cartunè, Priore, ciuchinere, "La Mandoulera" — and
// glossed on first use, because they name specific local things that have no
// English equivalent. Needs review by someone who knows the tradition.
export const en: typeof it = {
  code: 'en',
  label: 'English',
  htmlLang: 'en',
  ogLocale: 'en_GB',
  dateLocale: 'en-GB',

  siteDescription:
    "Official website of the Compagnia di Sant'Eligio of Vernante: the history of the carters of the Vermenagna valley, its members and its news.",

  nav: {
    home: 'Home',
    storia: 'History',
    baja: 'The Baja',
    news: 'News',
    galleria: 'Gallery',
    contatti: 'Contact',
  },

  ui: {
    skipToContent: 'Skip to content',
    mainNav: 'Main navigation',
    footerNav: 'Footer navigation',
    menu: 'Menu',
    close: 'Close',
    language: 'Language',
    footerTagline: 'Vernante (CN), Italy — a long history we like to remember.',
    footerPages: 'Pages',
    footerContacts: 'Contact',
    rightsReserved: 'All rights reserved.',
    privacy: 'Privacy',
  },

  hint: {
    fallback:
      "This site is written in Italian. Use your browser's built-in translation to read it in your language.",
    available: 'This site is also available in {lang}.',
    switchTo: 'Read in {lang}',
  },

  home: {
    heroTitle: "Compagnia di Sant'Eligio",
    heroSubtitle: 'A long history we like to remember',
    heroAlt: "Historic photograph of the Compagnia di Sant'Eligio, around 1900",
    cta: 'Discover the history',
    quote:
      '"We want to carry on a tradition that has been repeating for two hundred years."',
    sociTitle: 'The members of the Compagnia',
    sociAlt: 'Group photograph of the members of the Compagnia, July 2024',
    sociCta: 'Details',
    eventsTitle: 'Upcoming events',
    eventsBody:
      "Come to Vernante town hall to see the Compagnia's historic banner after its restoration!",
  },

  storia: {
    metaTitle: 'History',
    metaDescription:
      "The history of the Compagnia di Sant'Eligio of Vernante, from the carters of 1858 to today's members.",
    heroTitle: "Compagnia di Sant'Eligio — About us",
    heroAlt: 'Page from the 1858 Convention',
    sectionsNav: 'Page sections',
    linkStoria: 'History',
    linkSoci: 'List of members',
    body: [
      'The earliest record of the Compagnia di Sant\'Eligio of Vernante dates from 5 April 1858, when some twenty members who worked as carters signed the Convention — "Cartouné" in the dialect of Vernante.',
      'The trade of the "Cartouné" — comparable to that of a lorry driver today — was a very profitable one in the Vermenagna valley, which has always been a route between the province of Cuneo and the sea.',
      "The Compagnia di Sant'Eligio is made up of the descendants of its founding members, and passes strictly down the line of seniority to the youngest male descendant.",
    ],
    photoAlt: 'Members in 2026',
    sociTitle: 'The members of the Compagnia',
    sociUpdated: '(Last updated: 12 July 2026)',
    priore: '(Priore)',
  },

  baja: {
    metaTitle: 'The Baja',
    metaDescription:
      "The Baja of Vernante and the handover of the Compagnia di Sant'Eligio: its origins, the emblems of the Abbà, and the rite that renews the tradition each year.",
    heroTitle: 'The Baja of Vernante',
    heroAlt: 'The Abbà and members of the Compagnia with halberds and banner',
    intro: [
      "Each year, on the church forecourt, the Compagnia di Sant'Eligio renews the rite of the handover: the outgoing Abbà entrusts to his successor the halberds and the register of the Compagnia, and with them the duty of keeping, for a year, a tradition passed down in Vernante for centuries.",
      'The text below accompanies the ceremony: it recounts its origins, explains what the emblems of the Abbà mean, and describes the gesture by which the tradition changes hands.',
    ],
    textTitle: 'The Handover of the Baja of Vernante',
    byline: 'Text by',
    author: 'Loretta Macario',
    translationNote:
      'English translation of the Italian original. Terms belonging to the local tradition are left in the original language.',
    before: [
      'Welcome to you all, citizens and guests of Vernante! We find ourselves today at the beating heart of our oldest festival, a moment in which the present bows respectfully to history.',
      'To grasp fully the magic of what we are about to witness, we must step back in time. It all begins with the venerable Compagnia di Sant\'Eligio, formally set down in a written convention on 5 April 1858, but rooted in a far more distant past. Founded to care for and restore the chapel dedicated to the Saint — patron of the Cartunè, the carters who traded in timber and other goods — this association is an unbreakable bond between the generations. To this day, to belong to the "Baja" under the protection of Sant\'Eligio, one must be descended from a small circle of the village\'s historic families — the Macario, the Bertaina, the Risso — who for centuries handed down the old and arduous trade of the "Cartunè".',
      'But what exactly is the Baja? It is a re-enactment of medieval origin whose roots reach back to around the year 970. Legend tells that, under the leadership of the Abbà themselves, the people of the Vernante valley rose up with courage against the fearsome Saracen incursions from Spain.',
      'Today, the figures at the very centre of it, before your eyes, are the Abbà. There is no hierarchy among them: there is a single Priore, who holds office for one year, and at his side his loyal companions. You will know them at once by their proud emblems:',
    ],
    items: [
      {
        name: 'The Halberd',
        text: 'a round wooden shaft topped with a forked and jagged iron point, adorned with a red ribbon hanging from above: the symbol of command.',
      },
      {
        name: 'The Hat',
        text: 'a black hat trimmed with embroidered ribbons of many colours, crowned with a lively spray of artificial flowers and a brightly coloured plume.',
      },
      {
        name: 'The Mules',
        text: 'which we no longer have today, but which were once the true travelling companions of the old carters. On feast days they were decked out with coloured ribbons and the traditional "ciuchinere", the bells that ring out festively at the animals\' muzzle and neck (each family had its own, with a matching coloured "blanket" to dress the horse or mule)',
      },
    ],
    after: [
      'And so we come to the most important and most solemn moment of the celebration. On the church forecourt, after Mass has been celebrated, the outgoing Abbà and the incoming Abbà stand face to face for the handover.',
      'What passes into the hands of the new Priore is not merely a baton, but the history of Vernante itself. The old Abbà formally hands over to the new one the dressed halberds, symbol of the authority and leadership of the Compagnia, and the register of the Compagnia, which holds the names of all those who have held this office over the years. With this gesture, the tradition has officially been passed on.',
      'Immediately after this handover, solemnity once gave way to sheer popular joy. From the little square known as "La Mandoulera" the traditional parade of the "ancient horsemen" would set off: a cheerful, colourful procession winding through the streets of the village, re-enacting that old "people\'s army" celebrating victory and freedom regained. Long live the Baja, long live the Compagnia di Sant\'Eligio, and a good handover to all!',
    ],
    closingBefore:
      'The text of the handover is by Loretta Macario, whom we thank. For more on the history of the Compagnia and the list of members, see the ',
    closingLink: 'History',
    closingAfter: ' page.',
  },

  galleria: {
    metaTitle: 'Gallery',
    metaDescription:
      "Historic and recent photographs of the Compagnia di Sant'Eligio.",
    heroTitle: 'Gallery',
    intro:
      'A first collection of photographs of the Compagnia. The gallery will grow as more historic and photographic material becomes available.',
    enlarged: 'Enlarged image',
    prev: 'Previous image',
    next: 'Next image',
    openOriginal: 'Open the original image',
    counter: '{n} of {total}',
    genericAlt: "Photograph from the archive of the Compagnia di Sant'Eligio",
    captions: {
      'santeligio_1900.jpg':
        'Historic photograph of the Compagnia, around 1900',
      '20190818-convenzione-1858-pag1.jpg': 'Page from the 1858 Convention',
      'santeligio_2023.jpg': 'Register of the Compagnia, 2023 edition',
      '20231125-142120.jpg':
        'A moment in the life of the Compagnia, November 2023',
      '20231125-142205.jpg':
        'A moment in the life of the Compagnia, November 2023',
      'wa-2024-06-10-133426-1.jpeg': 'Photograph of the Compagnia, June 2024',
      '2024-07-07-foto-gruppo-compagnia.jpg':
        'Group photograph of the members of the Compagnia, July 2024',
      '2025-07-13-foto-gruppo-compagnia.jpg':
        'Group photograph of the members of the Compagnia, July 2025',
      '2026-07-12-foto-gruppo-compagnia.jpg':
        'Group photograph of the members of the Compagnia, July 2026',
    } as Record<string, string>,
  },

  contatti: {
    metaTitle: 'Contact',
    metaDescription: "How to contact the Compagnia di Sant'Eligio of Vernante.",
    heroTitle: 'Contact',
    intro:
      'For information, enquiries or to get in touch, please write to us at:',
    privacyTitle: 'Privacy',
    privacyBody:
      'The historical and archival material published on this site is documentary in nature. The names of living members are published only with their consent. For requests concerning your own data, please write to the address above. Read the ',
    privacyLink: 'full privacy notice',
  },

  privacy: {
    metaTitle: 'Privacy',
    metaDescription:
      "Privacy notice for the website of the Compagnia di Sant'Eligio of Vernante.",
    heroTitle: 'Privacy',
    updated: 'Last updated: 25 July 2026.',
    controllerTitle: 'Data controller',
    controllerBody: "Compagnia di Sant'Eligio of Vernante — contact:",
    dataTitle: 'Data collected',
    dataBody:
      'This is a static site: there is no registration, no user account, no sign-up form and no online purchasing. We use no profiling or third-party cookies, and we show no advertising.',
    statsTitle: 'Usage statistics',
    statsBefore: 'To understand how many people visit the site we use',
    statsAfter:
      ', a service that measures visits in aggregate without using cookies and without storing anything that would identify or track individual visitors across sites.',
    archiveTitle: 'Historical material and names',
    archiveBody:
      'The historical and archival material published on this site (photographs, registers, lists) is documentary in nature. The names of living members are published only with their consent.',
    rightsTitle: 'Your rights',
    rightsBody:
      'To ask for the removal or correction of information concerning you — a photograph or a name, for instance — write to the address above and we will reply as soon as we can.',
    changesTitle: 'Changes to this notice',
    changesBody:
      'This page may be updated in future, for example if the services the site uses change. The date of the last update is shown at the top of the page.',
  },

  news: {
    metaTitle: 'News',
    metaDescription: "News and updates from the Compagnia di Sant'Eligio.",
    heroTitle: 'News',
    heroSubtitle: 'News from the Compagnia',
    heroAlt: 'Register of the Compagnia',
    empty: 'No news has been published yet.',
    italianOnly:
      "The entries below are snapshots of the Compagnia's register and are published in Italian only: they consist almost entirely of members' names.",
    backToNews: '← All news',
  },

  notFound: {
    metaTitle: 'Page not found',
    title: 'Page not found',
    body: 'The page you are looking for no longer exists or has been moved.',
    cta: 'Back to the home page',
  },
};
