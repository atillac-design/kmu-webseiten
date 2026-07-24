# Entwurf-Automatik: Lead → recherchierter Entwurf → Versand

**Stand: GEPLANT.** Vorlage & Prozess sind fertig, die Automatik-Brücke (Make → Google Sheet →
Routine) ist noch nicht eingerichtet. Dieses Dokument ist der Bauplan.

## Ziel

Nach einer echten Anfrage soll ohne Handarbeit ein individueller, recherchierter
Website-Entwurf entstehen und live gehen. Atilla prüft nur noch und drückt auf „Senden".

```
[Lead-Formular] → [Make: Mail + MailerLite + Bestätigung]   (LIVE, unverändert)
                → [NEU: Zeile in Google Sheet „KMU Leads"]  (Make, 1 Modul)
                        ↓
[Routine, stündlich]: Sheet lesen → neue Leads erkennen
   1. PRÜFEN     Betrieb googeln: existiert er? Branche plausibel? Website/Impressum?
                 Nachname stimmig? E-Mail-Domain plausibel? → sonst „verdächtig" markieren
   2. RECHERCHE  Leistungen, Stil/Farben (alte Website/Logo), Google-Bewertungen,
                 Adresse & Telefon (Impressum), Besonderheiten
   3. ENTWURF    src/data/entwuerfe/_vorlage.js kopieren → {slug}.js, mit echten
                 Inhalten füllen, in index.js registrieren, bauen, pushen
                 → live: kmu-webseiten.de/entwurf/{slug}/  (noindex)
   4. ÜBERGABE   Push-Nachricht an Atilla: Entwurf-Link + fertiger E-Mail-Text
                        ↓
[Atilla]: 5 Min prüfen → E-Mail an Interessent senden (später automatisierbar)
```

## Warum der Mensch (noch) am Ende steht

USP ist „echter Entwurf, kein Baukasten". Ein danebengegangener Auto-Entwurf bei einem
echten Interessenten schadet genau diesem Versprechen. Deshalb: Automatik bis 90 %,
Freigabe durch Atilla. Vollautomatischer Versand erst, wenn mehrere Entwürfe ohne
Korrektur durchgelaufen sind.

## Was Atilla einmalig einrichten muss (·wartet·)

**Make: Google-Sheets-Modul anhängen** (~3 Minuten):
1. Google Sheet „KMU Leads" anlegen mit Kopfzeile:
   `datum | name | email | telefon | firma | ort | branche | websiteStatus | website | wuensche | quelle | status`
2. Make → Lead-Szenario → nach dem MailerLite-Modul: `Google Sheets → Add a Row`
   (Google-Konto verbinden, Sheet wählen, Felder aus dem Webhook mappen,
   `status` fest auf `NEU`).
3. Speichern, Testlauf. Fertig — mehr ändert sich in Make nie wieder.

**Claude: Google-Drive-Zugang** muss in der Session verbunden sein (Drive-MCP),
damit die Routine das Sheet lesen kann. Schreiben ins Sheet kann die Routine nicht
(Drive-MCP ist lesend) — den Status „ERLEDIGT" pflegt Atilla oder wir lösen es über
eine Datei im Repo (z. B. docs/leads-verarbeitet.json als Gedächtnis der Routine).

## Entwurf anlegen (der manuelle Kern, den die Routine ausführt)

1. `src/data/entwuerfe/_vorlage.js` → `{slug}.js` kopieren (slug: `firma-ort`, klein,
   Bindestriche).
2. **Alle** Felder mit recherchierten Inhalten füllen — niemals Platzhalter an Kunden.
   Stil pro Kunde variieren (variante/schrift/farben), damit kein Entwurf dem anderen
   gleicht. Farben aus Logo/alter Website ableiten.
3. In `src/data/entwuerfe/index.js` importieren + ins Array.
4. `npm run build` → committen → pushen → live unter `/entwurf/{slug}/` (noindex,
   nicht in der Sitemap).

## Qualitäts-Checkliste vor Versand (Atillas 5 Minuten)

- [ ] Firmenname, Ort, Leistungen fachlich korrekt? (keine erfundenen Fakten!)
- [ ] Zahlen in `ueberUns.fakten` belegbar oder neutral gehalten?
- [ ] Bewertungen: nur echte (aus Google) — sonst Sektion leer lassen
- [ ] Farben/Stil passen zum Betrieb (nicht zwei Kunden hintereinander gleich)
- [ ] Telefon/Adresse korrekt (Impressum der alten Website)
- [ ] Entwurf-Link auf dem Handy geöffnet und durchgescrollt

## E-Mail-Vorlage für den Versand des Entwurfs

> **Betreff:** Dein Website-Entwurf ist fertig — {Firma}
>
> Hallo {Vorname},
> versprochen war 48 Stunden — hier ist er: der erste Entwurf deiner neuen Website:
> **kmu-webseiten.de/entwurf/{slug}/**
> Schau ihn dir in Ruhe an (am besten auf dem Handy UND am Rechner).
> Zwei Dinge dazu:
> 1. Alles daran ist anpassbar — Farben, Bilder, Texte, Aufbau.
> 2. Der Entwurf ist und bleibt kostenlos. Wenn er dir gefällt, machen wir ihn in
>    wenigen Tagen komplett fertig — Paket ab 99 €/Monat, 0 € Startkosten.
> Was sagst du? Antworte einfach auf diese Mail oder ruf mich an: {Telefon Atilla}.
> Beste Grüße, Atilla · kmu-webseiten.de

## Plausibilitäts-Regeln (Stufe 1, Lead-Prüfung)

- Betrieb bei Google/Maps auffindbar **oder** plausible Neugründung → ok
- E-Mail-Domain existiert; bei Freemail (gmx/web/gmail) kein Ausschluss, nur Hinweis
- Telefonnummer: deutsche Vorwahl-Struktur, ≥ 6 Ziffern (Formular erzwingt das bereits)
- Bounce der Bestätigungsmail = Stopp-Signal: **kein Entwurf vor Klärung**
  (siehe Fall „codas92@web.de", 23.07.2026)
- Impressum der bestehenden Website: Nachname des Anfragenden dort? (starkes Echt-Signal)

## Status

- [x] Entwurf-System datengetrieben (`[slug].astro` + `_vorlage.js` + 4 Stil-Varianten)
- [x] Formular liefert Qualitäts-Leads (Vor-/Nachname, Telefon Pflicht, Wünsche-Feld)
- [x] Prozess & Checklisten dokumentiert (dieses Dokument)
- [ ] Make → Google Sheet (wartet auf Atilla, 3 Min)
- [ ] Routine einrichten (stündlich, liest Sheet, baut Entwurf, Push an Atilla)
- [ ] Erster End-zu-End-Test mit Fake-Lead
- [ ] Nach 3–5 sauberen Durchläufen: Versand automatisieren (Make-Mail statt Hand)
