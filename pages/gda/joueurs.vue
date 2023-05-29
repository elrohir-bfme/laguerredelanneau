<template>
<section class="text-gray-100 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-5xl text-4xl font-medium title-font mb-4 text-white">{{ $t('joueurs.title') }}</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">{{ $t('joueurs.info') }}</p>
    </div>
    <div v-if="!loading" class="flex flex-wrap -m-2">
      <div v-for="player in players" v-bind:key="player.name" class="p-2 lg:w-1/4 md:w-1/2 w-full transform transition duration-500 hover:scale-110 hover:drop-shadow-xl">
        <div class="h-full flex items-center border-4 p-4 rounded-lg bg-gray-900" :class="`border-${color(player.faction)}-700`">
          <img :alt="player.name" class="w-32 h-32 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 transform transition duration-500 hover:scale-110 hover:drop-shadow-xl" :src="player.img ? player.img : require(`~/assets/new_gda/icons/${icons(player.faction)}.png`)">
          <div class="flex-grow">
            <h2 class="text-white title-font font-medium text-3xl" :class="!player.img && 'text-center'">{{player.name}}</h2>
            <p class="text-gray-500" :class="!player.img && 'text-center'">{{ $t('joueurs.victoire') }} : {{player.win}}</p>
            <p class="text-gray-500" :class="!player.img && 'text-center'">{{ $t('joueurs.defaite') }} : {{player.lose}}</p>
            <p class="text-gray-500" :class="!player.img && 'text-center'">{{ $t('joueurs.ratio') }} : {{(player.win && player.win) ?(player.win / ((player.win + player.lose)) *100).toFixed(2) + '%' : "Aucune partie joué"}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
    layout: "gda",
    data() {
        return {
            players: [],
            loading: true
        }
    },
    methods: {
          icons(value) {
            let info = "";
            switch(value) {
                case 1:
                    info = "homme"
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
                return "blue"
                case 2:
                return "green"
                case 3:
                return "yellow"
                case 4:
                return "red"
                case 5:
                return "gray"
                case 6:
                return "orange"
                case 7:
                return "purple"
                default:
                return "black"
                break;
            }
        },
    },
    async fetch() {
    this.loading = true;

    this.map = await this.$http.$get(
      "https://api.npoint.io/3161305ced8bd4e9d70c"
    );
    this.factions = await this.$http.$get(
      "https://api.npoint.io/3161305ced8bd4e9d70c/factions"
    ); //API


    for (var key in this.map) {
        var obj = this.map[key];

      if (obj.hasOwnProperty("players") && obj.players.length > 0) {
          let obj2 = JSON.parse(JSON.stringify(obj["players"]));
        for (var player in obj2) {
            this.players.push(obj2[player])
        }
      }
    }
    this.loading = false;
  },

}
</script>

<style scoped>

.bg-orange-600 {
    --tw-bg-opacity: 1;
    background-color: rgba(234, 88, 12, var(--tw-bg-opacity));
}

.text-orange-100 {
    --tw-text-opacity: 1;
    color: rgba(255, 237, 213, var(--tw-text-opacity));
}

.hover\:bg-orange-700:hover {
    --tw-bg-opacity: 1;
    background-color: rgba(194, 65, 12, var(--tw-bg-opacity));
}

</style>