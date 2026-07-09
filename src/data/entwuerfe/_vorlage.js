/* ============================================================
   VORLAGE für einen neuen Kunden-Entwurf (nicht importiert).
   Neuen Entwurf anlegen:
     1. Diese Datei kopieren → `{slug}.js` (z. B. `maler-schmidt.js`)
     2. Alle Felder mit echten, recherchierten Inhalten füllen
        (alte Website, Google-Maps-Eintrag, Lead-Formular) —
        niemals Platzhalter-Texte an Kunden schicken.
     3. In `index.js` importieren und ins Array aufnehmen.
     4. Bauen, pushen → live unter /entwurf/{slug}/
   ============================================================ */

export default {
  slug: 'muster-betrieb', // wird Teil der URL: /entwurf/muster-betrieb/

  // ---- Betrieb ----
  firma: 'Musterbetrieb GmbH',
  branche: 'Handwerksbetrieb', // sichtbar unter dem Logo & im Seitentitel
  ort: 'Musterstadt',
  claim: 'Kurzer, kräftiger Satz als Überschrift.', // max. ~8 Wörter
  sub: 'Zwei bis drei Sätze, die den Betrieb konkret beschreiben: Was, für wen, seit wann, in welchem Umkreis.',
  telefon: '0123 456789',
  email: 'info@musterbetrieb.de',
  adresse: 'Musterstraße 1, 12345 Musterstadt',

  // ---- Design (aus alter Website / Logo recherchieren) ----
  farben: {
    accent: '#2557E8', // Hauptfarbe des Betriebs
    dark: '#10151D',   // dunkler Ton für Hero/Kontakt (zur Accent-Farbe passend)
  },
  monogramm: 'MB', // 1–2 Buchstaben fürs Logo-Feld (solange kein echtes Logo da ist)
  // logo: '/img/entwurf/muster-betrieb/logo.png', // optional: echtes Logo, ersetzt Monogramm

  // ---- Inhalte ----
  usps: ['Meisterbetrieb', 'Festpreis-Angebot', 'Region Musterstadt'], // 3–4 kurze Trust-Punkte
  leistungen: [
    // icon: check, werkzeug, pinsel, haus, blitz, schild, stern, uhr,
    //       herz, chat, blatt, diamant, kamera, teller, schere, lupe
    { icon: 'werkzeug', titel: 'Leistung eins', text: 'Ein Satz, der die Leistung konkret beschreibt.' },
    { icon: 'haus', titel: 'Leistung zwei', text: 'Ein Satz, der die Leistung konkret beschreibt.' },
    { icon: 'schild', titel: 'Leistung drei', text: 'Ein Satz, der die Leistung konkret beschreibt.' },
  ],
  ueberUns: {
    text: [
      'Erster Absatz: Geschichte und Menschen hinter dem Betrieb.',
      'Zweiter Absatz: Arbeitsweise, Werte, was Kunden erwarten können.',
    ],
    fakten: [
      { zahl: '25+', label: 'Jahre Erfahrung' },
      { zahl: '500+', label: 'Projekte' },
      { zahl: '4,9★', label: 'Google-Bewertung' },
      { zahl: '48h', label: 'Reaktionszeit' },
    ],
  },
  zitat: null, // oder: { text: 'Echte Kundenstimme (z. B. aus Google-Rezensionen).', name: 'M. Mustermann, Musterstadt' }
  oeffnungszeiten: [
    ['Montag – Freitag', '08:00 – 17:00 Uhr'],
    ['Samstag', 'nach Vereinbarung'],
    ['Sonntag', 'geschlossen'],
  ],
  galerie: [
    // Bilder unter public/img/entwurf/{slug}/ ablegen.
    // { src: '/img/entwurf/muster-betrieb/projekt1.jpg', alt: 'Beschreibung' },
    // Ohne src wird ein Platzhalter gezeigt („Hier kommen deine Fotos hin"):
    { alt: 'Platz für deine Projektfotos' },
    { alt: 'Platz für dein Team-Foto' },
    { alt: 'Platz für deine Werkstatt / dein Geschäft' },
  ],

  // ---- Lead-Daten (fürs vorbefüllte Onboarding hinter dem CTA) ----
  kunde: {
    name: 'Max Mustermann',
    email: 'max@musterbetrieb.de',
    telefon: '0151 2345678',
    website: '', // alte Domain, falls vorhanden
  },
};
