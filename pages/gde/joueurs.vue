<template>
<section class="text-gray-100 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-5xl text-4xl font-medium title-font mb-4 text-white">Listes des joueurs</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Si il y'a un souci veuillez contacter Elrohir sur le Discord de la Terre du Milieu merci</p>
    </div>
    <div v-if="!loading" class="flex flex-wrap -m-2">
      <div v-for="player in players" v-bind:key="player.name" class="p-2 lg:w-1/4 md:w-1/2 w-full transform transition duration-500 hover:scale-110 hover:drop-shadow-xl">
        <div class="h-full flex items-center border p-4 rounded-lg bg-gray-900" :class="`border-${color(player.faction)}-700`">
          <img :alt="player.name" class="w-32 h-32 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 transform transition duration-500 hover:scale-110 hover:drop-shadow-xl" :src="player.img ? player.img : require(`~/assets/gde/icons/${icons(player.faction)}.png`)">
          <div class="flex-grow">
            <h2 class="text-white title-font font-medium text-3xl" :class="!player.img && 'text-center'">{{player.name}}</h2>
            <p class="text-gray-500" :class="!player.img && 'text-center'">Victoire : {{player.win}}</p>
            <p class="text-gray-500" :class="!player.img && 'text-center'">Défaite : {{player.lose}}</p>
            <p class="text-gray-500" :class="!player.img && 'text-center'">Ratio : {{(player.win && player.win) ?(player.win / ((player.win + player.lose)) *100).toFixed(2) + '%' : "Aucune partie joué"}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
    layout: "gde",
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
                    info = "arnor"
                break;
                case 2:
                    info = "gondor"
                break;
                case 3:
                    info = "rohan"
                break;
                case 4:
                    info = "elfe"
                break;
                case 5:
                    info = "nain"
                break;
                case 6:
                    info = "mordor"
                break;
                case 7:
                    info = "isengard"
                break;
                case 8:
                    info = "gobelin"
                break;
                case 9:
                    info = "angmar"
                break;
            }
            return info
        },
        color(id) {
            switch (id) {
                case 1:
                return "indigo"
                case 2:
                return "blue"
                case 3:
                return "green"
                case 4:
                return "teal"
                case 5:
                return "yellow"
                case 6:
                return "red"
                case 7:
                return "gray"
                case 8:
                return "orange"
                case 9:
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
      "https://api.npoint.io/2eeb1bea715cd907d7bc"
    );
    this.factions = await this.$http.$get(
      "https://api.npoint.io/2eeb1bea715cd907d7bc/factions"
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