# AXline - Creative Portfolio (Next.js)

Ce projet a été transformé d'un template HTML statique en une application Next.js moderne.

## 🚀 Transformation Réalisée

### Structure Originale ➜ Structure Next.js

- **Template HTML statique** ➜ **Application React/Next.js avec App Router**
- **Pages HTML séparées** ➜ **Composants React réutilisables**
- **Liens HTML** ➜ **Navigation Next.js avec optimisation**
- **Images statiques** ➜ **Composant Image Next.js optimisé**

### Fonctionnalités Ajoutées

✅ **Routing dynamique** avec Next.js App Router  
✅ **Composants React réutilisables** (Header, Footer, Preloader, etc.)  
✅ **Optimisation des images** avec le composant Next.js Image  
✅ **Navigation côté client** pour une meilleure performance  
✅ **Structure modulaire** pour faciliter la maintenance  
✅ **TypeScript** pour une meilleure sécurité de type  
✅ **Pages dynamiques** pour les projets avec [slug]

### Structure des Fichiers

```
src/
├── app/                    # App Router (Next.js 13+)
│   ├── layout.tsx         # Layout principal avec scripts et styles
│   ├── page.tsx           # Page d'accueil
│   ├── about/             # Page à propos
│   ├── contact/           # Page de contact
│   ├── portfolio-grid/    # Grille du portfolio
│   └── project/[slug]/    # Pages dynamiques des projets
├── components/            # Composants React réutilisables
│   ├── Header.tsx         # Navigation principale
│   ├── Footer.tsx         # Pied de page
│   ├── Preloader.tsx      # Écran de chargement
│   └── OverlappingGallery.tsx # Galerie de la page d'accueil
└── globals.css           # Styles globaux (CSS original + Next.js)

public/                   # Assets statiques
├── images/              # Images optimisées
├── css/                 # Feuilles de style originales
├── js/                  # Scripts JavaScript originaux
└── webfonts/           # Polices
```

## 🛠 Technologies Utilisées

- **Next.js 15.5** avec App Router
- **React 18** avec TypeScript
- **CSS personnalisé** (conserve le design original)
- **GSAP** pour les animations
- **Font Awesome** pour les icônes

## 📦 Installation et Lancement

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Builder pour la production
npm run build

# Lancer en production
npm start
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🎨 Fonctionnalités Conservées

- **Design visuel identique** au template original
- **Animations GSAP** et interactions
- **Galerie overlapping** sur la page d'accueil
- **Navigation fluide** entre les pages
- **Responsive design**
- **Magic cursor** et effets parallax

## 🔧 Améliorations Apportées

1. **Performance** : Optimisation des images et du code
2. **SEO** : Meta tags et structure sémantique améliorée
3. **Accessibilité** : Balises alt et navigation au clavier
4. **Maintenabilité** : Code modulaire et réutilisable
5. **Évolutivité** : Structure prête pour de nouvelles fonctionnalités

## 🚦 Pages Disponibles

- `/` - Page d'accueil avec galerie overlapping
- `/about` - À propos du studio
- `/contact` - Informations de contact
- `/portfolio-grid` - Grille complète du portfolio
- `/project/[slug]` - Pages individuelles des projets
  - `/project/white-liners`
  - `/project/green-audio`
  - `/project/nanotech`
  - `/project/cool-dude`
  - `/project/sphere-digital`

## 🎯 Prochaines Étapes

- [ ] Ajouter un CMS headless (Strapi, Contentful)
- [ ] Implémenter un formulaire de contact fonctionnel
- [ ] Ajouter des animations de transition de page
- [ ] Optimiser le chargement des scripts JavaScript
- [ ] Ajouter des tests automatisés

---

**Développé avec ❤️ en utilisant Next.js et React**
