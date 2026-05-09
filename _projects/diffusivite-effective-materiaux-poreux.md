---
title: "Diffusivité effective dans les matériaux poreux"
subtitle: "Simulation COMSOL de la diffusion transitoire et homogénéisation d’un milieu poreux."
order: 7
featured: false
domain: "Milieux poreux"
image: ""
tools:
  - COMSOL Multiphysics
  - Méthode des éléments finis
  - Post-traitement scientifique
methods:
  - Diffusion transitoire
  - Homogénéisation
  - Diffusivité effective
  - Analyse de tortuosité
tags:
  - Diffusion
  - Milieux poreux
  - Homogénéisation
  - Tortuosité
  - COMSOL
---

## Présentation du projet

Ce projet porte sur la simulation numérique de la diffusion transitoire dans un matériau poreux complexe. L’objectif était de déterminer une diffusivité effective et de construire un modèle homogénéisé équivalent.

L’étude compare un modèle réaliste 2D avec un modèle homogène 1D.

## Contexte scientifique

Dans les matériaux poreux, le transport diffusif est fortement influencé par la porosité, la tortuosité et la géométrie du réseau de pores.

La détermination d’une diffusivité effective permet de remplacer un milieu complexe par un modèle équivalent plus simple, tout en conservant un comportement global représentatif.

## Objectifs

Les objectifs étaient de :

- simuler la diffusion transitoire dans une géométrie poreuse ;
- calculer le flux diffusif moyen ;
- déterminer la diffusivité effective ;
- estimer la porosité et la tortuosité ;
- comparer les modèles 2D réaliste et 1D homogénéisé.

## Méthodologie

Le modèle 2D a été construit sous COMSOL Multiphysics. Une équation de diffusion transitoire a été résolue avec des conditions aux limites adaptées.

Les flux moyens ont été extraits au cours du temps afin de calculer une diffusivité effective représentative du milieu.

## Modélisation physique

La diffusion a été modélisée à partir de la loi de Fick. Le lien entre diffusivité effective, porosité et tortuosité a été utilisé sous la forme :

Deff = Dη / τ

où η représente la porosité et τ la tortuosité.

## Résultats

L’étude a permis de calculer une porosité d’environ 0,38 et une tortuosité d’environ 1,79.

Le modèle homogénéisé 1D présente une bonne concordance avec la simulation 2D, tout en mettant en évidence les limites des simplifications homogènes.

## Analyse

Les résultats montrent l’intérêt de l’homogénéisation pour réduire la complexité numérique tout en conservant une représentation physique pertinente du transport diffusif.

## Compétences mises en avant

- Simulation multiphysique COMSOL
- Diffusion transitoire
- Homogénéisation
- Calcul de diffusivité effective
- Analyse de tortuosité
- Comparaison de modèles 1D et 2D
- Post-traitement de flux diffusifs

## Conclusion

Ce projet démontre ma capacité à analyser un phénomène de transport dans un milieu poreux complexe et à construire un modèle équivalent exploitable pour l’ingénierie.
