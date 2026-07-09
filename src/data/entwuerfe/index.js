/* Register aller Kunden-Entwürfe.
   Neuen Entwurf hinzufügen: Datei nach Vorlage (_vorlage.js) anlegen,
   hier importieren und ins Array aufnehmen. Entwurf offline nehmen:
   einfach aus dem Array entfernen (Datei kann als Archiv bleiben). */

import demoMalerbetrieb from './demo-malerbetrieb.js';

export const entwuerfe = [
  demoMalerbetrieb,
];

export const entwurfBySlug = (slug) => entwuerfe.find((e) => e.slug === slug);
