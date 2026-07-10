// Zentrale Registry aller Zielgruppen-/Keyword-Nischen.
// Eine Quelle für: /branchen/ (Hub), die Nischen-Index-Seiten und die interne
// Verlinkung. Neue Nische = hier einen Eintrag ergänzen, dann greift alles.
import { cities } from './cities.js';
import { handwerkerCities } from './handwerker-cities.js';
import { coachesCities } from './coaches-cities.js';
import { therapieCities } from './therapie-cities.js';
import { bauCities } from './bau-cities.js';
import { gastroCities } from './gastro-cities.js';
import { beautyCities } from './beauty-cities.js';
import { immoCities } from './immo-cities.js';
import { fotografenCities } from './fotografen-cities.js';
import { fitnessCities } from './fitness-cities.js';
import { steuerberaterCities } from './steuerberater-cities.js';

export const niches = [
  {
    prefix: 'webseite-erstellen-lassen',
    label: 'Webseite erstellen lassen',
    audience: 'KMU, Dienstleister & Selbstständige',
    hubHeading: 'Webseite erstellen lassen — in deiner Stadt',
    hubLead:
      'Professionelle Webseiten für kleine und mittlere Unternehmen, Dienstleister und Selbstständige. Wähl deine Stadt und sichere dir einen kostenlosen Entwurf in 48 Stunden.',
    icon: '🌐',
    cities,
  },
  {
    prefix: 'webdesign-fuer-handwerker',
    label: 'Webdesign für Handwerker',
    audience: 'Handwerksbetriebe aller Gewerke',
    hubHeading: 'Webseite & Webdesign für Handwerker — in deiner Stadt',
    hubLead:
      'Websites für Handwerksbetriebe: echte Fotos deiner Arbeit, Anfragen per Klick, auch für die Mitarbeitersuche. Wähl deine Stadt.',
    icon: '🔨',
    cities: handwerkerCities,
  },
  {
    prefix: 'webseite-fuer-bauunternehmen',
    label: 'Webseite für Bauunternehmen',
    audience: 'Bauunternehmen & Bauträger',
    hubHeading: 'Webseite für Bauunternehmen — in deiner Stadt',
    hubLead:
      'Websites für Bauunternehmen: Referenzen, die Bauherren überzeugen, plus Fachkräftegewinnung. Wähl deine Stadt.',
    icon: '🏗️',
    cities: bauCities,
  },
  {
    prefix: 'homepage-fuer-coaches',
    label: 'Homepage für Coaches & Berater',
    audience: 'Coaches, Berater & Consultants',
    hubHeading: 'Homepage & Landingpage für Coaches — in deiner Stadt',
    hubLead:
      'Websites für Coaches und Berater: klare Positionierung, Vertrauen auf den ersten Blick, Terminanfrage statt Kontaktformular. Wähl deine Stadt.',
    icon: '🎯',
    cities: coachesCities,
  },
  {
    prefix: 'homepage-fuer-therapiepraxen',
    label: 'Homepage für Therapiepraxen',
    audience: 'Physio, Ergo, Heilpraktiker & Co.',
    hubHeading: 'Homepage & Website für Therapiepraxen — in deiner Stadt',
    hubLead:
      'Websites für Therapiepraxen: ruhig, seriös, mit klarer Terminanfrage. Vertrauen schon vor dem ersten Anruf. Wähl deine Stadt.',
    icon: '🩺',
    cities: therapieCities,
  },
  {
    prefix: 'webseite-fuer-gastronomie',
    label: 'Webseite für Gastronomie',
    audience: 'Restaurants, Cafés & Lokale',
    hubHeading: 'Webseite für Restaurant & Gastronomie — in deiner Stadt',
    hubLead:
      'Websites für die Gastronomie: Speisekarte, Fotos, Reservierung, Google Maps. Damit Gäste bei dir landen. Wähl deine Stadt.',
    icon: '🍽️',
    cities: gastroCities,
  },
  {
    prefix: 'webseite-fuer-kosmetikstudios',
    label: 'Webseite für Kosmetik & Beauty',
    audience: 'Kosmetik-, Nagel- & Beautystudios',
    hubHeading: 'Webseite für Kosmetikstudio & Beauty — in deiner Stadt',
    hubLead:
      'Websites für Beautystudios: Online-Terminbuchung, Vorher/Nachher-Bilder, klare Preisliste — rund um die Uhr buchbar. Wähl deine Stadt.',
    icon: '💅',
    cities: beautyCities,
  },
  {
    prefix: 'webseite-fuer-immobilienmakler',
    label: 'Webseite für Immobilienmakler',
    audience: 'Immobilienmakler & Maklerbüros',
    hubHeading: 'Webseite für Immobilienmakler — in deiner Stadt',
    hubLead:
      'Websites für Makler: seriöser Auftritt, der Eigentümer überzeugt und Verkaufsmandate bringt. Wähl deine Stadt.',
    icon: '🏡',
    cities: immoCities,
  },
  {
    prefix: 'homepage-fuer-fotografen',
    label: 'Homepage für Fotografen',
    audience: 'Fotografen & Fotostudios',
    hubHeading: 'Homepage & Portfolio-Website für Fotografen — in deiner Stadt',
    hubLead:
      'Websites für Fotografen: Galerien, die in Sekunden laden, und Buchungsanfragen statt Instagram-Likes. Wähl deine Stadt.',
    icon: '📸',
    cities: fotografenCities,
  },
  {
    prefix: 'webseite-fuer-fitnessstudios',
    label: 'Webseite für Fitnessstudios',
    audience: 'Fitnessstudios, Gyms & Personal Trainer',
    hubHeading: 'Webseite für Fitnessstudios — in deiner Stadt',
    hubLead:
      'Websites für Studios: Kursplan, Preise und ein Probetraining-Button, der neue Mitglieder bringt. Wähl deine Stadt.',
    icon: '💪',
    cities: fitnessCities,
  },
  {
    prefix: 'webseite-fuer-steuerberater',
    label: 'Webseite für Steuerberater',
    audience: 'Steuerberater & Steuerkanzleien',
    hubHeading: 'Webseite für Steuerberater — in deiner Stadt',
    hubLead:
      'Websites für Kanzleien: seriöser Auftritt für neue Mandate — und eine Karriereseite gegen den Fachkräftemangel. Wähl deine Stadt.',
    icon: '📊',
    cities: steuerberaterCities,
  },
];

export function nicheByPrefix(prefix) {
  return niches.find((n) => n.prefix === prefix);
}
