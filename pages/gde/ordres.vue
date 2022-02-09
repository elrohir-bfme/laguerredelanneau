<template>
  <div class="container mx-auto">

        <h1 class="text-3xl text-gray-200 text-center tracking-wide my-5">Génération de vos déplacements :</h1>
        <h2 class="text-2xl text-gray-200 text-left tracking-wide underline my-5">Choix de votre faction :</h2>
       <div class="relative inline-block w-full text-gray-700 mb-10">
            <select v-model="selectedFaction"  class="w-full h-10 pl-3 text-base border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option v-for="option in options" v-bind:value="option.value" :key="option.faction">{{option.faction}}</option>
            </select>
        </div>

        <div v-if="selectedFaction" class="grid grid-cols-9 grid-flow-col gap-4 mb-4">
        <div class="col-span-2 md:col-span-2">
            <h3 class="text-xl text-gray-400">Joueur</h3>
        </div>

        <div class="col-span-3 md:col-span-2">
            <h3 class="text-xl text-gray-400">Lieu actuel</h3>
        </div>

        <div class="col-span-1"></div>

        <div class="flex items-center justify-center col-span-2 md:col-span-4">
             <h3 class="text-xl text-gray-400">Destination</h3>
        </div>
    </div>

        <div v-if="selectedFaction === 1">
            <div v-for="player in playerArnor" v-bind:key="player.name">
                <Order :player="player" :regions="regions"/>
            </div>
        </div>

        <div v-if="selectedFaction === 2">
            <div v-for="player in playerGondor" v-bind:key="player.name">
                <Order :player="player" :regions="regions"/>
            </div>
        </div>

        <div v-if="selectedFaction === 3">
            <div v-for="player in playerRohan" v-bind:key="player.name">
                <Order :player="player" :regions="regions"/>
            </div>
        </div>

        <div v-if="selectedFaction === 4">
            <div v-for="player in playerElfe" v-bind:key="player.name">
                <Order :player="player" :regions="regions"/>
            </div>
        </div>

        <div v-if="selectedFaction === 5">
            <div v-for="player in playerNain" v-bind:key="player.name">
                <Order :player="player" :regions="regions"/>
            </div>
        </div>

        <div v-if="selectedFaction === 6">
            <div v-for="player in playerMordor" v-bind:key="player.name">
                <Order :player="player" :regions="regions"/>
            </div>
        </div>

        <div v-if="selectedFaction === 7">
            <div v-for="player in playerIsengard" v-bind:key="player.name">
                <Order :player="player" :regions="regions"/>
            </div>
        </div>

        <div v-if="selectedFaction === 8">
            <div v-for="player in playerGobelin" v-bind:key="player.name">
                <Order :player="player" :regions="regions"/>
            </div>
        </div>

        <div v-if="selectedFaction === 9">
            <div v-for="player in playerAngmar" v-bind:key="player.name">
                <Order :player="player" :regions="regions"/>
            </div>
        </div>

        <div v-if="selectedFaction">
            <!-- <button  v-on:click="addPlayerMethod" class="bg-gray-900 text-gray-600">ADD PLAYER</button> -->
            <div class="text-gray-700">
                <input v-model="newPlayerName" placeholder="Pseudo Discord" 
                class="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"/>
                <button :disabled="!isDisable" v-on:click="addPlayerMethod" 
                class="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">Ajouter un joueur</button>
            </div>
            <div class="mt-4" v-for="(player, index) in addPlayer" :key="index">
                <Order :player="player" :regions="regions"/>
                <button v-on:click="removePlayerMethod(player)" 
                class="mb-4 px-4 rounded-lg bg-red-600  text-gray-800 font-bold p-2 uppercase border-red-500">
                    <svg class="fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>

        <div class="text-center mb-40 mt-20">
        <button @click="generateText" class="inline-flex text-base md:text-3xl items-center h-10 px-40 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:outline-none  focus:shadow-outline hover:bg-indigo-800 " id="btncreateFile" v-if="selectedFaction != null">
            <svg class="w-10 h-10 mr-3 fill-current" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
            <span>Génération</span>
        </button>
        </div>
  </div>
</template>

<script>

export default {
layout: "gde",
  data() {
    return {
        newPlayerName: "",
        addPlayer: [],
        players: null,
        regions: [],
        playerArnor: [],
        playerElfe: [],
        playerRohan: [],
        playerGondor: [],
        playerNain: [],
        playerMordor: [],
        playerIsengard: [],
        playerGobelin: [],
        playerAngmar: [],
        selectedFaction: null,
        factions: [],
        options: [
            { faction: 'Arnor', 'value': 1 },
            { faction: 'Gondor', 'value': 2 },
            { faction: 'Rohan', 'value': 3 },
            { faction: 'Elfe', 'value': 4 },
            { faction: 'Nain', 'value': 5 },
            { faction: 'Mordor', 'value': 6 },
            { faction: 'Isengard', 'value': 7 },
            { faction: 'Gobelin', 'value': 8 },
            { faction: 'Angmar', 'value': 9 }
        ]
    }
  },
  methods : {
    generateText() {
        let data = "";
        let faction = "";
        let playerArray = [];

        switch (this.selectedFaction) {
            case 1 : playerArray = this.playerArnor; faction = "arnor"; break;
            case 2 : playerArray = this.playerGondor; faction = "gondor"; break;
            case 3 : playerArray = this.playerRohan; faction = "rohan"; break;
            case 4 : playerArray = this.playerElfe; faction = "elfe"; break;
            case 5 : playerArray = this.playerNain; faction = "nain" ;break;
            case 6 : playerArray = this.playerMordor; faction = "mordor"; break;
            case 7 : playerArray = this.playerIsengard; faction = "isengard"; break;
            case 8 : playerArray = this.playerGobelin; faction = "gobelin"; break;
            case 9 : playerArray = this.playerAngmar; faction = "angmar"; break;
            default : console.log("No faction selected");
        }
        //Get data
        playerArray.forEach(element => {
            data += `${element.name} ${element.code} ${document.getElementById(element.name + "arrive").value}\n`;
        });

        this.addPlayer.forEach(element => {
            data += `spawn ${element.name.replace(/ /g, '_')} ${document.getElementById(element.name + "arrive").value} ${element.faction}\n`;
        });
            
        //convert the text to BLOB
        
        const textToBLOB = new Blob([data], { type: "text/plain" });
        const sFileName = `orders${faction}.txt`;	   // The file to save the data.

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        } else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }
        newLink.click(); 
        
    },
    color(id) {
        switch (id) {
            case 1:
            return "#ff85ee"
            case 2:
            return "#093aff"
            case 3:
            return "#0bff00"
            case 4:
            return "#00e3ff"
            case 5:
            return "#fffc00"
            case 6:
            return "#ff3636"
            case 7:
            return "#ffffff"
            case 8:
            return "#ff6f00"
            case 9:
            return "#c500ff"
            default:
            return "#c500ff"
            break;
        }
    },

    addPlayerMethod() {
        this.addPlayer.push({
            name: this.newPlayerName,
            region: "Nouveau_joueur",
            faction: this.selectedFaction,
        });
    },

    removePlayerMethod(RemovePlayer) {
        this.addPlayer = this.addPlayer.filter(item => item !== RemovePlayer);
    }

  },
  computed: {
    isDisable() {
        return this.newPlayerName.length > 0;
    }
  },
  async fetch() {
	  this.players = await this.$http.$get(`https://api.npoint.io/2eeb1bea715cd907d7bc`)
        for (const key in this.players) {

            const obj = this.players[key];

            if(key == "factions"){
                console.log(obj, "JDJEIDI OBJ")
                this.factions = obj;
            }
        
            if (true
            && key!== "riviere"
            && key!== "time"
            && key!== "factions"
            && key!== "La_Grande_Mer"
            && key!== "Rhovanion") {
            
                let newRegion = {
                    "name": obj.name,
                    "code": key,
                    "adjacents": obj.adjacents,
                    "fortress" : obj.hasOwnProperty("fortress"),
                    "citadel": obj.hasOwnProperty("citadel"),
                    "color": obj.color
                }
                this.regions.push(newRegion);
            }

        

            if(obj.hasOwnProperty("players") && obj.players.length > 0) {
                let obj2 = JSON.parse(JSON.stringify(obj['players']))

                for (let player in obj2) {
                    let _player = {
                        "name": obj2[player]['name'],
                        "region": obj.name,
                        "code": key,
                        "adjacents":obj.adjacents,
                        "faction":this.color(obj2[player]['faction'])
                    };
                    switch (obj2[player]['faction']) {
                        case 1:
                            this.playerArnor.push(_player);
                            break;
                        case 2:
                            this.playerGondor.push(_player);
                            break;
                        case 3:
                            this.playerRohan.push(_player);
                            break;
                        case 4:
                            this.playerElfe.push(_player);
                            break;
                        case 5:
                            this.playerNain.push(_player);
                            break;
                        case 6:
                            this.playerMordor.push(_player);
                            break;
                        case 7:
                            this.playerIsengard.push(_player);
                            break;
                        case 8:
                            this.playerGobelin.push(_player);
                            break;
                        case 9:
                            this.playerAngmar.push(_player);
                            break;
                        default:
                            console.log("ERROR");
                    }
                }
            }
        }
    }
}
</script>