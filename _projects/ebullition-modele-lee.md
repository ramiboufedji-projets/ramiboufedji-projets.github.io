---
title: "Ébullition et changement de phase avec le modèle de Lee"
subtitle: "Simulation multiphasique transitoire de l’ébullition de l’eau dans une colonne chauffée sous ANSYS Fluent."
order: 2
featured: true
domain: "CFD multiphasique"
image: ""
tools:
  - ANSYS Fluent
  - Modèle Mixture
  - Modèle de Lee
  - Post-traitement CFD
methods:
  - Simulation multiphasique
  - Changement de phase
  - Transfert thermique transitoire
  - Étude paramétrique
tags:
  - Multiphasique
  - Ébullition
  - Changement de phase
  - Transfert thermique
  - Fluent
---

## Présentation du projet

Ce projet porte sur la simulation numérique de l’ébullition de l’eau dans une colonne chauffée. L’objectif était de modéliser la transformation progressive de l’eau liquide en vapeur sous l’effet d’une paroi surchauffée.

La simulation a été réalisée sous ANSYS Fluent à l’aide du modèle multiphasique Mixture et du modèle de Lee pour le changement de phase.

## Contexte scientifique

Les phénomènes d’ébullition sont présents dans de nombreux systèmes thermiques : échangeurs de chaleur, refroidissement électronique, centrales thermiques, systèmes énergétiques ou procédés industriels.

La difficulté principale réside dans la modélisation simultanée des transferts de chaleur, des transferts de masse et de l’évolution des fractions volumiques entre liquide et vapeur.

## Objectifs

Les objectifs du projet étaient de :

- simuler la formation de bulles de vapeur ;
- analyser le transfert de masse liquide-vapeur ;
- suivre l’évolution des fractions volumiques ;
- évaluer les bilans thermiques et massiques ;
- étudier l’influence de la constante du modèle de Lee.

## Méthodologie

Une géométrie 2D représentant une colonne d’eau chauffée a été construite. Le maillage quadrilatéral a été raffiné dans les zones où la formation de vapeur était attendue.

La paroi chauffée a été imposée à une température élevée, provoquant l’apparition de vapeur et la montée des bulles sous l’effet de la flottabilité.

## Modèles physiques

La simulation repose sur :

- le modèle multiphasique Mixture ;
- le modèle de Lee pour le changement de phase ;
- un modèle de turbulence k-ω SST ;
- l’équation de l’énergie ;
- une résolution transitoire.

Le coefficient du modèle de Lee a été étudié afin d’évaluer son influence sur les taux de condensation et d’évaporation.

## Résultats et analyse

La simulation a permis de reproduire qualitativement la formation et la montée de bulles de vapeur dans la colonne.

Les résultats montrent une bonne conservation des bilans massiques, ainsi qu’une forte sensibilité du modèle aux constantes numériques associées au changement de phase.

L’étude paramétrique a mis en évidence l’influence du coefficient de Lee sur le transfert de masse et la vitesse de formation de vapeur.

## Difficultés rencontrées

Les principales difficultés concernaient la stabilité de la simulation transitoire, la conservation des bilans d’énergie et la sensibilité du modèle de changement de phase aux paramètres numériques.

## Compétences mises en avant

- CFD multiphasique
- Modélisation du changement de phase
- Simulation thermique transitoire
- Paramétrage avancé Fluent
- Étude paramétrique
- Analyse des bilans de masse et d’énergie
- Post-traitement scientifique

## Conclusion

Ce projet met en évidence ma capacité à modéliser des phénomènes multiphasiques complexes et à analyser l’influence des paramètres numériques dans une simulation de changement de phase.
