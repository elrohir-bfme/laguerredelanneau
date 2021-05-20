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
        <img v-if="region" class="w-full" :src="region.img">
        <div v-if="region" style="top: 0.45em; left: 0.45em" class="absolute bg-gray-700 hover:bg-gray-800 text-white font-bold py-1 px-2 rounded-full">
          Map {{region.map}} Joueurs
        </div>
      </div>
      <div class="px-6 py-4">
        <div class="flex justify-between font-bold text-xl mb-2">
          <div v-if="region">
            <p class="bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold py-2 ml-2 px-4 rounded" @click="copyId()">{{region.name}}</p>
          </div>
          <div v-if="region && region.citadel">
            <p class="bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold py-2 ml-2 px-4 rounded text-base tooltip">Capital
              <span class='tooltip-text bg-blue-200 p-3 -mt-16 -ml-48 rounded'>Rapportent 150 points de ressources par tour ! <br>Possède 3 emplacements de constructions</span> 
            </p>
          </div>
          <div>
            <a v-if="region && region.mapdl" target="_blank" :href="region.mapdl" class="bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold py-2 ml-2 px-4 rounded inline-flex items-center text-sm">
              <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
              <span>Télécharger la carte</span>
            </a>
          </div>

        </div>
        <p v-if="region" class="text-gray-700 text-base">
          {{region.description}}
        </p>
      </div>

      <!-- LISTES DES BATIMENTS -->

      <div v-if="region && region.structures && region.structures.length > 0" class="flex flex-row flex-wrap">
          <div>
            <p class="text-gray-800 text-lg ml-6 underline">Liste des bâtiments :</p>
          </div>
          <div v-for="structure in region.structures" :key="structure">
            <p class="text-gray-700 ml-8">
                
                <button class="relative inline-block h-8 px-2 text-teal-100 transition-colors duration-150 bg-teal-700 rounded-lg focus:shadow-outline hover:bg-teal-800">
                  <span class="ml-1 mr-2">{{structure.name}}</span>
                  <img v-if="structure.build === false" alt="Construction" class="build absolute w-8 h-8 bg-gray-400 rounded-full" src="~assets/hammer.svg">
                  <span v-if="structure.level" class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">{{structure.level}}</span>
                </button>
            </p>
          </div>
      </div>

      <div v-if="region && region.players && region.players.length > 0" class="px-6 py-4 flex flex-wrap">
        <div class="mx-auto m-2" v-for="player in region.players" :key="player.name"> 
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
            :class="`bg-${player.faction.frontColor}-900 hover:bg-${player.faction.frontColor}-700`"
            >
            {{updatePlayer(player.name)}}
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

import getRegion from '~/apollo/queries/region/region'

export default {
  data() {
    return {
      region: []
    }
  },

  apollo: {
    region: {
      query: getRegion,
      variables() {
        return {
          id: this.id
        }
      }
    },
  },
  methods: {
      handleClose() {
        this.$emit("close");
      },
      copyId() {
        navigator.clipboard.writeText(this.region.name)
      },
      updatePlayer(name){
        return name.replace(/_/g, " ");
      }
  },
  props: {
      id: {
          type: String,
          required: true
      },
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
