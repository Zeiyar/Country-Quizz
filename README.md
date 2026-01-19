# 🌍 Angular Country Explorer & Flag Quiz

## 📌 Description

**Angular Country Explorer** est une application web développée avec **Angular 21 (Standalone Components)** et **Server-Side Rendering (SSR)**.  
Elle permet à la fois :

- 📊 D’explorer les pays du monde à travers leurs **drapeaux et informations principales**
- 🎯 De tester ses connaissances via un **quiz interactif de drapeaux**

Les données sont fournies par l’API publique **REST Countries** et sont entièrement dynamiques.

---

## 🎯 Objectifs pédagogiques

Ce projet a été réalisé dans un objectif d’apprentissage afin de :

- Comprendre les principes fondamentaux d’**Angular moderne**
- Utiliser les **Standalone Components**
- Consommer une **API REST** avec `HttpClient`
- Gérer l’**asynchrone** et l’état d’une application
- Implémenter des **interactions utilisateur** (hover, tri, recherche)
- Créer un **quiz dynamique**
- Comprendre le **SSR, la Change Detection et NgZone**

---
## 🧠 Fonctionnalités

### 🌍 Exploration des pays

- 📡 Récupération des pays via l’API **REST Countries**
- 🏳️ Affichage des **drapeaux**
- ℹ️ Affichage des **informations d’un pays au survol (hover)**  
  - Nom  
  - Capitale  
  - Région  
  - Population
- 🔎 **Recherche d’un pays** par nom
- 📊 **Tri des pays par population**
- ⚡ Chargement des données une seule fois

---

### 🎲 Flag Quiz

- 🏳️ Affichage d’un **drapeau par question**
- 🔀 **4 réponses possibles** dont une correcte
- 🎲 Génération aléatoire des questions
- ✅ Feedback immédiat (bonne / mauvaise réponse)
- ⏭ Passage automatique à la question suivante
- 🧮 Score calculé automatiquement
- 🏁 Quiz limité à **10 questions**
- 🔁 Possibilité de recommencer le quiz
- ⚡ Compatible **SSR (Server-Side Rendering)**

---
## 🏗️ Architecture du projet

```text
src/app
│
├── components/
│   ├── country-list/
│   ├── country-card/
│   └── flag-quiz/
│
├── models/
│   ├── country.model.ts
│   └── flag-question.model.ts
│
├── services/
│   ├── country.service.ts
│   └── flag-quiz.service.ts
│
├── app.routes.ts
├── app.config.ts
