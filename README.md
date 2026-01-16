🌍 Angular Flag Quiz
📌 Description

Angular Flag Quiz est une application web développée avec Angular 21 (standalone) et Server-Side Rendering (SSR).
Le but de l'application est de proposer un quiz interactif de drapeaux basé sur l'API publique REST Countries.

L'utilisateur doit identifier le pays correspondant à un drapeau parmi 4 choix aléatoires. Le quiz est noté sur 20 et entièrement dynamique.

🎯 Objectifs pédagogiques

Ce projet a été conçu dans un but d'apprentissage afin de :

Comprendre les principes fondamentaux d'Angular moderne

Manipuler des Standalone Components

Consommer une API REST avec HttpClient

Gérer l'asynchrone et l'état d'une application

Implémenter un quiz interactif

Comprendre la Change Detection, les NgZone et le SSR

🧠 Fonctionnalités

📡 Récupération des pays via l'API REST Countries

🎲 Génération aléatoire des questions

🏳️ Affichage d'un drapeau par question

🔀 4 réponses possibles dont une correcte

✅ Feedback immédiat (bonne / mauvaise réponse)

⏭ Passage automatique à la question suivante

🧮 Score calculé automatiquement

🏁 Quiz limité à 10 questions

🔁 Possibilité de recommencer le quiz

⚡ Compatible SSR (Server-Side Rendering)

🏗️ Architecture du projet
src/app
│
├── components/
│   └── flag-quiz/
│       ├── flag-quiz.component.ts
│       ├── flag-quiz.component.html
│       ├── flag-quiz.component.css
│
├── models/
│   └── flag-question.model.ts
│
├── services/
│   ├── country.service.ts
│   └── flag-quiz.service.ts
│
├── app.routes.ts
├── app.config.ts
🧩 Technologies utilisées

Angular 21 (Standalone Components)

TypeScript (strict mode)

Angular HttpClient

REST Countries API

SSR / Hydration Angular

🌐 API utilisée

REST Countries
Endpoint utilisé :

https://restcountries.com/v3.1/all?fields=name,flags

⚠️ L'API impose de spécifier explicitement les champs utilisés.

🚀 Lancer le projet
Installation
npm install
Lancer en mode développement
npm start
Lancer avec SSR
npm run dev:ssr
🧠 Points techniques importants

Les données sont chargées une seule fois au démarrage

Le quiz fonctionne via un état interne, sans rechargement de page

Les timers (setTimeout) sont gérés avec NgZone pour garantir la mise à jour de l'UI

Le projet respecte les bonnes pratiques Angular modernes

👥 Travail en binôme

🗣️ Un membre : réflexion, conception et échanges

💻 Un membre : développement et implémentation

Cette approche permet de séparer la logique métier de l'implémentation technique.

📈 Améliorations possibles

⏱ Ajout d'un timer par question

💾 Sauvegarde du score

🎨 Amélioration du design

🌍 Autres types de quiz (capitales, régions, population)

📄 Licence

Projet réalisé à des fins pédagogiques.
