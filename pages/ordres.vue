<template>
  <div class="container mx-auto">

       <div v-if="data" class="relative inline-block w-full text-gray-700">
            <select v-model="selectedFaction"  class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input">
                

                <option v-for="option in options" :key="option.faction">{{option.faction}}</option>

            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
            </div>
        </div>

        <div v-if="data" class="relative inline-block w-full text-gray-700">
            <select v-model="selected"  v-for="value in data" :key="value" class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input">
                
                <option v-for="player in value.players" v-if="value.players !== []" :key="player">
                   
                    <span v-if="player.name === 1">
                         {{player.name}}
                    </span>
                </option>

            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
            </div>
        </div>
        
        <div class="p-8 text-white">
            <span> VOICI LA SELECTIONNE {{selected}}</span>
            <br><br><br><br><br>
            <span> VOICI LA SELECTIONNE {{selectedFaction}}</span>
        </div>
        
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      selected: null,
      selectedFaction: null,
      options: [
      { faction: 'Elfe', 'value': 1 },
      { faction: 'Rohan', 'value': 2 },
      { faction: 'Gondor', 'value': 3 },
      { faction: 'Nain', 'value': 4 },
      { faction: 'Mordor', 'value': 5 },
      { faction: 'Isengard', 'value': 6 },
      { faction: 'Gobelin', 'value': 7 },
      { faction: 'Angmar', 'value': 8 }
    ]
    }
  },
  async fetch() {
	  this.data = await this.$http.$get(`https://api.npoint.io/38a2899b98818d89418c`)
	  // this.data = await this.$http.$get(`https://api.npoint.io/a982d740a3c6fa4e6847/${this.region}`) // API TEST
	}
}
</script>