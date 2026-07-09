/* Register aller Kunden-Entwürfe.
   Neuen Entwurf hinzufügen: Datei nach Vorlage (_vorlage.js) anlegen,
   hier importieren und ins Array aufnehmen. Entwurf offline nehmen:
   einfach aus dem Array entfernen (Datei kann als Archiv bleiben). */

import demoMalerbetrieb from './demo-malerbetrieb.js';
import demoGasthaus from './demo-gasthaus.js';
import demoPhysiotherapie from './demo-physiotherapie.js';
import demoImmobilien from './demo-immobilien.js';
import demoBauunternehmen from './demo-bauunternehmen.js';

export const entwuerfe = [
  demoMalerbetrieb,
  demoGasthaus,
  demoPhysiotherapie,
  demoImmobilien,
  demoBauunternehmen,
];

export const entwurfBySlug = (slug) => entwuerfe.find((e) => e.slug === slug);
