import type { it } from './it';

// French copy, translated from the Italian source. Piedmontese and historical
// terms are deliberately left in the original — Baja, Abbà, Cartunè, Priore,
// ciuchinere, "La Mandoulera" — and glossed on first use, because they name
// specific local things that have no French equivalent. Needs review by
// someone who knows the tradition.
export const fr: typeof it = {
  code: 'fr',
  label: 'Français',
  htmlLang: 'fr',
  ogLocale: 'fr_FR',
  dateLocale: 'fr-FR',

  siteDescription:
    "Site officiel de la Compagnia di Sant'Eligio de Vernante : l'histoire des charretiers de la vallée de la Vermenagna, ses membres et ses actualités.",

  nav: {
    home: 'Accueil',
    storia: 'Histoire',
    baja: 'La Baja',
    news: 'Actualités',
    galleria: 'Galerie',
    contatti: 'Contact',
  },

  ui: {
    skipToContent: 'Aller au contenu',
    mainNav: 'Navigation principale',
    footerNav: 'Navigation du pied de page',
    menu: 'Menu',
    close: 'Fermer',
    language: 'Langue',
    footerTagline:
      'Vernante (CN), Italie — une longue histoire que nous aimons rappeler.',
    footerPages: 'Pages',
    footerContacts: 'Contact',
    rightsReserved: 'Tous droits réservés.',
    privacy: 'Confidentialité',
  },

  hint: {
    fallback:
      "This site is written in Italian. Use your browser's built-in translation to read it in your language.",
    available: 'Ce site est également disponible en {lang}.',
    switchTo: 'Lire en {lang}',
  },

  home: {
    heroTitle: "Compagnia di Sant'Eligio",
    heroSubtitle: 'Une longue histoire que nous aimons rappeler',
    heroAlt:
      "Photographie historique de la Compagnia di Sant'Eligio, vers 1900",
    cta: "Découvrir l'histoire",
    quote:
      '« Nous voulons poursuivre une tradition qui se répète depuis deux cents ans. »',
    sociTitle: 'Les membres de la Compagnia',
    sociAlt: 'Photo de groupe des membres de la Compagnia, juillet 2024',
    sociCta: 'Détails',
    eventsTitle: 'Prochains rendez-vous',
    eventsBody:
      "Venez à la mairie de Vernante voir l'ancienne bannière de la Compagnia après sa restauration !",
  },

  storia: {
    metaTitle: 'Histoire',
    metaDescription:
      "L'histoire de la Compagnia di Sant'Eligio de Vernante, des charretiers de 1858 aux membres d'aujourd'hui.",
    heroTitle: "Compagnia di Sant'Eligio — Qui sommes-nous",
    heroAlt: 'Page de la Convention de 1858',
    sectionsNav: 'Sections de la page',
    linkStoria: 'Histoire',
    linkSoci: 'Liste des membres',
    body: [
      "Le plus ancien témoignage de la Compagnia di Sant'Eligio de Vernante remonte au 5 avril 1858, date de la Convention signée par une vingtaine de membres qui exerçaient le métier de charretier — « Cartouné » dans le dialecte de Vernante.",
      "Le métier de « Cartouné » — que l'on pourrait comparer à celui de routier aujourd'hui — était un métier très lucratif dans la vallée de la Vermenagna, qui a toujours été une voie de liaison entre la province de Cuneo et la mer.",
      "La Compagnia di Sant'Eligio est constituée des descendants de ses membres fondateurs, et se transmet rigoureusement par ordre d'ancienneté au plus jeune descendant mâle.",
    ],
    photoAlt: 'Membres en 2026',
    sociTitle: 'Les membres de la Compagnia',
    sociUpdated: '(Dernière mise à jour : 12 juillet 2026)',
    priore: '(Priore)',
  },

  baja: {
    metaTitle: 'La Baja',
    metaDescription:
      "La Baja de Vernante et le passage de témoin de la Compagnia di Sant'Eligio : ses origines, les emblèmes des Abbà et le rite qui renouvelle chaque année la tradition.",
    heroTitle: 'La Baja de Vernante',
    heroAlt:
      'Les Abbà et les membres de la Compagnia avec les hallebardes et le drapeau',
    intro: [
      "Chaque année, sur le parvis de l'église, la Compagnia di Sant'Eligio renouvelle le rite du passage de témoin : l'Abbà sortant confie à son successeur les hallebardes et le registre de la Compagnia, et avec eux la charge de garder, pendant un an, une tradition transmise à Vernante depuis des siècles.",
      'Le texte qui suit accompagne la cérémonie : il en raconte les origines, explique ce que signifient les emblèmes des Abbà et décrit le geste par lequel la tradition change de mains.',
    ],
    textTitle: 'Le passage de témoin de la Baja de Vernante',
    byline: 'Texte de',
    author: 'Loretta Macario',
    translationNote:
      "Traduction française de l'original italien. Les termes propres à la tradition locale sont laissés dans leur langue d'origine.",
    before: [
      "Bienvenue à vous tous, citoyens et hôtes de Vernante ! Nous nous trouvons aujourd'hui au cœur battant de notre plus ancienne fête, un moment où le présent s'incline respectueusement devant l'histoire.",
      "Pour saisir pleinement la magie de ce à quoi nous allons assister, il nous faut remonter dans le temps. Tout commence avec la vénérable Compagnia di Sant'Eligio, formellement établie par une convention écrite le 5 avril 1858, mais enracinée dans un passé bien plus lointain. Fondée pour entretenir et restaurer la chapelle dédiée au Saint — patron des Cartunè, les charretiers qui commerçaient le bois et d'autres marchandises — cette association est un lien indissoluble entre les générations. Aujourd'hui encore, pour appartenir à la « Baja » placée sous la protection de Sant'Eligio, il faut descendre d'un cercle restreint de familles historiques du village — les Macario, les Bertaina, les Risso — qui pendant des siècles ont transmis l'ancien et pénible métier des « Cartunè ».",
      "Mais qu'est-ce donc, exactement, que la Baja ? C'est une reconstitution d'origine médiévale dont les racines remontent à l'an 970 environ. La légende raconte que, sous la conduite même des chefs Abbà, les habitants de la vallée de Vernante se soulevèrent avec courage contre les terribles invasions sarrasines venues d'Espagne.",
      "Aujourd'hui, les protagonistes que vous voyez devant vous sont précisément les Abbà. Il n'existe aucune hiérarchie entre eux : il y a un seul Priore en fonction pour un an, et à ses côtés ses fidèles compagnons. Vous les reconnaîtrez aussitôt à leurs fiers emblèmes distinctifs :",
    ],
    items: [
      {
        name: 'La hallebarde',
        text: "une hampe ronde en bois surmontée d'une pointe de fer fourchue et dentelée, ornée d'un ruban rouge qui pend du haut, symbole du commandement.",
      },
      {
        name: 'Le chapeau',
        text: "un couvre-chef noir orné de rubans multicolores et brodés, surmonté d'un vif bouquet de fleurs artificielles et d'un panache bigarré.",
      },
      {
        name: 'Les mulets',
        text: "que nous n'avons plus aujourd'hui, mais qui étaient autrefois les véritables compagnons de route des anciens charretiers. Les jours de fête, ils étaient parés de rubans colorés et des traditionnelles « ciuchinere », les grelots qui résonnent en fête sur le museau et le cou des animaux (chaque famille avait les siens, avec la « couverture » colorée assortie pour habiller le cheval ou le mulet)",
      },
    ],
    after: [
      "Nous voici arrivés au moment le plus important et le plus solennel de la manifestation. Sur le parvis de l'église, après la célébration de la messe, l'Abbà sortant et l'Abbà entrant se retrouvent face à face pour le passage de témoin.",
      "Ce qui passe entre les mains du nouveau Priore n'est pas un simple témoin, mais l'histoire même de Vernante. L'ancien Abbà remet officiellement au nouveau les hallebardes parées, symbole de l'autorité et de la conduite de la Compagnia, ainsi que le registre de la Compagnia, qui conserve les noms de tous ceux qui ont exercé cette charge au fil des ans. Par ce geste, le témoin de la tradition est officiellement transmis.",
      "Aussitôt après ce passage, la solennité laissait autrefois place à la pure joie populaire. De la petite place appelée « La Mandoulera » partait le traditionnel défilé des « cavaliers anciens » : une parade joyeuse et colorée qui serpentait dans les rues du village, rejouant cette ancienne « armée populaire » célébrant la victoire et la liberté retrouvée. Vive la Baja, vive la Compagnia di Sant'Eligio, et bon passage de témoin à tous !",
    ],
    closingBefore:
      "Le texte du passage de témoin est de Loretta Macario, que nous remercions. Pour en savoir plus sur l'histoire de la Compagnia et la liste des membres, voir la page ",
    closingLink: 'Histoire',
    closingAfter: '.',
  },

  galleria: {
    metaTitle: 'Galerie',
    metaDescription:
      "Photographies historiques et récentes de la Compagnia di Sant'Eligio.",
    heroTitle: 'Galerie',
    intro:
      "Une première collection de photographies de la Compagnia. La galerie s'enrichira au fur et à mesure que d'autres documents historiques et photographiques seront disponibles.",
    enlarged: 'Image agrandie',
    prev: 'Image précédente',
    next: 'Image suivante',
    openOriginal: "Ouvrir l'image originale",
    counter: '{n} sur {total}',
    genericAlt: "Photographie des archives de la Compagnia di Sant'Eligio",
    captions: {
      'santeligio_1900.jpg':
        'Photographie historique de la Compagnia, vers 1900',
      '20190818-convenzione-1858-pag1.jpg': 'Page de la Convention de 1858',
      'santeligio_2023.jpg': 'Registre de la Compagnia, édition 2023',
      '20231125-142120.jpg':
        'Un moment de la vie de la Compagnia, novembre 2023',
      '20231125-142205.jpg':
        'Un moment de la vie de la Compagnia, novembre 2023',
      'wa-2024-06-10-133426-1.jpeg': 'Photographie de la Compagnia, juin 2024',
      '2024-07-07-foto-gruppo-compagnia.jpg':
        'Photo de groupe des membres de la Compagnia, juillet 2024',
      '2025-07-13-foto-gruppo-compagnia.jpg':
        'Photo de groupe des membres de la Compagnia, juillet 2025',
      '2026-07-12-foto-gruppo-compagnia.jpg':
        'Photo de groupe des membres de la Compagnia, juillet 2026',
    } as Record<string, string>,
  },

  contatti: {
    metaTitle: 'Contact',
    metaDescription:
      "Comment contacter la Compagnia di Sant'Eligio de Vernante.",
    heroTitle: 'Contact',
    intro:
      'Pour toute information, demande ou signalement, vous pouvez nous écrire à :',
    privacyTitle: 'Confidentialité',
    privacyBody:
      "Le matériel historique et archivistique publié sur ce site a un caractère documentaire. Les noms des membres vivants ne sont publiés qu'avec leur consentement. Pour toute demande concernant vos propres données, écrivez à l'adresse ci-dessus. Lisez la ",
    privacyLink: 'notice de confidentialité complète',
  },

  privacy: {
    metaTitle: 'Confidentialité',
    metaDescription:
      "Notice de confidentialité du site de la Compagnia di Sant'Eligio de Vernante.",
    heroTitle: 'Confidentialité',
    updated: 'Dernière mise à jour : 25 juillet 2026.',
    controllerTitle: 'Responsable du traitement',
    controllerBody: "Compagnia di Sant'Eligio de Vernante — contact :",
    dataTitle: 'Données collectées',
    dataBody:
      "Ce site est statique : il ne prévoit ni inscription, ni compte utilisateur, ni formulaire d'adhésion, ni achat en ligne. Nous n'utilisons aucun cookie de profilage ou tiers, et n'affichons aucune publicité.",
    statsTitle: "Statistiques d'utilisation",
    statsBefore:
      'Pour comprendre combien de personnes visitent le site, nous utilisons',
    statsAfter:
      ", un service qui mesure les visites de façon agrégée sans utiliser de cookies et sans conserver aucune donnée permettant d'identifier ou de suivre les visiteurs individuels d'un site à l'autre.",
    archiveTitle: 'Matériel historique et noms',
    archiveBody:
      "Le matériel historique et archivistique publié sur ce site (photos, registres, listes) a un caractère documentaire. Les noms des membres vivants ne sont publiés qu'avec leur consentement.",
    rightsTitle: 'Vos droits',
    rightsBody:
      "Pour demander le retrait ou la correction d'une donnée qui vous concerne (par exemple une photo ou un nom), écrivez à l'adresse ci-dessus : nous répondrons dans les meilleurs délais.",
    changesTitle: 'Modifications de cette notice',
    changesBody:
      "Cette page pourra être mise à jour à l'avenir, par exemple en cas de changement dans les services utilisés par le site. La date de dernière mise à jour est indiquée en haut de la page.",
  },

  news: {
    metaTitle: 'Actualités',
    metaDescription:
      "Actualités et mises à jour de la Compagnia di Sant'Eligio.",
    heroTitle: 'Actualités',
    heroSubtitle: 'Les actualités de la Compagnia',
    heroAlt: 'Registre de la Compagnia',
    empty: "Aucune actualité n'a été publiée pour le moment.",
    italianOnly:
      'Les articles ci-dessous sont des instantanés du registre de la Compagnia et sont publiés uniquement en italien : ils consistent presque entièrement en des noms de membres.',
    backToNews: '← Toutes les actualités',
  },

  notFound: {
    metaTitle: 'Page non trouvée',
    title: 'Page non trouvée',
    body: "La page que vous recherchez n'existe plus ou a été déplacée.",
    cta: "Retour à l'accueil",
  },
};
