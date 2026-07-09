# Make-Anbindung: Onboarding-Formular

**Stand: LIVE.** Szenario „KMU Onboarding" in Make ist aktiv, das Formular unter
`/onboarding/` sendet an den Webhook (Standard-URL in `src/layouts/Base.astro`),
die E-Mail-Zustellung wurde end-to-end getestet. Die Anleitung unten bleibt als
Referenz, falls der Webhook mal neu aufgesetzt werden muss.

## Was Atilla in Make macht (ca. 5 Minuten)

1. In Make das bestehende Szenario **„Integration Webhooks, Email"** (das vom Lead-Formular)
   öffnen → oben rechts über das Drei-Punkte-Menü **„Clone"** wählen.
2. Den Klon umbenennen in **„KMU Onboarding"**.
3. Im Klon auf das **Webhook-Modul** klicken → **„Create a webhook"** → Name: `KMU Onboarding`
   → die neue URL kopieren (beginnt mit `https://hook.eu2.make.com/…`).
4. Die URL an Claude schicken. Claude trägt sie in die Website ein und schickt sofort
   einen **Test-Datensatz** mit allen Feldern, damit Make die Felder kennt.
5. Danach in Make das **E-Mail-Modul** öffnen und die Vorlage unten einsetzen —
   die Felder erscheinen nach dem Test als Mapping-Bausteine.
6. Das **MailerLite-Modul** kann im Onboarding-Klon gelöscht werden (der Kunde ist
   dann schon Kunde, kein Newsletter-Lead) — oder drinbleiben, dann bitte mit
   einer eigenen Gruppe „Kunden".
7. Szenario auf **„Immediately as data arrives"** stellen und aktivieren (Schalter unten links).

## Was Claude danach macht

- Webhook-URL in `src/layouts/Base.astro` als Standard für
  `PUBLIC_ONBOARDING_WEBHOOK_URL` eintragen (gleiches Muster wie beim Lead-Webhook).
- Test-Payload mit allen Feldern an den Webhook senden (siehe unten).
- Deploy + Live-Test über `https://kmu-webseiten.de/onboarding/`.

## Felder, die das Formular sendet

`formularTyp` (immer `onboarding`), `firma`, `ansprechpartner`, `telefon`, `email`,
`strasse`, `plzOrt`, `oeffnungszeiten`, `leistungen`, `ueberUns`, `besonderes`,
`logoStatus`, `farben`, `stil`, `links`, `inhaber`, `ustId`, `domainStatus`,
`domain`, `wuensche`

## E-Mail-Vorlage für das Make-E-Mail-Modul

**Betreff:**

```
🚀 Onboarding ausgefüllt: {firma}
```

**Inhalt** (Felder jeweils als Mapping-Baustein aus dem Webhook einsetzen):

```
Neues Kunden-Onboarding über kmu-webseiten.de
=============================================

BETRIEB & KONTAKT
Firma:            {firma}
Ansprechpartner:  {ansprechpartner}
Telefon:          {telefon}
E-Mail:           {email}

STANDORT & ZEITEN
Straße:           {strasse}
PLZ/Ort:          {plzOrt}
Öffnungszeiten:   {oeffnungszeiten}

INHALTE
Leistungen:       {leistungen}
Über uns:         {ueberUns}
Besonderes:       {besonderes}

DESIGN
Logo:             {logoStatus}
Farben:           {farben}
Stil:             {stil}
Links/Vorbilder:  {links}

RECHTLICHES & DOMAIN
Inhaber (Impressum): {inhaber}
USt-ID:              {ustId}
Domain-Status:       {domainStatus}
Domain:              {domain}

WÜNSCHE
{wuensche}

---
Nächster Schritt: Website bauen 🛠
Logo/Fotos kommen ggf. per WhatsApp (+49 178 5282464).
```

## Test-Payload (führt Claude aus, sobald die URL da ist)

```bash
curl -s -X POST 'WEBHOOK_URL_HIER' \
  --data-urlencode 'formularTyp=onboarding' \
  --data-urlencode 'firma=Malerbetrieb Schmidt (TEST)' \
  --data-urlencode 'ansprechpartner=Max Mustermann' \
  --data-urlencode 'telefon=0151 2345678' \
  --data-urlencode 'email=max@schmidt.de' \
  --data-urlencode 'strasse=Musterstraße 1' \
  --data-urlencode 'plzOrt=56170 Bendorf' \
  --data-urlencode 'oeffnungszeiten=Mo–Fr 8–17 Uhr' \
  --data-urlencode 'leistungen=Malerarbeiten, Lackierarbeiten, Fassaden' \
  --data-urlencode 'ueberUns=Familienbetrieb seit 1995' \
  --data-urlencode 'besonderes=Kostenlose Erstberatung vor Ort' \
  --data-urlencode 'logoStatus=Logo vorhanden' \
  --data-urlencode 'farben=Blau und Weiß' \
  --data-urlencode 'stil=Modern und klar' \
  --data-urlencode 'links=https://beispiel.de' \
  --data-urlencode 'inhaber=Max Mustermann' \
  --data-urlencode 'ustId=DE123456789' \
  --data-urlencode 'domainStatus=Domain vorhanden' \
  --data-urlencode 'domain=maler-schmidt.de' \
  --data-urlencode 'wuensche=Bitte Galerie mit Referenzfotos einplanen'
```
