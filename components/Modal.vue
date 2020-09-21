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
        <img class="w-full" :src="data.img">
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
          <span v-if="player.faction == 1" class="rounded-full bg-green-400 uppercase px-2 py-1 text-xs font-bold mr-3 text-white hover:bg-green-500">{{player.name}}</span>
          <span v-else-if="player.faction == 2" class="rounded-full bg-green-800 uppercase px-2 py-1 text-xs font-bold mr-3 text-white hover:bg-green-900">{{player.name}}</span>
          <span v-else-if="player.faction == 3" class="rounded-full bg-blue-500 uppercase px-2 py-1 text-xs font-bold mr-3 text-white hover:bg-blue-600">{{player.name}}</span>
          <span v-else-if="player.faction == 4" class="rounded-full bg-yellow-600 uppercase px-2 py-1 text-xs font-bold mr-3 text-white hover:bg-yellow-700">{{player.name}}</span>
          <span v-else-if="player.faction == 5" class="rounded-full bg-red-700 uppercase px-2 py-1 text-xs font-bold mr-3 text-white hover:bg-red-800">{{player.name}}</span>
          <span v-else-if="player.faction == 6" class="rounded-full bg-gray-800 uppercase px-2 py-1 text-xs font-bold mr-3 text-white hover:bg-gray-900">{{player.name}}</span>
          <span v-else-if="player.faction == 7" class="rounded-full bg-orange-800 uppercase px-2 py-1 text-xs font-bold mr-3 text-white hover:bg-orange-900">{{player.name}}</span>
          <span v-else-if="player.faction == 8" class="rounded-full bg-purple-800 uppercase px-2 py-1 text-xs font-bold mr-3 text-white hover:bg-purple-900">{{player.name}}</span>
          <svg v-if="player.handicap" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 474.136 474.136" style="enable-background:new 0 0 474.136 474.136;" xml:space="preserve" class="inline h-6 w-6">
<g>
	<path style="fill:#D80027;" d="M201.068,466.136c61.856,0,112-50.144,112-112c0-61.856-112-176-112-176s-112,114.144-112,176
		C89.068,415.992,139.212,466.136,201.068,466.136z M193.068,418.136c-35.33-0.04-63.96-28.67-64-64
		C129.108,389.466,157.738,418.096,193.068,418.136z"/>
	<path style="fill:#D80027;" d="M385.068,138.136c0-16.936-27.752-61.048-64-104.408c-34.4,41.248-64,86.152-64,104.408
		c0,35.346,28.654,64,64,64S385.068,173.482,385.068,138.136z"/>
	<path style="fill:#D80027;" d="M209.068,67.328c-1.6-6.296-11.248-25.448-32-53.784c-19.544,26.656-30.312,46.4-32,53.6
		c-0.049,17.673,14.239,32.039,31.912,32.088s32.039-14.239,32.088-31.912V67.328z"/>
</g>
<g>
	<path style="fill:#231F20;" d="M201.068,474.136c-66.243-0.075-119.925-53.757-120-120c0-64.392,109.6-176.8,114.288-181.6
		l5.712-5.824l5.712,5.824c4.688,4.8,114.288,117.208,114.288,181.6C320.993,420.379,267.311,474.061,201.068,474.136z
		 M201.068,189.728c-22.536,24-104,114.272-104,164.408c0,57.438,46.562,104,104,104s104-46.562,104-104
		C305.068,303.968,223.604,213.736,201.068,189.728L201.068,189.728z"/>
	<path style="fill:#231F20;" d="M193.068,426.136c-39.746-0.044-71.956-32.254-72-72h16c0.04,30.911,25.089,55.96,56,56V426.136z"/>
	<path style="fill:#231F20;" d="M321.068,210.136c-39.746-0.044-71.956-32.254-72-72c0-29.176,54.88-96.36,65.88-109.528l6.12-7.352
		l6.144,7.344c30.384,36.352,65.856,86.848,65.856,109.536C393.024,177.882,360.814,210.092,321.068,210.136z M321.068,46.304
		c-36.8,45.264-56,80.12-56,91.832c0,30.928,25.072,56,56,56s56-25.072,56-56C377.068,126.672,357.508,91.12,321.068,46.304z"/>
	<path style="fill:#231F20;" d="M177.068,106.136c-21.646,0.108-39.413-17.097-40-38.736v-1.048l0.24-1.024
		c2.296-9.848,15.384-32,33.336-56.52L177.068,0l6.456,8.8c19.928,27.264,31.048,48,33.248,56.504l0.296,1.152v1.168
		C216.346,89.167,198.623,106.23,177.068,106.136z M153.14,68.024c1.077,12.44,11.442,22.018,23.928,22.112
		c12.439,0.046,22.834-9.455,23.904-21.848c-6.384-14.528-14.403-28.281-23.904-40.992C167.549,39.904,159.52,53.571,153.14,68.024z
		"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
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
