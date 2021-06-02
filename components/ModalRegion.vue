<template>
  <div class="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0  sm:items-center sm:justify-center">
    <div class="fixed inset-0 transition-opacity" @click="handleClose">
      <div class="absolute inset-0 bg-gray-500 opacity-25"></div>
    </div>
    <div class="z-40 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all" role="dialog"
      aria-modal="true" aria-labelledby="modal-headline">
      <div class="max-w-lg rounded overflow-hidden shadow-lg">
        <div class="relative">
          <img v-if="region && !viewMinimap"  @click="changeImg()" class="w-full" :src="region.img">
          <img v-if="viewMinimap && region.minimap"  @click="changeImg()" class="w-full" :src="`http://localhost:1337${region.minimap.url}`">
          <div v-if="region" style="top: 0.45em; left: 0.45em"
            class="absolute bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-3 rounded-full">
            Map {{region.map}} Joueurs
          </div>
        </div>
        <div class="px-6 py-3">
          <div class="flex justify-between font-bold text-xl mb-2">
            <div v-if="region">
              <p class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 ml-2 px-4 rounded text-base">
                {{region.name}} | {{region.matches.length}} parties
              </p>
            </div>
            <div>
              <a v-if="region && region.mapdl" target="_blank" :href="region.mapdl"
                class="bg-gray-300 hover:bg-gray-400 text-gray-900 font-bold py-2 ml-2 px-4 rounded inline-flex items-center text-sm">
                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                <span>Télécharger la carte</span>
              </a>
            </div>

          </div>
          <p v-if="region" class="text-gray-700 text-base ">
            {{region.description}}
          </p>
        </div>

        <div v-if="region && region.players && region.players.length > 0" class="border-t border-gray-300 px-6 py-4 flex flex-wrap">
          <div class="mx-auto m-2" v-for="player in region.players" :key="player.name">
            <div class="shadow-lg rounded-2xl p-2"
              :class="`bg-${player.faction.frontColor}-700 hover:bg-${player.faction.frontColor}-800`" >
                <div class="flex-row gap-4 flex justify-center items-center">
                    <div class="flex-shrink-0">
                      <img v-if="player.img" alt="profil" :src="`http://localhost:1337${player.img.url}`" 
                      class="mx-auto object-cover rounded-full h-12 w-12"/>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-white text-center">
                            {{player.name}}
                        </span>
                        <span class="text-white text-xs">
                            {{player.win}} <img alt="Victoire" class="w-4 h-4 inline-block" src="~assets/trophy.svg">
                            {{player.lose}} <img alt="Défaite" class="w-4 h-4 inline-block" src="~assets/skull.svg">
                            <span v-if="player.handicap > 0">{{player.handicap}} %<img alt="Handicap" class="w-4 h-4 inline-block" src="~assets/sang.svg"></span>
                        </span>
                        
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div v-else class="px-6 py-4 border-t border-gray-300">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Aucun joueur
            est dans la région !</span>
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
        region: [],
        viewMinimap: false
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
      changeImg() {
        console.log("kdoekdoeko")
        this.viewMinimap = !this.viewMinimap
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
