/* Demo-Entwurf Gastronomie (fiktiver Betrieb) */

export default {
  slug: 'demo-gasthaus',

  firma: 'Gasthaus Lindenhof',
  branche: 'Gasthaus & Restaurant',
  ort: 'Neuwied',
  claim: 'Gutbürgerlich. Ehrlich. Zum Wohlfühlen.',
  sub: 'Regionale Küche aus frischen Zutaten, ein gemütlicher Gastraum und ein Biergarten unter alten Linden — seit drei Generationen der Treffpunkt in Neuwied. Für den Feierabend, den Sonntagsbraten und die Feste Ihres Lebens.',
  telefon: '02631 987654',
  email: 'info@gasthaus-lindenhof.de',
  adresse: 'Lindenstraße 8, 56564 Neuwied',

  farben: { accent: '#4A7C3F', dark: '#12170F' },
  monogramm: 'GL',

  usps: ['Seit 3 Generationen', 'Regionale Zutaten', 'Biergarten mit 80 Plätzen', 'Räume für Feiern'],
  leistungen: [
    { icon: 'teller', titel: 'À-la-carte-Küche', text: 'Gutbürgerliche Klassiker und saisonale Gerichte — frisch gekocht, ehrlich portioniert.' },
    { icon: 'uhr', titel: 'Mittagstisch', text: 'Wechselnde Mittagsgerichte von Montag bis Freitag — schnell serviert, fair im Preis.' },
    { icon: 'herz', titel: 'Familienfeiern', text: 'Geburtstag, Taufe, Hochzeit: Räume für 20 bis 120 Gäste, Menü oder Buffet nach Wunsch.' },
    { icon: 'blatt', titel: 'Biergarten', text: 'Unter alten Linden: 80 Plätze, kühle Getränke und Flammkuchen aus dem Ofen.' },
    { icon: 'haus', titel: 'Catering & Außer-Haus', text: 'Unsere Küche kommt zu Ihnen — vom Platten-Service bis zum kompletten Buffet.' },
    { icon: 'stern', titel: 'Sonntagsbraten', text: 'Jeden Sonntag ab 11:30 Uhr — Reservierung empfohlen, der Braten ist beliebt.' },
  ],
  themen: [
    {
      kicker: 'Unsere Küche',
      titel: 'Regional, saisonal — und ohne Schnickschnack',
      text: 'Unser Fleisch kommt vom Metzger im Ort, das Gemüse vom Wochenmarkt und die Rezepte zum Teil noch von der Großmutter. Was auf den Teller kommt, hat kurze Wege hinter sich und schmeckt genau danach.',
      punkte: [
        'Wechselnde Saisonkarte — Spargel, Pfifferlinge, Wild',
        'Fleisch aus der Region, Gemüse vom Markt',
        'Vegetarische Gerichte auf jeder Karte',
        'Hausgemachte Desserts',
      ],
      bildAlt: 'z. B. Ihr Signature-Gericht, frisch angerichtet',
    },
    {
      kicker: 'Feiern im Lindenhof',
      titel: 'Der schönste Tag braucht den richtigen Rahmen',
      text: 'Ob runder Geburtstag, Konfirmation oder Hochzeit: Unser Saal bietet Platz für bis zu 120 Gäste, das Kaminzimmer für kleinere Runden. Sie feiern — wir kümmern uns um alles andere.',
      punkte: [
        'Saal (120 Gäste) und Kaminzimmer (30 Gäste)',
        'Menü oder Buffet — individuell zusammengestellt',
        'Persönliche Beratung und feste Ansprechpartner',
        'Dekoration und Ablaufplanung auf Wunsch',
      ],
      bildAlt: 'z. B. Ihr festlich eingedeckter Saal',
    },
  ],
  ablauf: [
    { titel: 'Tisch reservieren', text: 'Kurz anrufen oder das Kontaktformular nutzen — wir bestätigen sofort.' },
    { titel: 'Beratung für Feiern', text: 'Für Feste besprechen wir Menü, Ablauf und Deko persönlich bei einem Kaffee.' },
    { titel: 'Genießen', text: 'Sie kommen, essen gut und lassen es sich gut gehen — den Rest machen wir.' },
    { titel: 'Wiederkommen', text: 'Die meisten unserer Gäste sehen wir wieder. Darauf sind wir stolz.' },
  ],
  cta: {
    titel: 'Lust auf einen guten Abend?',
    text: 'Reservieren Sie Ihren Tisch — für heute Abend, den Sonntagsbraten oder Ihre nächste Feier.',
  },
  faq: [
    { frage: 'Brauche ich eine Reservierung?', antwort: 'Unter der Woche bekommen Sie meist spontan einen Tisch. Am Wochenende und sonntags zum Braten empfehlen wir eine Reservierung.' },
    { frage: 'Gibt es vegetarische Gerichte?', antwort: 'Ja, auf jeder Karte — und mit etwas Vorlauf kochen wir auch vegan oder berücksichtigen Unverträglichkeiten.' },
    { frage: 'Bis zu wie vielen Personen kann man feiern?', antwort: 'Im Saal bis 120 Personen, im Kaminzimmer bis 30. Im Sommer kommt der Biergarten mit 80 Plätzen dazu.' },
    { frage: 'Kann man bei Ihnen mit Karte zahlen?', antwort: 'Ja, wir nehmen EC- und Kreditkarten — und natürlich weiterhin Bargeld.' },
  ],
  projekte: [
    { titel: 'Hochzeit im Saal', ort: '120 Gäste', text: '4-Gänge-Menü, Mitternachtsbuffet und ein Brautpaar, das bis heute jeden Jahrestag bei uns feiert.' },
    { titel: 'Firmen-Weihnachtsfeier', ort: '80 Gäste', text: 'Buffet mit regionalen Klassikern, reservierter Saal und Shuttle-Empfehlung fürs Team.' },
    { titel: 'Goldene Hochzeit', ort: 'Kaminzimmer', text: 'Familiäre Runde mit 26 Gästen, Lieblingsgerichte des Jubelpaars nach Wunsch gekocht.' },
  ],
  bewertungen: [
    { text: 'Der Sonntagsbraten ist ein Gedicht — wie früher bei Oma, nur dass man nicht abspülen muss.', name: 'R. Hoffmann', ort: 'Neuwied' },
    { text: 'Wir haben unsere Hochzeit im Lindenhof gefeiert. Das Team hat an alles gedacht, wir konnten einfach nur genießen.', name: 'Familie Janssen', ort: 'Andernach' },
    { text: 'Ehrliche Küche, faire Preise, freundliche Bedienung. Unser Stammlokal seit Jahren.', name: 'K. Braun', ort: 'Neuwied' },
  ],
  ueberUns: {
    text: [
      'Seit 1962 führt unsere Familie den Lindenhof — inzwischen in dritter Generation. Was sich seitdem nicht geändert hat: Bei uns wird frisch gekocht, ehrlich eingeschenkt und jeder Gast wie ein Nachbar behandelt.',
      'Heute stehen Vater und Tochter gemeinsam in der Küche, die Mutter führt den Service. Wer einmal da war, versteht, warum viele unserer Gäste seit Jahrzehnten kommen.',
    ],
    fakten: [
      { zahl: '1962', label: 'gegründet' },
      { zahl: '3.', label: 'Generation' },
      { zahl: '120', label: 'Plätze im Saal' },
      { zahl: '80', label: 'Plätze im Biergarten' },
    ],
  },
  oeffnungszeiten: [
    ['Dienstag – Samstag', '11:30 – 14:00 & 17:00 – 22:00 Uhr'],
    ['Sonntag', '11:30 – 20:00 Uhr'],
    ['Montag', 'Ruhetag'],
  ],
  galerie: [],

  kunde: { name: 'Marlene Lindner', email: 'info@gasthaus-lindenhof.de', telefon: '02631 987654', website: '' },
};
