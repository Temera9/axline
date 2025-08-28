# Mémoire du Projet Axline

## Structure du Projet

- **Type**: Application Next.js 15.5.2 avec Turbopack
- **Framework**: React 18 avec TypeScript
- **Template HTML original**: Dans le dossier `/template/`
- **Pages Next.js**: Dans `/src/app/`

## Problèmes identifiés et Solutions

### 1. Erreur "Cannot read properties of null (reading '1')" - ✅ RÉSOLU

**Date**: 27 Août 2025
**Problème**: Page projet dynamique `/project/[slug]` vide causant une erreur runtime
**Cause**: Le fichier `src/app/project/[slug]/page.tsx` existe mais était complètement vide
**Solution**: Créé la page projet dynamique basée sur les templates HTML
**Status**: ✅ Fonctionnel - Toutes les pages de projets marchent parfaitement

### 2. Warning Next.js 15 - params async - ✅ RÉSOLU

**Problème**: `params` doit être awaité dans Next.js 15
**Warning**: "Route "/project/[slug]" used `params.slug`. `params` should be awaited before using its properties"
**Solution appliquée**:

- Utilisé `async/await` pour accéder à `params`
- Retiré `"use client"` car incompatible avec `async` dans Next.js
- Interface mise à jour: `params: Promise<{ slug: string }>`
  **Status**: ✅ Plus de warnings

### 3. Structure des projets référencés

- Template HTML: `project01.html` = "White Liners"
- Template HTML: `project02.html` = "Green Audio"
- Template HTML: `project03.html` = "Nanotech"
- Template HTML: `project04.html` = "Cool Dude" (avec vidéo)
- Template HTML: `project05.html` = "Sphere Digital"

## Correspondance URLs

- `/project/white-liners` → Template: `project01.html` ✅ Fonctionnel
- `/project/green-audio` → Template: `project02.html` ✅ Fonctionnel
- `/project/nanotech` → Template: `project03.html` ✅ Fonctionnel
- `/project/cool-dude` → Template: `project04.html` ✅ Fonctionnel
- `/project/sphere-digital` → Template: `project05.html` ✅ Fonctionnel
- `/project/non-existant` → 404 page ✅ Fonctionnel

## Composants créés

- OverlappingGallery: ✅ Fonctionnel
- Header: ✅ Fonctionnel
- Footer: ✅ Fonctionnel
- Page principale: ✅ Fonctionnelle
- Page projet dynamique: ✅ Fonctionnelle avec contenu complet
- Page 404 projets: ✅ Fonctionnelle

## Pages complètes et fonctionnelles

1. ✅ Page d'accueil (/) - avec galerie de projets
2. ✅ Pages projets (/project/[slug]) - avec contenu détaillé
3. ✅ Page 404 pour projets inexistants
4. Navigation entre projets fonctionne
5. Toutes les données des 5 projets intégrées

## Prochaines étapes possibles (si demandées)

1. Ajouter plus d'images aux projets
2. Créer la page portfolio-grid
3. Intégrer les vidéos pour Cool Dude
4. Ajouter les sliders d'images
5. Améliorer les animations et transitions

## Lessons apprises

- Next.js 15 nécessite `async/await` pour `params` dans les pages dynamiques
- Les composants client (`"use client"`) ne peuvent pas être `async`
- Les pages server components (sans "use client") peuvent être `async`
- Les fichiers vides causent des erreurs "not a React Component"
- Toujours tester avec une version simple avant d'ajouter de la complexité
- `notFound()` fonctionne bien dans les server components

## Status Final

🎉 **PROBLÈME INITIAL RÉSOLU** : L'erreur "Cannot read properties of null (reading '1')" a été complètement éliminée. Toutes les pages de projets fonctionnent parfaitement et affichent le contenu correct basé sur les templates HTML originaux.
