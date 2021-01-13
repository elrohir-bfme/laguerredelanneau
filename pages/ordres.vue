<template>
  <div class="container mx-auto">

       <div class="relative inline-block w-full text-gray-700 mb-10">
            <select v-model="selectedFaction"  class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input">
                

                <option v-for="option in options" v-bind:value="option.value" :key="option.faction">{{option.faction}}</option>

            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
            </div>
        </div>
<!-- 
        <div v-if="players">
            <div v-for="value in players" :key="value" class="relative inline-block w-full text-gray-700">
            <div v-if="Array.isArray(value.players) && value.players.length">
            <select v-model="selected" class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input">
        
                    <option v-for="player in value.players" :key="player">
                        <span v-if="player.faction === selectedFaction">{{player.name}}</span>
                    </option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
            </div>
        </div>
        </div>
        </div>         -->
        
        <!-- <div class="p-8 text-white">
            <span> VOICI LA SELECTIONNE {{selected}}</span>
            <br><br><br><br><br>
            <span> VOICI LA SELECTIONNE {{selectedFaction}}</span>

        
        </div> -->

    
        <div v-if="selectedFaction === 1">
            <div class="grid grid-cols-5 gap-4 mb-4" v-for="player in playerElfe">
                <div class="col-span-1">
                    <span class="h-10 px-5 text-gray-700 transition-colors duration-150 border border-gray-500 rounded-lg focus:shadow-outline hover:bg-gray-500 hover:text-gray-100" placeholder="Regular input">    
                        {{player}}
                    </span>
                </div>

                <div class="relative inline-block w-full text-gray-700 col-span-2">
                    <select  class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input" :id="player+'depart'">    
                        <option v-for="region in regions" :value="region.code">{{region.name}}</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                    </div>
                </div>

                <div class="relative inline-block w-full text-gray-700 col-span-2">
                    <select  class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input" :id="player+'arrive'">    
                        <option v-for="region in regions" :value="region.code">{{region.name}}</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="selectedFaction === 2">
            <div class="grid grid-cols-5 gap-4 mb-4" v-for="player in playerRohan">
                <div class="col-span-1">
                    <span   class="h-10 px-5 text-gray-700 transition-colors duration-150 border border-gray-500 rounded-lg focus:shadow-outline hover:bg-gray-500 hover:text-gray-100" placeholder="Regular input">    
                        {{player}}
                    </span>
                </div>

                <div class="relative inline-block w-full text-gray-700 col-span-2">
                    <select  class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input" :id="player+'depart'">    
                        <option v-for="region in regions" :value="region.code">{{region.name}}</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                    </div>
                </div>

                <div class="relative inline-block w-full text-gray-700 col-span-2">
                    <select  class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input" :id="player+'arrive'">    
                        <option v-for="region in regions" :value="region.code">{{region.name}}</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="selectedFaction === 3">
            <div class="grid grid-cols-5 gap-4 mb-4" v-for="player in playerGondor">
                <div class="col-span-1">
                    <span   class="h-10 px-5 text-gray-700 transition-colors duration-150 border border-gray-500 rounded-lg focus:shadow-outline hover:bg-gray-500 hover:text-gray-100" placeholder="Regular input">    
                        {{player}}
                    </span>
                </div>

                <div class="relative inline-block w-full text-gray-700 col-span-2">
                    <select  class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input" :id="player+'depart'">    
                        <option v-for="region in regions" :value="region.code" >{{region.name}}</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                    </div>
                </div>

                <div class="relative inline-block w-full text-gray-700 col-span-2">
                    <select  class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input" :id="player+'arrive'">    
                        <option v-for="region in regions" :value="region.code">{{region.name}}</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="selectedFaction === 4">
            <div class="grid grid-cols-5 gap-4 mb-4" v-for="player in playerNain">
                <div class="col-span-1">
                    <span   class="h-10 px-5 text-gray-700 transition-colors duration-150 border border-gray-500 rounded-lg focus:shadow-outline hover:bg-gray-500 hover:text-gray-100" placeholder="Regular input">    
                        {{player}}
                    </span>
                </div>

                <div class="relative inline-block w-full text-gray-700 col-span-2">
                    <select  class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input" :id="player+'depart'">    
                        <option v-for="region in regions" :value="region.code">{{region.name}}</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                    </div>
                </div>

                <div class="relative inline-block w-full text-gray-700 col-span-2">
                    <select  class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input" :id="player+'arrive'">    
                        <option v-for="region in regions" :value="region.code">{{region.name}}</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="selectedFaction === 5">
            <div class="grid grid-cols-5 gap-4 mb-4" v-for="player in playerMordor">
                <div class="col-span-1">
                    <span   class="h-10 px-5 text-gray-700 transition-colors duration-150 border border-gray-500 rounded-lg focus:shadow-outline hover:bg-gray-500 hover:text-gray-100" placeholder="Regular input">    
                        {{player}}
                    </span>
                </div>

                <div class="relative inline-block w-full text-gray-700 col-span-2">
                    <select  class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input" :id="player+'depart'">    
                        <option v-for="region in regions" :value="region.code">{{region.name}}</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                    </div>
                </div>

                <div class="relative inline-block w-full text-gray-700 col-span-2">
                    <select  class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input" :id="player+'arrive'">    
                        <option v-for="region in regions" :value="region.code">{{region.name}}</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="selectedFaction === 6">
            <div class="grid grid-cols-5 gap-4 mb-4" v-for="player in playerIsengard">
                <div class="col-span-1">
                    <span   class="h-10 px-5 text-gray-700 transition-colors duration-150 border border-gray-500 rounded-lg focus:shadow-outline hover:bg-gray-500 hover:text-gray-100" placeholder="Regular input">    
                        {{player}}
                    </span>
                </div>

                <div class="relative inline-block w-full text-gray-700 col-span-2">
                    <select  class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input" :id="player+'depart'">    
                        <option v-for="region in regions" :value="region.code">{{region.name}}</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                    </div>
                </div>

                <div class="relative inline-block w-full text-gray-700 col-span-2">
                    <select  class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input" :id="player+'arrive'">    
                        <option v-for="region in regions" :value="region.code">{{region.name}}</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="selectedFaction === 7">
            <div class="grid grid-cols-5 gap-4 mb-4" v-for="player in playerGobelin">
                <div class="col-span-1">
                    <span   class="h-10 px-5 text-gray-700 transition-colors duration-150 border border-gray-500 rounded-lg focus:shadow-outline hover:bg-gray-500 hover:text-gray-100" placeholder="Regular input">    
                        {{player}}
                    </span>
                </div>

                <div class="relative inline-block w-full text-gray-700 col-span-2">
                    <select  class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input" :id="player+'depart'">    
                        <option v-for="region in regions" :value="region.code">{{region.name}}</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                    </div>
                </div>

                <div class="relative inline-block w-full text-gray-700 col-span-2">
                    <select  class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input" :id="player+'arrive'">    
                        <option v-for="region in regions" :value="region.code">{{region.name}}</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="selectedFaction === 8">
            <div class="grid grid-cols-5 gap-4 mb-4" v-for="player in playerAngmar">
                <div class="col-span-1">
                    <span   class="h-10 px-5 text-gray-700 transition-colors duration-150 border border-gray-500 rounded-lg focus:shadow-outline hover:bg-gray-500 hover:text-gray-100" placeholder="Regular input">    
                        {{player}}
                    </span>
                </div>

                <div class="relative inline-block w-full text-gray-700 col-span-2">
                    <select  class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input" :id="player+'depart'">    
                        <option v-for="region in regions" :value="region.code">{{region.name}}</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                    </div>
                </div>

                <div class="relative inline-block w-full text-gray-700 col-span-2">
                    <select  class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input" :id="player+'arrive'">    
                        <option v-for="region in regions" :value="region.code">{{region.name}}</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                    </div>
                </div>
            </div>
        </div>

        <button @click="generateText" class="inline-flex items-center h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800" id="btncreateFile" v-if="selectedFaction != null">
            <svg class="w-4 h-4 mr-3 fill-current" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
            <span>Génération</span>
        </button>

        
  </div>
</template>

<script>
export default {
  data() {
    return {
      players: null,
      regions: [],
      playerElfe: [],
      playerRohan: [],
      playerGondor: [],
      playerNain: [],
      playerMordor: [],
      playerIsengard: [],
      playerGobelin: [],
      playerAngmar: [],
      selected: null,
      selectedFaction: null,
      selectedRegion_1: null,
      selectedRegion_2: null,
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
  methods : {
    generateText() {
        let data = "";
        let faction = "";
        let playerArray = [];

        switch (this.selectedFaction){
            case 1 : playerArray = this.playerElfe; faction = "elfe"; break;
            case 2 : playerArray = this.playerRohan; faction = "rohan"; break;
            case 3 : playerArray = this.playerGondor; faction = "gondor"; break;
            case 4 : playerArray = this.playerNain; faction = "nain" ;break;
            case 5 : playerArray = this.playerMordor; faction = "mordor"; break;
            case 6 : playerArray = this.playerIsengard; faction = "isengard"; break;
            case 7 : playerArray = this.playerGobelin; faction = "gobelin"; break;
            case 8 : playerArray = this.playerAngmar; faction = "angmar"; break;
            default : console.log("No faction selected");
        }
        //Get data
        playerArray.forEach
        (element => {
         data = data + element +" "+(document.getElementById(element+"depart").value)
         +" "+(document.getElementById(element+"arrive").value)+ '\n'
        }); 
            
        //convert the text to BLOB
        
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = 'orders'+faction+'.txt';	   // The file to save the data.

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click(); 
        
    }

  },
  async fetch() {
	  this.players = await this.$http.$get(`https://api.npoint.io/38a2899b98818d89418c`)
      // this.data = await this.$http.$get(`https://api.npoint.io/a982d740a3c6fa4e6847/${this.region}`) // API TEST
        for (let key in this.players) {

        var obj = this.players[key];

        console.log(key);
        if(key!== "riviere" && key!== "BateauK" && key!== "BateauJ" && key!== "BateauJ" && key!== "BateauI" && key!== "BateauH" && key!== "time" &&
        key!== "BateauG" && key!== "BateauF" && key!== "BateauE" && key!== "BateauD" && key!== "BateauC" && key!== "BateauB" && key!== "BateauA" && key!== "Tol_Fuin" && key!== "factions" ) {
            let newRegion = {
                "name": obj.name,
                "code": key
            }
            this.regions.push(newRegion);
        }

        if(obj.hasOwnProperty("players") && obj.players.length > 0) {
            let obj2 = JSON.parse(JSON.stringify(obj['players']))

            for (let player in obj2) {
                switch (obj2[player]['faction']) {
                    case 1:
                        this.playerElfe.push(obj2[player]['name'])
                    break;
                    case 2:
                        this.playerRohan.push(obj2[player]['name'])
                    break;
                    case 3:
                        this.playerGondor.push(obj2[player]['name'])
                    break;
                    case 4:
                        this.playerNain.push(obj2[player]['name'])
                    break;
                    case 5:
                        this.playerMordor.push(obj2[player]['name'])
                    break;
                    case 6:
                        this.playerIsengard.push(obj2[player]['name'])
                    break;
                    case 7:
                        this.playerGobelin.push(obj2[player]['name'])
                    break;
                    case 8:
                        this.playerAngmar.push(obj2[player]['name'])
                    break;
                    default:
                        console.log("ERROR")
                    break;
                }
            }

            
        }
      }
    },
}
</script>