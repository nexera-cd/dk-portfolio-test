# David Kayi Kinkela – Portfolio d'Affaires Exécutif

> **Pack B · Showcase / Créatif**  
> Site officiel et vitrine d'investissement pour **David Kayi Kinkela**, Homme d'affaires et investisseur stratégique.  
> Conçu et développé avec une rigueur de haute horlogerie numérique par **Nexera**.

---

## 🏛️ Stack Technique

- **Framework :** [Next.js 15+](https://nextjs.org/) (App Router, Server Components & Client Leaves)
- **Langage :** [TypeScript](https://www.typescriptlang.org/) (Typage strict)
- **Design & Styles :** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations :** [Motion](https://motion.dev/) (avec respect automatique de `prefers-reduced-motion`)
- **Icônes :** [Lucide React](https://lucide.dev/)
- **Performance & SEO :** `next/image` optimisé, OpenGraph, Twitter Cards, Sitemap dynamique, Robots.txt, JSON-LD Schema `Person`.

---

## 📁 Gestion Centralisée des Contenus

Tous les textes, projets, photographies, compétences, avis, coordonnées, liens sociaux et numéro WhatsApp sont centralisés dans un fichier unique, modifiable sans toucher à la structure du code :

```
src/data/content.ts
```

Ce fichier prend en charge nativement les déclinaisons bilingues (**Français** et **Anglais**).

---

## 🚀 Lancement & Installation Locale

### 1. Prérequis
- Node.js (version 20+)
- npm ou pnpm ou bun

### 2. Cloner le dépôt et installer les dépendances
```bash
git clone <url-du-depot>
cd portfolio-david-kayi-kinkela
npm install
```

### 3. Configurer les variables d'environnement
Dupliquez le fichier `.env.example` en `.env.local` :
```bash
cp .env.example .env.local
```

Renseignez les variables :
```env
NEXT_PUBLIC_SITE_URL="https://davidkayikinkela.com"
RESEND_API_KEY="" # Clé API Resend pour l'envoi direct d'e-mails (optionnel en dev)
CONTACT_RECIPIENT_EMAIL="contact@davidkayikinkela.com"
```

### 4. Démarrer le serveur de développement
```bash
npm run dev
```
Rendez-vous sur [http://localhost:3000](http://localhost:3000).

### 5. Compiler pour la production
```bash
npm run build
npm run start
```

---

## 🌐 Déploiement sur Vercel & Connexion du Domaine Personnalisé

### Étape 1 : Déploiement Vercel
1. Rendez-vous sur votre tableau de bord [Vercel](https://vercel.com).
2. Cliquez sur **Add New...** > **Project**.
3. Importez votre dépôt GitHub.
4. Dans **Environment Variables**, ajoutez :
   - `NEXT_PUBLIC_SITE_URL` = `https://davidkayikinkela.com` (ou votre domaine)
   - `RESEND_API_KEY` = votre clé secrète Resend
   - `CONTACT_RECIPIENT_EMAIL` = `contact@davidkayikinkela.com`
5. Cliquez sur **Deploy**.

### Étape 2 : Lier votre Domaine Personnalisé (ex: `davidkayikinkela.com`)
1. Dans le projet Vercel, allez dans **Settings** > **Domains**.
2. Saisissez votre domaine racine (`davidkayikinkela.com`) et son sous-domaine recommandé (`www.davidkayikinkela.com`).
3. Connectez-vous à votre registrar (GoDaddy, OVH, Namecheap, Cloudflare, Google Domains...) :
   - **Enregistrement A** :
     - Type : `A`
     - Nom / Hôte : `@`
     - Valeur : `76.76.21.21` (ou l'IP fournie par Vercel)
   - **Enregistrement CNAME** :
     - Type : `CNAME`
     - Nom / Hôte : `www`
     - Valeur : `cname.vercel-dns.com`
4. Vercel génèrera automatiquement un certificat SSL Let's Encrypt sécurisé en quelques minutes.

---

## 🛡️ Fonctionnalités Clés Incluses

- **Logo Monogramme « DK » :** Dessiné en vecteur SVG géométrique et luxueux, présent en en-tête, hero, footer et en favicon.
- **Mode Sombre / Clair :** Bascule instantanée, persistante en `localStorage`, calquée sur les préférences de l'OS par défaut.
- **Bilingue (FR / EN) :** Sélecteur fluide dans l'en-tête et pied de page.
- **Carrousel Tactile :** Défilement fluide des 5 clichés exclusifs avec navigation par gestes sur mobile et boutons de contrôle.
- **Pages Projets `/projets/[slug]` :** 3 études de cas complètes avec galeries de 5+ visuels HD, données chiffrées et témoignages institutionnels.
- **Téléchargement du CV :** Fichier exécutif `/public/cv.pdf` téléchargeable d'un clic.
- **Bouton WhatsApp Flottant :** Bouton discret en bas à droite avec message diplomatique et d'affaires pré-rempli.
- **Formulaire de Contact Sécurisé :** Validation en temps réel, états de chargement et intégration API route `/api/contact`.
- **Prise de Rendez-vous :** Espace dédié pour consultation avec modal/embed de réservation.
- **Cartographie Google Maps :** Intégration de l'adresse de prestige à la Gombe, Kinshasa.

---

*Site réalisé avec exigence et distinction par **Nexera**.*
