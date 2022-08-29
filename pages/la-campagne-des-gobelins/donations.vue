<template>
  <div class="h-screen md:flex">
	<div
		class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-green-600 to-green-700 i justify-around items-center hidden">
		<div>
			<h1 class="text-white font-bold text-4xl">La Campagne des Gobelins</h1>
			<p class="text-white mt-1">Créé par Utharlok</p>
		</div>
		<div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
	</div>
	<div class="flex md:w-1/2 justify-center py-10 items-center bg-gradient-to-tr from-teal-700 to-teal-600">
  <div>
    <h2 class="text-white font-bold text-2xl mb-1">Pour soutenir tout le travail fourni</h2>
    <p class="text-sm font-normal text-gray-200 mb-7">1 an de préparation</p>
    <a href="https://www.youtube.com/user/Silmarillion321" class="block w-full bg-green-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2 text-center">La Chaîne du Gobelin (Youtube)</a>
    <a href="https://www.twitch.tv/utharlok" class="block w-full bg-green-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2 text-center">Utharlok (Twitch)</a>
  </div>
	</div>
</div>
</template>

<script>
export default {
  layout: "gobelin",
    head() {
    return {
      title: "La Campagne des Gobelins",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "La Campagne des Gobelins est une nouvelle forme d’événement pour le STR BFME2, L'Avènement du Roi Sorcier. Basée sur des mécaniques empruntées à la fois aux jeux de plateau et aux jeux de cartes, la Campagne se veut un outil ludique permettant de modifier en profondeur le Gamplay des joueurs, et ainsi avoir l'impression de jouer à un tout nouveau jeu !",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Utharlok, La campagne des gobelins, gobelins",
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "La Campagne des Gobelins",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "La Campagne des Gobelins est une nouvelle forme d’événement pour le STR BFME2, L'Avènement du Roi Sorcier. Basée sur des mécaniques empruntées à la fois aux jeux de plateau et aux jeux de cartes, la Campagne se veut un outil ludique permettant de modifier en profondeur le Gamplay des joueurs, et ainsi avoir l'impression de jouer à un tout nouveau jeu !",
        },
        {
          hid: "twitter:creator",
          name: "twitter:creator",
          content: "@Elrohir_BFME",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "https://events.laterredumilieu.fr/img/CdG.jpg",
        },
        {
          hid: "image",
          property: "image",
          content: "https://events.laterredumilieu.fr/img/CdG.jpg",
        },
        {
          hid: "og:title",
          name: "og:title",
          content: "La Campagne des Gobelins",
        },
        { hid: "og:type", name: "og:type", content: "website" },
        {
          hid: "og:url",
          name: "og:url",
          content: "https://events.laterredumilieu.fr/la-campagne-des-gobelins",
        },
        {
          hid: "og:image",
          name: "og:image",
          content: "https://events.laterredumilieu.fr/img/CdG.jpg",
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "La Campagne des Gobelins est une nouvelle forme d’événement pour le STR BFME2, L'Avènement du Roi Sorcier. Basée sur des mécaniques empruntées à la fois aux jeux de plateau et aux jeux de cartes, la Campagne se veut un outil ludique permettant de modifier en profondeur le Gamplay des joueurs, et ainsi avoir l'impression de jouer à un tout nouveau jeu !",
        },
      ],
    };
  },
}
</script>
<style>

</style>