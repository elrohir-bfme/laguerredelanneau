<template>
  <div class="z-10 fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0  sm:items-center sm:justify-center">
    <div class="fixed inset-0 transition-opacity" @click="handleClose">
      <div class="absolute inset-0 bg-gray-500 opacity-25"></div>
    </div>
    <div class="z-40 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all" role="dialog"
      aria-modal="true" aria-labelledby="modal-headline">
      <div class="max-w-2xl rounded overflow-hidden shadow-lg">
        <div class="relative flex">
          <img v-if="map[region]" class="object-cover h-48 min-h-full w-full" :src="map[region].img">
          <div v-if="map[region] && map[region].minimap" class="w-1/3 flex flex-col">
            <img v-if="map[region]" class="object-contain" :src="map[region].minimap && map[region].minimap">
            
            <a v-if="map[region] && map[region].mapdl" target="_blank" :href="map[region].mapdl"
              class="bg-gray-300 hover:bg-gray-400 text-gray-900 font-bold mx-auto py-4 flex text-sm justify-center w-full h-full content-center items-center">
              <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
              <span>Télécharger</span>
            </a>
            <span  v-if="map[region] && map[region].darkness" class="absolute bottom-2 left-2 text-white text-xl shadow-md underline inline-flex items-center">
              <img  src="~assets/gde/img/darkness.png">
              Ombre
            </span>
            
          </div>
        </div>
        <div class="px-6 py-3">
          <div class="flex justify-between font-bold text-xl mb-2">
            <div v-if="map[region]">
              <p @click="copyId()" :class="map[region] && map[region].minimap && 'absolute top-2 left-2'" class="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 ml-2 px-4 rounded text-base">
                {{map[region].name}} 
                
                <img v-if="map[region] && map[region].port" class="inline-flex mb-1 h-6 w-6"  src="~assets/new_gda/icons/port.png">
                <img v-if="map[region] && map[region].camp" class="inline-flex mb-1 h-8 w-8"  src="~assets/new_gda/icons/camp.png">
                <img v-if="map[region] && map[region].farm" class="inline-flex mb-1 h-6 w-6"  src="~assets/new_gda/icons/farm.png">

                
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
        </div>

        <div v-if="map[region] && map[region].players && map[region].players.length > 0" class="border-t border-gray-300 px-6 py-4 flex flex-wrap">
          <div class="mx-auto m-2" v-for="player in map[region].players" :key="player.name">
            <div class="shadow-lg rounded-2xl p-2"
              :class="`bg-${color(player.faction).color}-${color(player.faction).code} hover:bg-${color(player.faction).color}-${color(player.faction).codeHover}`" >
                <div class="flex-row gap-4 flex justify-center items-center">
                    <div class="flex-shrink-0">
                      <img :alt="player.name" :src="player.img ? player.img : require(`~/assets/totalwar/factions/${icons(player.faction)}.webp`)"
                      class="mx-auto object-cover rounded-full h-12 w-12"/>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-center text-white" >
                            {{player.name.replace(/_/g, " ")}} <img v-if="player.chef" alt="Chef" class="w-4 h-4 inline-block align-baseline" src="~assets/svg/crown.svg"> <img v-if="player.flag" alt="Etendard" class="w-4 h-4 inline-block align-baseline" src="~assets/svg/flag.svg">
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
                            <img v-if="player.banner" alt="Banner" class="w-6 h-6 inline-block" src="~assets/svg/flag.svg">
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
                info = "cathay"
            break;
            case 2:
                info = "elfes_sylvains"
            break;
            case 3:
                info = "empire"
            break;
            case 4:
                info = "guerriers_du_chaos"
            break;
            case 5:
                info = "hauts_elfes"
            break;
            case 6:
                info = "roi_des_tombes"
            break;
            case 7:
                info = "skavens"
            break;
            case 8:
                info = "modo"
            break
        }
        return info
      },
      color(id) {
        switch (id) {
          case 1:
            return { color: "purple", code: "700", codeHover: "800"};
          case 2:
            return { color: "green", code: "800", codeHover: "900"};
          case 3:
            return { color: "red", code: "600", codeHover: "700"};
          case 4:
            return { color: "gray", code: "700", codeHover: "800"};
          case 5:
            return { color: "blue", code: "500", codeHover: "600"};
          case 6:
            return { color: "yellow", code: "500", codeHover: "600"};
          case 7:
            return { color: "orange", code: "800", codeHover: "900"};
          case 8:
          return { color: "teal", code: "500", codeHover: "600"};
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
      },
      totalwar: {
          type: Boolean,
          required: false,
          default: false
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