/* Demo-Entwurf Coaching (fiktiver Betrieb) */

export default {
  slug: 'demo-coaching',

  firma: 'Klarblick Coaching',
  branche: 'Business- & Karriere-Coaching',
  ort: 'Bonn',
  claim: 'Klarheit ist der erste Schritt zur Veränderung.',
  sub: 'Coaching für Fach- und Führungskräfte, die beruflich weiterkommen wollen — ohne sich zu verbiegen. Persönlich in Bonn oder online, mit klarer Struktur statt Kalendersprüchen.',
  telefon: '0228 987321',
  email: 'hallo@klarblick-coaching.de',
  adresse: 'Poppelsdorfer Allee 24, 53115 Bonn',

  farben: { accent: '#A34D64', dark: '#1D131A', paper: '#FAF4F2' },
  stil: { variante: 'hell', schrift: 'dmserif' },
  bilder: {
    // hero wird bei Variante „hell" nicht benötigt
  },
  monogramm: 'KC',

  usps: ['Zertifiziert (DBVC)', 'In Bonn oder online', 'Kostenloses Erstgespräch', '100 % vertraulich'],
  leistungen: [
    { icon: 'lupe', titel: 'Standort-Coaching', text: 'Wo stehen Sie, was können Sie, was wollen Sie wirklich? Klarheit in 3 Sitzungen.' },
    { icon: 'blitz', titel: 'Karriere-Coaching', text: 'Nächster Karriereschritt, Gehaltsverhandlung, Wechsel — strategisch vorbereitet statt erhofft.' },
    { icon: 'chat', titel: 'Führungskräfte-Coaching', text: 'Neu in der Führungsrolle oder festgefahren im Team? Wir arbeiten an echten Situationen.' },
    { icon: 'herz', titel: 'Konflikt-Coaching', text: 'Wenn es im Job knirscht: Muster erkennen, Position beziehen, Lösungen verhandeln.' },
    { icon: 'uhr', titel: 'Neustart nach Pause', text: 'Zurück nach Elternzeit, Krankheit oder Auszeit — mit Plan und Selbstvertrauen.' },
    { icon: 'stern', titel: 'Bewerbungs-Sparring', text: 'Unterlagen, Positionierung, Interview-Training — bis das Angebot auf dem Tisch liegt.' },
  ],
  themen: [
    {
      kicker: 'So arbeite ich',
      titel: 'Struktur statt Räucherstäbchen',
      text: 'Coaching ist bei mir kein nettes Gespräch, sondern ein Arbeitsprozess: Wir definieren ein messbares Ziel, arbeiten mit erprobten Methoden daran und überprüfen nach jeder Sitzung, was sich bewegt hat. Deshalb weiß ich nach spätestens drei Sitzungen — und Sie auch —, ob wir auf Kurs sind.',
      punkte: [
        'Klares Ziel und Fahrplan ab der ersten Sitzung',
        'Methoden aus systemischem Coaching & Arbeitspsychologie',
        'Aufgaben zwischen den Sitzungen — Veränderung passiert im Alltag',
        'Ehrliches Feedback, auch wenn es unbequem ist',
      ],
      bildAlt: 'z. B. Coaching-Gespräch in Ihrem Büro',
    },
    {
      kicker: 'Für wen',
      titel: 'Für Menschen, die etwas verändern wollen — nicht nur darüber reden',
      text: 'Meine Klientinnen und Klienten sind Fachkräfte, Team- und Projektleiter und Selbstständige zwischen 28 und 55. Was sie verbindet: Sie spüren, dass es so nicht weitergeht — und sind bereit, dafür zu arbeiten.',
      punkte: [
        'Fach- und Führungskräfte vor dem nächsten Schritt',
        'Rückkehrer:innen nach Elternzeit oder Auszeit',
        'Selbstständige zwischen Wachstum und Überlastung',
        'Teams in Veränderungsprozessen (auf Anfrage)',
      ],
      bildAlt: 'z. B. Sie im Gespräch oder Ihr Praxisraum',
    },
  ],
  ablauf: [
    { titel: 'Kostenloses Erstgespräch', text: '30 Minuten telefonisch oder online: Passt die Chemie? Passt das Thema?' },
    { titel: 'Ziel & Fahrplan', text: 'Wir definieren, was am Ende anders sein soll — konkret und überprüfbar.' },
    { titel: 'Coaching-Sitzungen', text: 'Meist 5–8 Sitzungen à 90 Minuten, in Bonn oder online — mit Aufgaben dazwischen.' },
    { titel: 'Abschluss & Bilanz', text: 'Was hat sich verändert, was tragen Sie weiter? Sie gehen mit Plan, nicht mit Floskeln.' },
  ],
  cta: {
    titel: 'Bereit für den ersten klaren Blick?',
    text: 'Buchen Sie Ihr kostenloses Erstgespräch — 30 Minuten, unverbindlich, garantiert ohne Verkaufsdruck.',
  },
  faq: [
    { frage: 'Was kostet ein Coaching?', antwort: 'Eine Einzelsitzung (90 Min.) kostet 180 €, Pakete mit 5 Sitzungen 800 €. Für Selbstzahler gibt es Ratenzahlung — das Erstgespräch ist immer kostenlos.' },
    { frage: 'Wie viele Sitzungen brauche ich?', antwort: 'Die meisten Anliegen lösen sich in 5–8 Sitzungen. Nach dem Erstgespräch bekommen Sie eine ehrliche Einschätzung — keine Endlos-Abos.' },
    { frage: 'Online oder vor Ort?', antwort: 'Beides. Vor Ort in Bonn-Poppelsdorf oder per Video — viele Klienten mischen nach Bedarf.' },
    { frage: 'Ist das vertraulich?', antwort: 'Absolut. Auch wenn Ihr Arbeitgeber das Coaching bezahlt, bleiben die Inhalte zu 100 % zwischen uns — das regelt der Coaching-Vertrag.' },
  ],
  projekte: [
    { titel: 'Vom Kollegen zur Führungskraft', ort: 'IT-Teamleiter', text: 'In 6 Sitzungen vom zögernden „Neuen" zur akzeptierten Führungskraft — inkl. schwieriger Erstgespräche im Team.' },
    { titel: 'Gehaltssprung nach 8 Jahren', ort: 'Projektmanagerin', text: 'Positionierung geschärft, Verhandlung geprobt: +22 % beim bestehenden Arbeitgeber.' },
    { titel: 'Neustart nach Elternzeit', ort: 'Marketing-Expertin', text: 'Nach 3 Jahren Pause zurück in eine Teilzeit-Führungsrolle — zu ihren Bedingungen.' },
  ],
  bewertungen: [
    { text: 'Kein Kaffeekränzchen, sondern echte Arbeit an echten Themen. Nach fünf Sitzungen hatte ich die Zusage für die Stelle, die ich mich vorher nicht zu wollen traute.', name: 'D. K., Projektleiterin', ort: 'Bonn' },
    { text: 'Sarah stellt die Fragen, denen man seit Jahren ausweicht — und lässt einen mit den Antworten nicht allein.', name: 'M. T., Teamleiter IT', ort: 'Köln' },
    { text: 'Das Bewerbungs-Sparring war jeden Cent wert. Drei Gespräche, zwei Angebote.', name: 'A. R., Ingenieurin', ort: 'online' },
  ],
  ueberUns: {
    text: [
      'Ich bin Sarah Menke — systemische Coachin (DBVC), Wirtschaftspsychologin und davor zehn Jahre Führungskraft im Mittelstand. Ich weiß, wie sich Montagmorgen mit Bauchschmerzen anfühlt, weil ich selbst mal den falschen Job hatte.',
      'Seit 2017 begleite ich Menschen dabei, beruflich das zu finden und zu bekommen, was zu ihnen passt. Ohne Esoterik, ohne Phrasen — aber mit Methode, Erfahrung und einer guten Portion Direktheit.',
    ],
    fakten: [
      { zahl: '300+', label: 'Coachings' },
      { zahl: '10', label: 'Jahre Führungserfahrung' },
      { zahl: 'DBVC', label: 'zertifiziert' },
      { zahl: '30', label: 'Min. gratis Erstgespräch' },
    ],
  },
  oeffnungszeiten: [
    ['Montag – Donnerstag', '09:00 – 19:00 Uhr'],
    ['Freitag', '09:00 – 14:00 Uhr'],
    ['Abendtermine', 'nach Vereinbarung'],
  ],
  galerie: [],

  kunde: { name: 'Sarah Menke', email: 'hallo@klarblick-coaching.de', telefon: '0228 987321', website: '' },
};
