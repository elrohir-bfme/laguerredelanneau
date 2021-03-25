<template>
    <div class="container px-5 mx-auto text-gray-100 body-font">
        <div class="flex flex-col">
            <div class="h-1 bg-gray-200 rounded overflow-hidden">
                <div class="w-48 h-full bg-orange-500"></div>
            </div>
            <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12 bg-gray-900 rounded-br-lg rounded-bl-lg">
                <h1 class="sm:w-2/5 text-white font-medium title-font text-3xl mb-2 sm:mb-0 pl-4 underline">Les Bâtiments</h1>
                <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Chaque emplacement de construction permet de construire différents bâtiments apportant bonus et ressources à la faction. Un bâtiment peut être construit en début de tour par indication du chef de faction, et à condition d'avoir les ressources suffisantes.</p>
            </div>
		</div>
		<div class="flex flex-row flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
			<template v-for="(building, index) in buildings">
				<BatimentsBuilding
					:building="building"
					v-bind:key="index"
				/>
			</template>
        </div>
    </div>
</template>

<script>
export default {
	head: {
		title: "Bâtiments - La Guerre de l'Anneau",
  	},
	data() {
		return {
			buildings: [
				{
					name: "Écurie",
					img: "/img/pages/batiments/ecurie.png",
					description: "Permet un déplacement rapide coûtant 300 points de ressources par joueur, et permettant le déplacement jusqu'à 3 territoires en partant de l'écurie qui leur appartient bien.",
					price: 1800,
				},
				{
					name: "Comptoir Commercial",
					img: "/img/pages/batiments/comptoir.png",
					description: "Permet l'envoi de ressource à une autre factions, même si elle ne possède pas ce bâtiment. Le transfert d'argent sera effectif à partir du prochain tour.",
					price: 500,
				},
				{
					name: "Ferme",
					img: "/img/pages/batiments/ferme.png",
					description: "Rapporte 300 de ressources par tour à la faction. Tous les 5 tours, après sa construction, la ferme s'améliore et rapporte 100 de plus. Elle ne peut pas s'améliorer plus de deux fois, et ne rapporta pas plus de 500 au maximum. Un système de niveau similaire en jeu se retrouve présent. (lvl 1 puis, lvl 2, puis lvl 3)",
					price: 1500,
				},
				{
					name: "Camp de Mercenaires",
					img: "/img/pages/batiments/camp.png",
					description: "permet le recrutement de joueur mercenaire. Vous trouverez les spécificités de ces joueurs dans la Section Répartition des factions et la section IV. Rôle des joueurs. Le prix du mercenaire est fixé par la modération selon le niveau des joueurs. 4 tranches de niveau seront faites, et les joueurs se verront octroyer un niveau lorsque le moment se présentera. Voici les niveaux : A : 1500, B : 1000, C : 650 et D : 300",
					price: 800,
				},
				{
					name: "Prison",
					img: "/img/pages/batiments/prison.jpg",
					description: "Les joueurs qui ont combattu et perdu peuvent être fait prisonniers, les joueurs avec un handicap, se trouvant sur la même map, peuvent aussi être capturés. Cela coutera 300 points de ressources. Le ou les prisonniers seront sous le contrôle d'un ou plusieurs joueurs de sa faction ennemie. Un ou deux prisonniers peuvent être fait par bataille, et à chaque tour. Si l'armée qui détient le prisonnier ne possède qu'un seul joueur, le prisonnier peut profiter du manque d'effectif pour tenter une évasion au cours d'un 1v1, s'il le perd, il augmente sa durée d'emprisonnement de deux tours. Le joueur peut aussi être libéré par le biais d'une rançon, elle doit soit être transférée par le comptoir commercial. Si le joueur est libéré grâce une demande de rançon, il regagnera directement une forteresse de son empire sans avoir de malus. De plus, une prison déverrouille un maximum de deux prisonniers. Points sur les prisonniers, emprisonnement pour une durée de 2 tours, et le tour suivant, les joueurs libérés peuvent se déployer avec 30% de handicap qui se dissiperont au tour suivant.",
					price: 2000,
				},
				{
					name: "Maison de guérison",
					img: "/img/pages/batiments/maison.png",
					description: "permet d'enlever le handicap des joueurs qui se situent à l'emplacement de ce bâtiment. Enlever un handicap a un coût, 150 par joueurs, et cette action ne nécessite pas de rester un tour sur le territoire, elle peut être faite si le joueur se trouve dessus à la fin d'un tour ou au début d'un tour",
					price: 1600,
				},
				{
					name: "Mur",
					img: "/img/pages/batiments/mur.png",
					description: "permet de bloquer les déplacements offensifs de factions ennemies, mais n'empêche des déplacements de la faction ayant construit le mur.",
					price: 4000,
				},
				{
					name: "Bélier",
					img: "/img/pages/batiments/belier.png",
					description: "Permet de détruire un mur. Il est indiqué comme le pseudo d'un joueur sur la carte vous devez l'enmener vers le mur. Une fois dans la région du mur, il faudra attendre 1 tour pour le détruire et est détruit une fois qu'il détruit un mur.",
					price: 3000,
				},
				{
					name: "Port Amélioré",
					img: "/img/pages/batiments/port.png",
					description: "Permet un déplacement rapide coûtant 200 points de ressources par joueur, et permettant le déplacement jusqu'à 2 territoires en partant du port.",
					price: 1400,
				},
			],
		};
	},
}
</script>

<style>

</style>
