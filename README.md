# La Maison du Chef

Site web pour un restaurant gastronomique haut de gamme.

## Ce que fait le site
- Affiche la carte du restaurant
- Permet de commander à table avec un QR code
- Permet de payer l’addition en ligne

## Ce que Lovable doit faire
- Travailler sur le design du site
- Améliorer l’interface (UI)
- Améliorer l’expérience utilisateur (UX)
- Ajouter des animations modernes et élégantes

## Ce que Lovable NE DOIT PAS faire
- Modifier le backend
- Modifier le paiement
- Modifier la logique QR code
- Modifier la sécurité

## Style attendu
- Très chic
- Sobre
- Luxe
- Moderne

## Systeme d'animation cinematographique
Fichiers ajoutes :
- index.html (page demo premium)
- styles.css (UI futuriste et sobre)
- cinematic.js (systeme d'animation base sur le scroll)

### Principes
- Reveals lents et dramatiques
- Animations GPU-friendly (opacity + transform)
- Opacite, translate3d et scale subtil
- Respect de prefers-reduced-motion

### Utilisation
Ajouter `data-cine` sur les elements a animer, avec options :
- data-cine-distance (px)
- data-cine-scale (ex: 0.98)
- data-cine-delay (0 a 0.8)
- data-cine-start (0 a 1, debut du reveal)
- data-cine-end (0 a 1, fin du reveal)
- data-cine-opacity (ex: 0)
