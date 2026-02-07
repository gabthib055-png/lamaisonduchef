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

## Temps reel (WebSocket)

L'application inclut un serveur Node.js pour simuler la reception des
commandes en temps reel.

### Demarrer

```bash
npm install
npm start
```

### Pages utiles

- `/` : page client de test (boutons "Envoyer en cuisine" / "Envoyer au bar")
- `/cuisine` : reception cuisine
- `/bar` : reception bar
