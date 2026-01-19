# Méthodologie de création des prompts avec ChatGPT

Dans ce projet, ChatGPT a été utilisé comme un **outil d’accompagnement pédagogique et technique**, jouant le rôle de **lead développeur / formateur**, tandis que le travail était réalisé en binôme :
- Un membre du binôme se concentrait sur la **compréhension et les décisions techniques**
- L’autre se concentrait sur le **développement et l’implémentation du code**

La construction des prompts a été organisée autour de **trois grands axes**, afin d’assurer une progression logique, pédagogique et professionnelle du projet Angular.

---

## 1️⃣ Définition du contexte et de la méthode de travail

Le premier axe consistait à **poser clairement le contexte du projet**, les rôles de chacun et la manière dont ChatGPT devait intervenir.

L’objectif était de :
- Définir le framework utilisé (Angular 21.1)
- Préciser l’API externe (REST Countries)
- Mettre en place une collaboration simulée de type équipe professionnelle
- Avancer étape par étape sans brûler les concepts fondamentaux

### Exemple de prompt utilisé

> Je veux apprendre les principes d'Angular aide moi à le faire étape par étape.  
> Nous sommes en binôme : je m'occupe de te parler et mon collègue s'occupe du développement.  
> Explique-moi les choix que tu fais.  
> Nous devons faire une application Angular (21.1) avec l'API REST Country.

### Résultat attendu

Ce prompt permet :
- D’obtenir une **structure pédagogique claire**
- D’avoir une **vision globale de l’architecture Angular**
- De comprendre **pourquoi** chaque choix technique est fait, et pas seulement **comment** coder

---
## 2️⃣ Apprentissage et compréhension du framework Angular

Le deuxième axe était centré sur la **compréhension approfondie d’Angular**, de ses concepts et de ses mécanismes internes.

L’objectif n’était pas seulement de faire fonctionner l’application, mais de :
- Comprendre les **principes fondamentaux d’Angular**
- Apprendre les notions clés (modules, composants, services, injection de dépendances, observables)
- Poser des questions ciblées sur les éléments techniques utilisés

### Exemple de prompt lié à l’apprentissage

> HttpClient sert à faire des appels API mais pourquoi je dois l'activer ?

### Résultat attendu

Ce type de prompt permet :
- D’expliquer les **choix techniques d’Angular**
- De comprendre le rôle de l’**injection de dépendances**
- De renforcer la logique derrière l’architecture Angular plutôt que d’appliquer des solutions “magiques”

---

## 3️⃣ Gestion des erreurs et compréhension des messages système

Le troisième axe concernait la **gestion des erreurs**, des warnings et des comportements inattendus rencontrés durant le développement.

L’objectif était de :
- Ne pas ignorer les erreurs ou warnings
- Comprendre leur origine
- Apprendre à les corriger proprement
- Faire le lien entre les erreurs, le framework et les API utilisées

### Exemple de prompt lié à une erreur rencontrée

> (node:21240) [DEP0169] DeprecationWarning: url.parse() behavior is not standardized and prone to errors...

### Résultat attendu

Ce type de prompt permet :
- De comprendre que certaines erreurs proviennent de **contraintes externes** (API, Node, versions)
- D’apprendre à **adapter son code aux évolutions des APIs**
- De développer un **réflexe professionnel de lecture et d’analyse des messages d’erreur**
  
⚠️ Problématique rencontrée : appels API, routing et SSR
Lors du développement de l’application, nous avons rencontré un problème lié à la combinaison des appels API, du routing Angular et du Server-Side Rendering (SSR). En naviguant entre les routes (notamment vers la page du quiz), les composants étaient bien instanciés et les appels API exécutés, mais les données n’étaient pas toujours correctement reflétées dans l’interface.

Ce comportement était dû au cycle de vie spécifique d’Angular en SSR, où les composants peuvent être créés côté serveur puis réhydratés côté client, ce qui peut entraîner une perte ou une désynchronisation de l’état lors des changements de route.

Pour résoudre ce problème de manière propre et conforme aux bonnes pratiques Angular, nous avons mis en place des Resolvers. Ceux-ci permettent de charger les données avant l’activation de la route, garantissant que les composants disposent des données nécessaires dès leur création, aussi bien côté serveur que côté client. Cette approche a permis de stabiliser le rendu, de corriger les problèmes de navigation et d’améliorer la fiabilité globale de l’application.
---
## ✅ Conclusion

La création des prompts a suivi une logique structurée en trois axes :
1. **Contexte et méthode de travail**
2. **Apprentissage et compréhension du framework**
3. **Gestion des erreurs et résolution de problèmes**

Cette approche a permis de :
- Progresser de manière pédagogique
- Comprendre les choix techniques
- Construire une application Angular de manière professionnelle et maintenable
