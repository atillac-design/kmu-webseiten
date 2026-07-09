/* Demo-Entwurf Immobilienmakler (fiktiver Betrieb) */

export default {
  slug: 'demo-immobilien',

  firma: 'Rheinblick Immobilien',
  branche: 'Immobilienmakler',
  ort: 'Koblenz',
  claim: 'Ihre Immobilie. Bestens verkauft.',
  sub: 'Verkauf und Vermietung von Wohnimmobilien in Koblenz und dem Mittelrheintal — mit ehrlicher Bewertung, professioneller Vermarktung und einem Makler, der erreichbar ist, wenn Sie ihn brauchen.',
  telefon: '0261 555 210',
  email: 'kontakt@rheinblick-immobilien.de',
  adresse: 'Löhrstraße 42, 56068 Koblenz',

  farben: { accent: '#B08D46', dark: '#131A26' },
  monogramm: 'RI',

  usps: ['Kostenlose Bewertung', 'Ø 8 Wochen bis zum Notar', 'IHK-geprüfter Makler', 'Koblenz & Mittelrhein'],
  leistungen: [
    { icon: 'haus', titel: 'Verkauf', text: 'Vom Erstgespräch bis zum Notartermin: Wir verkaufen Ihre Immobilie strukturiert und zum besten Preis.' },
    { icon: 'lupe', titel: 'Wertermittlung', text: 'Fundierte Marktwert-Einschätzung auf Basis echter Vergleichsdaten — kostenlos und unverbindlich.' },
    { icon: 'kamera', titel: 'Premium-Exposés', text: 'Profi-Fotos, Drohnenaufnahmen und 360°-Rundgang — Ihre Immobilie zeigt sich von ihrer besten Seite.' },
    { icon: 'chat', titel: 'Vermietung', text: 'Solvente Mieter finden statt nur Bewerbungen sammeln: mit Bonitätsprüfung und rechtssicheren Verträgen.' },
    { icon: 'schild', titel: 'Diskreter Verkauf', text: 'Off-Market-Vermarktung an geprüfte Interessenten — ohne Portale, ohne Schild im Vorgarten.' },
    { icon: 'check', titel: 'Rundum-Service', text: 'Energieausweis, Unterlagen, Behördengänge: Wir kümmern uns um alles, was zum Verkauf gehört.' },
  ],
  themen: [
    {
      kicker: 'Für Verkäufer',
      titel: 'Der richtige Preis entscheidet über alles',
      text: 'Zu hoch angesetzt liegt Ihre Immobilie monatelang wie Blei im Markt, zu niedrig verschenken Sie Vermögen. Wir ermitteln den Preis, der beides vermeidet — belegt mit echten Verkaufsdaten aus Ihrer Nachbarschaft.',
      punkte: [
        'Marktwertanalyse mit Vergleichsobjekten',
        'Verkaufsstrategie inkl. Zeitplan',
        'Alle Unterlagen: Wir holen ein, was fehlt',
        'Im Schnitt 8 Wochen bis zum Notartermin',
      ],
      bildAlt: 'z. B. eine Ihrer verkauften Immobilien mit Rheinblick',
    },
    {
      kicker: 'Für Eigentümer',
      titel: 'Vermieten ohne schlaflose Nächte',
      text: 'Ein falscher Mieter kostet mehr als jede Maklerprovision. Wir prüfen Bonität und Referenzen, führen die Besichtigungen und übergeben Ihnen am Ende einen unterschriebenen, rechtssicheren Mietvertrag.',
      punkte: [
        'Bonitäts- und Referenzprüfung jedes Bewerbers',
        'Marktgerechte Miete statt Bauchgefühl',
        'Rechtssichere Verträge vom Fachanwalt geprüft',
        'Übergabeprotokoll und Kautionsabwicklung',
      ],
      bildAlt: 'z. B. Übergabe der Schlüssel an neue Mieter',
    },
  ],
  ablauf: [
    { titel: 'Erstgespräch', text: 'Kostenlos und unverbindlich — bei Ihnen vor Ort oder in unserem Büro in der Löhrstraße.' },
    { titel: 'Bewertung & Strategie', text: 'Marktwertanalyse, Preisempfehlung und ein klarer Fahrplan für die Vermarktung.' },
    { titel: 'Vermarktung', text: 'Exposé, Portale, eigene Interessenten-Kartei — und Besichtigungen, die wir komplett übernehmen.' },
    { titel: 'Notar & Übergabe', text: 'Wir begleiten Verhandlung, Kaufvertrag und Übergabe — bis der Schlüssel den Besitzer wechselt.' },
  ],
  cta: {
    titel: 'Was ist Ihre Immobilie wert?',
    text: 'Kostenlose Wertermittlung — fundiert, unverbindlich und binnen 48 Stunden bei Ihnen.',
  },
  faq: [
    { frage: 'Was kostet die Wertermittlung?', antwort: 'Nichts. Die Marktwert-Einschätzung ist kostenlos und verpflichtet Sie zu nichts — auch wenn Sie erst in zwei Jahren verkaufen wollen.' },
    { frage: 'Wie lange dauert ein Verkauf?', antwort: 'Bei realistischem Preis im Schnitt 8 Wochen vom Vermarktungsstart bis zum Notartermin — je nach Objekt und Lage.' },
    { frage: 'Wer zahlt die Maklerprovision?', antwort: 'Beim Verkauf teilen sich Käufer und Verkäufer die Provision gesetzlich geregelt. Die genauen Konditionen besprechen wir transparent im Erstgespräch.' },
    { frage: 'Verkaufen Sie auch diskret ohne Inserate?', antwort: 'Ja. Für viele Eigentümer vermarkten wir off-market an unsere geprüfte Interessenten-Kartei — ohne dass die Nachbarschaft etwas mitbekommt.' },
  ],
  projekte: [
    { titel: 'Einfamilienhaus, Rheinblick', ort: 'Koblenz-Pfaffendorf', text: 'Nach 6 Wochen verkauft — 4 % über dem ursprünglich erwarteten Preis, dank Bieterverfahren.' },
    { titel: 'Eigentumswohnung, 3 Zimmer', ort: 'Koblenz-Altstadt', text: 'Diskret off-market an Kapitalanleger aus der Kartei vermittelt — ohne ein einziges Portal-Inserat.' },
    { titel: 'Mehrfamilienhaus, 6 Einheiten', ort: 'Vallendar', text: 'Komplett vermietet übergeben, inkl. neuer Mietverträge und geprüfter Unterlagen für den Käufer.' },
  ],
  bewertungen: [
    { text: 'Ehrliche Beratung statt Lockangebot: Die Preisempfehlung war realistisch — verkauft wurde trotzdem über Erwartung.', name: 'Familie Petersen', ort: 'Koblenz' },
    { text: 'Immer erreichbar, jede Besichtigung persönlich begleitet, alle Unterlagen im Griff. So stellt man sich einen Makler vor.', name: 'Dr. M. Falk', ort: 'Vallendar' },
    { text: 'Unsere Wohnung war nach drei Wochen vermietet — an genau die Mieter, die wir uns gewünscht haben.', name: 'C. und B. Winter', ort: 'Koblenz' },
  ],
  ueberUns: {
    text: [
      'Rheinblick Immobilien wurde 2014 in Koblenz gegründet. Wir sind bewusst kein Großbüro: Jeder Verkauf läuft über den Inhaber persönlich — vom Erstgespräch bis zum Notartermin, ohne wechselnde Ansprechpartner.',
      'Wir kennen das Mittelrheintal, seine Lagen und seine Preise — und sagen Ihnen auch dann die Wahrheit, wenn sie unbequem ist. Genau deshalb kommen die meisten Kunden auf Empfehlung.',
    ],
    fakten: [
      { zahl: '200+', label: 'vermittelte Objekte' },
      { zahl: '8', label: 'Wochen Ø bis Notar' },
      { zahl: '11', label: 'Jahre am Markt' },
      { zahl: '1', label: 'fester Ansprechpartner' },
    ],
  },
  oeffnungszeiten: [
    ['Montag – Freitag', '09:00 – 18:00 Uhr'],
    ['Samstag', 'Besichtigungen nach Vereinbarung'],
    ['Sonntag', 'geschlossen'],
  ],
  galerie: [],

  kunde: { name: 'Stefan Reuter', email: 'kontakt@rheinblick-immobilien.de', telefon: '0261 555 210', website: '' },
};
