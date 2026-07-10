// Zielgruppen-Seiten für Rechtsanwälte: /webseite-fuer-rechtsanwaelte/{slug}/
// Tonalität: Mandanten suchen im Problemfall (dringend, gestresst) nach Rechtsgebiet
// + Stadt. Kompetenz & Erreichbarkeit zählen. Berufsrechtlich sachlich, seriös.
export const anwaelteCities = [
  {
    slug: 'koblenz',
    name: 'Koblenz',
    intro:
      'Kündigung erhalten, Unfall gehabt, Mietstreit eskaliert: Wer in Koblenz einen Anwalt braucht, hat ein akutes Problem — und sucht mit konkretem Rechtsgebiet: „Anwalt Arbeitsrecht Koblenz". Mit Oberlandesgericht und Landgericht vor Ort ist die Kanzleidichte hoch.',
    pain: 'Gefunden wird nicht die beste Kanzlei, sondern die sichtbarste: Wer sein Rechtsgebiet online nicht klar besetzt, verliert Mandate an Kollegen mit besserem Auftritt — täglich.',
    searchTerms: ['Anwalt Arbeitsrecht Koblenz', 'Rechtsanwalt Koblenz', 'Anwalt Verkehrsrecht Koblenz'],
  },
  {
    slug: 'neuwied',
    name: 'Neuwied',
    intro:
      'In Neuwied und dem Kreis suchen Mandanten den Anwalt am liebsten in der Nähe — Arbeitsrecht nach der Kündigung beim Arbeitgeber im Gewerbepark, Familienrecht, Verkehrssachen von der B42.',
    pain: 'Kleinere Kanzleien vor Ort haben hier einen Heimvorteil gegen die Koblenzer Großkanzleien — aber nur, wenn man sie online findet. Ohne Website geht das Mandat rheinaufwärts.',
    searchTerms: ['Rechtsanwalt Neuwied', 'Anwalt Familienrecht Neuwied', 'Anwalt Arbeitsrecht Neuwied'],
  },
  {
    slug: 'montabaur',
    name: 'Montabaur',
    intro:
      'Rund um Montabaur prägen Mittelstand und Handwerk die Mandate: Vertragsrecht, Baurecht, Forderungseinzug, Arbeitsrecht aus Arbeitgebersicht. Unternehmer suchen Kanzleien, die ihre Welt verstehen.',
    pain: 'Diese Unternehmer-Mandate sind planbar und lukrativ — und werden online vergeben: Der Geschäftsführer googelt abends „Anwalt Baurecht Westerwald", nicht das Branchenbuch.',
    searchTerms: ['Rechtsanwalt Montabaur', 'Anwalt Baurecht Westerwald', 'Anwalt Arbeitsrecht Montabaur'],
  },
  {
    slug: 'bonn',
    name: 'Bonn',
    intro:
      'Bonn hat eine dichte, spezialisierte Anwaltslandschaft — von Verwaltungsrecht (Behördenstadt!) über Erbrecht bis zu internationalen Mandaten aus dem UN-Umfeld. Mandanten suchen entsprechend spitz.',
    pain: 'Wer in Bonn „Rechtsanwalt" ohne erkennbaren Schwerpunkt anbietet, ist online unsichtbar. Sichtbar wird, wer sein Rechtsgebiet klar besetzt und mit Kompetenz-Inhalten belegt.',
    searchTerms: ['Anwalt Erbrecht Bonn', 'Rechtsanwalt Bonn', 'Anwalt Verwaltungsrecht Bonn'],
  },
  {
    slug: 'koeln',
    name: 'Köln',
    intro:
      'Köln ist einer der größten Rechtsmärkte Deutschlands: tausende Anwälte, Millionen potenzieller Mandanten. Der Markt sortiert sich fast vollständig über Google — Rechtsgebiet plus Stadtteil oder Stadt.',
    pain: 'Für Kölner Kanzleien ist die Website kein Aushängeschild mehr, sondern der Haupt-Akquisekanal: Wer bei „Anwalt Mietrecht Köln" auf Seite zwei steht, existiert für diese Mandate nicht.',
    searchTerms: ['Anwalt Mietrecht Köln', 'Rechtsanwalt Köln', 'Anwalt Verkehrsrecht Köln'],
  },
  {
    slug: 'mainz',
    name: 'Mainz',
    intro:
      'Landeshauptstadt, Gerichtsstandort, wachsende Wirtschaft: Mainzer Kanzleien bedienen Privatmandate und zunehmend junge Unternehmen — Gründer, die ihren Anwalt selbstverständlich online suchen.',
    pain: 'Diese neue Mandantengeneration erwartet digitale Wege: Online-Terminvereinbarung, Videoberatung, klare Honorarinfos. Kanzleien, die das bieten und zeigen, gewinnen sie fast konkurrenzlos.',
    searchTerms: ['Rechtsanwalt Mainz', 'Anwalt Arbeitsrecht Mainz', 'Anwalt Gesellschaftsrecht Mainz'],
  },
  {
    slug: 'wiesbaden',
    name: 'Wiesbaden',
    intro:
      'Wiesbaden bringt Kanzleien anspruchsvolle Mandate: Immobilien- und Erbrecht in einer Stadt voller Altbauvermögen, dazu Wirtschaftsmandate aus Versicherungs- und Landesbehörden-Umfeld.',
    pain: 'Vermögende Privatmandanten wählen ihre Kanzlei wie ihre Privatbank: diskret, aber nach gründlicher Online-Prüfung. Der Kanzleiauftritt muss dieser Prüfung standhalten.',
    searchTerms: ['Anwalt Erbrecht Wiesbaden', 'Rechtsanwalt Wiesbaden', 'Anwalt Immobilienrecht Wiesbaden'],
  },
  {
    slug: 'frankfurt-am-main',
    name: 'Frankfurt am Main',
    intro:
      'Frankfurt ist der härteste Rechtsmarkt des Landes — Großkanzleien, Boutiquen, Einzelkämpfer. Wer hier als kleine Kanzlei wächst, tut es über spitze Positionierung: Bankrecht für Verbraucher, Arbeitsrecht für Führungskräfte, Mietrecht im Nordend.',
    pain: 'Die Nische muss online glasklar erkennbar sein — in Sekunden. Eine generische Kanzlei-Website ist in Frankfurt rausgeworfenes Geld; eine positionierte ist eine Mandats-Maschine.',
    searchTerms: ['Anwalt Arbeitsrecht Frankfurt', 'Rechtsanwalt Frankfurt', 'Anwalt Bankrecht Frankfurt'],
  },
  {
    slug: 'trier',
    name: 'Trier',
    intro:
      'Triers Kanzleien haben ein Alleinstellungsmerkmal: grenzüberschreitende Mandate. Zehntausende Luxemburg-Pendler brauchen Beratung zu Arbeitsrecht, Steuern und Familienrecht über zwei Rechtsordnungen hinweg.',
    pain: 'Wer diese Grenzgänger-Kompetenz hat, aber online nicht zeigt, verschenkt die attraktivste Mandantengruppe der Region — sie sucht gezielt nach genau diesem Stichwort.',
    searchTerms: ['Rechtsanwalt Trier', 'Anwalt Grenzgänger Luxemburg', 'Anwalt Arbeitsrecht Trier'],
  },
  {
    slug: 'muenchen',
    name: 'München',
    intro:
      'München kombiniert die höchsten Streitwerte mit der höchsten Kanzleidichte Deutschlands — Immobilien, Erbschaften, Wirtschaftsmandate. Die Honorare sind erstklassig, die Konkurrenz auch.',
    pain: 'Münchner Mandanten prüfen hart: Auszeichnungen, Spezialisierung, Auftritt. Eine Kanzlei-Website unter dem Niveau der Mandate kostet hier mehr Umsatz als jede Fehlentscheidung im Marketing.',
    searchTerms: ['Rechtsanwalt München', 'Anwalt Immobilienrecht München', 'Anwalt Erbrecht München'],
  },
];
