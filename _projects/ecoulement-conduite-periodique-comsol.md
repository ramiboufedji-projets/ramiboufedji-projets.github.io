---
title: "Écoulement turbulent en conduite convergente-divergente"
subtitle: "Simulation 2D sous COMSOL d'un écoulement d'eau dans une conduite à motifs géométriques périodiques."
order: 16
featured: true
domain: "Hydraulique"
image: "assets/images/ projects/conduite-periodique-comsol.png"
tools:
  - COMSOL Multiphysics
  - Module écoulement turbulent
  - Post-traitement CFD
methods:
  - CFD 2D stationnaire
  - Modèle k-epsilon
  - Géométrie convergente-divergente
  - Maillage et champ de vitesse
tags:
  - Hydraulique
  - Écoulement interne
  - Turbulence
  - Conduite
  - COMSOL
  - CFD
---

## Présentation du projet

Ce projet académique porte sur la modélisation d'un écoulement d'eau dans une conduite dont les parois présentent une succession de sections convergentes et divergentes. L'étude a été réalisée en **deux dimensions sous COMSOL Multiphysics 5.6**, dans le cadre d'une simulation **monophasique, turbulente et stationnaire**.

L'objectif était de mettre en place un modèle numérique de l'écoulement et de visualiser la répartition des vitesses dans une géométrie à sections variables.

## Contexte et problématique

Dans une conduite à section variable, la géométrie influence la répartition du champ de vitesse, les gradients de pression et les structures locales d'écoulement. Une alternance de convergents et de divergents constitue donc un cas d'étude utile pour se familiariser avec les écoulements internes en CFD.

Le terme *périodique* décrit ici **la répétition du motif géométrique** : la simulation présentée n'est pas un écoulement périodique dans le temps, puisqu'elle est calculée en régime stationnaire.

## Objectifs de l'étude

- Construire une géométrie de conduite à motifs convergents-divergents répétés.
- Paramétrer un modèle d'écoulement turbulent de l'eau en 2D.
- Définir le matériau, les conditions aux limites et le maillage.
- Obtenir et interpréter la distribution spatiale de la vitesse.

## Géométrie et données du problème

Le modèle réduit comporte une succession de sept motifs géométriques, construits et assemblés dans COMSOL. Les dimensions indiquées dans l'énoncé sont :

- Longueur totale : **0,791 m**.
- Largeur minimale indiquée : **0,04 m**.
- Largeur maximale indiquée : **0,08 m**.
- Valeur moyenne des deux largeurs : **0,06 m**.

Trois débits volumiques sont fournis dans l'énoncé : **0,63 L/s**, **0,54 L/s** et **0,47 L/s**. Le rapport détaille le paramétrage d'un cas et présente un résultat de simulation, mais ne documente pas une comparaison complète des trois débits.

## Modélisation et démarche numérique

La simulation a été construite dans **COMSOL Multiphysics 5.6** à l'aide de l'interface *Turbulent Flow*, avec le modèle de turbulence **k-ε** en régime **stationnaire**.

Les étapes documentées sont les suivantes :

1. Construction de la géométrie bidimensionnelle par polygones et symétries, puis réunion des domaines.
2. Attribution de l'eau comme matériau de l'écoulement.
3. Définition d'une condition de vitesse à l'entrée et d'une pression de référence atmosphérique à la sortie.
4. Génération d'un maillage, avec sélection d'un niveau fin de raffinement.
5. Résolution du modèle et visualisation du champ de vitesse.

Le rapport précise également une prescription initiale de profil parabolique et une durée d'environ huit minutes pour le calcul présenté.

## Résultat : distribution du champ de vitesse

La carte de vitesse obtenue met en évidence un **écoulement plus rapide dans la zone centrale** de la conduite et des régions de vitesse plus faible au voisinage des élargissements latéraux. Elle permet d'observer l'influence de la géométrie répétée sur la distribution spatiale du champ de vitesse.

![Champ de vitesse sous COMSOL dans la conduite à motifs convergents-divergents]({{ '/assets/images/ projects/conduite-periodique-comsol-resultat.png' | relative_url }})

*Résultat extrait du rapport de projet : visualisation du champ de vitesse dans COMSOL Multiphysics.*

## Limites et pistes de prolongement

Cette étude constitue une **première mise en œuvre de CFD hydraulique interne**. Le document fourni ne présente toutefois ni comparaison quantitative aux mesures expérimentales, ni étude d'indépendance au maillage, ni évaluation détaillée des pertes de charge.

Le calcul de la vitesse d'entrée à partir du débit volumique, tel que noté dans le rapport, demande également une **vérification dimensionnelle**, notamment en raison de la représentation 2D et de la profondeur hors plan nécessaire à la conversion du débit volumique en vitesse.

Une poursuite de l'étude pourrait porter sur l'examen des profils de pression, la quantification des pertes de charge, la comparaison des différents débits et une analyse de convergence du maillage. Ces analyses sont des **perspectives**, et non des résultats déjà établis dans ce projet.

## Compétences mises en avant

- CFD des écoulements internes et hydraulique en conduite.
- Construction de géométries à sections variables sous COMSOL.
- Paramétrage d'un modèle de turbulence k-ε.
- Définition des conditions aux limites et génération de maillages.
- Post-traitement et interprétation de cartes de vitesse.

## Conclusion

Ce projet illustre une première démarche de modélisation numérique d'un écoulement turbulent en conduite à géométrie répétée, depuis la construction du domaine jusqu'à l'exploitation visuelle des résultats. Il complète les travaux consacrés à la CFD multiphasique et à l'interaction fluide-structure par une application centrée sur **l'hydraulique interne**.
