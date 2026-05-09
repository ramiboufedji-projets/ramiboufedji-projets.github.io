---
title: "DNS d’évaporation liquide-vapeur avec Basilisk CFD"
subtitle: "Simulation multiphasique avec changement de phase, méthode VOF et validation du problème de Stefan."
order: 14
featured: true
domain: "CFD multiphasique"
image: ""
tools:
  - Basilisk CFD
  - VOF
  - PLIC
  - Calcul scientifique
methods:
  - DNS
  - Changement de phase
  - Problème de Stefan
  - Raffinement adaptatif
tags:
  - DNS
  - Basilisk
  - VOF
  - Évaporation
  - Changement de phase
---

## Présentation du projet

Ce projet porte sur la simulation numérique directe de l’évaporation liquide-vapeur avec le solveur open-source Basilisk CFD.

L’objectif était d’étudier le problème de Stefan, le déplacement d’une interface liquide-vapeur et les difficultés numériques associées au changement de phase.

## Contexte scientifique

Les écoulements multiphasiques avec changement de phase interviennent dans l’évaporation, l’ébullition, la condensation, les sprays, les moteurs, les systèmes énergétiques et les procédés thermiques.

La simulation directe de ces phénomènes nécessite une résolution fine de l’interface et une validation rigoureuse des modèles numériques.

## Objectifs

Les objectifs étaient de :

- simuler un problème de Stefan ;
- valider l’évolution de l’interface avec une solution analytique ;
- analyser les profils de température ;
- utiliser la méthode VOF et la reconstruction PLIC ;
- étudier la convergence du maillage et du pas de temps ;
- comparer différentes formulations numériques.

## Méthodologie

Le projet a été mené sous Basilisk CFD, avec une approche DNS et un suivi d’interface par méthode VOF.

La diffusion thermique pure a d’abord été étudiée, puis le modèle a été couplé aux équations de Navier-Stokes afin de prendre en compte les effets d’expansion volumique liés au changement de phase.

## Modélisation physique

Le modèle repose sur :

- l’équation de la chaleur ;
- la condition de Stefan ;
- les équations de Navier-Stokes multiphasiques ;
- la méthode Volume of Fluid ;
- la reconstruction géométrique PLIC ;
- le raffinement adaptatif.

## Résultats

Les résultats montrent une bonne validation du déplacement d’interface dans le cas de diffusion pure.

Les profils thermiques sont cohérents avec la solution analytique du problème de Stefan. L’étude de convergence a permis d’identifier les formulations les plus robustes et les limites de certains codes.

## Difficultés rencontrées

Les principales difficultés concernent la convergence numérique, la sensibilité au pas de temps, l’initialisation de l’interface et la gestion des propriétés discontinues entre phases.

## Compétences mises en avant

- CFD multiphasique
- Simulation DNS
- Basilisk CFD
- Méthode VOF / PLIC
- Changement de phase
- Problème de Stefan
- Raffinement adaptatif
- Validation analytique
- Analyse de convergence

## Conclusion

Ce projet démontre ma capacité à aborder un problème de recherche numérique avancé, combinant CFD multiphasique, changement de phase, validation analytique et analyse critique des formulations numériques.
