<template>
<div
  class="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0  sm:items-center sm:justify-center"
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
        <img v-if="data" class="w-full" :src="data.img">
        <div v-if="data && data" style="top: 0.45em; left: 0.45em" class="absolute bg-gray-700 hover:bg-gray-800 text-white font-bold py-1 px-2 rounded-full">
          Map {{data.map}} Joueurs
        </div>
      </div>
      <div class="px-6 py-4">
        <div class="flex justify-between font-bold text-xl mb-2">
          <div v-if="data">
            <p class="bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold py-2 ml-2 px-4 rounded" @click="copyId()">{{data.name}}</p>
          </div>
          <div v-if="data && data.citadel">
            <p class="bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold py-2 ml-2 px-4 rounded text-base tooltip">Capital
              <span class='tooltip-text bg-blue-200 p-3 -mt-16 -ml-48 rounded'>Rapportent 150 points de ressources par tour ! <br>Possède 3 emplacements de constructions</span> 
            </p>
          </div>
          <div v-if="data && data.fortress">
            <p class="bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold py-2 ml-2 px-4 rounded text-base tooltip">Forteresse
              <span class='tooltip-text bg-blue-200 p-3 -mt-16 -ml-48 rounded'>Rapportent 150 points de ressources par tour ! <br>Possède 3 emplacements de constructions</span> 
            </p>
          </div>
          <div v-if="data && data.outpost">
            <p class="bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold py-2 ml-2 px-4 rounded text-base tooltip">Avant-Postes
              <span class='tooltip-text bg-blue-200 p-3 -mt-16 -ml-48 rounded'>Rapportent 250 points de ressources par tour ! <br>Débloque un emplacement de construction</span>  
            </p> 
          </div>
          <div v-if="data && data.foundation">
            <p class="bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold py-2 ml-2 px-4 rounded text-base tooltip">Fondation
              <span class='tooltip-text bg-blue-200 p-3 -mt-16 -ml-48 rounded'>Débloque 2 emplacements de constructions</span>  
            </p> 
          </div>
          <div>
            <a v-if="data && data.mapdl" target="_blank" :href="data.mapdl" class="bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold py-2 ml-2 px-4 rounded inline-flex items-center text-sm">
              <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
              <span>Télécharger la carte</span>
            </a>
          </div>

        </div>
        <p v-if="data" class="text-gray-700 text-base">
          {{data.description}}
        </p>
      </div>

      <!-- LISTES DES BATIMENTS -->

      <div v-if="data && data.structures && data.structures.length > 0" class="flex flex-row flex-wrap">
          <div>
            <p class="text-gray-800 text-lg ml-6 underline">Liste des bâtiments :</p>
          </div>
          <div v-for="structure in data.structures" :key="structure">
            <p class="text-gray-700 ml-8">
                
                <button class="relative inline-block h-8 px-2 text-teal-100 transition-colors duration-150 bg-teal-700 rounded-lg focus:shadow-outline hover:bg-teal-800">
                  <span class="ml-1 mr-2">{{structure.name}}</span>
                  <img v-if="structure.build === false" alt="Construction" class="build absolute w-8 h-8 bg-gray-400 rounded-full" src="~assets/hammer.svg">
                  <!-- <div v-if="structure.build === false"  class="build absolute px-2 py-1 bg-gray-900 rounded-full"> -->
                  <!-- <svg  class="w-5 h-5 stroke-current stroke-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg> -->
                  <!-- </div> -->
                  <span v-if="structure.level" class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">{{structure.level}}</span>
                </button>
            </p>
          </div>
      </div>

      <!-- LISTES DES JOUEURS -->
      <pre> {{ data.players}} </pre>
      <div v-if="data && data.players && data.players.length > 0" class="px-6 py-4 flex flex-wrap">
        <div class="mx-auto m-2" v-for="player in data.players" :key="player.name"> 
          <div v-if="player.mercenaire">
          <div class="rounded-lg bg-gray-400 uppercase px-2 py-1 text-xs font-bold mr-3 text-white text-center hover:bg-gray-500">{{updatePlayer(player.name)}}
            <span class="block text-center text-xs font-normal">
              {{player.win}} <img alt="Victoire" class="w-4 h-4 inline-block" src="~assets/trophy.svg">
              
              {{player.lose}} <img alt="Défaite" class="w-4 h-4 inline-block" src="~assets/skull.svg">
              
              <img v-if="player.handicap == 1" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/sangjaune.svg">
              <img v-if="player.handicap == 2" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/sang.svg">  
              <img v-if="player.handicap == 3" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/sang.svg">
              <img v-if="player.handicap == 4" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/sangviolet.svg"> 
              <img v-if="player.prisonnier" alt="Prisonnier" class="w-4 h-4 inline-block" src="~assets/chain.svg">
            </span>
          </div>
          </div>
          <div v-else>
          <div class="rounded-lg uppercase px-2 py-1 text-xs font-bold mr-3 text-white text-center"
            :class="`bg-${getFaction(player.faction).frontColor}-900 hover:bg-${getFaction(player.faction).frontColor}-700`"
            >
            {{updatePlayer(player.name)}}

            {{ getFaction(player.faction) }}
            {{ getFaction(player.faction) }}
            <img v-if="player.chef == true" alt="Chef de Faction" class="w-4 h-4 inline-block" src="~assets/crown.svg">
            <span class="block text-center text-xs font-normal">
              {{player.win}} <img alt="Victoire" class="w-4 h-4 inline-block" src="~assets/trophy.svg">
              
              {{player.lose}} <img alt="Défaite" class="w-4 h-4 inline-block" src="~assets/skull.svg">
              
              <img v-if="player.handicap == 1" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/sangjaune.svg">
              <img v-if="player.handicap == 2" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/sang.svg">  
              <img v-if="player.handicap == 3" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/sang.svg">  
              <img v-if="player.handicap == 4" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/sangviolet.svg">  
              <img v-if="player.prisonnier" alt="Prisonnier" class="w-4 h-4 inline-block" src="~assets/chain.svg">
            </span>
          </div>
          <img v-if="player.flag" alt="Etendard" class="flag relative w-8 h-8" src="~assets/flag.svg">
        </div>
      </div>
      </div>
      <div v-else class="px-6 py-4">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Aucun joueur est dans la région !</span>
      </div>
    </div>
    </div>
  </div>
</template>

<script>

import regions from '~/apollo/queries/region/regions'

export default {
  data() {
    return {
      data: [],
      mapimg: true,
      faction: {},
      regions: [],
      result: []
    }
  },

  async fetch() {
    this.data = await this.$strapi.$regions.findOne(this.region)
  },
  methods: {
      handleClose() {
        this.$emit("close");
      },
      copyId() {
        navigator.clipboard.writeText(this.region)
      },
      updatePlayer(name){
        return name.replace(/_/g, " ");
      },
      async getFaction(id){
        console.log(id);
        let faction = await this.$strapi.$factions.findOne(id);
        let color = faction.frontColor
        console.log(faction);
        return color
      }
  },
  computed: {

  },
  props: {
      region: {
          type: String,
          required: true
      },
      factions: {
        type: Array,
        required: true
      }
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

.build {
  left: -15px;
  top: -25px;
}

.flag {
  right: -61px;
  top: -65px;
}

</style>
