/* Demo-Entwurf Therapiepraxis (fiktiver Betrieb) */

export default {
  slug: 'demo-physiotherapie',

  firma: 'Physiotherapie Balance',
  branche: 'Praxis für Physiotherapie',
  ort: 'Andernach',
  claim: 'Wieder schmerzfrei. Wieder beweglich. Wieder du.',
  sub: 'Moderne Physiotherapie in Andernach: Wir behandeln nicht nur Symptome, sondern finden die Ursache — mit Zeit, Fachwissen und einem Plan, der zu Ihrem Alltag passt. Alle Kassen und Privat.',
  telefon: '02632 456789',
  email: 'termine@physio-balance.de',
  adresse: 'Rheintorstraße 15, 56626 Andernach',

  farben: { accent: '#2E8F83', dark: '#0E1A18' },
  monogramm: 'PB',

  usps: ['Alle Kassen & Privat', 'Termine auch abends', 'Barrierefreie Praxis', 'Parkplätze vor der Tür'],
  leistungen: [
    { icon: 'herz', titel: 'Krankengymnastik', text: 'Aktive Übungstherapie nach Verletzung, OP oder bei chronischen Beschwerden — mit klarem Behandlungsplan.' },
    { icon: 'werkzeug', titel: 'Manuelle Therapie', text: 'Gezielte Handgriffe lösen Blockaden an Gelenken und Wirbelsäule und bringen Bewegung zurück.' },
    { icon: 'blitz', titel: 'Sportphysiotherapie', text: 'Für Freizeit- und Leistungssportler: schneller zurück ins Training, mit Belastungssteuerung.' },
    { icon: 'blatt', titel: 'Lymphdrainage', text: 'Sanfte Entstauungstherapie bei Schwellungen — auch nach Operationen und in der Onkologie.' },
    { icon: 'stern', titel: 'CMD-Behandlung', text: 'Kieferschmerzen, Knirschen, Verspannung: spezialisierte Therapie in Zusammenarbeit mit Ihrem Zahnarzt.' },
    { icon: 'uhr', titel: 'Hausbesuche', text: 'Wenn Sie nicht zu uns kommen können, kommen wir zu Ihnen — auf Rezept oder privat.' },
  ],
  themen: [
    {
      kicker: 'Unser Ansatz',
      titel: 'Wir behandeln Ursachen, nicht nur Symptome',
      text: 'Rückenschmerz kommt selten vom Rücken allein. In der Erstuntersuchung nehmen wir uns 40 Minuten Zeit, schauen auf Haltung, Beweglichkeit und Alltag — und erklären Ihnen verständlich, was los ist und was wir dagegen tun.',
      punkte: [
        '40 Minuten ausführliche Erstuntersuchung',
        'Behandlungsplan mit klaren Zielen',
        'Übungen für zuhause — per App oder auf Papier',
        'Regelmäßige Fortschrittskontrolle',
      ],
      bildAlt: 'z. B. Behandlung in Ihrem hellen Therapieraum',
    },
    {
      kicker: 'Die Praxis',
      titel: 'Eine Praxis, in der man gerne Termine hat',
      text: 'Helle Behandlungsräume, ein moderner Trainingsbereich und ein Empfang, der Sie beim Namen kennt. Termine bekommen Sie bei uns auch früh morgens und abends — weil Therapie in Ihren Alltag passen muss, nicht umgekehrt.',
      punkte: [
        '5 Behandlungsräume + Trainingsfläche',
        'Termine von 7:00 bis 20:00 Uhr',
        'Barrierefrei im Erdgeschoss, Parkplätze am Haus',
        'Online-Terminbuchung rund um die Uhr',
      ],
      bildAlt: 'z. B. Ihr Empfangsbereich oder Trainingsraum',
    },
  ],
  ablauf: [
    { titel: 'Rezept & Termin', text: 'Rezept vom Arzt mitbringen oder privat buchen — telefonisch oder online.' },
    { titel: 'Erstuntersuchung', text: '40 Minuten Befund: Wir hören zu, untersuchen gründlich und erklären verständlich.' },
    { titel: 'Behandlungsplan', text: 'Therapie mit klaren Zielen — plus Übungen, die in Ihren Alltag passen.' },
    { titel: 'Dranbleiben', text: 'Wir kontrollieren Fortschritte und passen die Therapie an, bis das Ziel erreicht ist.' },
  ],
  cta: {
    titel: 'Schmerzen müssen nicht bleiben.',
    text: 'Rufen Sie an oder buchen Sie online — kurzfristige Termine sind oft schon in derselben Woche möglich.',
  },
  faq: [
    { frage: 'Brauche ich ein Rezept?', antwort: 'Für Kassenleistungen ja — das stellt Ihr Haus- oder Facharzt aus. Privat können Sie auch ohne Rezept zu uns kommen.' },
    { frage: 'Wie schnell bekomme ich einen Termin?', antwort: 'Meist innerhalb einer Woche, bei akuten Beschwerden oft schneller. Rufen Sie einfach an — wir tun, was geht.' },
    { frage: 'Was soll ich zur Behandlung mitbringen?', antwort: 'Rezept, Versichertenkarte, bequeme Kleidung und ein großes Handtuch. Alles andere haben wir da.' },
    { frage: 'Übernimmt die Kasse die Kosten?', antwort: 'Ja, mit Rezept — es fällt nur die gesetzliche Zuzahlung an. Privatleistungen rechnen wir transparent nach Preisliste ab.' },
  ],
  projekte: [
    { titel: 'Reha nach Knie-OP', ort: 'Kreuzband', text: 'Von der Gehhilfe zurück auf den Fußballplatz in sechs Monaten — mit strukturiertem Aufbautraining.' },
    { titel: 'Chronischer Rückenschmerz', ort: '12 Wochen Programm', text: 'Nach Jahren mit Schmerzmitteln: gezielter Muskelaufbau, neue Haltung, dauerhaft schmerzfrei im Büro.' },
    { titel: 'CMD-Therapie', ort: 'mit Zahnarztpraxis', text: 'Kiefergelenks-Beschwerden nach 8 Sitzungen deutlich gebessert — Knirschschiene ergänzt die Therapie.' },
  ],
  bewertungen: [
    { text: 'Zum ersten Mal hat sich jemand wirklich Zeit genommen, um zu verstehen, woher meine Schmerzen kommen. Nach acht Wochen bin ich beschwerdefrei.', name: 'S. Neumann', ort: 'Andernach' },
    { text: 'Kompetent, herzlich, pünktlich — und die Übungen für zuhause per App sind Gold wert.', name: 'T. Berger', ort: 'Mayen' },
    { text: 'Nach meiner Hüft-OP war ich hier in besten Händen. Klare Empfehlung für jeden, der ernsthaft an sich arbeiten will.', name: 'H. Schulte', ort: 'Andernach' },
  ],
  ueberUns: {
    text: [
      'Physiotherapie Balance wurde 2011 gegründet — aus der Überzeugung, dass gute Therapie Zeit, Fachwissen und echtes Zuhören braucht. Heute arbeiten bei uns sechs Therapeutinnen und Therapeuten mit Spezialisierungen von Manueller Therapie bis Sportphysio.',
      'Wir bilden uns ständig fort und arbeiten eng mit Ärzten der Region zusammen. Unser Ziel ist nicht die zehnte Verordnung — sondern dass Sie uns möglichst bald nicht mehr brauchen.',
    ],
    fakten: [
      { zahl: '6', label: 'Therapeut:innen' },
      { zahl: '14', label: 'Jahre Praxis' },
      { zahl: '40', label: 'Min. Erstbefund' },
      { zahl: '7–20', label: 'Uhr Termine' },
    ],
  },
  oeffnungszeiten: [
    ['Montag – Donnerstag', '07:00 – 20:00 Uhr'],
    ['Freitag', '07:00 – 16:00 Uhr'],
    ['Samstag & Sonntag', 'geschlossen'],
  ],
  galerie: [],

  kunde: { name: 'Julia Wagner', email: 'termine@physio-balance.de', telefon: '02632 456789', website: '' },
};
