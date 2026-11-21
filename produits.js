/* Liste des articles du site. Ce fichier est écrit par l'outil local (_admin-local).
   Vous pouvez aussi le modifier à la main : une ligne = un article.
   cat : tunique | robe | foulard | hijab      dispo : true (disponible) ou false (vendu) */
const PRODUITS = [
    { nom:"Tunique rose à imprimé",            cat:"tunique",  prix:250000, photo:"tunique-rose.jpg",  dispo:true, desc:"Tunique longue à fleurs roses et ivoire, col chemise, manches longues, avec un détail brillant sur le devant." },
    { nom:"Robe longue marron avec ceinture",  cat:"robe",     prix:250000, photo:"robe-marron.jpg",   dispo:true, desc:"Robe longue à imprimé brun et caramel, ceinture à nouer, manches bouffantes et bas à volants." },
    { nom:"Robe léopard évasée",               cat:"robe",     prix:250000, photo:"robe-leopard.jpg",  dispo:true, desc:"Robe mi-longue évasée à motif léopard, col à nouer, manches longues. La taille est marquée." },
    { nom:"Tunique beige et noire",            cat:"tunique",  prix:250000, photo:"tunique-beige.jpg", dispo:true, desc:"Tunique ample à motifs beige sur fond noir, manches longues. Facile à porter toute la journée." },
    { nom:"Tunique bleu-gris",                 cat:"tunique",  prix:250000, photo:"tunique-bleu.jpg",  dispo:true, desc:"Tunique longue bleu-gris à motifs fondus, col chemise. Légère, agréable quand il fait chaud." },
    { nom:"Robe longue blanche avec ceinture", cat:"robe",     prix:250000, photo:"robe-blanche.jpg",  dispo:true, desc:"Robe longue légère à rayures noires et touches caramel, ceinture à nouer, bas à volants." },
    { nom:"Ensemble camel chemise et pantalon",cat:"robe",     prix:280000, photo:"ensemble-beige.jpg",dispo:true, desc:"Deux pièces couleur camel : une chemise aux manches retroussées et un pantalon large." },
    { nom:"Voile rose poudré en dentelle",     cat:"foulard",  prix:55000,  photo:"hijab-dentelle-rose.jpg", dispo:true, desc:"Grand voile rose poudré, bordé de dentelle brodée et de fines chaînettes." },
    { nom:"Voile gris en dentelle",            cat:"foulard",  prix:55000,  photo:"hijab-dentelle-gris.jpg", dispo:true, desc:"Grand voile gris, bordé de dentelle noire. Léger et agréable à porter." },
    { nom:"Hijab prune à strass",              cat:"hijab",    prix:60000,  photo:"hijab-prune.jpg",   dispo:true, desc:"Hijab prêt à enfiler, couleur prune, avec des strass et des perles qui brillent sur toute la longueur." },
    { nom:"Hijab bordeaux avec collier perlé", cat:"hijab",    prix:60000,  photo:"hijab-bordeaux.jpg",dispo:true, desc:"Hijab prêt à enfiler, bordeaux, avec un petit collier de perles et des motifs brillants. Tissu souple." },
    { nom:"Hijab beige rosé à strass",         cat:"hijab",    prix:60000,  photo:"hijab-beige.jpg",   dispo:true, desc:"Hijab beige rosé décoré de losanges brillants. Il s'enfile en une seconde." },
    { nom:"Hijab brique à chaînettes",         cat:"hijab",    prix:65000,  photo:"hijab-brique.jpg",  dispo:true, desc:"Hijab couleur brique en mousseline, avec des chaînettes et des petits pendentifs perlés sur le bord." },
    { nom:"Hijab mauve à col brillant",        cat:"hijab",    prix:55000,  photo:"hijab-mauve.jpg",   dispo:true, desc:"Hijab mauve à col, avec des strass qui scintillent dans le bas." }
];
