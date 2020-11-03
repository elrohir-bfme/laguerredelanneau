<template>
<div
  class="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center"
>
  <div class="fixed inset-0 transition-opacity" @click="handleClose" >
    <div
      class="absolute inset-0 bg-gray-500 opacity-75"
    ></div>
  </div>
  <div
    class="z-10 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-headline"
  >
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <div class="relative">
        <img @click="changeImage" v-if="mapimg" class="w-full" :src="data.img">
        <img @click="changeImage" v-else class="w-full" :src="data.imgmap">
        <div v-if="data.map" style="top: 0.45em; left: 0.45em" class="absolute bg-gray-700 hover:bg-gray-800 text-white font-bold py-1 px-2 rounded-full">
          Map {{data.map}} Joueurs
        </div>
      </div>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">
            <p class="inline-block">{{data.name}}</p>
            <a v-if="data.mapdl" target="_blank" :href="data.mapdl" class="bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold py-2 ml-2 px-4 rounded inline-flex items-center text-base">
              <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
              <span>Télécharger la carte</span>
            </a>

        </div>
        <p class="text-gray-700 text-base">
          {{data.description}}
        </p>
      </div>
      <div v-if="data.players && data.players.length > 0" class="px-6 py-4 flex flex-wrap">
        <div class="mx-auto m-2" v-for="player in data.players" :key="player.name"> 
          <div v-if="player.faction == 1" class="rounded-lg bg-green-800 uppercase px-2 py-1 text-sm font-bold mr-3 text-white text-center hover:bg-green-900">{{player.name}}
            <img v-if="player.chef == true" alt="Chef de Faction" class="w-4 h-4 inline-block" src="~assets/crown.svg">
            <span class="block text-center text-xs font-normal">
              {{player.win}} <img alt="Victoire" class="w-4 h-4 inline-block" src="~assets/trophy.svg">
              
              {{player.lose}} <img alt="Défaite" class="w-4 h-4 inline-block" src="~assets/skull.svg">
              
              <img v-if="player.handicap == 1" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/sang.svg">
              <img v-if="player.handicap == 2" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/sangjaune.svg">
            </span>
          </div>

          <div v-else-if="player.faction == 2" class="rounded-lg bg-blue-500 uppercase px-2 py-1 text-xs font-bold mr-3 text-white text-center hover:bg-blue-600">{{player.name}}
            <img v-if="player.chef == true" alt="Chef de Faction" class="w-4 h-4 inline-block" src="~assets/crown.svg">
            <span class="block text-center text-xs font-normal">
              {{player.win}} <img alt="Victoire" class="w-4 h-4 inline-block" src="~assets/trophy.svg">
              
              {{player.lose}} <img alt="Défaite" class="w-4 h-4 inline-block" src="~assets/skull.svg">
              
              <img v-if="player.handicap == 1" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/sang.svg">
              <img v-if="player.handicap == 2" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/sangjaune.svg">
            </span>
          </div>
          <div v-else-if="player.faction == 3" class="rounded-lg bg-yellow-600 uppercase px-2 py-1 text-xs font-bold mr-3 text-white text-center hover:bg-yellow-700">{{player.name}}
            <img v-if="player.chef == true" alt="Chef de Faction" class="w-4 h-4 inline-block" src="~assets/crown.svg">
            <span class="block text-center text-xs font-normal">
              {{player.win}} <img alt="Victoire" class="w-4 h-4 inline-block" src="~assets/trophy.svg">
              
              {{player.lose}} <img alt="Défaite" class="w-4 h-4 inline-block" src="~assets/skull.svg">
              
              <img v-if="player.handicap == 1" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/sang.svg">
              <img v-if="player.handicap == 2" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/sangjaune.svg">
            </span>
          </div>
          <div v-else-if="player.faction == 4" class="rounded-lg bg-red-700 uppercase px-2 py-1 text-xs font-bold mr-3 text-white text-center hover:bg-red-800">{{player.name}}
            <img v-if="player.chef == true" alt="Chef de Faction" class="w-4 h-4 inline-block" src="~assets/crown.svg">
            <span class="block text-center text-xs font-normal">
              {{player.win}} <img alt="Victoire" class="w-4 h-4 inline-block" src="~assets/trophy.svg">
              
              {{player.lose}} <img alt="Défaite" class="w-4 h-4 inline-block" src="~assets/skull.svg">
              
              <img v-if="player.handicap == 1" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/sang.svg">
              <img v-if="player.handicap == 2" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/sangjaune.svg">
            </span>
          </div>
          <div v-else-if="player.faction == 5" class="rounded-lg bg-gray-800 uppercase px-2 py-1 text-xs font-bold mr-3 text-white text-center hover:bg-gray-900">{{player.name}}
            <img v-if="player.chef == true" alt="Chef de Faction" class="w-4 h-4 inline-block" src="~assets/crown.svg">
            <span class="block text-center text-xs font-normal">
              {{player.win}} <img alt="Victoire" class="w-4 h-4 inline-block" src="~assets/trophy.svg">
              
              {{player.lose}} <img alt="Défaite" class="w-4 h-4 inline-block" src="~assets/skull.svg">
              
              <img v-if="player.handicap == 1" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/sang.svg">
              <img v-if="player.handicap == 2" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/sangjaune.svg">
            </span>
          </div>
          <div v-else-if="player.faction == 6" class="rounded-lg bg-orange-800 uppercase px-2 py-1 text-xs font-bold mr-3 text-white text-center hover:bg-orange-900">{{player.name}}
            <img v-if="player.chef == true" alt="Chef de Faction" class="w-4 h-4 inline-block" src="~assets/crown.svg">
            <span class="block text-center text-xs font-normal">
              {{player.win}} <img alt="Victoire" class="w-4 h-4 inline-block" src="~assets/trophy.svg">
              
              {{player.lose}} <img alt="Défaite" class="w-4 h-4 inline-block" src="~assets/skull.svg">
              
              <img v-if="player.handicap == 1" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/sang.svg">
              <img v-if="player.handicap == 2" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/sangjaune.svg">
            </span>
          </div>
          <div v-else-if="player.faction == 7" class="rounded-lg bg-purple-800 uppercase px-2 py-1 text-xs font-bold mr-3 text-white text-center hover:bg-purple-900">{{player.name}}
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
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Aucun joueur est dans la région !</span>
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
      }
  },
  props: {
    region: {
      type: String,
      required: true
    },
  },
  async fetch() {
	  this.data = await this.$http.$get(`https://api.npoint.io/f07ce59550299d4c6d49/${this.region}`)
	  // this.data = await this.$http.$get(`https://api.npoint.io/a982d740a3c6fa4e6847/${this.region}`) // API TEST
	}
}
</script>
