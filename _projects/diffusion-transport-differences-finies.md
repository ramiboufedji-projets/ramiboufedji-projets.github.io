---
title: "Diffusion et transport par différences finies"
subtitle: "Analyse numérique de schémas pour équations de diffusion, transport linéaire et Burgers."
order: 13
featured: false
domain: "Méthodes numériques"
image: ""
tools:
  - Python
  - Calcul scientifique
  - Différences finies
methods:
  - Schéma θ
  - Lax-Friedrichs
  - Analyse de Von Neumann
  - Condition CFL
tags:
  - Différences finies
  - Diffusion
  - Transport
  - Burgers
  - Stabilité numérique
---

## Présentation du projet

Ce projet porte sur l’étude numérique d’équations de diffusion, de transport linéaire et de transport non linéaire à l’aide de méthodes de différences finies.

L’objectif était d’analyser la stabilité, la monotonie, la diffusion numérique, la dispersion et la convergence des schémas.

## Contexte scientifique

Les équations de transport et de diffusion sont fondamentales en mécanique des fluides, thermique, acoustique et simulation numérique.

Le choix du schéma numérique influence fortement la précision, la stabilité et la qualité physique des solutions obtenues.

## Objectifs

Les objectifs étaient de :

- discrétiser plusieurs équations aux dérivées partielles ;
- implémenter différents schémas numériques sous Python ;
- analyser les critères de stabilité ;
- comparer les comportements numériques ;
- étudier les phénomènes de choc et de détente avec l’équation de Burgers.

## Méthodologie

L’équation de diffusion a été étudiée avec le schéma θ. Les conditions de stabilité ont été analysées à partir du nombre de Fourier.

Le transport linéaire a été simulé avec un schéma décentré amont et un schéma de Lax-Friedrichs. L’analyse repose sur le nombre de Courant et la condition CFL.

L’équation de Burgers a été utilisée pour étudier les phénomènes non linéaires.

## Résultats

Les simulations confirment les critères théoriques de stabilité et mettent en évidence les comportements instables lorsque les conditions numériques ne sont pas respectées.

Les effets de diffusion numérique, de déphasage et d’atténuation ont été observés et comparés entre schémas.

Pour l’équation de Burgers, les simulations montrent l’apparition de zones de choc et de détente.

## Compétences mises en avant

- Méthodes de différences finies
- Analyse de stabilité
- Analyse de Von Neumann
- Condition CFL
- Schéma θ
- Lax-Friedrichs
- Équation de Burgers
- Programmation scientifique Python

## Conclusion

Ce projet démontre ma maîtrise des bases de l’analyse numérique appliquée aux équations de transport et ma capacité à interpréter les effets des schémas sur les solutions physiques.
