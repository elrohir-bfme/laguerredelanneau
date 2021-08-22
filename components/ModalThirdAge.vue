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
        <img v-if="mapimg" class="w-full" :src="data.img">
      </div>
      <div class="px-6 py-4">
        <div class="flex justify-between font-bold text-xl mb-2">
          <div>
            <p class="bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold py-2 ml-2 px-4 rounded" @click="copyId()">{{data.name}}</p>
          </div>
        </div>
        <p class="text-gray-700 text-base">
          {{data.description}}
        </p>
      </div>

      <!-- LISTES DES JOUEURS -->

      <div v-if="data.players && data.players.length > 0" class="px-6 py-4 flex flex-wrap">
        <div class="mx-auto m-2" v-for="player in data.players" :key="player.name"> 
          <div v-if="player.faction == 1" class="rounded-lg bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3 text-white text-center hover:bg-indigo-600">{{updatePlayer(player.name)}} 
            <img v-if="player.chef == true" alt="Chef de Faction" class="w-4 h-4 inline-block" src="~assets/svg/crown.svg">
            <span class="block text-center text-xs font-normal">
              {{player.win}} <img alt="Victoire" class="w-4 h-4 inline-block" src="~assets/svg/trophy.svg">
              {{player.lose}} <img alt="Défaite" class="w-4 h-4 inline-block" src="~assets/svg/skull.svg">
            </span>
          </div>

          <div v-else-if="player.faction == 2" class="rounded-lg bg-teal-600 uppercase px-2 py-1 text-xs font-bold mr-3 text-white text-center hover:bg-teal-700">{{updatePlayer(player.name)}}
            <img v-if="player.chef == true" alt="Chef de Faction" class="w-4 h-4 inline-block" src="~assets/svg/crown.svg">
            <span class="block text-center text-xs font-normal">
              {{player.win}} <img alt="Victoire" class="w-4 h-4 inline-block" src="~assets/svg/trophy.svg">
              {{player.lose}} <img alt="Défaite" class="w-4 h-4 inline-block" src="~assets/svg/skull.svg">
            </span>
          </div>

          <div v-else-if="player.faction == 3" class="rounded-lg bg-green-800 uppercase px-2 py-1 text-sm font-bold mr-3 text-white text-center hover:bg-green-900">{{updatePlayer(player.name)}}
            <img v-if="player.chef == true" alt="Chef de Faction" class="w-4 h-4 inline-block" src="~assets/svg/crown.svg">
            <span class="block text-center text-xs font-normal">
              {{player.win}} <img alt="Victoire" class="w-4 h-4 inline-block" src="~assets/svg/trophy.svg">
              
              {{player.lose}} <img alt="Défaite" class="w-4 h-4 inline-block" src="~assets/svg/skull.svg">
            </span>
          </div>
          <div v-else-if="player.faction == 4" class="rounded-lg bg-green-500 uppercase px-2 py-1 text-sm font-bold mr-3 text-white text-center hover:bg-green-600">{{updatePlayer(player.name)}}
            <img v-if="player.chef == true" alt="Chef de Faction" class="w-4 h-4 inline-block" src="~assets/svg/crown.svg">
            <span class="block text-center text-xs font-normal">
              {{player.win}} <img alt="Victoire" class="w-4 h-4 inline-block" src="~assets/svg/trophy.svg">
              
              {{player.lose}} <img alt="Défaite" class="w-4 h-4 inline-block" src="~assets/svg/skull.svg">
            </span>
          </div>
          <div v-else-if="player.faction == 5" class="rounded-lg bg-orange-800 uppercase px-2 py-1 text-xs font-bold mr-3 text-white text-center hover:bg-gray-900">{{updatePlayer(player.name)}}
            <img v-if="player.chef == true" alt="Chef de Faction" class="w-4 h-4 inline-block" src="~assets/svg/crown.svg">
            <span class="block text-center text-xs font-normal">
              {{player.win}} <img alt="Victoire" class="w-4 h-4 inline-block" src="~assets/svg/trophy.svg">
              
              {{player.lose}} <img alt="Défaite" class="w-4 h-4 inline-block" src="~assets/svg/skull.svg">
            </span>
          </div>
          <div v-else-if="player.faction == 6" class="rounded-lg bg-pink-600 uppercase px-2 py-1 text-xs font-bold mr-3 text-white text-center hover:bg-pink-700">{{updatePlayer(player.name)}}
            <img v-if="player.chef == true" alt="Chef de Faction" class="w-4 h-4 inline-block" src="~assets/svg/crown.svg">
            <span class="block text-center text-xs font-normal">
              {{player.win}} <img alt="Victoire" class="w-4 h-4 inline-block" src="~assets/svg/trophy.svg">
              
              {{player.lose}} <img alt="Défaite" class="w-4 h-4 inline-block" src="~assets/svg/skull.svg">
            </span>
          </div>
          <div v-else-if="player.faction == 7" class="rounded-lg bg-yellow-600 uppercase px-2 py-1 text-xs font-bold mr-3 text-white text-center hover:bg-yellow-700">{{updatePlayer(player.name)}}
            <img v-if="player.chef == true" alt="Chef de Faction" class="w-4 h-4 inline-block" src="~assets/svg/crown.svg">
            <span class="block text-center text-xs font-normal">
              {{player.win}} <img alt="Victoire" class="w-4 h-4 inline-block" src="~assets/svg/trophy.svg">
              
              {{player.lose}} <img alt="Défaite" class="w-4 h-4 inline-block" src="~assets/svg/skull.svg">
            </span>
          </div>
          <div v-else-if="player.faction == 8" class="rounded-lg bg-orange-500 uppercase px-2 py-1 text-xs font-bold mr-3 text-white text-center hover:bg-orange-600">{{updatePlayer(player.name)}}
            <img v-if="player.chef == true" alt="Chef de Faction" class="w-4 h-4 inline-block" src="~assets/svg/crown.svg">
            <span class="block text-center text-xs font-normal">
              {{player.win}} <img alt="Victoire" class="w-4 h-4 inline-block" src="~assets/svg/trophy.svg">
              
              {{player.lose}} <img alt="Défaite" class="w-4 h-4 inline-block" src="~assets/svg/skull.svg">
            </span>
          </div>
          <div v-else-if="player.faction == 9" class="rounded-lg bg-red-700 uppercase px-2 py-1 text-xs font-bold mr-3 text-white text-center hover:bg-red-800">{{updatePlayer(player.name)}}
            <img v-if="player.chef == true" alt="Chef de Faction" class="w-4 h-4 inline-block" src="~assets/svg/crown.svg">
            <span class="block text-center text-xs font-normal">
              {{player.win}} <img alt="Victoire" class="w-4 h-4 inline-block" src="~assets/svg/trophy.svg">
              
              {{player.lose}} <img alt="Défaite" class="w-4 h-4 inline-block" src="~assets/svg/skull.svg">
            </span>
          </div>
        </div>
        
      </div>
      <div v-else class="px-6 py-4">
        <span v-if="data.name == 'passage infranchissable'"></span>
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
      updatePlayer(name){
        return name.replace(/_/g, " ");
      }
  },
  props: {
    region: {
      type: String,
      required: true
    },
  },
  async fetch() {
	  this.data = await this.$http.$get(`https://api.npoint.io/c89259a87a65703e995f/${this.region}`)
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
