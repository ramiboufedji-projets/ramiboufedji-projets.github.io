---
title: "Interaction fluide-structure sur une barre élastique"
subtitle: "Simulation FSI 3D d’un écoulement laminaire autour d’un cylindre prolongé par une structure flexible."
order: 2
featured: true
domain: "Interaction fluide-structure"
image: ""
tools:
  - ANSYS Fluent
  - ANSYS Mechanical
  - System Coupling
  - UDF
methods:
  - Couplage FSI bidirectionnel
  - Maillage dynamique
  - Simulation transitoire
  - Validation benchmark
tags:
  - FSI
  - CFD avancée
  - Maillage dynamique
  - Simulation transitoire
  - Validation
---

## Présentation du projet

Ce projet porte sur la simulation numérique de l’interaction fluide-structure entre un écoulement laminaire incompressible et une structure flexible. Le cas étudié est basé sur le benchmark FSI2 de Turek et Hron, largement utilisé pour valider les méthodes de couplage fluide-structure.

L’objectif était de reproduire le comportement dynamique d’une barre élastique fixée derrière un cylindre rigide soumis à un écoulement, puis d’analyser les efforts hydrodynamiques et les déplacements de la structure.

## Contexte scientifique

Les phénomènes d’interaction fluide-structure interviennent dans de nombreux domaines : aéronautique, biomécanique, énergie, génie civil ou systèmes mécaniques soumis à des écoulements. Leur modélisation nécessite un couplage entre la dynamique des fluides et la mécanique des structures.

Dans ce projet, le fluide influence la déformation de la barre flexible, tandis que le mouvement de la structure modifie à son tour le domaine fluide.

## Objectifs

Les objectifs principaux étaient de :

- mettre en place un couplage bidirectionnel entre Fluent et Mechanical ;
- simuler le mouvement transitoire de la structure flexible ;
- analyser les forces de traînée et de portance ;
- observer les phénomènes de détachement tourbillonnaire ;
- comparer les résultats avec les références du benchmark FSI2.

## Méthodologie

Le domaine fluide et la structure ont été modélisés en 3D. Le solveur Fluent a été utilisé pour la partie fluide, tandis qu’ANSYS Mechanical a permis de résoudre la réponse élastique de la barre.

Le couplage entre les deux solveurs a été réalisé avec System Coupling. Une UDF a été développée afin d’imposer un profil de vitesse parabolique à l’entrée du domaine fluide.

## Modélisation numérique

La simulation repose sur :

- un écoulement laminaire incompressible ;
- un solveur transitoire ;
- un couplage FSI bidirectionnel ;
- un maillage dynamique avec smoothing et remeshing ;
- un suivi temporel des efforts hydrodynamiques et des déplacements.

Une attention particulière a été portée au choix du pas de temps, à la qualité du maillage et à la stabilité du couplage.

## Résultats et analyse

Les résultats ont permis d’observer le mouvement oscillatoire de la barre flexible ainsi que la formation de structures tourbillonnaires dans le sillage du cylindre.

Les fréquences d’oscillation obtenues présentent une bonne cohérence avec les données de référence. Plusieurs grandeurs physiques montrent des écarts inférieurs à 6 %, ce qui valide partiellement le modèle numérique 3D.

## Difficultés rencontrées

Les principales difficultés concernaient la stabilité du couplage, la gestion du maillage dynamique et la sensibilité des résultats au pas de temps.

La qualité du maillage dans les zones proches de la structure mobile s’est révélée déterminante pour limiter les distorsions et conserver une solution stable.

## Compétences mises en avant

- Couplage fluide-structure
- Simulation CFD transitoire
- Maillage dynamique
- Utilisation d’UDF dans Fluent
- Analyse de validation
- Post-traitement des efforts et déplacements
- Résolution de problèmes numériques complexes

## Conclusion

Ce projet démontre ma capacité à mettre en place une simulation multiphysique avancée, à gérer un couplage fluide-structure instationnaire et à interpréter les résultats dans une démarche de validation scientifique.
