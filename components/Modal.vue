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
      <img class="w-full" :src="data.img">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{data.name}}</div>
        <p class="text-gray-700 text-base">
          {{data.description}}
        </p>
      </div>
      <div v-if="data.players && data.players.length > 0" class="px-6 py-4 flex flex-wrap">
        <div class="mx-auto m-2" v-for="player in data.players" :key="player.name"> 
          <span v-if="player.faction == 1" class="rounded-full bg-green-400 uppercase px-2 py-1 text-xs font-bold mr-3 text-white hover:bg-green-500">{{player.name}}</span>
          <span v-else-if="player.faction == 2" class="rounded-full bg-green-800 uppercase px-2 py-1 text-xs font-bold mr-3 text-white hover:bg-green-900">{{player.name}}</span>
          <span v-else-if="player.faction == 3" class="rounded-full bg-blue-500 uppercase px-2 py-1 text-xs font-bold mr-3 text-white hover:bg-blue-600">{{player.name}}</span>
          <span v-else-if="player.faction == 4" class="rounded-full bg-yellow-600 uppercase px-2 py-1 text-xs font-bold mr-3 text-white hover:bg-yellow-700">{{player.name}}</span>
          <span v-else-if="player.faction == 5" class="rounded-full bg-red-700 uppercase px-2 py-1 text-xs font-bold mr-3 text-white hover:bg-red-800">{{player.name}}</span>
          <span v-else-if="player.faction == 6" class="rounded-full bg-gray-800 uppercase px-2 py-1 text-xs font-bold mr-3 text-white hover:bg-gray-900">{{player.name}}</span>
          <span v-else-if="player.faction == 7" class="rounded-full bg-orange-800 uppercase px-2 py-1 text-xs font-bold mr-3 text-white hover:bg-orange-900">{{player.name}}</span>
          <span v-else-if="player.faction == 8" class="rounded-full bg-purple-800 uppercase px-2 py-1 text-xs font-bold mr-3 text-white hover:bg-purple-900">{{player.name}}</span>
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
      data: []
    }
  },
  methods: {
      handleClose() {
        this.$emit("close");
      }
  },
  props: {
    region: {
      type: String,
      required: true
    },
  },
  async fetch() {
	  this.data = await this.$http.$get(`https://api.npoint.io/38a2899b98818d89418c/${this.region}`)
	}
}
</script>

<style>

</style>