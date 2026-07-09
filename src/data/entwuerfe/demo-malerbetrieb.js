/* Demo-Entwurf: zeigt, wie ein fertiger Kunden-Entwurf aussieht.
   Fiktiver Betrieb — dient als Anschauung und zum Testen der Fabrik. */

export default {
  slug: 'demo-malerbetrieb',

  firma: 'Malerbetrieb Schmidt',
  branche: 'Maler & Lackierer',
  ort: 'Koblenz',
  claim: 'Farbe, die bleibt. Handwerk, das überzeugt.',
  sub: 'Ihr Malermeister für Koblenz und Umgebung: Innenanstriche, Fassaden, Lackierungen und Tapezierarbeiten — sauber, termintreu und zum vereinbarten Festpreis. Seit 1995 in Familienhand.',
  telefon: '0261 1234567',
  email: 'info@maler-schmidt.de',
  adresse: 'Rheinstraße 24, 56068 Koblenz',

  farben: {
    accent: '#C2452D',
    dark: '#1B1512',
  },
  monogramm: 'MS',

  usps: ['Meisterbetrieb seit 1995', 'Festpreis-Garantie', 'Saubere Baustelle', 'Koblenz & Umgebung'],
  leistungen: [
    { icon: 'pinsel', titel: 'Innenanstriche', text: 'Wände und Decken in Wohnung, Haus oder Büro — deckend, streifenfrei und mit sauberen Kanten.' },
    { icon: 'haus', titel: 'Fassadenarbeiten', text: 'Fassadenanstrich und kleinere Putzausbesserungen, die Ihr Haus wetterfest machen und aufwerten.' },
    { icon: 'diamant', titel: 'Lackierarbeiten', text: 'Türen, Zargen, Heizkörper und Holzflächen — glatt lackiert statt lieblos überstrichen.' },
    { icon: 'blatt', titel: 'Tapezierarbeiten', text: 'Von Raufaser bis Designtapete: Wir tapezieren passgenau, auch bei schwierigen Wänden.' },
    { icon: 'schild', titel: 'Schimmelsanierung', text: 'Ursache finden, Befall entfernen, richtig beschichten — damit das Problem nicht wiederkommt.' },
    { icon: 'uhr', titel: 'Kleinaufträge & Notdienst', text: 'Auch für einzelne Räume oder schnelle Ausbesserungen sind wir da — oft schon innerhalb weniger Tage.' },
  ],
  ueberUns: {
    text: [
      'Seit 1995 steht der Name Schmidt in Koblenz für saubere Malerarbeiten. Was als Ein-Mann-Betrieb begann, ist heute ein Team aus fünf Gesellen und zwei Meistern — und immer noch ein Familienbetrieb, in dem der Chef selbst auf der Baustelle steht.',
      'Wir arbeiten mit Festpreis-Angeboten, halten Termine ein und hinterlassen jede Baustelle besenrein. Klingt selbstverständlich — ist es leider nicht überall. Überzeugen Sie sich selbst.',
    ],
    fakten: [
      { zahl: '30', label: 'Jahre Erfahrung' },
      { zahl: '2.400+', label: 'Aufträge erledigt' },
      { zahl: '4,9★', label: 'Google-Bewertung' },
      { zahl: '7', label: 'Mitarbeiter im Team' },
    ],
  },
  zitat: {
    text: 'Pünktlich, freundlich, sauber — und das Ergebnis sieht aus wie neu. Herr Schmidt hat uns sogar noch Tipps zur Pflege gegeben. Absolute Empfehlung!',
    name: 'Familie Weber, Koblenz-Metternich',
  },
  oeffnungszeiten: [
    ['Montag – Donnerstag', '07:30 – 17:00 Uhr'],
    ['Freitag', '07:30 – 14:00 Uhr'],
    ['Samstag', 'nach Vereinbarung'],
    ['Sonntag', 'geschlossen'],
  ],
  galerie: [
    { alt: 'Platz für Ihre Projektfotos — z. B. ein frisch gestrichenes Wohnzimmer' },
    { alt: 'Platz für Ihr Team-Foto' },
    { alt: 'Platz für ein Vorher-Nachher Ihrer Fassade' },
  ],

  kunde: {
    name: 'Thomas Schmidt',
    email: 'info@maler-schmidt.de',
    telefon: '0261 1234567',
    website: '',
  },
};
