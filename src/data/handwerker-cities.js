// Zielgruppen-Seiten für Handwerksbetriebe: /webdesign-fuer-handwerker/{slug}/
// Eigene Tonalität & Schmerzpunkte (Auftragsbücher, Mitarbeitersuche, Fotos von
// echter Arbeit) — bewusst anders als die allgemeinen Stadtseiten, damit keine
// Duplicate-Content-Situation entsteht.
export const handwerkerCities = [
  {
    slug: 'koblenz',
    name: 'Koblenz',
    intro:
      'Ob Maler, Elektriker, Sanitärbetrieb oder Dachdecker — in Koblenz und Umgebung suchen täglich Hausbesitzer und Firmen nach genau deiner Leistung. Die meisten Handwerksbetriebe hier haben volle Auftragsbücher durch Empfehlungen, aber keine Website, die diesen Vorsprung online sichtbar macht.',
    pain: 'Dein Problem ist selten "keine Kunden" — meistens ist es "keine Zeit, mich um die Website zu kümmern" oder "ich finde einfach keine neuen Mitarbeiter".',
    searchTerms: ['Elektriker Koblenz', 'Dachdecker Koblenz', 'Sanitärbetrieb Koblenz'],
  },
  {
    slug: 'bendorf',
    name: 'Bendorf',
    intro:
      'Bendorf und die umliegenden Stadtteile Sayn und Mülhofen leben von soliden Handwerksbetrieben mit langer Tradition — vom Familienbetrieb in dritter Generation bis zum jungen Meister, der gerade übernommen hat.',
    pain: 'Gerade traditionsreiche Betriebe verlassen sich oft zu lange auf Mundpropaganda — und merken erst spät, dass jüngere Kunden fast ausschließlich über Google suchen.',
    searchTerms: ['Schreiner Bendorf', 'Heizungsbau Bendorf', 'Maler Bendorf Sayn'],
  },
  {
    slug: 'neuwied',
    name: 'Neuwied',
    intro:
      'Neuwied ist einer der größten Handwerksstandorte am rechten Rheinufer — von Heimbach-Weis bis Engers gibt es kaum eine Straße ohne Malerbetrieb, Sanitärfirma oder Autowerkstatt.',
    pain: 'In einem so dichten Handwerksmarkt wie Neuwied entscheidet oft die Website darüber, wer den Anruf bekommt — nicht die Qualität der Arbeit allein.',
    searchTerms: ['Autowerkstatt Neuwied', 'Fliesenleger Neuwied', 'Gartenbau Neuwied'],
  },
  {
    slug: 'koeln',
    name: 'Köln',
    intro:
      'In einer Millionenstadt wie Köln ist der Handwerker-Markt riesig — und riesig umkämpft. Ob Ehrenfeld, Nippes oder Kalk: Wer hier online nicht auftaucht, verliert Aufträge an Betriebe, die eine Google-Anzeige oder eine gute Website haben.',
    pain: 'Viele Kölner Handwerksbetriebe haben mehr Aufträge, als sie stemmen können — ihr eigentliches Problem ist die Suche nach zuverlässigen neuen Mitarbeitern.',
    searchTerms: ['Elektriker Köln Ehrenfeld', 'Trockenbau Köln', 'Klempner Köln'],
  },
  {
    slug: 'frankfurt-am-main',
    name: 'Frankfurt am Main',
    intro:
      'Frankfurt wächst — und mit der Stadt wächst der Bedarf an Handwerksleistungen: Sanierungen, Neubauten, Instandhaltung. Handwerksbetriebe, die hier online sichtbar sind, profitieren direkt von diesem Wachstum.',
    pain: 'Gerade in Frankfurt gilt: Wer nur auf Empfehlungen setzt, lässt viel liegen — die Stadt wächst schneller, als sich Mundpropaganda verbreiten kann.',
    searchTerms: ['Sanitärbetrieb Frankfurt', 'Malerbetrieb Frankfurt', 'Elektriker Frankfurt'],
  },
  {
    slug: 'duesseldorf',
    name: 'Düsseldorf',
    intro:
      'Düsseldorf hat die höchste KMU-Dichte aller deutschen Großstädte — auch im Handwerk ist der Wettbewerb entsprechend groß. Wer hier online sichtbar ist, sammelt die Aufträge ein, die sonst an den Wettbewerber nebenan gehen.',
    pain: 'In einem so dichten Markt reicht gute Arbeit allein nicht — die Website entscheidet oft, wer überhaupt erst angerufen wird.',
    searchTerms: ['Dachdecker Düsseldorf', 'Sanitär Düsseldorf', 'Malerbetrieb Düsseldorf'],
  },
  {
    slug: 'andernach',
    name: 'Andernach',
    intro:
      'Andernach und das Umland leben von soliden Handwerksbetrieben — Sanitär, Elektro, Bau — die oft seit Jahrzehnten Bestand haben, aber online kaum sichtbar sind.',
    pain: 'Gerade etablierte Andernacher Betriebe verlassen sich zu oft allein auf ihren guten Ruf — während jüngere Kunden fast ausschließlich über Google suchen.',
    searchTerms: ['Sanitärbetrieb Andernach', 'Elektriker Andernach', 'Bauunternehmen Andernach'],
  },
  {
    slug: 'mayen',
    name: 'Mayen',
    intro:
      'Mayen und die Vulkaneifel haben eine lange Handwerkstradition — von Steinmetzen über Schreiner bis zu modernen Sanitär- und Elektrobetrieben.',
    pain: 'In einer eher ländlich geprägten Region wie der Vulkaneifel wird die Google-Suche zunehmend wichtiger, weil Empfehlungen allein nicht mehr über die Ortsgrenze hinaus reichen.',
    searchTerms: ['Schreiner Mayen', 'Sanitärbetrieb Mayen', 'Gartenbau Mayen'],
  },
  {
    slug: 'montabaur',
    name: 'Montabaur',
    intro:
      'Montabaur und der Westerwaldkreis wachsen durch die ICE-Anbindung spürbar — mit dem Wachstum steigt auch die Nachfrage nach Handwerksleistungen für Neubau und Sanierung.',
    pain: 'Viele Westerwälder Handwerksbetriebe haben mehr Anfragen, als sie bewältigen können — ihr eigentliches Problem ist die Suche nach zuverlässigen neuen Mitarbeitern, nicht nach Kunden.',
    searchTerms: ['Bauunternehmen Montabaur', 'Elektriker Montabaur', 'Heizungsbau Montabaur'],
  },
  {
    slug: 'muenchen',
    name: 'München',
    intro:
      'München ist einer der umkämpftesten Handwerksmärkte Deutschlands — hohe Nachfrage durch Bauboom und Sanierungswelle trifft auf ebenso hohe Konkurrenz um Aufträge und Fachkräfte.',
    pain: 'In München entscheidet die Website oft nicht nur über neue Kunden, sondern auch darüber, ob sich überhaupt noch Fachkräfte bei dir bewerben — der Arbeitsmarkt ist hart umkämpft.',
    searchTerms: ['Schreiner München', 'Elektriker München', 'Sanitärbetrieb München'],
  },
];
