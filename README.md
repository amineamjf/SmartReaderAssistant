# Smart Remplacement (PWA)

Application hors ligne de suivi du remplacement des compteurs.

## Publier sur GitHub Pages
1. Créer un dépôt sur github.com (public), puis **Add file > Upload files** et déposer TOUT le contenu de ce dossier (y compris `icons/` et `.nojekyll`).
2. **Settings > Pages > Build and deployment** : Source = *Deploy from a branch*, Branch = `main`, dossier `/ (root)`, **Save**.
3. Après 1-2 minutes : `https://<utilisateur>.github.io/<depot>/`
4. Ouvrir le lien dans Chrome (téléphone), attendre le chargement complet une fois avec Internet, puis menu ⋮ > **Installer l'application**.

## Mettre à jour
Remplacer `index.html`, changer `VERSION` dans `sw.js` (v1 -> v2), publier. Sur le téléphone, ouvrir l'app avec Internet puis la fermer et la rouvrir.

## Important
Les données restent dans le téléphone (IndexedDB). Faire une sauvegarde depuis l'app avant de changer de navigateur ou de réinstaller.
