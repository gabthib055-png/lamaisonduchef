# Structure UX/UI - La Maison du Chef

Ce document resume l'arborescence, la structure des pages, les wireframes
logiques, les composants reutilisables, les bonnes pratiques UX et les
conseils conversion. Les fichiers HTML/CSS/JS du projet sont prets a coder
et peuvent etre copies/colles tels quels.

## Arborescence du site

- index.html (Accueil)
- restaurant.html (Le Restaurant)
- chef.html (Le Chef)
- menu.html (La Carte / Menus)
- reservation.html (Reservation)
- gallery.html (Galerie)
- contact.html (Contact)
- legal.html (Mentions legales & RGPD)
- css/styles.css (Design system, layout, composants)
- js/main.js (Langue, theme, animations, lightbox, menus JSON)
- data/menus.json (Menus editables)

## Structure des pages

### 1. Accueil
- Hero image immersive + CTA
- Signature du chef (citation)
- Presentation courte du restaurant + stats
- Mise en avant menu degustation
- Avis clients / temoignages
- Apercu galerie + lightbox
- Acces rapides (cards vers pages cles)
- Evenements & menus speciaux
- Newsletter + bon cadeau
- Instagram (grille)
- Footer complet

### 2. Le Restaurant
- Hero editorial
- Histoire
- Philosophie culinaire
- Produits & sourcing
- Ambiance & experience
- Experience Maison (3 piliers)

### 3. Le Chef
- Hero editorial
- Biographie
- Parcours
- Recompenses
- Vision gastronomique

### 4. La Carte / Menus
- Hero + date de mise a jour
- Menu degustation + menu saisonnier (JSON)
- Accord mets & vins (JSON)
- CTA reservation + telechargement

### 5. Reservation
- Hero editorial
- Formulaire (date, heure, convives, allergies)
- Confirmation visuelle
- Bloc integrations (Zenchef / TheFork / Resy)

### 6. Galerie
- Sections: Plats, Salle, Experience
- Lightbox moderne

### 7. Contact
- Coordonnees + horaires
- Google Map embed
- Acces + parking

### 8. Mentions legales & RGPD
- Editeur, hebergeur
- Donnees personnelles, cookies
- Contact RGPD

## Wireframe logique (extraits)

### Accueil

```
HEADER (logo + nav + CTA)
HERO (image + titre + CTA)
SIGNATURE CHEF (citation)
PRESENTATION + STATS
MENU DEGUSTATION (card + image)
AVIS CLIENTS (3 temoignages)
GALERIE (6 vignettes)
ACCES RAPIDES (6 cards)
EVENEMENTS (card + image)
NEWSLETTER + BON CADEAU (2 cards)
INSTAGRAM (grille)
FOOTER
```

### Page interieure (Restaurant, Chef, Menu)

```
HEADER
HERO EDITORIAL (titre + intro + CTA + image)
SECTIONS (alternance texte/image)
FOOTER
```

## Composants reutilisables

- Header sticky (logo, nav, toggle langue, toggle theme)
- Hero (image + overlay + CTA)
- Cards (standard / minimal)
- Badges / pills
- Grilles responsive (2/3 colonnes)
- Testimonials
- Gallery grid + lightbox
- Formulaires (inputs, select, textarea)
- Footer multi-colonnes

## Bonnes pratiques UX

- Mobile-first, CTA visibles au-dessus de la ligne de flottaison
- Hierarchie claire (eyebrow, titres, intro courtes)
- Parcours reservation simplifie en 30s
- Reassurance (avis, politiques, sourcing)
- Animations subtiles (IntersectionObserver)
- Accessibilite: focus visible, labels, contrastes

## Conseils conversion pour restaurant gastronomique

- CTA "Reserver" present dans le header et les sections cles
- Mettre en avant le menu degustation + accords vins
- Ajout d'evenements pour creer l'urgence
- Signature du chef et recompenses pour renforcer la confiance
- Galerie immersive + avis clients
- Newsletter et bon cadeau pour capter les indecis

## Notes techniques

- SEO: meta titles, descriptions, OpenGraph, Schema.org Restaurant
- Performance: lazy loading images, scripts defer, fonts display=swap
- Dark mode optionnel + preference utilisateur
- Multilingue FR/EN via data-i18n
- Menus editables via data/menus.json
