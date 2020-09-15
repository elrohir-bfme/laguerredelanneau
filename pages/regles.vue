<template>
  <div class="container mx-auto">
      <div role="alert" id="regle">
  <div class="bg-green-500 text-white font-bold rounded-t px-4 py-2">
    Règles de l'event :
  </div>
  <div class="border border-t-2 border-green-400 rounded-b bg-green-100 px-4 py-3 text-green-700">
	<ul class="list-disc px-4 py-2">
	<li class="font-semibold mr-2 text-left flex-auto">Votre match doit être joué dans la semaine, sans quoi vos coéquipiers devront se battre sans vous, ou si vous êtes seul, le territoire sera donné à votre adversaire.</li>
	<li class="font-semibold mr-2 text-left flex-auto">Les batailles se dérouleront constamment avec 1000 ressources de départ et des points de commandement x2 ainsi que l'anneau d'activé.</li>
	<li class="font-semibold mr-2 text-left flex-auto">Le choix des chefs de faction se fera par un vote dans cette même faction.</li>
	<li class="font-semibold mr-2 text-left flex-auto">Si vous tombez seul contre trois joueurs, vous devrez jouer le match sans allié en 1vs3.</li>
	<li class="font-semibold mr-2 text-left flex-auto">Si vous mourez, vous redémarrez à votre capitale de faction, avec un handicap de 30% qui est retiré au bout d'un tour.</li>
	<br>
	<li class="font-semibold mr-2 text-left flex-auto">Une fois votre faction choisie, vous ne pouvez la changer. Si vous le faite dans le but de voir les channels des autres factions, vous serez sanctionné!</li>
	</ul>
  </div>
</div>
<br><br>
<div role="alert" id="hero">
  <div class="bg-pink-500 text-white font-bold rounded-t px-4 py-2">
    Les Héros crées :
  </div>
  <div class="border border-t-2 border-pink-400 rounded-b bg-pink-100 px-4 py-3 text-pink-700">
	<ul class="list-disc px-4 py-2">
	<li class="font-semibold mr-2 text-left flex-auto">Aucune triche n'est permise sur les héros créés; leurs pouvoirs et compétences doivent être normaux.</li>
	<li class="font-semibold mr-2 text-left flex-auto">Le prix des héros ne doit pas être supérieur à 2500 ressources.</li>
	<li class="font-semibold mr-2 text-left flex-auto">Vous n'avez droit qu'à un seul héros créé..</li>
	<li class="font-semibold mr-2 text-left flex-auto">Les chefs de faction ne peuvent avoir de héros créé.</li>
	</ul>
  </div>
</div>
<br><br>
<div role="alert" id="diplomatie">
  <div class="bg-indigo-500 text-white font-bold rounded-t px-4 py-2">
    Diplomatie : 
  </div>
  <div class="border border-t-2 border-indigo-400 rounded-b bg-indigo-100 px-4 py-3 text-indigo-700">
	<ul class="list-disc px-4 py-2">
		<li class="font-semibold mr-2 text-left flex-auto">Le chef de faction a la possibilité de sceller un pacte de non-agression avec une autre faction, actif 5 tours, rendant impossible les attaques entre ces deux factions.</li>
		<li class="font-semibold mr-2 text-left flex-auto">Les pactes de non-agression ne sont pas cumulables; ils doivent être espacés de 5 tours.</li>
	</ul>
  </div>
</div>
<br><br>
<div role="alert" id="diplomatie">
  <div class="bg-purple-500 text-white font-bold rounded-t px-4 py-2">
    Déplacement : 
  </div>
  <div class="border border-t-2 border-purple-400 rounded-b bg-purple-100 px-4 py-3 text-purple-700">
	<ul class="list-disc px-4 py-2">
	<li class="font-semibold mr-2 text-left flex-auto">Les tours de déplacements auront lieu chaque dimanche.</li>
	<li class="font-semibold mr-2 text-left flex-auto">Le chef de votre faction aura le dernier mot sur les déplacements que vous devrez effectuer.</li>
	<li class="font-semibold mr-2 text-left flex-auto">Les chefs de faction devront donner les déplacements des joueurs de leur faction à un Valar; Morgoth; ou Elrohir en MP chaque week-end.</li>
	<li class="font-semibold mr-2 text-left flex-auto">Les territoires vierges sont pris au bout d'un tour.</li>
	<li class="font-semibold mr-2 text-left flex-auto">Vous pouvez également respawn sur les forteresses conquises par votre faction.</li>
	<li class="font-semibold mr-2 text-left flex-auto">Les montagnes sans map ne sont pas traversables</li>
    <br><br>
	<li class="font-semibold mr-2 text-left flex-auto">Quand deux joueurs se déplacent sur les territoires où tout deux étaient anciennement positionné alors il y aura automatiquement un affrontement entre ces deux joueurs. La map sera définit par un pile ou face. (ex : un joueur de la porte noire part dans le marais des morts et celui du Gondor au marais des morts part à la porte noire, les deux s'affronterons)</li>
	<li class="font-semibold mr-2 text-left flex-auto">Lors de la prise simultané d'une forteresse neutre par deux factions, le combat se déroulera sur une map neutre en 4 vs4.</li>
	<li class="font-semibold mr-2 text-left flex-auto">Les territoires contrôlés peuvent permettre un déplacement de deux cases au lieu d'une, uniquement dans ces territoires contrôlés.</li>
	<li class="font-semibold mr-2 text-left flex-auto">Vous pouvez être autant de joueurs que vous le désirez sur un territoire mais si vous avez 4 ennemie en face de vous, vous ne serez que 4 à combattre, si vous perdez les vaincus respawn à la base et ce qui n'ont pas combattue batte en retraite dans un territoire adjacent leur appartenant. Si il n'y a pas de territoire adjacent, ils meurent également.</li>
	</ul>
  </div>
</div>
<br><br>
<div role="alert" id="diplomatie">
  <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
    Maps de forteresse : 
  </div>
  <div class="border border-t-2 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
	<ul class="list-disc px-4 py-2">
	<li class="font-semibold mr-2 text-left flex-auto">Il n'y a qu'une seule personne qui gère les portes et les catapultes des fortos, veiller à choisir le bon joueur pour cela.</li>
	</ul>
  </div>
</div>
<br><br>
<div role="alert" id="diplomatie">
  <div class="bg-blue-500 text-white font-bold rounded-t px-4 py-2">
    Bateaux ⛵ :  
  </div>
  <div class="border border-t-2 border-blue-400 rounded-b bg-blue-100 px-4 py-3 text-blue-700">
	<ul class="list-disc px-4 py-2">
	<li class="font-semibold mr-2 text-left flex-auto">Havres Gris --> Minhiriath  3 tours</li>
	<li class="font-semibold mr-2 text-left flex-auto">Havres Gris --> Dol Amroth  5 tours</li>
	<li class="font-semibold mr-2 text-left flex-auto">Minhiriath  --> Dol Amroth  4 tours</li>
	<li class="font-semibold mr-2 text-left flex-auto">Minhiriath  --> Umbar       5 tours</li>
	<li class="font-semibold mr-2 text-left flex-auto">Umbar --> Dol Amroth  2 tours</li>
	<li class="font-semibold mr-2 text-left flex-auto">Pelargir --> Umbar 2 tours</li>
	<li class="font-semibold mr-2 text-left flex-auto">Pelargir --> Tolfalas 1 tour</li>
	<li class="font-semibold mr-2 text-left flex-auto">Pelargir --> Dol Amroth 2 tours</li>
	<li class="font-semibold mr-2 text-left flex-auto">Pelargir --> Minhiriath 4 tours</li>
	<li class="font-semibold mr-2 text-left flex-auto">Pelargir --> Havres Gris 5 tour ( capitale Elfes )</li>
	<li class="font-semibold mr-2 text-left flex-auto">Tolfalas --> Dol Amroth 1 tour</li>
	</ul>
  </div>
</div>
<br><br>
<div role="alert" id="diplomatie">
  <div class="bg-yellow-900 text-white font-bold rounded-t px-4 py-2">
    Régles pour les Gobelins :  
  </div>
  <div class="border border-t-2 border-yellow-700 rounded-b bg-yellow-200 px-4 py-3 text-yellow-700">
	<ul class="list-disc px-4 py-2">
	<li class="font-semibold mr-2 text-left flex-auto">Ils peuvent dès le départ faire un déplacement vers Azanulbizar, Porte de la Moria et Caradhras ( SEULE LA FACTION DES GOBELINS Peuvent rentrer et sorti de la Moria par Caradhras</li>
	</ul>
  </div>
</div>
<br><br>
<div role="alert" id="diplomatie">
  <div class="bg-red-800 text-white font-bold rounded-t px-4 py-2">
    Régles pour le Mordor :  
  </div>
  <div class="border border-t-2 border-red-800 rounded-b bg-red-200 px-4 py-3 text-red-800">
	<ul class="list-disc px-4 py-2">
	<li class="font-semibold mr-2 text-left flex-auto">Vous pouvez vous aussi aller directement dès le premier tour aller à la Porte Noire, Nurn, Cirith Ungol ou Lithlad.</li>
	<li class="font-semibold mr-2 text-left flex-auto">Vous avez aussi la possibilité d'aller directement au Khand (SEULE LE MORDOR PEUT PASSER PAR LA MONTAGNE) depuis le Nurn (pas de déplacement vers le proche Harad )</li>
	<li class="font-semibold mr-2 text-left flex-auto">Mais si le Khand est prit par une autre faction cela empêchera le Mordor de passer par le Nurn -> Khand jusqu'à reprise de celui ci.</li>
	</ul>
  </div>
</div>
<br><br>
<div role="alert" id="faction">
  <div class="bg-gray-500 text-white font-bold rounded-t px-4 py-2">
    Choix de votre faction : 
  </div>
  <div class="border border-t-2 border-gray-400 rounded-b bg-gray-100 px-4 py-3 text-gray-700">
	<ul class="list-disc px-4 py-2">
	<li class="font-semibold mr-2 text-left flex-auto">Sur le Discord vous avez la possibilité de choisir entre le Rohan, Elfe, Gondor, Nain, Mordor, Isengard, Gobelin ou Angmar</li>
	</ul>
  </div>
</div>
<br><br>
<img src="~assets/faction.png" alt="" srcset="">
<br><br>
<div class="text-center">
	<a class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-6 border-b-4 border-blue-700 hover:border-blue-500 rounded"
	href="http://bit.ly/LaTerreduMilieu" target="_blank" rel="noopener noreferrer">Discord : voir channel événement 📅
	</a>
</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>