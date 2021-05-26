<template>
<div class="container mx-auto">
    <div class="container mx-auto px-4 sm:px-8 max-w-3xl">
    <div class="py-8">
        <div class="flex flex-row mb-1 sm:mb-0 justify-between w-full">
            <label class="text-gray-700">
                {{ faction }}
                <select 
                v-model="selectedFaction"
                @change="search($event)"
                id="factions" 
                class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" 
                name="factions">
                    <option v-for="faction in factions" :key="faction.id" :value="faction.id">
                        {{faction.name}}
                    </option>
                </select>
            </label>
        </div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table class="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                    User
                                </th>
                                <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                    Role
                                </th>
                                <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                    Created at
                                </th>
                                <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                    status
                                </th>
                                <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="player in players" :key="player.id">
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0">
                                            <a href="#" class="block relative">
                                                <img alt="profil" src="/images/person/8.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                                            </a>
                                        </div>
                                        <div class="ml-3">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                {{ player.name}}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        {{ player.region.name }}
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        {{ player.name }}
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                        </span>
                                        <span class="relative">
                                            {{ player.name }}
                                        </span>
                                    </span>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <a href="#" class="text-indigo-600 hover:text-indigo-900">
                                        Edit
                                    </a>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="text-center mb-40 mt-20">
        <button @click="generateText" class="inline-flex text-base md:text-3xl items-center h-10 px-40 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:outline-none  focus:shadow-outline hover:bg-indigo-800 " id="btncreateFile" v-if="selectedFaction != null">
            <svg class="w-10 h-10 mr-3 fill-current" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
            <span>Génération</span>
        </button>
        </div>
    </div>
</div>
</template>

<script>

import getFactions from '~/apollo/queries/faction/factions'
import getFaction from '~/apollo/queries/faction/faction'

export default {
    layout: 'wotn',
    data() {
      return {
        faction: '',
        factions: [],
        selectedFaction: null,
        players: []
      }
    },
    apollo: {
      factions: {
        query: getFactions
      },
    },
    methods: {
        async search(event) {
            try {
                this.faction = event.target.value;
                const res = await this.$apollo.query({
                query: getFaction,
                variables: {
                    id: event.target.value,
                },
                });
                if (res) {
                    this.players = res.data.faction.players;
                }
            } catch (err) {
                console.log(err)
            }
        },
            generateText() {
                // let data = "";
                // let faction = "";
                // let playerArray = [];
                // switch (this.selectedFaction) {
                //     case 1 : playerArray = this.playerElfe; faction = "elfe"; break;
                //     case 2 : playerArray = this.playerRohan; faction = "rohan"; break;
                //     case 3 : playerArray = this.playerGondor; faction = "gondor"; break;
                //     case 4 : playerArray = this.playerNain; faction = "nain" ;break;
                //     case 5 : playerArray = this.playerMordor; faction = "mordor"; break;
                //     case 6 : playerArray = this.playerIsengard; faction = "isengard"; break;
                //     case 7 : playerArray = this.playerGobelin; faction = "gobelin"; break;
                //     case 8 : playerArray = this.playerAngmar; faction = "angmar"; break;
                //     default : console.log("No faction selected");
                // }
                // //Get data
                // playerArray.forEach(element => {
                //     data += `${element.name} ${element.code} ${document.getElementById(element.name + "arrive").value}\n`;
                // });
                // this.addPlayer.forEach(element => {
                //     data += `spawn ${element.name.replace(/ /g, '_')} ${document.getElementById(element.name + "arrive").value} ${element.faction}\n`;
                // });
                    
                // //convert the text to BLOB
                
                const textToBLOB = new Blob(["data"], { type: "text/plain" });
                const sFileName = `orders${"faction"}.txt`;	   // The file to save the data.
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
    }
}
</script>

<style>

</style>