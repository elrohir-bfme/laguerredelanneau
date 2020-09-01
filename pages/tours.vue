<template>
<section class="text-gray-500 bg-gray-900 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="-my-8">
      <div v-for="(tour, name) in tours" :key="tour.index" class="py-8 flex flex-wrap md:flex-no-wrap border-b-2 border-gray-800">
        <div class="md:w-32 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="tracking-widest font-medium title-font text-white">TOUR {{name}}</span>
          <span class="mt-1 text-gray-600 text-sm">{{tour.date}}</span>
        </div>
        <div v-if="tour.matchs && tour.matchs.length > 0" class="flex flex-wrap -m-2">
              <div v-for="(match, name) in tour.matchs" :key="match.index" class="p-2 xl:flex-auto lg:w-1/2 md:w-1/2 flex-auto">
                <div class="relative h-full flex items-center border-gray-800 border p-4 rounded-lg">
                  <span class="absolute top-0 right-0 rounded-full m-1 h-6 w-6 flex items-center justify-center bg-gray-800 text-gray-500">{{name}}</span>

                  <img v-if="match.win == 1" alt="Rohan" class="w-12 h-12 object-cover object-center flex-shrink-0 rounded-full mr-4" src="~assets/factions/rohan.png">
                  <img v-else-if="match.win == 2" alt="Elfe" class="w-12 h-12 object-cover object-center flex-shrink-0 rounded-full mr-4" src="~assets/factions/elfe.png">
                  <img v-else-if="match.win == 3" alt="Homme" class="w-12 h-12 object-cover object-center flex-shrink-0 rounded-full mr-4" src="~assets/factions/gondor.png">
                  <img v-else-if="match.win == 4" alt="Nain" class="w-12 h-12 object-cover object-center flex-shrink-0 rounded-full mr-4" src="~assets/factions/nain.png">
                  <img v-else-if="match.win == 5" alt="Mordor" class="w-12 h-12 object-cover object-center flex-shrink-0 rounded-full mr-4" src="~assets/factions/mordor.png">
                  <img v-else-if="match.win == 6" alt="Isengard" class="w-12 h-12 object-cover object-center flex-shrink-0 rounded-full mr-4" src="~assets/factions/isengard.png">
                  <img v-else-if="match.win == 7" alt="Gobelin" class="w-12 h-12 object-cover object-center flex-shrink-0 rounded-full mr-4" src="~assets/factions/gobelin.png">
                  <img v-else alt="Angmar" class="w-12 h-12 object-cover object-center flex-shrink-0 rounded-full mr-4" src="~assets/factions/angmar.png">
                  
                  <div class="flex-grow">
                    <p class="text-white title-font font-medium text-center">{{match.map}}</p>
                    <p v-if="match.win == 1" class="text-gray-600 text-center">Gagnant: Rohan</p>
                    <p v-else-if="match.win == 2" class="text-gray-600 text-center">Gagnant: Elfe</p>
                    <p v-else-if="match.win == 3" class="text-gray-600 text-center">Gagnant: Gondor</p>
                    <p v-else-if="match.win == 4" class="text-gray-600 text-center">Gagnant: Nain</p>
                    <p v-else-if="match.win == 5" class="text-gray-600 text-center">Gagnant: Mordor</p>
                    <p v-else-if="match.win == 6" class="text-gray-600 text-center">Gagnant: Isengard</p>
                    <p v-else-if="match.win == 7" class="text-gray-600 text-center">Gagnant: Gobelin</p>
                    <p v-else class="text-gray-600 text-center">Gagnant: Angmar</p>

                    <p v-if="match.lose == 1" class="text-gray-600 text-center">Gagnant: Rohan</p>
                    <p v-else-if="match.lose == 2" class="text-gray-600 text-center">Gagnant: Elfe</p>
                    <p v-else-if="match.lose == 3" class="text-gray-600 text-center">Gagnant: Gondor</p>
                    <p v-else-if="match.lose == 4" class="text-gray-600 text-center">Gagnant: Nain</p>
                    <p v-else-if="match.lose == 5" class="text-gray-600 text-center">Gagnant: Mordor</p>
                    <p v-else-if="match.lose == 6" class="text-gray-600 text-center">Gagnant: Isengard</p>
                    <p v-else-if="match.lose == 7" class="text-gray-600 text-center">Gagnant: Gobelin</p>
                    <p v-else class="text-gray-600 text-center">Gagnant: Angmar</p>
                  </div>
                  <img v-if="match.lose == 1" alt="Rohan" class="w-12 h-12 object-cover object-center flex-shrink-0 rounded-full mr-4" src="~assets/factions/rohan.png">
                  <img v-else-if="match.lose == 2" alt="Elfe" class="w-12 h-12 object-cover object-center flex-shrink-0 rounded-full mr-4" src="~assets/factions/elfe.png">
                  <img v-else-if="match.lose == 3" alt="Homme" class="w-12 h-12 object-cover object-center flex-shrink-0 rounded-full mr-4" src="~assets/factions/gondor.png">
                  <img v-else-if="match.lose == 4" alt="Nain" class="w-12 h-12 object-cover object-center flex-shrink-0 rounded-full mr-4" src="~assets/factions/nain.png">
                  <img v-else-if="match.lose == 5" alt="Mordor" class="w-12 h-12 object-cover object-center flex-shrink-0 rounded-full mr-4" src="~assets/factions/mordor.png">
                  <img v-else-if="match.lose == 6" alt="Isengard" class="w-12 h-12 object-cover object-center flex-shrink-0 rounded-full mr-4" src="~assets/factions/isengard.png">
                  <img v-else-if="match.lose == 7" alt="Gobelin" class="w-12 h-12 object-cover object-center flex-shrink-0 rounded-full mr-4" src="~assets/factions/gobelin.png">
                  <img v-else alt="Angmar" class="w-12 h-12 object-cover object-center flex-shrink-0 rounded-full mr-4" src="~assets/factions/angmar.png">
                </div>
              </div>
        </div>
         <div v-else class="md:flex-grow">
          <h2 class="text-2xl font-medium text-white title-font mb-2">Aucun Combat pour le moment !</h2>
          <p class="leading-relaxed">Si vous voulez participer à l'évènement suffit de rejoindre le Discord et de prendre une faction. Pour plus d'informations aller voir les règles.</p>
          <a class="text-indigo-500 hover:text-indigo-600 inline-flex items-center mt-4" target="_blank" href="http://bit.ly/LaTerreduMilieu">Discord la Terre du Milieu
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
    data() {
    return {
      tours: []
    }
  },
  async fetch() {
	  this.tours = await this.$http.$get("https://api.npoint.io/30c5deeefc17427a8cd7")
	}
}
</script>

<style>

</style>