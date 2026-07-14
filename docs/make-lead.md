# Make-Anbindung: Lead-Formular (Startseite)

**Stand: LIVE & vollständig getestet.** Szenario **„Integration Webhooks, Email"** in Make.

## Ablauf

```
[Webhook] → [E-Mail an Atilla] → [MailerLite: Subscriber] → [E-Mail an Interessent]
```

1. **Webhook** — empfängt das Startseiten-Formular (Standard-URL in `src/layouts/Base.astro`,
   `DEFAULT_WEBHOOK`).
2. **E-Mail an Atilla** — interne Benachrichtigung („neuer Lead"). Absender = `kontakt@pixel56.de`.
3. **MailerLite** — legt den Lead als Subscriber an.
4. **E-Mail an Interessent** — automatische Eingangsbestätigung. Absender-Verbindung
   **„Kontakt Kmu-Webseiten"** = `kontakt@kmu-webseiten.de` (IONOS SMTP `smtp.ionos.de`,
   Port 587, secure + explicit TLS). To = Baustein `email` aus dem Webhook.
   Betreff: „Dein kostenloser Website-Entwurf ist in Arbeit ✓".

## Felder, die das Formular sendet

`branche`, `websiteStatus`, `website`, `firma`, `ort`, `name`, `email`, `telefon`,
`quelle` (dynamisch, siehe unten), sowie Herkunfts-Felder:
`utmSource`, `utmMedium`, `utmCampaign`, `utmTerm`, `utmContent`, `landingpage`.
Honeypot-Feld: `firmenfax` (bei Befüllung wird nicht gesendet).

## Herkunftsmessung (cookielos)

`public/js/home.js` liest die in `src/layouts/Base.astro` gemerkten UTM-Parameter
(sessionStorage `kmu_utm`) und sendet sie mit. `quelle` ist sprechend:
- `Anzeige: <source> / <medium> / Kampagne "<campaign>"`
- `Verweis: <hostname>`
- `Direkt oder Google (unbezahlt)`

Anzeigen-Link-Beispiel: `https://kmu-webseiten.de/?utm_source=meta&utm_campaign=handwerker-koblenz`

## Wartung / Fehlerbehebung

- Wird das Szenario durch einen fehlerhaften Datensatz **deaktiviert** („Validation failed"),
  in der Queue mit **„Delete old data"** aufräumen, dann wieder aktivieren (Schedule
  „Immediately"). Danach mit einem sauberen Test-Payload prüfen.
- Neue Formularfelder erscheinen im E-Mail-Mapping erst, nachdem der Webhook einen
  Payload mit diesen Feldern gesehen hat („Redetermine data structure" bzw. Testschuss).

## Zustellbarkeit (Stand: eingerichtet)

DNS für `kmu-webseiten.de` liegt bei **Cloudflare** (Nameserver), Mail über **IONOS** (MX).
- **SPF** ✓ gesetzt: `v=spf1 include:_spf-eu.ionos.com ~all`
- **DMARC** ✓ gesetzt (Cloudflare, TXT `_dmarc`): `v=DMARC1; p=none; rua=mailto:kontakt@kmu-webseiten.de`
  (Ein alter IONOS-`_dmarc`-CNAME → dmarc.ionos.de wurde entfernt, da er mit dem TXT kollidierte.)
- **DKIM** bewusst ausgelassen: Bei „Mail Basic" + externen Nameservern (Cloudflare) bietet IONOS
  keine saubere DKIM-Einrichtung. SPF + DMARC genügen für das Mailvolumen. Falls später
  gewünscht: Bestätigungs-Mails über einen Dienst mit Domain-Authentifizierung senden
  (liefert fertige DKIM-Einträge für Cloudflare) oder DKIM-Record über IONOS-Support anfordern.
