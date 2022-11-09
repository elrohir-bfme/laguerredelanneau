<template>
  <div class="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0  sm:items-center sm:justify-center">
    <div class="fixed inset-0 transition-opacity" @click="handleClose">
      <div class="absolute inset-0 bg-gray-500 opacity-25"></div>
    </div>
    <div class="z-40 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all" role="dialog"
      aria-modal="true" aria-labelledby="modal-headline">
      <div class="max-w-2xl rounded overflow-hidden shadow-lg">
        <div class="relative flex">
          <img v-if="map[region]" :class="map[region].minimap ? 'w-2/3' : 'w-full'" :src="map[region].img">
          <div v-if="map[region] && map[region].minimap" class="w-1/3 flex flex-col">
            <img v-if="map[region]" class="object-contain" :src="map[region].minimap && map[region].minimap">
            
            <a v-if="map[region] && map[region].mapdl" target="_blank" :href="map[region].mapdl"
              class="bg-gray-300 hover:bg-gray-400 text-gray-900 font-bold mx-auto py-4 flex text-sm justify-center w-full h-full content-center items-center">
              <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
              <span>Télécharger</span>
            </a>
            <span  v-if="map[region] && map[region].land" class="absolute bottom-2 left-2 text-white text-xl shadow-md underline inline-flex items-center">
              <img  src="~assets/gde/img/terre.png">
              Terre souillée activée
            </span>
          </div>
        </div>
        <div class="px-6 py-3">
          <div class="flex justify-between font-bold text-xl mb-2">
            <div v-if="map[region]">
              <p @click="copyId()" :class="map[region] && map[region].minimap && 'absolute top-2 left-2'" class="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 ml-2 px-4 rounded text-base">
                {{map[region].name}}
              </p>

              
            </div>

            <!-- <div v-if="map[region] && map[region]"
              class="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-3 rounded-full text-base">
              Map {{map[region].map}} Joueurs
            </div> -->
            <div>
              <a v-if="map[region] && map[region].mapdl && !map[region].minimap" target="_blank" :href="map[region].mapdl"
                class="bg-gray-300 hover:bg-gray-400 text-gray-900 font-bold py-2 ml-2 px-4 rounded inline-flex items-center text-sm">
                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                <span>Télécharger la carte</span>
              </a>
            </div>
          </div>
          <div class="flex flex-col">
            <div>
              <p v-if="map[region]" class="text-gray-700 text-base ">
                {{map[region].description}}
              </p>
            </div>
            <div class="mt-5" v-if="map[region] && map[region].adjacents && map[region].adjacents.length > 0" >
              <p class="inline-block mr-2 underline">
                Adjacent(s) : 
              </p>
              <div class="inline-block mr-2" v-for="adjacent in map[region].adjacents" :key="adjacent">
                <button @click="ActionAdjacent(adjacent)" class="relative w-fit h-fit px-2 py-1 text-sm border rounded-full bg-gray-700 text-white">
                    <p>
                      {{ map[adjacent] && map[adjacent].name ? map[adjacent].name : "INCONNU"}}
                    </p>
                </button>
              </div>  
            </div>  
            <div class="mt-5" v-if="map[region]" >
              <p class="inline-block mr-2 underline">
                Région : 
              </p>
              <p class="inline-block px-2 py-1 text-sm border border-gray-800">
                {{map[region].region}}
              </p>
            </div>  
          </div>
          <!-- <p v-if="map[region]" class="text-gray-700 text-base ">
            {{map[region].description}}
          </p> -->
        </div>

        <!-- <div v-if="map[region] && map[region].adjacents && map[region].adjacents.length > 0" >
          <div>
            <div>
              <button class="mb-1 p-4 mx-auto bg-indigo-500 hover:bg-indigo-600 no-underline text-white flex justify-between rounded" @click.prevent="active = !active">
                <strong>adjacent   </strong>
                <span class="text-gray-200" v-show="!active">&#10133;</span>
                <span class="text-gray-200" v-show="active">&#10134;</span>
              </button>
            </div>
            <div class="p-2 text-center" v-show="active" v-for="adjacent in map[region].adjacents" :key="adjacent"><slot />
             <button @click="ActionAdjacent(adjacent)">{{ map[adjacent] && map[adjacent].name ? map[adjacent].name : "INCONNU"}}</button> 
            </div>            
          </div>
        </div> -->

        <div v-if="map[region] && map[region].players && map[region].players.length > 0" class="border-t border-gray-300 px-6 py-4 flex flex-wrap">
          <div class="mx-auto m-2" v-for="player in map[region].players" :key="player.name">
            <div class="shadow-lg rounded-2xl p-2"
              :class="`bg-${color(player.faction).color}-${color(player.faction).code} hover:bg-${color(player.faction).color}-${color(player.faction).codeHover}`" >
                <div class="flex-row gap-4 flex justify-center items-center">
                    <div class="flex-shrink-0">
                      <img :alt="player.name" :src="player.img ? player.img : require(`~/assets/new_gda/icons/${icons(player.faction)}.png`)"
                      class="mx-auto object-cover rounded-full h-12 w-12"/>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-center text-white" >
                            {{player.name}} <img v-if="player.chef" alt="Chef" class="w-4 h-4 inline-block align-baseline" src="~assets/svg/crown.svg">
                        </span>
                        <span class="text-xs text-white">
                            {{player.win}} <img alt="Victoire" class="w-4 h-4 inline-block" src="~assets/svg/trophy.svg">
                            {{player.lose}} <img alt="Défaite" class="w-4 h-4 inline-block" src="~assets/svg/skull.svg">
                            <img v-if="player.withdrew" alt="Repli" class="w-6 h-6 inline-block" src="~assets/new_gda/icons/stop.png">
                            
                            <span v-if="player.handicap > 0 || player.extrahandicap > 0">{{(player.handicap >= 2 ? 30 : player.handicap * 15) + (player.extrahandicap || 0)}} %
                              <img v-if="player.handicap == 0 && player.extrahandicap > 0" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/svg/sangjaune.svg">
                              <img v-if="player.handicap == 1" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/svg/sangorange.svg">
                              <img v-if="player.handicap >= 2" alt="Handicap" class="w-4 h-4 inline-block" src="~assets/svg/sang.svg">
                              
                            </span>
                        </span>
                        
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div v-else class="px-6 py-4 border-t border-gray-300">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Aucun joueur !</span>
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
        active: false
      }
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
      ActionAdjacent(value) {
        this.$emit("close");
        this.$emit('update-info', value);
      },
      icons(value) {
        let info = "";
        switch(value) {
            case 1:
                info = "gondor"
            break;
            case 2:
                info = "elfe"
            break;
            case 3:
                info = "nain"
            break;
            case 4:
                info = "mordor"
            break;
            case 5:
                info = "isengard"
            break;
            case 6:
                info = "gobelin"
            break;
            case 7:
                info = "angmar"
            break;
        }
        return info
      },
      color(id) {
        switch (id) {
          case 1:
            return { color: "blue", code: "500", codeHover: "600"};
          case 2:
            return { color: "green", code: "800", codeHover: "900"};
          case 3:
            return { color: "yellow", code: "400", codeHover: "500"};
          case 4:
            return { color: "red", code: "600", codeHover: "700"};
          case 5:
            return { color: "gray", code: "700", codeHover: "800"};
          case 6:
            return { color: "orange", code: "600", codeHover: "700"};
          case 7:
            return { color: "purple", code: "700", codeHover: "800"};
          default:
            return { color: "black", code: "700", codeHover: "800"};
        }
      }
    },
    props: {
      map: {
          type: Object,
          required: true
      },
      region: {
          type: String,
          required: true
      }
    }
  }

</script>

<style scoped>

.bg-orange-600 {
    --tw-bg-opacity: 1;
    background-color: rgba(234, 88, 12, var(--tw-bg-opacity));
}

.hover\:bg-orange-700:hover {
    --tw-bg-opacity: 1;
    background-color: rgba(194, 65, 12, var(--tw-bg-opacity));
}

</style>