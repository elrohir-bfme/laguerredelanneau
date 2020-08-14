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
      <div v-if="data.players && data.players.length > 0" class="px-6 py-4">
        <span v-for="player in data.players" :key="player.name" class="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{{player.name}} / {{player.faction}}</span>
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