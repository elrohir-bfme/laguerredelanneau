<template>
  <section class="text-gray-400 font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Statistiques</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Listes des joueurs</p>
    </div>
    <div class="flex flex-wrap -m-2">
      <div v-for="player in players" :key="player.id" class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg bg-gray-800 hover:bg-gray-900">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80">
          <div class="flex-grow">
            <h2 class="text-white title-font font-medium">{{ player.name }}</h2>
            <p class="text-gray-600">{{ player.win }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>


<script>
  export default {
    layout: 'wotn',
    head: {
      title: "La Guerre de l'Anneau",
      meta: [{
        hid: 'description',
        name: 'description',
        content: "Carte de la Guerre de l'Anneau"
      }],
    },
    data() {
      return {
        players: []
      }
    },
    async fetch() {
      this.players = await this.$strapi.$players.find()
    }
  }

</script>
