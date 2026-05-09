---
title: "UDF Fluent pour convection forcée turbulente avec générateur de vortex"
subtitle: "Développement d’UDF en C pour analyser les transferts thermiques dans un canal chauffé."
order: 4
featured: true
domain: "CFD avancée"
image: ""
tools:
  - ANSYS Fluent
  - UDF
  - Langage C
  - Post-traitement CFD
methods:
  - Convection forcée turbulente
  - Modèle k-ω SST
  - Calcul du Nusselt
  - Validation par corrélations
tags:
  - UDF
  - Langage C
  - Turbulence
  - Vortex
  - Transfert thermique
---

## Présentation du projet

Ce projet porte sur la simulation d’un écoulement turbulent de convection forcée dans un canal chauffé équipé d’un générateur de vortex.

La particularité du projet réside dans le développement de fonctions UDF en langage C afin d’étendre les capacités standards d’ANSYS Fluent.

## Contexte scientifique

Les générateurs de vortex sont utilisés pour intensifier les transferts thermiques en modifiant localement les structures d’écoulement. Ils créent des recirculations, augmentent le mélange et peuvent améliorer les performances thermiques d’un système.

La simulation de ces phénomènes nécessite une modélisation fine de la turbulence et une analyse locale des grandeurs thermiques.

## Objectifs

Les objectifs étaient de :

- développer des UDF en langage C ;
- imposer un profil turbulent pleinement développé ;
- calculer localement le nombre de Nusselt ;
- comparer les résultats avec des corrélations de référence ;
- analyser l’influence du générateur de vortex sur le transfert thermique.

## Méthodologie

La géométrie 2D du canal a été construite avec un générateur de vortex placé dans la zone chauffée. Un maillage structuré multi-bloc a été utilisé, avec raffinement près des parois.

Le modèle k-ω SST a été retenu pour représenter l’écoulement turbulent.

## Développement des UDF

Plusieurs UDF ont été développées :

- une UDF pour imposer un profil de vitesse turbulent ;
- une UDF pour calculer le nombre de Nusselt local ;
- des fonctions permettant l’extraction de grandeurs thermiques utiles au post-traitement.

Ces développements ont permis une analyse plus précise des transferts thermiques que les sorties standards du solveur.

## Résultats et validation

Les résultats ont été comparés à la corrélation de Dittus-Boelter et aux références bibliographiques, notamment les travaux de Benim et al.

L’étude montre l’apparition de pics locaux de Nusselt liés aux zones de stagnation et aux structures tourbillonnaires générées par l’obstacle.

## Compétences mises en avant

- Développement UDF en langage C
- Maîtrise avancée d’ANSYS Fluent
- Simulation turbulente
- Calcul du nombre de Nusselt
- Validation par corrélations
- Analyse RMSE
- Post-traitement scientifique

## Conclusion

Ce projet démontre ma capacité à combiner simulation CFD, programmation scientifique et analyse thermique avancée pour étudier un problème d’ingénierie complexe.
