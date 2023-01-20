<template>
<section class="text-gray-100 body-font">
  <div class="container py-12 mx-auto">
    <div class="flex flex-col text-center w-full">
      <h1 class="sm:text-5xl text-4xl font-medium title-font pb-4 text-white">Liste des factions</h1>
    </div>
    <div class="mt-4" v-if="!loading" >
      <div class="flex flex-wrap -m-2 bg-gray-900 mb-10 rounded-2xl pt-4 border-2" v-for="faction in allFactions" v-bind:key="faction.name"  :class="`border-${color(faction.color)}-700`">
        <h2 class="text-white title-font font-bold text-4xl text-center w-full underline">{{ faction.name }}</h2>
      <div v-for="player in faction.players" v-bind:key="player.name" class="p-2 xl:1/12 lg:w-1/6 md:w-1/4 w-full transform transition duration-500 hover:scale-110 hover:drop-shadow-xl">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-32 h-32 object-cover object-center mb-4 transform transition duration-500 hover:scale-110 hover:drop-shadow-xl" :src="player.img ? player.img : require(`~/assets/new_gda/icons/${icons(player.faction)}.png`)">
          <div class="w-full">
            <p class="text-white title-font font-medium text-3xl">{{ player.name.replace(/_/g, " ") }}</p>
          </div>
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
            loading: true,
            homme: [],
            elfe: [],
            nain: [],
            mordor: [],
            isengard: [],
            gobelin: [],
            angmar: [],
            allFactions: []
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
      "https://api.npoint.io/7a210a01331f3c385ed7"
    );

    console.log(this.map, "jdeijdieji")

    for (var key in this.map) {
        var obj = this.map[key];

      if (obj.hasOwnProperty("players") && obj.players.length > 0) {
          let obj2 = JSON.parse(JSON.stringify(obj["players"]));
          console.log(obj2, "jdeijdie")
        for (var player in obj2) {
          console.log(player, "jidejidje")
          switch(obj2[player]["faction"]) {
                case 1:
                  this.homme.push(obj2[player])
                break;
                case 2:
                  this.elfe.push(obj2[player])
                break;
                case 3:
                  this.nain.push(obj2[player])
                break;
                case 4:
                  this.mordor.push(obj2[player])
                break;
                case 5:
                  this.isengard.push(obj2[player])
                break;
                case 6:
                  this.gobelin.push(obj2[player])
                break;
                case 7:
                  this.angmar.push(obj2[player])
                break;
            }
        }
      }
    }

    this.loading = false;
    this.allFactions = [
      {name: "Homme", players: this.homme, color: 1},
      {name: "Elfe", players: this.elfe, color: 2},
      {name: "Nain", players: this.nain, color: 3},
      {name: "Mordor", players: this.mordor, color: 4},
      {name: "Isengard", players: this.isengard, color: 5},
      {name: "Gobelin", players: this.gobelin, color: 6},
      {name: "Angmar", players: this.angmar, color: 7}
    ]
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