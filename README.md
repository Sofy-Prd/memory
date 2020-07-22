# Memory
Site déployé sur heroku et accessible à l'adresse https://memory-oclock.herokuapp.com/

## Règles du jeu

Au commencement du jeu, des cartes sont disposées face cachée à l'écran de manière aléatoire.
- Le joueur doit cliquer sur deux cartes. Si celles-ci sont identiques, la paire est
validée. Sinon, les cartes sont retournées face cachée, et le joueur doit sélectionner
une nouvelle paire de cartes.
- Un compteur de temps, avec une barre de progression, s’affiche en dessous du
plateau.
- Le joueur gagne s'il arrive à découvrir toutes les paires avant la fin du temps imparti (90 secondes).
- Chaque temps de partie effectuée est sauvegardé en base de données.  
Avant le début du jeu, les 10 meilleurs temps s’affichent à l’écran.

## Pour utiliser l'image Docker
L'image est disponible sur le docker hub https://hub.docker.com/repository/docker/sofyprd/memorygame

Récupérer le fichier docker-compose.yml ci-dessus et exécuter la commande dans le repertoire où il se trouve :
```code
$ docker-compose up
```

Docker chargera l'image du site ainsi que celle de mongoDB
Une fois que les images sont "runnées" le site est accessible à l'adresse http://localhost:3000

## Coté front
Html, CSS et JS

SASS a été utilisé pour le CSS

Handlebars pour les vues

## Coté Back
### Pré-requis
NodeJS, NPM, MongoDB pour la base de données

### Intallation locale du projet
- Cloner le projet
```code
$ git clone https://github.com/Sofy-Prd/memory.git
```
- Créer un .env à la racine avec pour contenu
```code
PORT=3000
MONGODB_URI=mongodb://localhost/memory
```
- Installer les dépendances
```code
$ npm intall
```
- Démarrer le serveur (assurez-vous que votre base de données mongoDB soit bien démarrée)
```code
$ npm start
```

## Evolutions prévues
- Faire le responsive
- Mettre en place un système d'authentification avec une gestion des profils des joueurs
- Créer des niveaux de difficulté
- Sécuriser les données pour ne pas qu'il soit possible de "tricher" en passant par l'inspecteur



## Aperçu du jeu
![alt text](/public/images/screenshotForReadMe.png)




