// Zielgruppen-Seiten für Fahrschulen: /webseite-fuer-fahrschulen/{slug}/
// Tonalität: Zielgruppe ist jung (17-25) und sucht mobil — aber die Eltern zahlen
// und vergleichen mit. Preise transparent, Anmeldung einfach, Team & Fahrzeuge
// zeigen. Zweite Zielgruppe: Umschreiber & Auffrischer.
export const fahrschulenCities = [
  {
    slug: 'koblenz',
    name: 'Koblenz',
    intro:
      'Jedes Jahr machen in Koblenz hunderte Jugendliche ihren Führerschein — und suchen ihre Fahrschule dort, wo sie leben: auf dem Handy. Verglichen werden Preise, Bewertungen und ob die Anmeldung online geht.',
    pain: 'Dabei entscheiden oft die Eltern mit, die zahlen — und die wollen Preise und Ablauf schwarz auf weiß sehen. Eine Fahrschule ohne moderne Website verliert beide Generationen gleichzeitig.',
    searchTerms: ['Fahrschule Koblenz', 'Führerschein Koblenz Kosten', 'Fahrschule Koblenz B196'],
  },
  {
    slug: 'neuwied',
    name: 'Neuwied',
    intro:
      'Im Kreis Neuwied ist der Führerschein für Jugendliche keine Option, sondern Pflicht — ohne Auto geht auf dem Land nichts. Die Fahrschul-Wahl fällt per Google und auf Empfehlung im Klassenchat.',
    pain: 'Fahrschulen, die online keine Preise, Termine und Erfolgsquoten zeigen, tauchen im Klassenchat gar nicht erst auf — geteilt wird, was man verlinken kann.',
    searchTerms: ['Fahrschule Neuwied', 'Führerschein Neuwied', 'Fahrschule Neuwied Preise'],
  },
  {
    slug: 'andernach',
    name: 'Andernach',
    intro:
      'Zwischen Pellenz und Rheinufer verteilen sich die Fahrschüler auf wenige Fahrschulen — wer hier als moderne, gut bewertete Fahrschule sichtbar ist, bekommt die Anmeldungen der ganzen Umgebung.',
    pain: 'Der Jahrgang, der jetzt 17 wird, kennt keine Welt ohne Online-Anmeldung. Ein Anmeldeformular auf der Website ist für diese Zielgruppe keine Kür, sondern Grundvoraussetzung.',
    searchTerms: ['Fahrschule Andernach', 'Führerschein Andernach', 'Fahrschule Pellenz'],
  },
  {
    slug: 'montabaur',
    name: 'Montabaur',
    intro:
      'Im Westerwald rund um Montabaur ist die Fahrschule Teil des Erwachsenwerdens — Klasse B, oft dazu Anhänger oder 125er. Die Wege sind weit, die Auswahl klein, die Google-Suche entscheidet.',
    pain: 'Gerade auf dem Land vergleichen Familien genau, welche Fahrschule Theorie am Ort und flexible Fahrstunden bietet. Wer das online nicht klar zeigt, verliert an die Fahrschule im Nachbarort.',
    searchTerms: ['Fahrschule Montabaur', 'Führerschein Westerwald', 'Fahrschule Montabaur Preise'],
  },
  {
    slug: 'bonn',
    name: 'Bonn',
    intro:
      'Bonn hat dutzende Fahrschulen und eine junge, internationale Kundschaft: Studierende, UN-Familien, Umschreiber ausländischer Führerscheine. Ein vielfältiger Markt mit hohem Online-Anteil.',
    pain: 'Besonders die Umschreiber — oft mit dringendem Bedarf und wenig Deutschkenntnissen — suchen gezielt online. Fahrschulen, die diesen Service sichtbar anbieten, erschließen sich einen lukrativen Zusatzmarkt.',
    searchTerms: ['Fahrschule Bonn', 'Führerschein umschreiben Bonn', 'Fahrschule Bonn Preise'],
  },
  {
    slug: 'koeln',
    name: 'Köln',
    intro:
      'Köln ist ein Millionen-Markt für Fahrschulen — gesucht wird nach Veedel: „Fahrschule Ehrenfeld", „Fahrschule Nippes". Dazu kommen Intensivkurse für alle, die es eilig haben.',
    pain: 'Bei dieser Konkurrenz gewinnt, wer im eigenen Veedel digital dominiert und Extras wie Intensivkurse oder Automatik-Ausbildung prominent zeigt. Unsichtbare Fahrschulen füllen keine Theorieräume.',
    searchTerms: ['Fahrschule Köln', 'Intensivkurs Führerschein Köln', 'Fahrschule Köln Ehrenfeld'],
  },
  {
    slug: 'mainz',
    name: 'Mainz',
    intro:
      'Universitätsstadt Mainz: Studierende ohne Auto-Sozialisation machen den Führerschein später, dafür zielstrebiger — oft als Intensivkurs in den Semesterferien, gebucht komplett online.',
    pain: 'Diese Zielgruppe erreicht keine Fahrschule über das Schaufenster: Sie vergleicht abends im Netz und meldet sich an, wo Preise, Kurstermine und Bewertungen überzeugen.',
    searchTerms: ['Fahrschule Mainz', 'Führerschein Intensivkurs Mainz', 'Fahrschule Mainz Preise'],
  },
  {
    slug: 'wiesbaden',
    name: 'Wiesbaden',
    intro:
      'In Wiesbaden gehört zum 17. Geburtstag das begleitete Fahren — die Anmeldung dazu recherchieren Jugendliche und Eltern gemeinsam online, meist Monate im Voraus.',
    pain: 'Fahrschulen ohne überzeugende Website verlieren diese planenden Familien an Mitbewerber, die Ablauf, Kosten und BF17 verständlich erklären — Transparenz gewinnt die Unterschrift.',
    searchTerms: ['Fahrschule Wiesbaden', 'BF17 Wiesbaden', 'Fahrschule Wiesbaden Kosten'],
  },
  {
    slug: 'giessen',
    name: 'Gießen',
    intro:
      'Deutschlands studentischste Stadt hat permanenten Führerschein-Nachschub: Erstsemester aus aller Welt, Umschreiber, Nachzügler — plus das ländliche Umland mit klassischem 17-Jährigen-Geschäft.',
    pain: 'Diese gemischte Zielgruppe eint eines: Sie sucht ausschließlich online. Eine Gießener Fahrschule ohne moderne Website existiert für die halbe Stadt schlicht nicht.',
    searchTerms: ['Fahrschule Gießen', 'Führerschein Gießen', 'Fahrschule Gießen Intensivkurs'],
  },
  {
    slug: 'kaiserslautern',
    name: 'Kaiserslautern',
    intro:
      'Kaiserslautern hat neben dem klassischen Geschäft eine Besonderheit: tausende US-Amerikaner, die einen deutschen oder internationalen Führerschein-Service suchen — am liebsten mit englischsprachiger Betreuung.',
    pain: 'Fahrschulen, die diesen Service anbieten, aber online nur auf Deutsch und veraltet auftreten, verschenken die kaufkräftigste Sonderzielgruppe der Region.',
    searchTerms: ['Fahrschule Kaiserslautern', 'driving school Kaiserslautern', 'Führerschein Kaiserslautern'],
  },
  {
    slug: 'berlin',
    name: 'Berlin',
    intro:
      'Jedes Jahr machen zehntausende Berliner ihren Führerschein — und die Generation, die jetzt 17 wird, sucht ihre Fahrschule zu 100 Prozent am Handy: Google, Preise, Bewertungen, fertig.',
    pain: 'Berliner Fahrschüler vergleichen gnadenlos: Preisliste online, Anmeldung online, moderne Autos auf Fotos. Fahrschulen ohne zeitgemäßen Auftritt wirken auf 17-Jährige wie aus einer anderen Zeit.',
    searchTerms: ['Fahrschule Berlin', 'Fahrschule Berlin Neukölln Preise', 'Führerschein Berlin Kosten'],
  },
  {
    slug: 'hamburg',
    name: 'Hamburg',
    intro:
      'Von Altona bis Bergedorf: Hamburgs Fahrschulmarkt ist dicht besetzt, aber die Nachfrage bleibt riesig — inklusive Intensivkurse, Umschreibungen internationaler Führerscheine und Auffrischungsstunden.',
    pain: 'Wer in Hamburg nach „Fahrschule in meiner Nähe" sucht, sieht zuerst Google Maps und Websites — Empfehlungen vom Schulhof reichen längst nicht mehr, um die Kurse zu füllen.',
    searchTerms: ['Fahrschule Hamburg', 'Intensivkurs Führerschein Hamburg', 'Fahrschule Hamburg Altona'],
  },
  {
    slug: 'muenchen',
    name: 'München',
    intro:
      'München hat zahlungskräftige Fahrschüler und volle Wartelisten — aber auch hier gilt: Die Anmeldungen bekommen die Fahrschulen, die online professionell auftreten und Anmeldung wie Terminplanung digital anbieten.',
    pain: 'Münchner Eltern zahlen 3.000+ Euro für den Führerschein ihrer Kinder — und wählen die Fahrschule mit, deren Auftritt Seriosität und moderne Ausbildung verspricht.',
    searchTerms: ['Fahrschule München', 'Fahrschule München Schwabing', 'Führerschein München Preis'],
  },
  {
    slug: 'frankfurt-am-main',
    name: 'Frankfurt am Main',
    intro:
      'Frankfurts internationale Bevölkerung bringt Fahrschulen ein Zusatzgeschäft, das viele unterschätzen: Umschreibungen ausländischer Führerscheine und Unterricht auf Englisch — beides wird fast nur online gesucht.',
    pain: 'Ohne Website, die Leistungen wie „Führerschein-Umschreibung" oder „English lessons" sichtbar macht, verschenkt eine Frankfurter Fahrschule genau die Nischen mit der geringsten Konkurrenz.',
    searchTerms: ['Fahrschule Frankfurt', 'driving school Frankfurt English', 'Führerschein umschreiben Frankfurt'],
  },
  {
    slug: 'stuttgart',
    name: 'Stuttgart',
    intro:
      'In der Autostadt Stuttgart gehört der Führerschein zur Grundausstattung — die Nachfrage ist konstant hoch, vom B-Führerschein bis zu Motorrad- und Anhängerklassen.',
    pain: 'Stuttgarter Fahrschulen mit veralteter oder fehlender Website verlieren die Schüler an Ketten mit Online-Anmeldung — obwohl die persönliche Betreuung beim Familienbetrieb oft besser ist.',
    searchTerms: ['Fahrschule Stuttgart', 'Fahrschule Stuttgart West', 'Motorradführerschein Stuttgart'],
  },
];
