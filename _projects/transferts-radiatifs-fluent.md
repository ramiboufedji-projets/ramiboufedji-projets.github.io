---
title: "Transferts radiatifs dans une cavité chauffée"
subtitle: "Comparaison des modèles de rayonnement implémentés dans ANSYS Fluent."
order: 9
featured: false
domain: "Transfert thermique"
image: ""
tools:
  - ANSYS Fluent
  - Modèles radiatifs
  - Post-traitement CFD
methods:
  - Rayonnement thermique
  - Convection naturelle
  - Approximation de Boussinesq
  - Comparaison de modèles
tags:
  - Rayonnement
  - Convection naturelle
  - Fluent
  - Modèles radiatifs
  - Nusselt
---

## Présentation du projet

Ce projet porte sur l’étude des modèles de rayonnement thermique disponibles dans ANSYS Fluent pour une cavité carrée différentiellement chauffée en convection naturelle.

L’objectif était de comparer plusieurs modèles radiatifs et d’évaluer leur influence sur les champs thermiques et les structures d’écoulement.

## Contexte scientifique

Dans les systèmes à haute température, le rayonnement peut jouer un rôle majeur dans le transfert thermique global.

La prise en compte du rayonnement modifie les champs de température, les lignes de courant et les flux de chaleur aux parois.

## Objectifs

Les objectifs étaient de :

- simuler une cavité chauffée avec convection naturelle ;
- comparer les modèles DTRM, DO, P1, S2S et Rosseland ;
- analyser l’influence de l’épaisseur optique ;
- étudier les profils de vitesse et de température ;
- comparer les temps de calcul et la robustesse des modèles.

## Méthodologie

La cavité a été modélisée avec deux parois verticales à températures imposées et deux parois horizontales adiabatiques.

Une étude de convergence du maillage a été menée, conduisant au choix d’un maillage 160 × 160.

## Modèles physiques

Les simulations reposent sur :

- les équations de Navier-Stokes ;
- l’équation de l’énergie ;
- l’approximation de Boussinesq ;
- le rayonnement thermique dans un gaz gris ;
- plusieurs modèles radiatifs de Fluent.

## Résultats

Les résultats montrent que la prise en compte du rayonnement augmente les échanges thermiques globaux.

Les modèles S2S et DO présentent des résultats robustes, tandis que Rosseland se révèle moins adapté aux faibles épaisseurs optiques.

Le modèle DTRM apparaît plus pertinent pour certains milieux optiquement épais, tandis que P1 peut être efficace pour les milieux optiquement minces.

## Compétences mises en avant

- Simulation thermique avancée
- Modélisation du rayonnement
- Comparaison de modèles physiques
- Convection naturelle
- Étude de convergence
- Analyse des temps de calcul
- Post-traitement CFD

## Conclusion

Ce projet démontre ma capacité à comparer des modèles physiques avancés et à analyser leurs domaines de validité dans un contexte de simulation thermique multiphysique.
