# Portfolio CV — Louay Dhyeb

Site portfolio / CV interactif inspiré du CV Android, construit avec **React**, **TypeScript** et **Vite**.

## Lancer en local

```bash
cd web
npm install
npm run dev
```

Ouvrir [http://localhost:5173](http://localhost:5173)

## Build production

```bash
npm run build
npm run preview
```

## Personnalisation

Modifier les données dans `src/data/cv.ts` :
- Coordonnées (email, LinkedIn, GitHub)
- Compétences, expériences, formation

## Déploiement sur GitHub Pages

### 1. Créer le dépôt GitHub

1. Va sur [github.com/new](https://github.com/new)
2. Crée un repo (ex. `mon-cv` ou `louaydhyeb.github.io` pour un site à la racine)
3. **Ne coche pas** « Add a README » si tu initialises depuis ton Mac

### 2. Pousser le code

Depuis la racine du projet (`Mon CV/`) :

```bash
git init
git add .
git commit -m "Portfolio CV Android — Louay Dhyeb"
git branch -M main
git remote add origin https://github.com/TON_USERNAME/NOM_DU_REPO.git
git push -u origin main
```

### 3. Activer GitHub Pages

1. Repo GitHub → **Settings** → **Pages**
2. **Build and deployment** → Source : **GitHub Actions**
3. Après le premier push, l’action « Deploy to GitHub Pages » se lance automatiquement
4. Attends 1–2 min → ton site sera sur :
   - `https://TON_USERNAME.github.io/NOM_DU_REPO/` (repo classique)
   - `https://TON_USERNAME.github.io/` (si le repo s’appelle `TON_USERNAME.github.io`)

### URL selon le nom du repo

| Nom du repo | URL du site |
|---|---|
| `mon-cv` | `https://user.github.io/mon-cv/` |
| `louaydhyeb.github.io` | `https://louaydhyeb.github.io/` |

Le `base` Vite est configuré automatiquement via `vite.config.ts` + la variable `GITHUB_REPOSITORY` dans le workflow CI.
