<template>
  <div>
    <h1 class="text-white text-3xl">HELLO WORD</h1>
    <button 
      class="border-2 text-2xl tracking-wide border-green-500 rounded-lg text-green-600 px-4 py-3 transition duration-300 ease-in-out hover:bg-green-900 hover:text-green-400 mr-6" 
      v-on:click="upload_regions">UPLOAD REGIONS</button>
    <button 
      class="border-2 text-2xl tracking-wide border-green-500 rounded-lg text-green-600 px-4 py-3 transition duration-300 ease-in-out hover:bg-green-900 hover:text-green-400 mr-6" 
      v-on:click="upload_players">UPLOAD PLAYERS</button>
    <button 
      class="border-2 text-2xl tracking-wide border-green-500 rounded-lg text-green-600 px-4 py-3 transition duration-300 ease-in-out hover:bg-green-900 hover:text-green-400 mr-6"
      v-on:click="upload_factions">UPLOAD FACTIONS</button>
    <table class="border-collapse w-full">
      <template v-for="player in players">
        <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
          <td class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">{{player.name}}</td>
          <td class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">{{player.faction.name}}</td>
        </tr>
      </template>
    </table>
  </div>
</template>

<script>
export default {
  name:'test-componenmt',
  computed: {
    async players() {
      return await
      Promise.resolve()
      .then(() => this.$root.context.app.$fire.firestore)
      .then(store => store.collection("regions").where("name", "==", "Rhun").get())
      .then((regions) => regions.docs[0].data())
      .then((region) => region.players)
      .then((players) => Promise.all(players.map(player => player.get())))
      .then(players => players.map(player => player.data()))
      .then(players => players.map(player => player.faction = player.faction.get()))
      .then(players => players.map(player => ))
      .then((players) => {
        console.table(players);
        return players;
      })
    },
  },

  methods: {

    // UPLOAD REGIONS TO FIREBASE
    upload_regions() {
  
      fetch("/regions.json")
      .then(response => response.json())
      .then(response => Object.entries(response))
      .then(([key, value]) => Promise.all(regions.map(region => {
        region.players = region.players.map((player) => this.$root.context.app.$fire.firestore.doc("players/" + player.name));
        return this.$root.context.app.$fire.firestore.collection("regions").doc(key).set(value);
      })))
      .then(() => console.log("DONE"))
      .catch((error) => console.error(error));
    },

    
    // UPLOAD PLAYERS TO FIREBASE
    upload_players() {

        fetch("/regions.json")
        .then(response => response.json())
        .then(response => Object.values(response))
        .then(regions => Promise.all(regions.reduce((p,region) => {
          region.players.map(player =>{
            player.faction = this.$root.context.app.$fire.firestore.doc('players/' +["","elfe","rohan","gondor","nain","mordor","isengard","gobelin","angmar"][player.faction])
          })
          p.push(... region.players);
          return p;
        }, [])))
        .then(() => console.log("DONE"))
        .catch((error) => console.error(error));
    },

    upload_factions() {
    }
  }
}
</script>