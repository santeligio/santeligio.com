// Italian copy — the site's source language. The English and French files are
// typed against this one, so a missing or misspelt key is a build error rather
// than a blank spot on the page.
export const it = {
  code: 'it',
  label: 'Italiano',
  htmlLang: 'it',
  ogLocale: 'it_IT',
  dateLocale: 'it-IT',

  siteDescription:
    "Sito ufficiale della Compagnia di Sant'Eligio di Vernante: la storia dei Carrettieri della Valle Vermenagna, i soci e le novità della Compagnia.",

  nav: {
    home: 'Home',
    storia: 'Storia',
    baja: 'La Baja',
    news: 'News',
    galleria: 'Galleria',
    contatti: 'Contatti',
  },

  ui: {
    skipToContent: 'Salta al contenuto',
    mainNav: 'Navigazione principale',
    footerNav: 'Navigazione footer',
    menu: 'Menu',
    close: 'Chiudi',
    language: 'Lingua',
    footerTagline: 'Vernante (CN) — una lunga storia che ci piace ricordare.',
    footerPages: 'Pagine',
    footerContacts: 'Contatti',
    rightsReserved: 'Tutti i diritti riservati.',
    privacy: 'Privacy',
  },

  hint: {
    // Shown when the visitor's browser language is one we do not publish.
    fallback:
      "This site is written in Italian. Use your browser's built-in translation to read it in your language.",
    // Shown when we do publish their language: {lang} is replaced with its name.
    available: 'Questo sito è disponibile anche in {lang}.',
    switchTo: 'Leggi in {lang}',
  },

  home: {
    heroTitle: "Compagnia di Sant'Eligio",
    heroSubtitle: 'Una lunga storia che ci piace ricordare',
    heroAlt: "Fotografia storica della Compagnia di Sant'Eligio, 1900 circa",
    cta: 'Scopri la storia',
    quote:
      '"Vogliamo proseguire una tradizione che si ripete da duecento anni."',
    sociTitle: 'I soci della Compagnia',
    sociAlt: 'Foto di gruppo dei Soci della Compagnia, luglio 2024',
    sociCta: 'Dettagli',
    eventsTitle: 'Prossimi appuntamenti',
    eventsBody:
      "Venite al Comune di Vernante a vedere l'Antica Bandiera della Compagnia dopo il restauro!",
  },

  storia: {
    metaTitle: 'Storia',
    metaDescription:
      "La storia della Compagnia di Sant'Eligio di Vernante, dai Carrettieri del 1858 ai Soci di oggi.",
    heroTitle: "Compagnia di Sant'Eligio — Chi siamo",
    heroAlt: 'Pagina della Convenzione del 1858',
    sectionsNav: 'Sezioni della pagina',
    linkStoria: 'Storia',
    linkSoci: 'Elenco Soci',
    body: [
      'La più antica testimonianza della Compagnia di Sant\'Eligio di Vernante risale al 5 aprile 1858, data della Convenzione sottoscritta da una ventina di Soci che praticavano la professione del Carrettiere (in dialetto Vernantese, "Cartouné").',
      'La professione del "Cartouné" — che potremmo paragonare a quella del camionista dei giorni nostri — rappresentava un mestiere molto redditizio nella Valle Vermenagna, da sempre via di collegamento tra la Provincia di Cuneo e il mare.',
      "La Compagnia di Sant'Eligio è costituita dai discendenti dei Soci Fondatori e si tramanda rigorosamente per linea gerarchica al discendente maschio più giovane.",
    ],
    photoAlt: 'Soci 2026',
    sociTitle: 'I Soci della Compagnia',
    sociUpdated: '(Ultimo aggiornamento: 12 luglio 2026)',
    priore: '(Priore)',
  },

  baja: {
    metaTitle: 'La Baja',
    metaDescription:
      "La Baja di Vernante e il passaggio delle consegne della Compagnia di Sant'Eligio: le origini, i simboli degli Abbà e il rito che ogni anno rinnova la tradizione.",
    heroTitle: 'La Baja di Vernante',
    heroAlt: 'Gli Abbà e i Soci della Compagnia con le alabarde e la bandiera',
    intro: [
      "Ogni anno, sul sagrato della chiesa, la Compagnia di Sant'Eligio rinnova il rito del passaggio delle consegne: l'Abbà uscente affida al successore le alabarde e il registro della Compagnia, e con essi il compito di custodire per un anno una tradizione che a Vernante si tramanda da secoli.",
      'Il testo che segue accompagna la cerimonia: ne racconta le origini, spiega il significato dei simboli degli Abbà e descrive il gesto con cui il testimone passa di mano.',
    ],
    textTitle: 'Il Passaggio delle Consegne della Baja di Vernante',
    byline: 'Testo di',
    author: 'Loretta Macario',
    // Only rendered in the translated versions.
    translationNote: '',
    before: [
      'Benvenuti a tutti voi, cittadini e ospiti di Vernante! Ci troviamo oggi nel cuore pulsante della nostra festa più antica, un momento in cui il presente si inchina rispettosamente alla storia.',
      'Per comprendere appieno la magia di ciò a cui stiamo per assistere, dobbiamo fare un passo indietro nel tempo. Tutto ha inizio con la veneranda Compagnia di Sant\'Eligio, formalmente regolarizzata con una convenzione scritta il 5 aprile 1858, ma radicata in un passato ben più remoto. Nata per curare il servizio e il restauro della cappella dedicata al Santo, patrono dei Cartunè (Carrettieri ovvero commercianti di legname e altri beni) questa associazione è un legame indissolubile che unisce le generazioni. Ancora oggi, infatti, per far parte della "Baja" protetta da Sant\'Eligio, occorre essere discendenti di una ristretta cerchia di storiche famiglie del paese – come i Macario, i Bertaina, i Risso – che per secoli hanno tramandato l\'antico e faticoso mestiere dei "Cartunè".',
      "Ma cos'è, esattamente, la Baja? È una rievocazione di origine medievale che affonda le sue radici intorno all'anno 970. La leggenda narra che, proprio sotto la guida dei capi Abbà, i valligiani di Vernante si sollevarono con coraggio contro le terribili invasioni dei Saraceni provenienti dalla Spagna.",
      'Oggi, i protagonisti assoluti che vedete davanti a voi sono proprio gli Abbà. Non esiste gerarchia tra loro: vi è un unico Priore in carica per un anno e, al suo fianco, i fedeli gregari. Li riconoscete subito dai loro fieri elementi distintivi:',
    ],
    items: [
      {
        name: "L'Alabarda",
        text: "un'asta rotonda in legno sormontata da una punta di ferro biforcuta e frastagliata, ornata da un nastro rosso che pende dall'alto, simbolo del comando.",
      },
      {
        name: 'Il Cappello',
        text: 'un copricapo nero arricchito da nastri multicolori e ricamati, sormontato da un vivace mazzetto di fiori finti e un pennacchio variopinto.',
      },
      {
        name: 'I Muli',
        text: 'che oggi non abbiamo più, ma un tempo erano i veri compagni di viaggio dei vecchi carrettieri, che nelle giornate di festa erano bardati con nastri colorati e le storiche "ciuchinere", i sonagli che risuonano a festa sul muso e sul collo degli animali (Ogni famiglia aveva le proprie con relativa "coperta" colorata per "vestire" il cavallo/mulo)',
      },
    ],
    after: [
      "Ed eccoci giunti al momento più importante e sacro della manifestazione. Sul sagrato della Chiesa, dopo la celebrazione della Messa, l'Abbà uscente e l'Abbà entrante si trovano faccia a faccia per il trapasso delle consegne.",
      "Nelle mani del nuovo Priore non passa solo un testimone, ma la storia stessa di Vernante. L'Abbà vecchio consegna ufficialmente al nuovo: le alabarde guarnite, simbolo dell'autorità e della guida della compagnia ed il registro della Compagnia, che custodisce i nomi di tutti coloro che hanno onorato questa carica negli anni. Con questo gesto, il testimone della tradizione è ufficialmente passato.",
      'Subito dopo questo passaggio, un tempo la solennità lasciava spazio alla pura gioia popolare. Dalla piazzetta "La Mandulera" prendeva il via la tradizionale sfilata dei "cavalieri antichi". Un\'allegra e colorata parata che si snodava per le vie del paese, simulando quell\'antico "esercito popolare" che festeggiava la vittoria e la libertà ritrovata. Viva la Baja, viva la Compagnia di Sant\'Eligio e buon passaggio delle consegne a tutti!',
    ],
    closingBefore:
      "Il testo del passaggio delle consegne è di Loretta Macario, che ringraziamo. Per approfondire la storia della Compagnia e l'elenco dei Soci si veda la pagina ",
    closingLink: 'Storia',
    closingAfter: '.',
  },

  galleria: {
    metaTitle: 'Galleria',
    metaDescription:
      "Fotografie storiche e recenti della Compagnia di Sant'Eligio.",
    heroTitle: 'Galleria',
    intro:
      'Una prima raccolta di fotografie della Compagnia. La galleria verrà ampliata con altro materiale storico e fotografico man mano che sarà disponibile.',
    enlarged: 'Immagine ingrandita',
    prev: 'Immagine precedente',
    next: 'Immagine successiva',
    openOriginal: "Apri l'immagine originale",
    counter: '{n} di {total}',
    genericAlt: "Fotografia dell'archivio della Compagnia di Sant'Eligio",
    // Keyed by file name under public/santeligio/. A photo without an entry
    // falls back to genericAlt rather than being dropped.
    captions: {
      'santeligio_1900.jpg': 'Fotografia storica della Compagnia, 1900 circa',
      '20190818-convenzione-1858-pag1.jpg': 'Pagina della Convenzione del 1858',
      'santeligio_2023.jpg': 'Registro della Compagnia, edizione 2023',
      '20231125-142120.jpg': 'Momento di vita della Compagnia, novembre 2023',
      '20231125-142205.jpg': 'Momento di vita della Compagnia, novembre 2023',
      'wa-2024-06-10-133426-1.jpeg': 'Foto della Compagnia, giugno 2024',
      '2024-07-07-foto-gruppo-compagnia.jpg':
        'Foto di gruppo dei Soci della Compagnia, luglio 2024',
      '2025-07-13-foto-gruppo-compagnia.jpg':
        'Foto di gruppo dei Soci della Compagnia, luglio 2025',
      '2026-07-12-foto-gruppo-compagnia.jpg':
        'Foto di gruppo dei Soci della Compagnia, luglio 2026',
    } as Record<string, string>,
  },

  contatti: {
    metaTitle: 'Contatti',
    metaDescription: "Come contattare la Compagnia di Sant'Eligio di Vernante.",
    heroTitle: 'Contatti',
    intro:
      "Per informazioni, richieste o segnalazioni potete scriverci all'indirizzo:",
    privacyTitle: 'Privacy',
    privacyBody:
      "Il materiale storico e archivistico pubblicato su questo sito è di natura documentaria. I nominativi dei Soci viventi sono pubblicati solo con il loro consenso. Per richieste relative ai propri dati, scrivete all'indirizzo sopra indicato. Leggi l'",
    privacyLink: 'informativa completa sulla privacy',
  },

  privacy: {
    metaTitle: 'Privacy',
    metaDescription:
      "Informativa sulla privacy del sito della Compagnia di Sant'Eligio di Vernante.",
    heroTitle: 'Privacy',
    updated: 'Ultimo aggiornamento: 25 luglio 2026.',
    controllerTitle: 'Titolare del trattamento',
    controllerBody: "Compagnia di Sant'Eligio di Vernante — contatti:",
    dataTitle: 'Dati raccolti',
    dataBody:
      'Questo sito è statico: non prevede registrazione, account utente, moduli di iscrizione o acquisti online. Non utilizziamo cookie di profilazione o di terze parti, né mostriamo pubblicità.',
    statsTitle: 'Statistiche di utilizzo',
    statsBefore: 'Per capire quante persone visitano il sito usiamo',
    statsAfter:
      ', un servizio che misura le visite in forma aggregata senza utilizzare cookie e senza salvare alcun dato che permetta di identificare o tracciare i singoli visitatori tra siti diversi.',
    archiveTitle: 'Materiale storico e nominativi',
    archiveBody:
      'Il materiale storico e archivistico pubblicato su questo sito (foto, registri, elenchi) è di natura documentaria. I nominativi dei Soci viventi sono pubblicati solo con il loro consenso.',
    rightsTitle: 'I tuoi diritti',
    rightsBody:
      "Per richiedere la rimozione o la correzione di un dato che ti riguarda (ad esempio una foto o un nominativo), scrivi all'indirizzo indicato sopra: risponderemo il prima possibile.",
    changesTitle: 'Modifiche a questa informativa',
    changesBody:
      'Questa pagina potrà essere aggiornata in futuro, ad esempio in caso di variazioni nei servizi utilizzati dal sito. La data di ultimo aggiornamento è indicata in cima alla pagina.',
  },

  news: {
    metaTitle: 'News',
    metaDescription:
      "Le novità e gli aggiornamenti della Compagnia di Sant'Eligio.",
    heroTitle: 'News',
    heroSubtitle: 'Le novità della Compagnia',
    heroAlt: 'Registro della Compagnia',
    empty: 'Nessuna novità pubblicata al momento.',
    // Only rendered in the translated versions: the posts are registry
    // snapshots, largely lists of names, and stay in Italian.
    italianOnly: '',
    backToNews: '← Tutte le news',
  },

  notFound: {
    metaTitle: 'Pagina non trovata',
    title: 'Pagina non trovata',
    body: 'La pagina che cercate non esiste più o è stata spostata.',
    cta: 'Torna alla home',
  },
};
