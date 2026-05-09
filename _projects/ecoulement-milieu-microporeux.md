---
title: "Écoulement dans un milieu microporeux"
subtitle: "Simulation COMSOL d’un écoulement incompressible dans une microstructure poreuse bidimensionnelle."
order: 6
featured: false
domain: "Milieux poreux"
image: ""
tools:
  - COMSOL Multiphysics
  - Méthode des éléments finis
  - Post-traitement scientifique
methods:
  - Écoulement de Stokes
  - Loi de Darcy
  - Modèle de Kozeny-Carman
  - Analyse de perméabilité
tags:
  - Milieux poreux
  - COMSOL
  - Perméabilité
  - Darcy
  - Éléments finis
---

## Présentation du projet

Ce projet porte sur la simulation numérique d’un écoulement incompressible dans un milieu microporeux bidimensionnel.

L’objectif était de caractériser la porosité, d’identifier un volume élémentaire représentatif et d’estimer la perméabilité intrinsèque du milieu à partir d’une simulation COMSOL.

## Contexte scientifique

Les milieux poreux sont présents dans de nombreux domaines : filtration, catalyse, géosciences, matériaux, biomécanique ou stockage d’énergie.

Leur comportement hydraulique dépend fortement de la microstructure, des chemins préférentiels d’écoulement et de la connectivité des pores.

## Objectifs

Les objectifs principaux étaient de :

- analyser la géométrie du milieu poreux ;
- calculer la porosité ;
- déterminer le volume élémentaire représentatif ;
- vérifier l’hypothèse de Delesse ;
- comparer la perméabilité théorique et numérique.

## Méthodologie

La microstructure poreuse a été modélisée en 2D sous COMSOL Multiphysics. Un maillage triangulaire extra-fin a été généré afin de capturer les détails géométriques du réseau de pores.

L’écoulement a été supposé incompressible, isotherme et laminaire, avec un nombre de Reynolds inférieur à 1.

## Modélisation physique

Le modèle repose sur :

- les équations de Navier-Stokes en régime de Stokes ;
- la conservation de la masse ;
- la loi de Darcy ;
- le modèle de Kozeny-Carman ;
- l’analyse de porosité et de perméabilité.

## Résultats

L’étude a permis d’obtenir une porosité d’environ 54,6 %, d’identifier un volume représentatif et de mettre en évidence les chemins préférentiels de l’écoulement.

La perméabilité numérique obtenue est proche de la valeur théorique, avec une erreur relative d’environ 6 %.

## Analyse

Les champs de vitesse montrent des zones accélérées dans les passages étroits et des zones mortes dans certaines régions peu connectées.

Les résultats valident qualitativement le comportement de Darcy en régime de Stokes.

## Compétences mises en avant

- Simulation COMSOL
- Milieux poreux
- Méthode des éléments finis
- Analyse de perméabilité
- Loi de Darcy
- Modèle de Kozeny-Carman
- Post-traitement de champs vitesse-pression

## Conclusion

Ce projet démontre ma capacité à relier une microstructure géométrique à des propriétés hydrauliques effectives à travers une démarche combinant théorie, simulation et validation.
