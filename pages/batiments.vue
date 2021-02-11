<template>
    <div class="container px-5 mx-auto text-gray-100 body-font">
        <div class="flex flex-col">
            <div class="h-1 bg-gray-200 rounded overflow-hidden">
                <div class="w-48 h-full bg-orange-500"></div>
            </div>
            <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12 bg-gray-900 rounded-br-lg rounded-bl-lg">
                <h1 class="sm:w-2/5 text-white font-medium title-font text-3xl mb-2 sm:mb-0 pl-4">Les Bâtiments</h1>
                <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Chaque emplacement de construction permet de construire différents bâtiments apportant bonus et ressources à la faction. Un bâtiment peut être construit en début de tour par indication du chef de faction, et à condition d’avoir les ressources suffisantes.</p>
            </div>
            </div>
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div class="rounded-lg h-auto w-auto overflow-hidden">
                <img alt="content" src="~assets/batiments/ecurie.png">
                </div>
                <div class="bg-gray-900 mt-4 px-4 pb-4 pt-1 rounded-lg">
                <h2 class="text-xl font-medium text-indigo-400 mt-5">Ecurie</h2>
                <p class="text-base leading-relaxed mt-2">permet un déplacement rapide coûtant 300 points de
ressources par joueur, et permettant le déplacement jusqu’à 3 territoires en
partant de l’écurie.</p>
                <p class="text-indigo-500 inline-flex items-center mt-3">Prix : 1800</p>
                </div>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div class="rounded-lg h-auto w-auto overflow-hidden">
                <img alt="content" src="~assets/batiments/comptoir.png">
                </div>
                <div class="bg-gray-900 mt-4 px-4 pb-4 pt-1 rounded-lg">
                <h2 class="text-xl font-medium text-indigo-400 mt-5">Comptoir Commercial</h2>
                <p class="text-base leading-relaxed mt-2">Permet l’envoi de ressource à une autre factions, même si elle ne possède pas ce bâtiment. 
                    Le transfert d’argent sera effectif à partir du prochain tour.</p>
                <p class="text-indigo-500 inline-flex items-center mt-3">Prix : 500</p>
                 </div>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div class="rounded-lg h-auto w-auto overflow-hidden">
                <img alt="content" src="~assets/batiments/ferme.png">
                </div>
                <div class="bg-gray-900 mt-4 px-4 pb-4 pt-1 rounded-lg">
                <h2 class="text-xl font-medium text-indigo-400 mt-5">Ferme</h2>
                <p class="text-base leading-relaxed mt-2">Rapporte 300 de ressources par tour à la faction. Tous les
5 tours, après sa construction, la ferme s'améliore et rapporte 100 de plus. Elle
ne peut pas s’améliorer plus de deux fois, et ne rapporta pas plus de 500 au
maximum. Un système de niveau similaire en jeu se retrouve présent. (lvl 1
puis, lvl 2, puis lvl 3)</p>
                <p class="text-indigo-500 inline-flex items-center mt-3">Prix : 1500</p>
                </div>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div class="rounded-lg h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full" src="~assets/batiments/camp.png">
                </div>
                <div class="bg-gray-900 mt-4 px-4 pb-4 pt-1 rounded-lg">
                <h2 class="text-xl font-medium text-indigo-400 mt-5">Camp de Mercenaire</h2>
                <p class="text-base leading-relaxed mt-2">permet le recrutement de joueur
mercenaire. Vous trouverez les spécificités de ces joueurs dans la Section
Répartition des factions et la section IV. Rôle des joueurs.
Le prix du mercenaire est fixé par la modération selon le niveau des joueurs. 4 tranches de niveau seront faites, 
et les joueurs se verront octroyer un niveau lorsque le moment se présentera. Voici les niveaux : 
A : 1500, B : 1000, C : 650 et D : 300</p>
                <p class="text-indigo-500 inline-flex items-center mt-3">Prix : 800</p>
                </div>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div class="rounded-lg h-auto w-auto overflow-hidden">
                <img alt="content" src="~assets/batiments/prison.jpg">
                </div>
                <div class="bg-gray-900 mt-4 px-4 pb-4 pt-1 rounded-lg">
                <h2 class="text-xl font-medium text-indigo-400 mt-5">La Prison</h2>
                <p class="text-base leading-relaxed mt-2">permet d’emprisonner un joueur adverse à la suite d’une
bataille que vous remportez, en dépensant 300 points de ressources. Le ou les
prisonniers seront sous le contrôle d’un ou plusieurs joueurs de sa faction
ennemie. Un ou deux prisonniers peuvent être fait par bataille, et à chaque
tour. Si l'armée qui détient le prisonnier ne possède qu'un seul joueur, le prisonnier peut
profiter du manque d'effectif pour tenter une évasion au cours d'un 1v1, s’il
le perd, il augmente sa durée d'emprisonnement de deux tours. Le joueur
peut aussi être libéré par le biais d'une rançon, elle doit soit être transférée
par le comptoir commercial. Si le joueur est libéré grâce une demande de
rançon, il regagnera directement une forteresse de son empire sans avoir de
malus. De plus, une prison déverrouille un maximum de deux prisonniers. 
Points sur les prisonniers, emprisonnement pour une durée de 2 tours, et le tour suivant, les joueurs libérés peuvent se déployer avec 30% de handicap qui se dissiperont au tour suivant. </p>
                <p class="text-indigo-500 inline-flex items-center mt-3">Prix : 2000</p>
                </div>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div class="rounded-lg h-auto w-auto overflow-hidden">
                <img alt="content" src="~assets/batiments/maison.png">
                </div>
                <div class="bg-gray-900 mt-4 px-4 pb-4 pt-1 rounded-lg">
                <h2 class="text-xl font-medium text-indigo-400 mt-5">Lieu de guérison</h2>
                <p class="text-base leading-relaxed mt-2">permet d’enlever le handicap des joueurs qui
se situent à l’emplacement de ce bâtiment. Enlever un handicap a un coût,
150 par joueurs, et cette action ne nécessite pas de rester un tour sur le
territoire, elle peut être faite si le joueur se trouve dessus à la fin d’un tour
ou au début d’un tour ;</p>
                <p class="text-indigo-500 inline-flex items-center mt-3">Prix : 1600</p>
                </div>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div class="rounded-lg h-auto w-auto overflow-hidden">
                <img alt="content" src="~assets/batiments/mur.png">
                </div>
                <div class="bg-gray-900 mt-4 px-4 pb-4 pt-1 rounded-lg">
                <h2 class="text-xl font-medium text-indigo-400 mt-5">Un Mur</h2>
                <p class="text-base leading-relaxed mt-2">permet de bloquer les déplacements offensifs de factions ennemies, mais n’empêche des déplacements de la faction ayant construit le mur.</p>
                <p class="text-indigo-500 inline-flex items-center mt-3">Prix : 4000</p>
                </div>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div class="rounded-lg h-auto w-auto overflow-hidden">
                <img alt="content" src="~assets/batiments/belier.png">
                </div>
                <div class="bg-gray-900 mt-4 px-4 pb-4 pt-1 rounded-lg">
                <h2 class="text-xl font-medium text-indigo-400 mt-5">Bélier</h2>
                <p class="text-base leading-relaxed mt-2">Permet de détruire un mur. Il est indiqué comme le pseudo d’un joueur sur la carte vous devez l'enmener vers le mur. Une fois dans la région du mur, il faudra attendre 1 tour pour le détruire et est détruit une fois qu’il détruit un mur.</p>
                <p class="text-indigo-500 inline-flex items-center mt-3">Prix : 3000</p>
                </div>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div class="rounded-lg h-auto w-auto overflow-hidden">
                <img alt="content" src="~assets/batiments/port.png">
                </div>
                <div class="bg-gray-900 mt-4 px-4 pb-4 pt-1 rounded-lg">
                <h2 class="text-xl font-medium text-indigo-400 mt-5">Port Amélioré</h2>
                <p class="text-base leading-relaxed mt-2">Permet un déplacement rapide coûtant 200 points de ressources par joueur, et permettant le déplacement jusqu’à 2 territoires en partant du port.</p>
                <p class="text-indigo-500 inline-flex items-center mt-3">Prix : 1400</p>
                </div>
            </div>

        </div>
    </div>  
</template>

<script>
export default {

}
</script>

<style>

</style>