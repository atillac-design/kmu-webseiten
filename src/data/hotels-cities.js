// Zielgruppen-Seiten für Hotels & Ferienwohnungen: /webseite-fuer-hotels/{slug}/
// Tonalität: Direktbuchung statt Booking-Provision (15-20 %!), Gastgeber-Persönlichkeit,
// Region verkaufen. Zielgruppe: Privathotels, Pensionen, Ferienwohnungs-Vermieter.
export const hotelsCities = [
  {
    slug: 'koblenz',
    name: 'Koblenz',
    intro:
      'Deutsches Eck, BUGA-Erbe, Startpunkt für Rhein und Mosel: Koblenz ist Übernachtungsstadt — Städtereisende, Radfahrer, Geschäftsgäste. Gebucht wird online, oft spontan vom Handy.',
    pain: 'Wer nur über Booking und Co. buchbar ist, zahlt 15–20 % Provision auf jede Nacht. Eine eigene Website mit Direktbuchung macht aus Portal-Gästen Stammgäste — und aus Provision Gewinn.',
    searchTerms: ['Hotel Koblenz', 'Ferienwohnung Koblenz', 'Hotel Koblenz Altstadt'],
  },
  {
    slug: 'cochem',
    name: 'Cochem',
    intro:
      'Cochem ist das Buchungszentrum der Mosel: Reichsburg, Weinfeste, Flusskreuzfahrten — Gäste aus Holland, Belgien und ganz Deutschland planen hier Monate im Voraus, komplett online.',
    pain: 'Bei dieser Nachfrage entscheidet die eigene Website über die Marge: Häuser mit überzeugendem Auftritt und Direktbuchung behalten die Portal-Provision — bei 200 Nächten im Jahr ein fünfstelliger Betrag.',
    searchTerms: ['Hotel Cochem', 'Ferienwohnung Cochem', 'Pension Mosel Cochem'],
  },
  {
    slug: 'boppard',
    name: 'Boppard',
    intro:
      'Boppard liegt mitten im Welterbe Oberes Mittelrheintal — Rheinsteig-Wanderer, Flusskreuzfahrer und bald die BUGA 2029: Die Übernachtungsnachfrage wächst, und sie recherchiert online.',
    pain: 'Gerade kleinere Häuser und Ferienwohnungen sind hier oft nur auf Portalen sichtbar. Die eigene Website mit Geschichte, Bildern und Direktanfrage hebt dich ab — und spart Provision.',
    searchTerms: ['Hotel Boppard', 'Ferienwohnung Boppard', 'Hotel Mittelrhein'],
  },
  {
    slug: 'bernkastel-kues',
    name: 'Bernkastel-Kues',
    intro:
      'Bernkastel-Kues ist das Postkartenmotiv der Mosel — Fachwerk, Weinlagen, Vinotheken. Gäste kommen für Weinproben und Mosel-Romantik, viele als Wiederholungstäter Jahr für Jahr.',
    pain: 'Genau diese Stammgäste sind bares Geld: Wer sie per Website und Direktbuchung an sich bindet, statt sie jedes Jahr neu über Portale zu „kaufen", verwandelt Provision in Rendite.',
    searchTerms: ['Hotel Bernkastel-Kues', 'Ferienwohnung Bernkastel', 'Weingut Übernachtung Mosel'],
  },
  {
    slug: 'bad-neuenahr-ahrweiler',
    name: 'Bad Neuenahr-Ahrweiler',
    intro:
      'Das Ahrtal meldet sich zurück: Neue und wiedereröffnete Hotels, Weingüter mit Gästezimmern, ein treues Stammpublikum, das die Region bewusst unterstützen will — und online prüft, wer wieder geöffnet hat.',
    pain: 'Veraltete Websites mit Vor-Flut-Bildern kosten hier doppelt: Sie beantworten die wichtigste Gästefrage nicht („Seid ihr wieder da?") und verschenken die Willkommens-Welle an besser sichtbare Häuser.',
    searchTerms: ['Hotel Bad Neuenahr', 'Ferienwohnung Ahrtal', 'Hotel Ahrweiler'],
  },
  {
    slug: 'bad-ems',
    name: 'Bad Ems',
    intro:
      'Als UNESCO-Welterbe-Kurstadt zieht Bad Ems Kurgäste, Wellness-Wochenender und Lahntal-Radler an — ein Publikum, das länger bleibt und mehr ausgibt als der Durchschnittstourist.',
    pain: 'Diese planenden Gäste vergleichen gründlich online. Häuser ohne modernen Auftritt mit Zimmerbildern, Preisen und Direktanfrage verlieren sie an die Konkurrenz — oder an die Portale samt Provision.',
    searchTerms: ['Hotel Bad Ems', 'Ferienwohnung Bad Ems', 'Wellness Hotel Lahntal'],
  },
  {
    slug: 'ruedesheim-am-rhein',
    name: 'Rüdesheim am Rhein',
    intro:
      'Drosselgasse, Niederwalddenkmal, Millionen Tagesgäste: Rüdesheim ist einer der meistbesuchten Orte am Rhein — und ein Übernachtungsmarkt mit internationaler Kundschaft von Japan bis USA.',
    pain: 'Internationale Gäste buchen fast ausschließlich online — wer nur auf Laufkundschaft und Portale setzt, überlässt die planenden, mehrtägigen (und lukrativeren) Gäste den Häusern mit starker Website.',
    searchTerms: ['Hotel Rüdesheim', 'Ferienwohnung Rüdesheim', 'Hotel Rheingau'],
  },
  {
    slug: 'trier',
    name: 'Trier',
    intro:
      'Porta Nigra, Römerstadt, Luxemburg-Nähe: Trier verbindet Städtetourismus mit Geschäftsreisenden und Messegästen aus dem Großherzogtum — Auslastung fast das ganze Jahr.',
    pain: 'Geschäftsgäste und Luxemburger buchen bevorzugt direkt — wenn das Haus online professionell wirkt und die Anfrage einfach ist. Ohne eigene starke Website bleibt nur der Portal-Kanal mit Provision.',
    searchTerms: ['Hotel Trier', 'Ferienwohnung Trier', 'Hotel Trier Zentrum'],
  },
  {
    slug: 'adenau',
    name: 'Adenau (Nürburgring)',
    intro:
      'Adenau lebt vom Mythos Nürburgring: Touristenfahrer, Rennfans und Firmen-Events füllen die Betten der Eifel — ein internationales Publikum mit klaren Terminen (Rennkalender!) und hoher Zahlungsbereitschaft.',
    pain: 'Ring-Gäste buchen strikt online und terminbezogen. Häuser, deren Website Rennkalender-Wochenenden, Garagen für Sportwagen oder Motorrad-Stellplätze nicht sichtbar macht, verlieren genau diese Klientel.',
    searchTerms: ['Hotel Nürburgring', 'Ferienwohnung Adenau', 'Unterkunft Nürburgring'],
  },
  {
    slug: 'limburg',
    name: 'Limburg',
    intro:
      'Limburg liegt strategisch an der A3 zwischen Frankfurt und Köln — Geschäftsreisende, Durchreisende und Wochenend-Städtetouristen für die Fachwerk-Altstadt sichern konstante Nachfrage.',
    pain: 'Durchreisende buchen kurzfristig vom Handy: Wer bei „Hotel Limburg" nicht mit aktueller Website, Bildern und schneller Buchungsmöglichkeit auftaucht, verliert an die Kettenhotels an der Autobahn.',
    searchTerms: ['Hotel Limburg', 'Ferienwohnung Limburg', 'Hotel Limburg Altstadt'],
  },
];
