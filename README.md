# La Maison du Chef - Frontend

Frontend Next.js (App Router) pour l'expérience gastronomique connectée :
carte interactive, panier temps réel, paiement Stripe et vue POS admin.

## Stack

- Next.js (App Router)
- Tailwind CSS
- Framer Motion
- Stripe Elements
- WebSocket temps réel
- Tests : Vitest + Playwright

## Démarrage rapide

```bash
npm install
cp .env.example .env.local
npm run dev
```

Ouvrir : http://localhost:3000

## Variables d'environnement

| Variable | Description |
| --- | --- |
| NEXT_PUBLIC_API_URL | Base URL du backend |
| NEXT_PUBLIC_WS_URL | URL WebSocket temps réel |
| NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY | Clé publique Stripe |

## Parcours UX

- Hero immersif (typographie serif)
- Carte interactive (filtres, catégories)
- Fiche plat (description, accord, ajout panier)
- Panier flottant temps réel
- Modal paiement (résumé, split, pourboire, Stripe Elements)
- Vue Admin POS live
- Route admin: `/admin`
- Animations 160–250ms + fly-to-cart + toasts

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run test
npm run test:unit
npm run test:e2e
```

## Tests

### Unit (Vitest)

- fusion commandes
- split paiement
- sécurité (prix/quantité)

### E2E (Playwright)

Scénario : scan → commande multi-client → paiement → webhook (simulation).

## WebSocket

Le frontend écoute `NEXT_PUBLIC_WS_URL` pour :

- `cart:update` → panier synchronisé
- `admin:update` → vue POS admin

## Stripe

Le modal paiement utilise Stripe Elements.
Le backend doit exposer :

- `POST /payments/intent` → `{ clientSecret }`

## Seed data

`data/seed/menu.json` et `data/seed/tables.json`

## CI / Déploiement

- GitHub Actions : tests unitaires + Playwright
- Vercel : frontend
- Render/Fly/AWS : backend
- PostgreSQL managé
- Stripe test + prod