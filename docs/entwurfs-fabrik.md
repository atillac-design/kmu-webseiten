# Entwurfs-Fabrik — vom Lead zum fertigen Website-Entwurf

Das wiederholbare Rezept: Ein Lead füllt das Formular auf kmu-webseiten.de aus →
innerhalb von 48 Stunden bekommt er einen persönlichen, unverbindlichen
Website-Entwurf unter `kmu-webseiten.de/entwurf/{slug}/`.

## Wie es technisch funktioniert

- **Ein Datensatz pro Kunde:** `src/data/entwuerfe/{slug}.js` (Vorlage: `_vorlage.js`)
- **Register:** `src/data/entwuerfe/index.js` — nur was hier im Array steht, geht live
- **Renderer:** `src/pages/entwurf/[slug].astro` baut aus dem Datensatz eine komplette
  One-Page-Website im Look des Kunden (eigene Farben, eigenes Monogramm/Logo)
- **Unsichtbar für Google:** `noindex` + Ausschluss aus der Sitemap + nirgends verlinkt.
  Nur wer den Link hat, sieht den Entwurf.
- **Eingebauter Verkaufsabschluss:** Oben eine fixierte Vorschau-Leiste, unten das Panel
  „Gefällt dir dein Entwurf?" — beide mit dem CTA **„Ja, so soll meine Website werden"**,
  der ins **vorbefüllte Onboarding-Formular** führt (Firma, Name, E-Mail, Telefon, Adresse
  sind schon eingetragen). Dazu ein WhatsApp-Button für Änderungswünsche.

Demo ansehen: `https://kmu-webseiten.de/entwurf/demo-malerbetrieb/`

## Ablauf pro Lead (Claude-Arbeitsschritte)

1. **Lead-E-Mail lesen** (kommt über Make): Branche, Website-Status, alte Website,
   Firma, Ort, Name, E-Mail, Telefon.
2. **Recherche (10–15 Min):**
   - Alte Website des Kunden ansehen: Logo, Farben, Leistungen, Texte, Impressum,
     Öffnungszeiten übernehmen bzw. verbessern.
   - Ohne alte Website: Google-Maps-/Branchenbuch-Eintrag suchen (Adresse,
     Öffnungszeiten, Bewertungen — echte Rezension als Zitat verwenden, falls gut).
   - Farben: Hauptfarbe aus Logo/alter Website ableiten; ohne Vorlage eine zur
     Branche passende Farbe wählen (Handwerk: kräftig warm; Therapie/Beauty: ruhig,
     gedeckt; Immobilien/Beratung: dunkelblau/grau; Gastro: warm, appetitlich).
3. **Datensatz anlegen:** `_vorlage.js` kopieren → `{slug}.js` (Slug = Firma-Kurzform,
   z. B. `maler-schmidt-koblenz`). **Alle Texte individuell schreiben** — konkret,
   im Ton des Betriebs, keine Floskeln, keine Platzhalter außer den Foto-Kacheln.
4. **Registrieren** in `index.js`, dann `npm run build` — prüfen, dass die Seite
   sauber baut und der Onboarding-Link korrekt vorbefüllt ist.
5. **Pushen** → Cloudflare deployt automatisch. Live-URL kurz im Browser prüfen.
6. **Link an den Kunden schicken** (E-Mail-Vorlage unten) — Absender Atilla,
   innerhalb der versprochenen 48 Stunden.

## E-Mail-Vorlage: Entwurf ist fertig

> **Betreff:** Dein Website-Entwurf ist fertig, {Vorname} 🎉
>
> Hallo {Vorname},
>
> versprochen ist versprochen: Dein kostenloser Website-Entwurf für
> **{Firma}** ist fertig. Schau ihn dir hier an:
>
> 👉 https://kmu-webseiten.de/entwurf/{slug}/
>
> Der Entwurf zeigt, wie deine neue Website aussehen kann — mit deinen
> Leistungen, deinen Kontaktdaten und einem Design, das zu deinem Betrieb
> passt. Deine echten Fotos und dein Logo bauen wir im nächsten Schritt ein.
>
> **Gefällt dir der Entwurf?** Dann klick auf der Seite einfach auf
> „Ja, so soll meine Website werden" — der Rest dauert 5 Minuten.
>
> **Du willst etwas anders haben?** Antworte auf diese E-Mail oder schreib
> mir per WhatsApp (+49 178 5282464) — Änderungen am Entwurf sind kostenlos.
>
> Und falls nicht: auch okay. Der Entwurf ist unverbindlich, es entstehen
> keine Kosten und du hörst von uns nur, wenn du das willst.
>
> Viele Grüße
> Atilla von kmu-webseiten.de

## Regeln

- **Nie Platzhalter-Texte an Kunden schicken.** Jeder Entwurf wird individuell
  recherchiert und getextet — das ist das Verkaufsargument.
- **Foto-Kacheln** dürfen Platzhalter sein (gestreifte Kacheln mit Beschriftung) —
  sie zeigen dem Kunden, wo seine Bilder hinkommen.
- **Keine erfundenen Fakten:** Zahlen (Gründungsjahr, Bewertung, Teamgröße) nur
  verwenden, wenn recherchiert oder vom Kunden genannt. Sonst die Fakten-Kacheln
  neutral halten (z. B. „Festpreis", „Region {Ort}", „Meisterbetrieb" nur wenn belegt).
- **Entwürfe abgelaufener Leads** nach ~3 Monaten aus `index.js` entfernen
  (Datei bleibt als Archiv liegen).
- **Anrede:** Die Kunden-Website selbst siezt („Sie") — sie spricht die Endkunden
  des Betriebs an. Vorschau-Leiste und Abschluss-Panel duzen — sie sprechen unseren
  Lead an, im Ton von kmu-webseiten.de.
