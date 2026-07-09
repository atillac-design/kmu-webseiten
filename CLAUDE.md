# Hinweis für Claude-Sessions in diesem Repo

## Design & Texte sind abgesegnet — nicht eigenmächtig ändern

Das Design (Farben, Typografie, Layout, Animationen) und die Verkaufstexte auf
allen Seiten wurden gemeinsam mit dem Websitebetreiber über mehrere Runden
entwickelt und **explizit freigegeben**. Referenz-Commit des freigegebenen
Stands: `4948ec7` ("Erste Version: Astro-Site mit Landingpage, ...").

**Bei jeder Session, egal mit welchem Modell:**

1. **Vor Design-/Text-Änderungen immer erst fragen**, auch wenn eine Änderung
   objektiv "besser" erscheint (z. B. andere Farbe, andere Formulierung,
   andere Reihenfolge von Sektionen). Nutzer-Anweisungen zu konkreten Bugfixes,
   neuen Features oder ausdrücklich gewünschten Text-/Preis-Änderungen sind
   davon ausgenommen — die bitte einfach umsetzen.
2. **Kleine, gezielte Diffs statt Rewrites.** Wenn eine Datei geändert werden
   muss (z. B. `src/data/cities.js` für eine neue Stadt, ein Preis in
   `src/content/home-body.html`), nur den betroffenen Teil anfassen — nicht
   die ganze Datei neu schreiben.
3. **Vor jedem Commit:** `git diff` zeigen bzw. zusammenfassen, was sich
   geändert hat, damit der Nutzer es nachvollziehen kann.
4. **Rollback-Referenz:** Falls etwas versehentlich überschrieben wurde, ist
   der Commit `4948ec7` der bekannte gute Ausgangspunkt
   (`git show 4948ec7:<pfad>` zeigt die Datei in diesem Stand).

## Was frei bearbeitbar ist (keine Rückfrage nötig)

- `src/data/cities.js`: neue Städte nach dem bestehenden Muster ergänzen
- `src/data/entwuerfe/`: neue Kunden-Entwürfe nach `_vorlage.js` anlegen —
  Prozess und Regeln stehen in `docs/entwurfs-fabrik.md` (Texte immer individuell
  recherchieren, nie Platzhalter an Kunden schicken)
- Technisches Setup: Cloudflare-Konfiguration, Umgebungsvariablen, Make-Webhook-Anbindung
- Bugfixes, die sichtbares Verhalten nicht verändern (z. B. defekter Link, Tippfehler)
- Alles, was der Nutzer in der aktuellen Unterhaltung explizit anweist

## Was NICHT ohne Rückfrage geändert wird

- Farben, Schriftarten, Layout-Struktur der bestehenden Seiten
- Bestehende Verkaufstexte, Sektionsreihenfolge, Preismodell-Logik
- Der Ton/die Ansprache (Du-Form, Stil)
