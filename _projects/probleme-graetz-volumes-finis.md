---
title: "Résolution numérique du problème de Graetz"
subtitle: "Étude du développement thermique d’un écoulement laminaire par méthode des volumes finis."
order: 5
featured: false
domain: "Méthodes numériques"
image: ""
tools:
  - Programmation scientifique
  - Méthode des volumes finis
  - Algorithme de Thomas
methods:
  - Convection-diffusion
  - Volumes finis
  - Analyse de convergence
  - Calcul du Nusselt
tags:
  - Volumes finis
  - Graetz
  - Transfert thermique
  - Calcul scientifique
  - Convergence
---

## Présentation du projet

Ce projet porte sur la résolution numérique du problème de Graetz, qui décrit le développement thermique d’un écoulement laminaire dans un conduit cylindrique chauffé à température imposée.

L’objectif était de résoudre l’équation de convection-diffusion thermique et de calculer le nombre de Nusselt local.

## Contexte scientifique

Le problème de Graetz constitue un cas de référence en transfert thermique convectif. Il permet d’étudier la manière dont le champ de température se développe dans un écoulement laminaire pleinement établi hydrodynamiquement.

Ce type de problème est fondamental pour comprendre les transferts thermiques dans les conduites, échangeurs et systèmes énergétiques.

## Objectifs

Les objectifs étaient de :

- formuler mathématiquement le problème ;
- discrétiser l’équation d’énergie par volumes finis ;
- implémenter un algorithme de résolution ligne par ligne ;
- calculer le nombre de Nusselt local ;
- étudier la convergence du maillage et du critère numérique.

## Méthodologie

Le profil de vitesse de Poiseuille a été considéré comme pleinement développé. L’équation de température a été résolue sur un domaine axisymétrique en coordonnées adaptées.

La méthode des volumes finis a été utilisée pour construire le système algébrique. L’algorithme de Thomas a permis la résolution efficace des systèmes tridiagonaux.

## Résultats

Les résultats obtenus permettent de suivre l’évolution du champ de température et du nombre de Nusselt le long de la conduite.

Le raffinement du maillage réduit les erreurs numériques et améliore la précision de la longueur d’établissement thermique.

## Analyse numérique

Une étude de sensibilité a été réalisée sur :

- le maillage spatial ;
- le critère de convergence ;
- la stabilité de la résolution ;
- l’évolution du nombre de Nusselt.

Les résultats montrent une bonne cohérence avec les solutions théoriques attendues.

## Compétences mises en avant

- Méthode des volumes finis
- Discrétisation d’équations physiques
- Résolution d’équations de convection-diffusion
- Algorithme de Thomas
- Calcul du nombre de Nusselt
- Analyse de convergence
- Programmation scientifique

## Conclusion

Ce projet illustre ma compréhension des méthodes numériques fondamentales utilisées en CFD et en transfert thermique, ainsi que ma capacité à développer une résolution numérique complète à partir des équations physiques.
