---
title: "CFD et interaction fluide-structure autour de cylindres avec OpenFOAM"
subtitle: "Workflow complet de simulation d’écoulements transitoires, de vibrations induites par vortex et de comparaison géométrique d’obstacles fixes et mobiles."
order: 0
featured: true
domain: "Interaction fluide-structure"
image: ""
tools:
  - OpenFOAM
  - pimpleFoam
  - sixDoFRigidBodyMotion
  - blockMesh
  - snappyHexMesh
  - Python
methods:
  - CFD transitoire
  - Maillage dynamique
  - Interaction fluide-structure
  - Vibrations induites par vortex
  - Post-traitement Python
tags:
  - FSI
  - OpenFOAM
  - CFD avancée
  - Vortex-induced vibrations
  - Maillage dynamique
  - Nombre de Strouhal
  - Coefficients aérodynamiques
  - Python scientifique
---

## Présentation du projet

Ce projet constitue une étude complète de mécanique des fluides numérique et d’interaction fluide-structure réalisée sous **OpenFOAM**. Il vise à analyser l’écoulement incompressible transitoire autour de plusieurs obstacles cylindriques, puis à étendre l’étude à des configurations mobiles afin d’examiner les **vibrations induites par vortex** et la réponse dynamique de corps élastiquement montés.

Le travail s’articule autour d’un ensemble progressif de cas numériques : depuis un **cylindre circulaire fixe**, utilisé pour caractériser le détachement tourbillonnaire et extraire les coefficients aérodynamiques, jusqu’à des **corps mobiles à un degré de liberté**, soumis à un ressort, à un amortissement, à des variations de forme ou encore à une rotation imposée.

L’objectif du projet était de construire un **workflow CFD complet**, associant modélisation physique, paramétrage OpenFOAM, génération de maillages, simulation transitoire, couplage fluide-structure, puis exploitation scientifique des résultats par scripts Python.

---

## Contexte scientifique et problématique

Les écoulements autour de corps non profilés constituent un problème classique mais central en mécanique des fluides. Dans le cas d’un cylindre immergé dans un écoulement, la séparation de couche limite engendre un **détachement alterné de tourbillons**, produisant des fluctuations de portance et de traînée.

Lorsque le corps est mobile, ces efforts instationnaires peuvent exciter sa dynamique propre et provoquer des **vibrations induites par vortex**. Ce phénomène intervient dans de nombreuses applications d’ingénierie :

- structures offshore ;
- conduites et risers ;
- câbles ;
- échangeurs ;
- obstacles soumis à des écoulements industriels ;
- composants mécaniques exposés à des sollicitations fluides.

Ce projet s’intéresse donc à la transition entre :

1. l’analyse purement CFD d’un sillage tourbillonnaire ;
2. la mise en œuvre d’un couplage fluide-structure avec corps mobile ;
3. l’étude de l’influence de paramètres mécaniques, géométriques et cinématiques sur la réponse du système.

---

## Objectifs techniques du projet

Les principaux objectifs étaient de :

- simuler un écoulement incompressible transitoire autour d’un cylindre fixe ;
- extraire les coefficients de traînée et de portance ;
- déterminer le nombre de Strouhal à partir du signal de portance ;
- mettre en place un corps mobile à un degré de liberté dans OpenFOAM ;
- modéliser un système élastiquement monté avec ressort de rappel ;
- analyser les oscillations transverses associées aux vibrations induites par vortex ;
- étudier l’influence d’un amortissement structurel ;
- comparer plusieurs géométries : cylindre circulaire, demi-cylindre, ellipse et carré ;
- examiner l’effet d’une rotation imposée sur les efforts et la dynamique du solide ;
- générer des maillages simples et complexes à l’aide de `blockMesh` et `snappyHexMesh` ;
- développer une chaîne de post-traitement scientifique en Python.

---

## Environnement logiciel et outils mobilisés

Le projet a été développé principalement avec :

- **OpenFOAM** pour la simulation CFD ;
- **pimpleFoam** pour la résolution instationnaire incompressible ;
- **sixDoFRigidBodyMotion** pour la dynamique des corps mobiles ;
- **maillages dynamiques** pour accompagner le déplacement du solide ;
- **blockMesh** pour les géométries simples ;
- **snappyHexMesh** pour les obstacles complexes ou importés en STL ;
- **Python**, **NumPy**, **SciPy**, **Pandas** et **Matplotlib** pour le post-traitement ;
- **Gnuplot** pour certaines visualisations et vérifications rapides.

---

## Organisation générale des cas étudiés

Le projet repose sur sept configurations complémentaires :

### 1. Cylindre circulaire fixe

Cas de référence destiné à :

- analyser la structure du sillage ;
- calculer les coefficients aérodynamiques ;
- déterminer le nombre de Strouhal.

### 2. Cylindre circulaire mobile à un degré de liberté

Le cylindre est libre de se déplacer suivant la direction transverse, avec un ressort de rappel. Cette configuration permet d’étudier la réponse dynamique et les oscillations induites par l’écoulement.

### 3. Cylindre mobile avec amortissement

Le modèle précédent est enrichi par un amortissement mécanique afin d’évaluer l’effet de la dissipation sur l’amplitude vibratoire.

### 4. Demi-cylindre mobile

Cette configuration permet d’examiner l’impact d’une géométrie dissymétrique sur les efforts hydrodynamiques et la réponse structurelle.

### 5. Cylindre elliptique mobile

L’étude porte ici sur l’influence d’une géométrie allongée. Le maillage est généré à partir d’une géométrie STL avec `snappyHexMesh`.

### 6. Cylindre carré mobile

Cette variante introduit des arêtes vives et permet d’étudier un sillage fortement influencé par la géométrie de l’obstacle.

### 7. Cylindre mobile en rotation

Une vitesse angulaire est imposée à la paroi du cylindre afin d’étudier l’impact de la rotation sur les efforts hydrodynamiques et la dynamique du système.

---

## Simulation de l’écoulement autour d’un cylindre fixe

La première étape du projet consiste à résoudre l’écoulement incompressible transitoire autour d’un cylindre circulaire fixe.

Le cas permet de mettre en place les éléments fondamentaux du workflow :

- définition du domaine fluide ;
- initialisation des champs de vitesse et de pression ;
- imposition d’une vitesse d’entrée ;
- condition de sortie adaptée ;
- paroi solide sur le cylindre ;
- résolution temporelle avec `pimpleFoam`.

Le fluide est considéré newtonien, avec une viscosité cinématique typique de l’ordre de :

```text
ν = 1 × 10⁻⁵ m²/s
````

Le diamètre caractéristique est de l’ordre de `10⁻³ m`, pour des vitesses d’entrée typiquement comprises entre `1` et `2 m/s` selon les cas étudiés.

---

## Résolution transitoire avec OpenFOAM

La résolution repose sur le solveur `pimpleFoam`, bien adapté aux écoulements incompressibles instationnaires. Le pas de temps initial est choisi très fin afin de bien capturer les phénomènes transitoires.

Un contrôle dynamique du pas de temps est utilisé avec :

```text
maxCo = 0.4
```

Cette contrainte sur le nombre de Courant permet de conserver une bonne stabilité numérique tout en adaptant la progression temporelle du calcul.

---

## Calcul des coefficients de traînée et de portance

Le calcul des efforts hydrodynamiques est automatisé avec la fonction `forceCoeffs` d’OpenFOAM.

Les deux grandeurs principales suivies sont :

* le coefficient de traînée `Cd` ;
* le coefficient de portance `Cl`.

L’analyse temporelle de ces coefficients permet de :

* vérifier l’établissement du régime périodique ;
* visualiser la signature du détachement tourbillonnaire ;
* comparer les réponses entre différentes géométries ou configurations dynamiques.

Des portraits de phase `Cl/Cd` sont également construits pour analyser la dynamique aérodynamique globale du système.

---

## Détachement tourbillonnaire et nombre de Strouhal

Le détachement alterné des tourbillons derrière le cylindre génère une oscillation périodique du coefficient de portance.

Un script Python dédié a été développé afin de :

* lire les données de `Cl` ;
* détecter les maxima successifs ;
* estimer la période caractéristique ;
* déterminer la fréquence de détachement ;
* calculer le nombre de Strouhal.

Cette approche permet d’extraire une grandeur adimensionnelle essentielle à la caractérisation du sillage :

```text
St = fD / U
```

où :

* `f` est la fréquence de détachement ;
* `D` le diamètre caractéristique ;
* `U` la vitesse d’entrée.

---

## Passage à l’interaction fluide-structure

Après la validation du cas fixe, le projet évolue vers la simulation d’un cylindre mobile à un degré de liberté.

Le mouvement du solide est gouverné par la dynamique du corps rigide et par les efforts transmis par le fluide. Le déplacement est contraint selon l’axe transverse, afin de reproduire une configuration typique d’étude des vibrations induites par vortex.

Cette étape introduit un véritable **couplage entre l’écoulement et la dynamique structurelle**.

---

## Cylindre mobile à un degré de liberté

Le cylindre est modélisé comme un corps rigide monté sur ressort. Sa position varie selon une seule direction, tandis que les autres degrés de liberté sont bloqués.

Le module `sixDoFRigidBodyMotion` est utilisé pour :

* prendre en compte la masse du solide ;
* intégrer le mouvement ;
* appliquer les efforts hydrodynamiques calculés par le fluide ;
* mettre à jour la position du corps dans le temps.

L’intégration temporelle du mouvement repose sur un schéma de type **Newmark**.

---

## Ressort de rappel et paramètres réduits

Le système élastiquement monté est caractérisé à partir de grandeurs adimensionnelles permettant de comparer les comportements dynamiques :

* rapport de masse `M*` ;
* vitesse réduite `U*` ;
* amortissement `ζ`.

Plusieurs configurations sont étudiées, avec par exemple :

```text
M* = 10
U* = 5, 6, 10 ou 20 selon les cas
ζ = 0.01 pour le cas amorti
```

Ces paramètres sont essentiels pour analyser l’entrée ou non du système dans des régimes vibratoires significatifs.

---

## Maillage dynamique

Le déplacement du cylindre exige un maillage capable de se déformer au cours du calcul.

Le projet met ainsi en œuvre des **maillages dynamiques**, permettant de :

* conserver une représentation correcte de l’obstacle mobile ;
* transmettre les variations de position au domaine fluide ;
* maintenir une qualité de maillage suffisante malgré les déplacements.

Cette partie constitue un point central du projet, car la robustesse du calcul FSI dépend directement de la stabilité de la déformation du maillage.

---

## Étude des vibrations induites par vortex

L’analyse du cylindre mobile permet de suivre :

* le déplacement transverse du centre de masse ;
* l’évolution de l’amplitude vibratoire ;
* la relation entre les efforts hydrodynamiques et la réponse mécanique ;
* les modifications du sillage induites par le mouvement du solide.

Le projet met ainsi en évidence le mécanisme de **vortex-induced vibrations**, dans lequel le détachement tourbillonnaire et la fréquence propre du système peuvent interagir.

---

## Influence de l’amortissement

Un cas spécifique introduit un amortissement structurel afin d’observer son rôle sur la dynamique du cylindre.

L’étude permet d’analyser :

* la réduction éventuelle des amplitudes vibratoires ;
* l’évolution temporelle plus ou moins dissipative du mouvement ;
* la modification de la réponse sous excitation fluide.

Cette comparaison enrichit le projet en intégrant une dimension mécanique supplémentaire au couplage fluide-structure.

---

## Influence de la géométrie sur la réponse dynamique

Le projet ne se limite pas au cylindre circulaire. Plusieurs géométries sont étudiées afin de comparer leur comportement sous écoulement et leur réponse structurelle.

### Demi-cylindre

La géométrie dissymétrique modifie la distribution des pressions, l’organisation du sillage et la réponse de portance.

### Cylindre elliptique

L’allongement géométrique influence la séparation de l’écoulement et la fréquence des structures tourbillonnaires.

### Cylindre carré

Les arêtes vives imposent des points de séparation plus marqués et génèrent une dynamique de sillage différente de celle du cylindre circulaire.

Cette approche comparative donne au projet une dimension plus large qu’un simple benchmark, en montrant la capacité à explorer l’effet de la forme sur un comportement fluide-structure.

---

## Cas du cylindre en rotation

Le projet comprend également une configuration de cylindre mobile soumis à une rotation imposée.

La paroi est modélisée comme une surface tournante, afin d’évaluer :

* l’effet de la rotation sur les efforts aérodynamiques ;
* l’évolution de `Cd` et `Cl` ;
* la modification du sillage ;
* l’impact sur le mouvement transverse du corps.

Cette configuration permet d’étudier un problème plus riche, combinant simultanément :

* translation du corps ;
* rotation imposée ;
* écoulement instationnaire ;
* interaction fluide-structure.

---

## Génération de maillage : blockMesh et snappyHexMesh

La stratégie de maillage est adaptée à la complexité géométrique des cas.

### `blockMesh`

Utilisé pour les configurations simples, il permet de construire des domaines structurés et contrôlés.

### `snappyHexMesh`

Mobilisé pour les géométries plus complexes, notamment :

* cylindre elliptique ;
* obstacles issus de fichiers STL ;
* formes nécessitant une capture géométrique plus fine.

Cette double approche montre la maîtrise de différents outils de génération de maillage dans OpenFOAM.

---

## Post-traitement Python et exploitation des résultats

Une chaîne de post-traitement scientifique a été développée afin de traiter automatiquement les résultats issus des simulations.

Les scripts Python permettent notamment de :

* lire les sorties `forceCoeffs` ;
* extraire `Cd` et `Cl` ;
* tracer leurs évolutions temporelles ;
* construire des diagrammes `Cl/Cd` ;
* détecter les pics de portance ;
* calculer une fréquence de détachement ;
* estimer le nombre de Strouhal ;
* suivre le mouvement du centre de masse ;
* analyser la réponse dynamique du solide.

Cette partie renforce fortement la dimension calcul scientifique du projet et montre une capacité à créer des outils d’analyse au-delà de l’utilisation brute du solveur.

---

## Comparaison des configurations étudiées

L’un des intérêts majeurs du projet est sa dimension comparative. Les différents cas permettent d’examiner l’effet :

* de la mobilité du solide ;
* de l’amortissement ;
* de la géométrie ;
* de la rotation ;
* des paramètres réduits ;
* du couplage entre effort fluide et déplacement structurel.

Le projet permet ainsi de croiser :

* champs d’écoulement ;
* efforts hydrodynamiques ;
* oscillations du solide ;
* signatures fréquentielles ;
* influence de la topologie de l’obstacle.

---

## Validation physique et cohérence des résultats

La cohérence physique est vérifiée à plusieurs niveaux :

* apparition d’un sillage tourbillonnaire derrière le cylindre fixe ;
* comportement oscillatoire de `Cl` ;
* extraction d’une fréquence caractéristique ;
* déplacement transverse cohérent pour les cas mobiles ;
* effet perceptible de l’amortissement ;
* modification qualitative de la réponse selon la géométrie ;
* évolution des efforts dans le cas du cylindre en rotation.

L’objectif n’est pas uniquement de produire des visualisations, mais d’interpréter conjointement les grandeurs aérodynamiques, les paramètres dynamiques et les résultats de post-traitement.

---

## Difficultés techniques rencontrées

Ce projet soulève plusieurs difficultés numériques et méthodologiques :

* choix d’un pas de temps suffisamment fin ;
* stabilité du calcul transitoire ;
* qualité et robustesse du maillage dynamique ;
* paramétrage de `sixDoFRigidBodyMotion` ;
* cohérence entre les conditions mécaniques et la réponse attendue ;
* génération de maillages adaptés aux géométries complexes ;
* organisation et automatisation du post-traitement.

Ces difficultés ont nécessité une approche progressive, en construisant les cas du plus simple au plus complexe.

---

## Compétences techniques mises en avant

Ce projet démontre une maîtrise de plusieurs blocs de compétences avancés :

* CFD transitoire sous OpenFOAM ;
* utilisation du solveur `pimpleFoam` ;
* calcul des coefficients aérodynamiques ;
* analyse du nombre de Strouhal ;
* interaction fluide-structure ;
* vibrations induites par vortex ;
* dynamique de corps rigides ;
* `sixDoFRigidBodyMotion` ;
* ressort, amortissement et paramètres réduits ;
* maillage dynamique ;
* génération de maillages avec `blockMesh` et `snappyHexMesh` ;
* exploitation de géométries STL ;
* post-traitement Python ;
* analyse comparative de plusieurs configurations ;
* interprétation physique des simulations.

---

## Ce que ce projet démontre sur mon profil d’ingénieur

Ce projet illustre ma capacité à conduire une étude CFD avancée de bout en bout :

* comprendre un problème physique ;
* construire un cas numérique cohérent ;
* définir les paramètres de simulation ;
* générer et contrôler les maillages ;
* exploiter les outils avancés d’OpenFOAM ;
* mettre en œuvre un couplage fluide-structure ;
* développer mes propres scripts d’analyse ;
* comparer plusieurs variantes physiques ;
* interpréter les résultats avec un regard d’ingénieur.

Il montre également mon intérêt pour les problématiques à l’interface entre **mécanique des fluides, simulation numérique, dynamique des structures et calcul scientifique**.

---

## Conclusion

Ce projet est l’un des travaux les plus complets de mon portfolio. Il combine simulation CFD, interaction fluide-structure, maillage dynamique, analyse de vibrations induites par vortex, étude paramétrique et post-traitement scientifique.

Au-delà de la diversité des cas étudiés, il met surtout en évidence une capacité à construire une démarche numérique progressive, robuste et interprétable, depuis un cas canonique de cylindre fixe jusqu’à des configurations multiphysiques avancées impliquant mouvement, amortissement, géométrie complexe et rotation.
