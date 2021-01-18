<template>
<div
  class="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center"
>
  <div class="fixed inset-0 transition-opacity" @click="handleClose" >
    <div
      class="absolute inset-0 bg-gray-500 opacity-25"
    ></div>
  </div>
  <div
    class="z-40 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-headline"
  >
    <div class="max-w-lg rounded overflow-hidden shadow-lg">
      <div class="relative">
        <img @click="changeImage" v-if="mapimg" class="w-full" :src="data.img">
        <img @click="changeImage" v-else class="w-full" :src="data.imgmap">
        <div v-if="data.map" style="top: 0.45em; left: 0.45em" class="absolute bg-gray-700 hover:bg-gray-800 text-white font-bold py-1 px-2 rounded-full">
          Map {{data.map}} Joueurs
        </div>
        <!-- <div v-if="data.map" style="top: 0.45em; right: 0.45em" class="absolute bg-gray-700 hover:bg-gray-800 text-yellow-600 font-bold py-1 px-2 rounded-full">
          {{data.nbmatch}}
          <svg class="inline-block fill-current w-4 h-4 text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd" />
          </svg>
        </div> -->
      </div>
      <div class="px-6 py-4">
        <div class="flex justify-between font-bold text-xl mb-2">
          <div>
            <p class="bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold py-2 ml-2 px-4 rounded" @click="copyId()">{{data.name}}</p>
          </div>
          <div v-if="data.citadel">
            <p class="bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold py-2 ml-2 px-4 rounded text-base tooltip">Capital
              <span class='tooltip-text bg-blue-200 p-3 -mt-16 -ml-48 rounded'>Rapportent 150 points de ressources par tour ! <br>Possède 3 emplacements de constructions</span> 
            </p>
          </div>
          <div v-if="data.fortress">
            <p class="bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold py-2 ml-2 px-4 rounded text-base tooltip">Forteresse
              <span class='tooltip-text bg-blue-200 p-3 -mt-16 -ml-48 rounded'>Rapportent 150 points de ressources par tour ! <br>Possède 3 emplacements de constructions</span> 
            </p>
          </div>
          <div v-if="data.outpost">
            <p class="bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold py-2 ml-2 px-4 rounded text-base tooltip">Avant-Postes
              <span class='tooltip-text bg-blue-200 p-3 -mt-16 -ml-48 rounded'>Rapportent 250 points de ressources par tour ! <br>Débloque un emplacement de construction</span>  
            </p> 
          </div>
          <div v-if="data.foundation">
            <p class="bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold py-2 ml-2 px-4 rounded text-base tooltip">Fondation
              <span class='tooltip-text bg-blue-200 p-3 -mt-16 -ml-48 rounded'>Débloque 2 emplacements de constructions</span>  
            </p> 
          </div>
          <div class="">
            <a v-if="data.mapdl" target="_blank" :href="data.mapdl" class="bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold py-2 ml-2 px-4 rounded inline-flex items-center text-sm">
              <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
              <span>Télécharger la carte</span>
            </a>
          </div>

        </div>
        <p class="text-gray-700 text-base">
          {{data.description}}
        </p>
      </div>

      <!-- LISTES DES BATIMENTS -->

      <div v-if="data.structures && data.structures.length > 0" class="flex flex-row flex-wrap">
          <div>
            <p class="text-gray-800 text-lg ml-6 underline">Liste des bâtiments :</p>
          </div>
          <div v-for="structure in data.structures" :key="structure">
            <p class="text-gray-700 ml-4">
                
                <button class="relative inline-block h-8 px-2 text-teal-100 transition-colors duration-150 bg-teal-700 rounded-lg focus:shadow-outline hover:bg-teal-800">
                  <span class="ml-1 mr-2">{{structure.name}}</span>
                  <span v-if="structure.level" class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">{{structure.level}}</span>
                </button>
            </p>
          </div>
      </div>

      <!-- LISTES DES JOUEURS -->

      <div v-if="data.players && data.players.length > 0" class="px-6 py-4 flex flex-wrap">
        <div class="mx-auto m-2" v-for="player in data.players" :key="player.name"> 
          <div v-if="player.faction == 1" class="rounded-lg bg-teal-600 uppercase px-2 py-1 text-xs font-bold mr-3 text-white text-center hover:bg-teal-700">{{player.name}} 
            <img v-if="player.chef == true" alt="Chef de Faction" class="w-4 h-4 inline-block" src="~assets/crown.svg">
            <span class="block text-center text-xs font-normal">
              {{player.win}} <img alt="Victoire" class="w-4 h-4 inline-block" src="~assets/trophy.svg">
              
              {{player.lose}} <img alt="Défaite" class="w-4 h-4 inline-block" src="~assets/skull.svg">
              
              <img v-if="player.handicap == 1" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/sang.svg">  
              <img v-if="player.handicap == 2" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/sangjaune.svg">
            </span>
          </div>

          <div v-else-if="player.faction == 2" class="rounded-lg bg-green-800 uppercase px-2 py-1 text-sm font-bold mr-3 text-white text-center hover:bg-green-900">{{player.name}}
            <img v-if="player.chef == true" alt="Chef de Faction" class="w-4 h-4 inline-block" src="~assets/crown.svg">
            <span class="block text-center text-xs font-normal">
              {{player.win}} <img alt="Victoire" class="w-4 h-4 inline-block" src="~assets/trophy.svg">
              
              {{player.lose}} <img alt="Défaite" class="w-4 h-4 inline-block" src="~assets/skull.svg">
              
              <img v-if="player.handicap == 1" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/sang.svg">
              <img v-if="player.handicap == 2" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/sangjaune.svg">
            </span>
          </div>

          <div v-else-if="player.faction == 3" class="rounded-lg bg-blue-500 uppercase px-2 py-1 text-xs font-bold mr-3 text-white text-center hover:bg-blue-600">{{player.name}}
            <img v-if="player.chef == true" alt="Chef de Faction" class="w-4 h-4 inline-block" src="~assets/crown.svg">
            <span class="block text-center text-xs font-normal">
              {{player.win}} <img alt="Victoire" class="w-4 h-4 inline-block" src="~assets/trophy.svg">
              
              {{player.lose}} <img alt="Défaite" class="w-4 h-4 inline-block" src="~assets/skull.svg">
              
              <img v-if="player.handicap == 1" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/sang.svg">
              <img v-if="player.handicap == 2" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/sangjaune.svg">
            </span>
          </div>
          <div v-else-if="player.faction == 4" class="rounded-lg bg-yellow-600 uppercase px-2 py-1 text-xs font-bold mr-3 text-white text-center hover:bg-yellow-700">{{player.name}}
            <img v-if="player.chef == true" alt="Chef de Faction" class="w-4 h-4 inline-block" src="~assets/crown.svg">
            <span class="block text-center text-xs font-normal">
              {{player.win}} <img alt="Victoire" class="w-4 h-4 inline-block" src="~assets/trophy.svg">
              
              {{player.lose}} <img alt="Défaite" class="w-4 h-4 inline-block" src="~assets/skull.svg">
              
              <img v-if="player.handicap == 1" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/sang.svg">
              <img v-if="player.handicap == 2" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/sangjaune.svg">
            </span>
          </div>
          <div v-else-if="player.faction == 5" class="rounded-lg bg-red-700 uppercase px-2 py-1 text-xs font-bold mr-3 text-white text-center hover:bg-red-800">{{player.name}}
            <img v-if="player.chef == true" alt="Chef de Faction" class="w-4 h-4 inline-block" src="~assets/crown.svg">
            <span class="block text-center text-xs font-normal">
              {{player.win}} <img alt="Victoire" class="w-4 h-4 inline-block" src="~assets/trophy.svg">
              
              {{player.lose}} <img alt="Défaite" class="w-4 h-4 inline-block" src="~assets/skull.svg">
              
              <img v-if="player.handicap == 1" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/sang.svg">
              <img v-if="player.handicap == 2" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/sangjaune.svg">
            </span>
          </div>
          <div v-else-if="player.faction == 6" class="rounded-lg bg-gray-800 uppercase px-2 py-1 text-xs font-bold mr-3 text-white text-center hover:bg-gray-900">{{player.name}}
            <img v-if="player.chef == true" alt="Chef de Faction" class="w-4 h-4 inline-block" src="~assets/crown.svg">
            <span class="block text-center text-xs font-normal">
              {{player.win}} <img alt="Victoire" class="w-4 h-4 inline-block" src="~assets/trophy.svg">
              
              {{player.lose}} <img alt="Défaite" class="w-4 h-4 inline-block" src="~assets/skull.svg">
              
              <img v-if="player.handicap == 1" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/sang.svg">
              <img v-if="player.handicap == 2" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/sangjaune.svg">
            </span>
          </div>
          <div v-else-if="player.faction == 7" class="rounded-lg bg-orange-800 uppercase px-2 py-1 text-xs font-bold mr-3 text-white text-center hover:bg-orange-900">{{player.name}}
            <img v-if="player.chef == true" alt="Chef de Faction" class="w-4 h-4 inline-block" src="~assets/crown.svg">
            <span class="block text-center text-xs font-normal">
              {{player.win}} <img alt="Victoire" class="w-4 h-4 inline-block" src="~assets/trophy.svg">
              
              {{player.lose}} <img alt="Défaite" class="w-4 h-4 inline-block" src="~assets/skull.svg">
              
              <img v-if="player.handicap == 1" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/sang.svg">
              <img v-if="player.handicap == 2" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/sangjaune.svg">
            </span>
          </div>
          <div v-else-if="player.faction == 8" class="rounded-lg bg-purple-800 uppercase px-2 py-1 text-xs font-bold mr-3 text-white text-center hover:bg-purple-900">{{player.name}}
            <img v-if="player.chef == true" alt="Chef de Faction" class="w-4 h-4 inline-block" src="~assets/crown.svg">
            <span class="block text-center text-xs font-normal">
              {{player.win}} <img alt="Victoire" class="w-4 h-4 inline-block" src="~assets/trophy.svg">
              
              {{player.lose}} <img alt="Défaite" class="w-4 h-4 inline-block" src="~assets/skull.svg">
              
              <img v-if="player.handicap == 1" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/sang.svg">
              <img v-if="player.handicap == 2" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/sangjaune.svg">
            </span>
          </div>
          </div>
        
      </div>
      <div v-else class="px-6 py-4">
        <span v-if="data.name == 'passage infranchissable' || data.name == 'Tol Fuin'"></span>
        <span v-else class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Aucun joueur est dans la région !</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      mapimg: true
    }
  },
  methods: {
      handleClose() {
        this.$emit("close");
      },
      changeImage() {
        if(this.data.imgmap) {
          this.mapimg = !this.mapimg;
        }
      },
      copyId() {
        navigator.clipboard.writeText(this.region)
    },
  },
  props: {
    region: {
      type: String,
      required: true
    },
  },
  async fetch() {
	  this.data = await this.$http.$get(`https://api.npoint.io/38a2899b98818d89418c/${this.region}`)
	  // this.data = await this.$http.$get(`https://api.npoint.io/a982d740a3c6fa4e6847/${this.region}`) // API TEST
	}
}
</script>

<style scoped>

.tooltip .tooltip-text {
  visibility: hidden;
  text-align: center;
  padding: 2px 6px;
  position: absolute;
  z-index: 100;
}
.tooltip:hover .tooltip-text {
  visibility: visible;
}

</style>
