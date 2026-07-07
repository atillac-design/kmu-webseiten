# kmu-webseiten.de

Website für **KMU-Webseiten.de** — ein Produkt von [Pixel56](https://pixel56.de).
Angebot: Kostenloser Website-Entwurf in 48 Stunden, danach Website-Pakete im
Monatsabo (Basic 99 € / Pro 249 € / Premium ab 1.499 €) sowie Werbekampagnen-Pakete.

## Technik

- **[Astro](https://astro.build)** — statischer Site-Generator, kein CMS, keine Datenbank
- Seiten werden beim Build als fertiges HTML erzeugt → Ladezeit & SEO optimal
- Design: „Blueprint"-Look, Displayschrift Bricolage Grotesque (lokal eingebettet)

## Struktur

| Pfad | Inhalt |
| --- | --- |
| `src/pages/index.astro` | Startseite/Landingpage mit 4-Schritte-Lead-Formular |
| `src/pages/marketing.astro` | Werbekampagnen-Seite (Ads Basic/Pro/Premium) |
| `src/pages/webseite-erstellen-lassen/[slug].astro` | Vorlage der Local-SEO-Stadtseiten |
| `src/data/cities.js` | **Städte-Datenbank** — eine Zeile = eine Stadtseite. Neue Stadt: Eintrag ergänzen, fertig. Texte müssen pro Stadt individuell bleiben (kein Doorway-Spam!) |
| `src/pages/{impressum,datenschutz,agb}.astro` | Rechtsseiten |
| `public/css/` | Stylesheets pro Seitentyp (home/city/marketing) |
| `public/js/home.js` | Formular-Logik + Scroll-Animationen der Startseite |
| `public/img/`, `public/fonts/` | Bilder & Schrift |

## Entwicklung

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # erzeugt dist/
```

## Formular / Leads

Das Lead-Formular sendet per `fetch` an einen **Make-Webhook** (JSON mit Branche,
Website-Status, Betrieb, Stadt, Name, E-Mail, Telefon). Die URL kommt aus der
Umgebungsvariable `PUBLIC_MAKE_WEBHOOK_URL` (beim Build gesetzt, z. B. in
Cloudflare Pages → Settings → Environment variables). Ohne gesetzte Variable
läuft das Formular im Demo-Modus (Konsolen-Log).

Geplanter Fluss: Formular → Make-Webhook → MailerLite (Kontakt) + E-Mail-Benachrichtigung.

## Deployment

Ziel: **Cloudflare Pages** (Build-Command `npm run build`, Output `dist/`),
Domain `kmu-webseiten.de` bleibt bei IONOS, nur DNS zeigt auf Cloudflare.
Sitemap wird automatisch erzeugt (`/sitemap-index.xml`), `robots.txt` liegt in `public/`.

## Offene Punkte

- [ ] Echte Referenz-Screenshots einbauen (aktuell Monogramm-Kacheln)
- [ ] Make-Webhook anlegen und `PUBLIC_MAKE_WEBHOOK_URL` setzen
- [ ] AGB & Datenschutz final ausarbeiten (Entwürfe sind Platzhalter)
- [ ] Weitere Städte in `src/data/cities.js` ergänzen
- [ ] Redirects von alten WordPress-URLs beim Livegang
