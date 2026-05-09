---
title: "Écoulements compressibles dans une tuyère de Laval"
subtitle: "Simulation CFD des régimes adapté, sous-détendu et sur-détendu dans une tuyère propulsive."
order: 11
featured: true
domain: "CFD compressible"
image: ""
tools:
  - ANSYS Fluent
  - ANSYS DesignModeler
  - Post-traitement CFD
  - WebPlotDigitizer
methods:
  - Écoulement compressible
  - Gaz parfait
  - Modèle k-ε réalisable
  - Validation isentropique
tags:
  - Compressible
  - Supersonique
  - Tuyère de Laval
  - Ondes de choc
  - Propulsion
---

## Présentation du projet

Ce projet porte sur la simulation numérique d’un écoulement compressible turbulent dans une tuyère convergente-divergente de Laval.

L’objectif était d’analyser différents régimes d’écoulement supersonique : régime adapté, régime sous-détendu et régime sur-détendu.

## Contexte scientifique

Les tuyères de Laval sont utilisées en propulsion aéronautique et spatiale pour accélérer un gaz jusqu’à des vitesses supersoniques.

Selon la pression de sortie, l’écoulement peut présenter des zones d’expansion, des ondes de choc, des lignes de glissement ou des pertes énergétiques importantes.

## Objectifs

Les objectifs étaient de :

- simuler les régimes compressibles caractéristiques d’une tuyère ;
- analyser les champs de Mach, pression et température ;
- identifier les structures de choc ;
- comparer les résultats aux relations isentropiques ;
- évaluer les angles de choc.

## Méthodologie

La géométrie de la tuyère et du domaine aval a été construite sous DesignModeler. Un modèle axisymétrique 2D a été utilisé afin de réduire le coût de calcul.

Un maillage structuré multi-blocs a été généré avec raffinement au col, dans le divergent et dans la zone aval.

## Modélisation physique

La simulation repose sur :

- les équations de Navier-Stokes compressibles ;
- un modèle de gaz parfait ;
- la conservation de l’énergie ;
- le modèle de turbulence k-ε réalisable ;
- les relations isentropiques et de Saint-Venant.

## Résultats

Les simulations reproduisent les trois régimes étudiés.

Le régime adapté présente une expansion cohérente avec la théorie. Les régimes non adaptés montrent des oscillations de pression, des structures de choc et des zones d’expansion supersonique.

Les angles de choc ont été évalués et comparés aux observations numériques.

## Analyse

Les profils sur l’axe de symétrie montrent l’évolution du nombre de Mach, de la pression, de la température et de la densité.

La comparaison avec les relations théoriques permet de valider qualitativement et quantitativement le comportement compressible simulé.

## Compétences mises en avant

- CFD compressible
- Écoulements supersoniques
- Propulsion
- Ondes de choc
- Maillage structuré
- Validation théorie-simulation
- Analyse thermodynamique
- Post-traitement scientifique

## Conclusion

Ce projet démontre ma capacité à simuler et interpréter des phénomènes compressibles complexes liés à la propulsion et à l’aérodynamique supersonique.
