/* Demo-Entwurf Bauunternehmen (fiktiver Betrieb) */

export default {
  slug: 'demo-bauunternehmen',

  firma: 'Bau Kessler GmbH',
  branche: 'Bauunternehmen',
  ort: 'Montabaur',
  claim: 'Wir bauen, was Bestand hat.',
  sub: 'Rohbau, Umbau, Sanierung: Ihr Bauunternehmen für den Westerwald — mit eigenem Team statt Subunternehmer-Kette, verlässlichen Terminen und Festpreisen, die halten. Seit 1987.',
  telefon: '02602 334455',
  email: 'anfrage@bau-kessler.de',
  adresse: 'Industriestraße 7, 56410 Montabaur',

  farben: { accent: '#D97C1F', dark: '#171208' },
  stil: { variante: 'bild', schrift: 'archivo', radius: '8px', button: '10px', caps: true },
  bilder: {
    hero: '/img/entwurf/bau-hero.jpg',
  },
  monogramm: 'BK',

  usps: ['Eigenes Team, keine Sub-Ketten', 'Festpreis-Garantie', 'Seit 1987', 'Westerwald & Umgebung'],
  leistungen: [
    { icon: 'haus', titel: 'Rohbau & Neubau', text: 'Vom Keller bis zum Dachstuhl: massiver Rohbau für Ein- und Mehrfamilienhäuser — termingerecht.' },
    { icon: 'werkzeug', titel: 'Umbau & Anbau', text: 'Wanddurchbrüche, Anbauten, Aufstockungen — wir schaffen Platz, wo Sie ihn brauchen.' },
    { icon: 'schild', titel: 'Kernsanierung', text: 'Altbau komplett erneuern: Statik, Rohbau, Abdichtung — koordiniert aus einer Hand.' },
    { icon: 'blatt', titel: 'Energetische Sanierung', text: 'Dämmung, neue Fenster, Fassade: weniger Energiekosten, mehr Wohnwert — förderfähig geplant.' },
    { icon: 'check', titel: 'Betonarbeiten', text: 'Fundamente, Bodenplatten, Stützmauern — sauber geschalt und fachgerecht bewehrt.' },
    { icon: 'blitz', titel: 'Pflaster & Außenanlagen', text: 'Einfahrten, Terrassen und Höfe, die auch nach Jahren noch eben liegen.' },
  ],
  themen: [
    {
      kicker: 'Neubau',
      titel: 'Ein Rohbau, auf den Sie sich verlassen können',
      text: 'Ihr Haus steht nur einmal — und es steht so gut wie sein Rohbau. Bei uns arbeiten eigene Maurer und Betonbauer nach einem Terminplan, der mit allen Gewerken abgestimmt ist. Der Zimmermann kommt, wenn wir fertig sind. Nicht drei Wochen später.',
      punkte: [
        'Eigene Maurer- und Betonbauer-Kolonnen',
        'Abgestimmter Terminplan mit allen Gewerken',
        'Festpreis nach Leistungsverzeichnis',
        'Bauleitung mit wöchentlichem Baustellenbericht',
      ],
      bildAlt: 'z. B. ein Rohbau Ihres Teams mit Kran',
    },
    {
      kicker: 'Sanierung',
      titel: 'Aus alt wird besser als neu',
      text: 'Alte Häuser haben Substanz — man muss nur wissen, wo. Wir sanieren Altbauten im Westerwald seit über 35 Jahren: von der feuchten Kellerwand bis zur kompletten Kernsanierung mit neuer Statik.',
      punkte: [
        'Ehrliche Bestandsaufnahme vor dem Angebot',
        'Statik, Abdichtung und Rohbau aus einer Hand',
        'Förderberatung (KfW/BEG) inklusive',
        'Bewohnbar bleiben während der Sanierung — wo möglich',
      ],
      bildAlt: 'z. B. ein Vorher-Nachher Ihrer letzten Sanierung',
    },
  ],
  ablauf: [
    { titel: 'Besichtigung', text: 'Wir schauen uns Grundstück oder Bestand an und hören, was Sie vorhaben.' },
    { titel: 'Angebot mit Festpreis', text: 'Detailliertes Leistungsverzeichnis statt Schätzung — Sie wissen, was es kostet.' },
    { titel: 'Ausführung', text: 'Eigenes Team, fester Bauleiter, wöchentlicher Bericht — Sie sind immer im Bild.' },
    { titel: 'Abnahme & Gewährleistung', text: 'Gemeinsame Abnahme mit Protokoll — und wir sind auch danach erreichbar.' },
  ],
  cta: {
    titel: 'Sie planen ein Bauprojekt?',
    text: 'Rufen Sie an — wir besichtigen kostenlos und sagen Ihnen ehrlich, was machbar ist und was es kostet.',
  },
  faq: [
    { frage: 'Arbeiten Sie mit Subunternehmern?', antwort: 'Die Kerngewerke — Maurer-, Beton- und Abbrucharbeiten — machen unsere eigenen Leute. Spezialgewerke vergeben wir nur an langjährige Partnerbetriebe aus der Region.' },
    { frage: 'Hält der Festpreis wirklich?', antwort: 'Ja — er basiert auf einem detaillierten Leistungsverzeichnis. Nachträge gibt es nur, wenn Sie selbst etwas ändern oder Verdecktes auftaucht, das niemand sehen konnte. Und dann sprechen wir vorher.' },
    { frage: 'Wie weit im Voraus muss ich anfragen?', antwort: 'Für größere Projekte planen wir aktuell 3–5 Monate Vorlauf. Kleinere Arbeiten passen oft dazwischen — fragen Sie einfach an.' },
    { frage: 'Begleiten Sie auch Förderanträge?', antwort: 'Ja, bei energetischen Sanierungen beraten wir zu KfW- und BEG-Förderung und liefern die nötigen Unterlagen für Ihren Energieberater.' },
  ],
  projekte: [
    { titel: 'Rohbau Einfamilienhaus', ort: 'Montabaur', text: 'Keller, Erdgeschoss, Obergeschoss in 11 Wochen — Übergabe an den Zimmermann auf den Tag genau.' },
    { titel: 'Kernsanierung Fachwerkhaus', ort: 'Wirges', text: 'Baujahr 1908: neue Statik, trockener Keller, gedämmte Hülle — heute ein Effizienzhaus.' },
    { titel: 'Anbau mit Aufstockung', ort: 'Ransbach-Baumbach', text: '60 m² mehr Wohnfläche, während die Familie im Haus wohnen blieb — in 9 Wochen.' },
  ],
  bewertungen: [
    { text: 'Termin zugesagt, Termin gehalten — auf den Tag. Der Festpreis stand am Ende genau so auf der Rechnung wie im Angebot.', name: 'Familie Roth', ort: 'Montabaur' },
    { text: 'Die haben unser 100 Jahre altes Haus gerettet. Ehrliche Ansagen, saubere Arbeit, faire Abrechnung.', name: 'J. Lehmann', ort: 'Wirges' },
    { text: 'Als Architekt arbeite ich regelmäßig mit Kessler — verlässlicher Rohbau ist bei denen keine Ausnahme, sondern Standard.', name: 'Architekturbüro H.', ort: 'Koblenz' },
  ],
  ueberUns: {
    text: [
      'Bau Kessler wurde 1987 als Zwei-Mann-Betrieb gegründet. Heute sind wir 22 Leute — Maurer, Betonbauer, Bauleiter — und immer noch ein Familienunternehmen, in dem der Chef jede Baustelle kennt.',
      'Unser Grundsatz ist einfach: lieber ein Projekt weniger annehmen als eins schlecht bauen. Deshalb bekommen Sie bei uns ehrliche Termine, echte Festpreise und ein Team, das seit Jahren zusammenarbeitet.',
    ],
    fakten: [
      { zahl: '1987', label: 'gegründet' },
      { zahl: '22', label: 'Mitarbeiter' },
      { zahl: '650+', label: 'Projekte' },
      { zahl: '2', label: 'Meister im Betrieb' },
    ],
  },
  oeffnungszeiten: [
    ['Montag – Donnerstag', '07:00 – 16:30 Uhr'],
    ['Freitag', '07:00 – 14:00 Uhr'],
    ['Samstag & Sonntag', 'geschlossen'],
  ],
  galerie: [],

  kunde: { name: 'Frank Kessler', email: 'anfrage@bau-kessler.de', telefon: '02602 334455', website: '' },
};
