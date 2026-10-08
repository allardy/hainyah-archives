# Les images de HainyaH

Ces fichiers sont **l'œuvre de Claude Hayfield**, auteur de HainyaH. Ils sont récupérés du code source de 2010 — 
`archive/source-original/site/Hainyah/Images/` dans le dépôt d'archéologie — et servis ici tels quels, seulement renommés.

Claude Hayfield a donné sa bénédiction à cette reprise. Le renommage est décrit dans `src/routes/classic/-frame/manifest.ts`, qui est le seul endroit du
dépôt à connaître les noms d'origine : `MainMenu_03.jpg` devient `menu/info-generale.jpg`, `EnteteUnitMilitaire.jpg` devient
`entetes/unites-militaires.jpg`.

| Dossier | Ce que c'est | Origine |
| --- | --- | --- |
| `menu/` | la colonne de gauche : une image par entrée, plus son survol, ses variantes éteintes et ses deux alertes | `MenuJeux.asp` |
| `entetes/` | la bannière de chaque écran | les 130 `Entete*.jpg` |
| `filets/` | les bandes qui ferment un tableau | `Entetebaslong`, `-large`, `-court` |
| `portail/` | l'écran de connexion, découpé en quatorze tranches | `Portail.asp` |

Rien n'est recopié en gros : `pnpm --filter @hainyah/web assets` ne prend que ce qu'un écran référence, et échoue si un fichier manque.

**Ne pas modifier ces fichiers.** Ce sont des pièces d'archive.
