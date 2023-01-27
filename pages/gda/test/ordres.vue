<template>
  <div class="container mx-auto">

        <h1 class="text-3xl text-gray-200 text-center tracking-wide my-5">Génération de vos déplacements :</h1>
        <h2 class="text-2xl text-gray-200 text-left tracking-wide underline my-5">{{selectedFaction ? 
            `Vous avez sélectionné : ${factionsSelected(selectedFaction).name} - ${factionsSelected(selectedFaction).money} de ressources` 
            : "Choix de votre faction :"}}</h2>
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
            <div v-for="player in playerHomme" v-bind:key="player.name">
                <Order :player="player" :regions="regions"/>
            </div>
        </div>

        <div v-if="selectedFaction === 2">
            <div v-for="player in playerElfe" v-bind:key="player.name">
                <Order :player="player" :regions="regions"/>
            </div>
        </div>

        <div v-if="selectedFaction === 3">
            <div v-for="player in playerNain" v-bind:key="player.name">
                <Order :player="player" :regions="regions"/>
            </div>
        </div>

        <div v-if="selectedFaction === 4">
            <div v-for="player in playerMordor" v-bind:key="player.name">
                <Order :player="player" :regions="regions"/>
            </div>
        </div>

        <div v-if="selectedFaction === 5">
            <div v-for="player in playerIsengard" v-bind:key="player.name">
                <Order :player="player" :regions="regions"/>
            </div>
        </div>

        <div v-if="selectedFaction === 6">
            <div v-for="player in playerGobelin" v-bind:key="player.name">
                <Order :player="player" :regions="regions"/>
            </div>
        </div>

        <div v-if="selectedFaction === 7">
            <div v-for="player in playerAngmar" v-bind:key="player.name">
                <Order :player="player" :regions="regions"/>
            </div>
        </div>


        <div v-if="selectedFaction">
            <h3 class="text-2xl text-gray-200 text-left tracking-wide underline my-5">
                Les Pouvoirs - Vous avez ({{factionsSelected(selectedFaction).money}} de ressources)
            </h3>

            <div v-if="factionsSelected(selectedFaction).money >= 300 || (taintedLandInfo && bannerInfo && healInfo)">


                <button @click="addPower" class="inline-flex text-xl items-center border-2 border-orange-400 h-10 px-40 text-orange-400 transition-colors duration-150 bg-gray-800 rounded-lg focus:outline-none  focus:shadow-outline hover:bg-gray-900 " id="btncreateFile" v-if="selectedFaction != null">
                    Ajouter un nouveau pouvoir
                </button>

                <div v-if="nbPowers.length > 0" class="grid grid-cols-9 grid-flow-col gap-4 my-4">
                    <div class="col-span-2 md:col-span-2">
                        <h3 class="text-xl text-gray-400">Pouvoir</h3>
                    </div>

                    <div class="col-span-3 md:col-span-2">
                        <h3 class="text-xl text-gray-400">Prix</h3>
                    </div>

                    <div class="col-span-1"></div>

                    <div class="flex items-center justify-center col-span-2 md:col-span-4">
                        <h3 class="text-xl text-gray-400">Action</h3>
                    </div>
                    <div class="col-span-1">
                        <h3 class="text-xl text-gray-400">Supprimer</h3>
                    </div>
                </div>

                <div v-for="power in nbPowers" v-bind:key="power">
                    <Powers :index="power" :money="factionsSelected(selectedFaction).money" :playerList="playerList" :selectedFaction="selectedFaction" :regions="regions"/>
                </div>


            </div>

            <div v-else>
                <h4 class="text-2xl text-gray-200 text-left tracking-wide my-5">
                    Malheureseent vous n'avez pas assez d'argent pour prendre un pouvoir (minimum de 300)
Malheureseent vous n'avez pas assez d'argent pour prendre un pouvoir (minimum de 300)
Malheureusement vous n'avez pas assez d'argent pour prendre un pouvoir (minimum de 300)
                </h4>
            </div>
        </div>

        <!-- <div v-if="selectedFaction">
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
        </div> -->

        <div class="text-center mb-40 mt-20">
        <button @click="generateText" class="inline-flex text-base md:text-3xl items-center h-10 px-40 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:outline-none  focus:shadow-outline hover:bg-indigo-800 " id="btncreateFile" v-if="selectedFaction != null">
            <svg class="w-10 h-10 mr-3 fill-current" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
            <span>Génération</span>
        </button>
        </div>

                    <div>
                <ul class="flex flex-col p-4 font-mono">
                    <li class="border-gray-400 flex flex-row">
                        <div
                            class="select-none flex bg-gray-900 flex-1 items-center p-4 transition text-white duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 hover:shadow-2xl border-orange-400"
                        >
                            <div class="flex-1 pl-1 mr-16">
                                <div class="font-medium">
                                    Coûte 400, permet d’enlever le handicap d’un joueur de la faction qui utilise le sort, à condition qu’il se situe dans une forteresse possédée par cette faction. Un joueur ainsi soigné peut seulement se déplacer vers un territoire allié pour ce tour, sans double déplacement. Tout boost de déplacement est également impossible pour ce joueur et pendant ce tour.
                                </div>
                            </div>
                            <div
                                class="w-1/4 text-wrap text-center flex text-white text-bold flex-col rounded-md bg-orange-500 justify-center items-center mr-10 p-2"
                            >
                                Toucher guérisseur
                            </div>
                        </div>
                    </li>
                    <li class="border-gray-400 flex flex-row mb-2">
                        <div
                            class="select-none rounded-md bg-gray-900 flex flex-1 items-center p-4 transition text-white duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 mt-3 border-orange-400 hover:shadow-2xl"
                        >
                            <div class="flex-1 pl-1 mr-16">
                                <div class="font-medium">
                                    Coûte 400, permet d’augmenter de un territoire la portée de déplacement pour un joueur de la faction qui utilise le sort, (pouvoir valable uniquement en partant d’une forteresse possédée par cette faction), vers des territoires alliés seulement.
                                </div>
                            </div>
                            <div
                                class="w-1/4 text-wrap text-center text-white text-bold flex flex-col rounded-md bg-orange-500 justify-center items-center mr-10 p-2"
                            >
                                Sort de Vélocité
                            </div>
                        </div>
                    </li>
                    <li class="border-gray-400 flex flex-row mb-2">
                        <div
                            class="select-none rounded-md bg-gray-900 flex flex-1 items-center p-4 transition text-white duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 mt-3 border-orange-400 hover:shadow-2xl"
                        >
                            <div class="flex-1 pl-1 mr-16">
                                <div class="font-medium">
                                    Coûte 600, permet de donner la possibilité à un joueur de choisir une faction lors d’un tour. Lors d’un déplacement, vous devez donner le nom du joueur et la faction qu’il joue. Si le joueur doit jouer un match il doit prendre la faction attribuée mais si le joueur n’a aucun match, le pouvoir n’aura aucun effet et disparaîtra sans avoir été utilisé. 
                                </div>
                            </div>
                            <div
                                class="w-1/4 text-wrap text-center text-white text-bold flex flex-col rounded-md bg-orange-500 justify-center items-center mr-10 p-2"
                            >
                                Appel du mercenaire
                            </div>
                        </div>
                    </li>
                    <li class="border-gray-400 flex flex-row mb-2">
                        <div
                            class="select-none rounded-md bg-gray-900 flex flex-1 items-center p-4 transition text-white duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 mt-3 border-orange-400 hover:shadow-2xl"
                        >
                            <div class="flex-1 pl-1 mr-16">
                                <div class="font-medium">Coûte 3000, permet de bloquer la vision des joueurs ennemis situés sur un territoire précis, pendant un tour, ce qui bloque (annule) leurs déplacements de ce tour. Attention, l’ombre n’affecte pas les déplacements vers une forteresse. L’utilisation de l’ombre doit être annoncée en même temps que les ordres de déplacements et empêche les déplacements prévus pour ce tour, pour les joueurs concernés. Notez qu’une ombre ne peut pas affecter un même territoire sur deux tours d'affilée. 
Par ailleurs, chaque utilisation de l’ombre par une faction augmentera le prix de ce sort de 500, pour cette faction.  Pour illustrer l’utilisation du sort, si 3 joueurs du Mordor sont présents sur la Trouée des Trolls et que les elfes utilisent l’ombre sur la Trouée des Trolls, tout déplacement de ces joueurs du Mordor vers : Glad Ereg, Eregion, The Angle, Hollin, Collines du Vent ainsi que Cameth Brin sont bloqués. Une attaque sur Fondcombe ne peut, par contre, pas être bloquée.
                                </div>
                            </div>
                            <div
                                class="flex w-1/4 text-wrap text-center flex-col text-white text-bold rounded-md bg-orange-500 justify-center items-center mr-10 p-2"
                            >
                                Ombre
                            </div>
                        </div>
                    </li>
                    <li class="border-gray-400 flex flex-row mb-2">
                        <div
                            class="select-none rounded-md bg-gray-900 flex flex-1 items-center p-4 transition text-white duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 mt-3 border-orange-400 hover:shadow-2xl"
                        >
                            <div class="flex-1 pl-1 mr-16">
                                <div class="font-medium">Coûte 200, permet d’immuniser un joueur contre les effets de l'ombre pendant un tour. Le joueur concerné ne sera donc pas impacté si l’ombre est utilisée sur le territoire sur lequel il se trouve. Seul le(s) détenteur(s) de la lumière sont ainsi immunisés, pas leurs coéquipiers. La lumière s’épuise après un tour, qu’elle ait servi ou pas. A chaque achat d’une lumière d’Eärendil sur un joueur, le prix du prochain achat du même objet augmente de 100 pour ce joueur.
                                </div>
                            </div>
                            <div
                                class="flex w-1/4 text-wrap text-center flex-col text-white text-bold rounded-md bg-orange-500 justify-center items-center mr-10 p-2"
                            >
                            Lumière d’Eärendil
                            </div>
                        </div>
                    </li>
                    <li class="border-gray-400 flex flex-row mb-2">
                        <div
                            class="select-none rounded-md bg-gray-900 flex flex-1 items-center p-4 transition text-white duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 mt-3 border-orange-400 hover:shadow-2xl"
                        >
                            <div class="flex-1 pl-1 mr-16">
                                <div class="font-medium">
                                    Coûte 1000, permet d’avoir la supériorité lors d’un croisement d’armées. L'objet peut être acquis uniquement dans une forteresse possédée par la faction qui achète le porte-étendard, afin de l’attribuer à un joueur de cette même faction, présent sur le territoire. Chaque joueur ne peut être porteur que d’un étendard à la fois. Les factions peuvent fabriquer plusieurs étendards en un tour si elles ont les ressources nécessaires, mais chaque faction ne peut avoir au total en sa possession que 2 étendards à la fois. L’étendard peut être utilisé même si le joueur le portant ne combat pas. Il ne peut être transmis sauf si, lorsqu’il n'est pas utilisé, le combat est perdu et qu’il y a repli du surplus de joueur. Le joueur ayant porté l’étendard peut alors le transmettre aux joueurs de sa faction se repliant sans être morts. Si l’équipe perd sans avoir utilisé l’étendard et qu'il n'y a aucun joueur en surplus à qui le transmettre, l’étendard est détruit. 
Si l’étendard est utilisé, alors il est mis en jeu : si le joueur utilise son étendard et que son équipe perd le combat, alors l’étendard est récupéré par un joueur de l’équipe ennemie, et est utilisable dès le prochain tour par l’ennemi, à condition qu’ils n’aient pas déjà deux étendards en leur possession au total. Si le combat dans lequel l’étendard est utilisé est remporté par l’équipe qui l’a utilisé, alors l’étendard disparaît. Si chaque équipe utilise autant d’étendards que l’autre lors d’un croisement, la règle de croisement normale s’applique. Si une équipe a utilisé plus d’étendards que l’autre, alors elle a l’avantage. Pour utiliser le porte-étendard il faut le signaler avec les ordres de déplacements. Si l’ordre n’est pas donné, il ne pourra pas être utilisé. Les portes-étendards ne peuvent être utilisés pour sortir ou entrer dans une forteresse, ils ne seront pas comptabilisés dans ces croisements, et dans tous les cas la règle de croisement impliquant une forteresse s’applique.
                                </div>
                            </div>
                            <div
                                class="w-1/4 text-wrap text-center flex flex-col text-white text-bold rounded-md bg-orange-500 justify-center items-center mr-10 p-2"
                            >
                                Porte-Étendard:
                            </div>
                        </div>
                    </li>
                    
                </ul>
            </div>
  </div>
</template>

<script>

export default {
layout: "gda",
  data() {
    return {
        newPlayerName: "",
        addPlayer: [],
        players: null,
        playerList: [],
        regions: [],
        playerHomme: [],
        playerElfe: [],
        playerNain: [],
        playerMordor: [],
        playerIsengard: [],
        playerGobelin: [],
        playerAngmar: [],
        selectedFaction: null,
        factions: [],
        options: [
            { faction: 'Homme', 'value': 1 },
            { faction: 'Elfe', 'value': 2 },
            { faction: 'Nain', 'value': 3 },
            { faction: 'Mordor', 'value': 4 },
            { faction: 'Isengard', 'value': 5 },
            { faction: 'Gobelin', 'value': 6 },
            { faction: 'Angmar', 'value': 7 }
        ],
        nbPowers: [],
        taintedLandInfo: false,
        lightInfo: false,
        velocityInfo: false,
        bannerInfo: false,
        healInfo: false,
        mercenaryInfo: false
    }
  },
  methods : {
    generateText() {
        let power = "";
        let data = "";
        let faction = "";
        let playerArray = [];




        if(this.nbPowers.length > 0) {
            this.nbPowers.forEach(element => {
                let pouvoir = document.getElementById(element + "power").value
                let action = ""
                let possible = true;

                switch (pouvoir) {
                    case "taintedland":
                        if(document.getElementById(element + "taintedland") && document.getElementById(element + "taintedland").value){
                            action = document.getElementById(element + "taintedland").value
                        } else {
                            possible = false
                        }
                        break;
                    case "light":
                    if(document.getElementById(element + "light") && document.getElementById(element + "light").value){
                        action = document.getElementById(element + "light").value
                    } else {
                        possible = false
                    }
                    break;
                    case "velocity":
                        if(document.getElementById(element + "velocity") && document.getElementById(element + "velocity").value){
                            action = document.getElementById(element + "velocity").value
                        } else {
                            possible = false
                        }
                        break;
                    case "banner":
                        if(document.getElementById(element + "banner") && document.getElementById(element + "banner").value){
                            action = document.getElementById(element + "banner").value
                        } else {
                            possible = false
                        }
                        break;
                    case "heal":
                        if(document.getElementById(element + "heal") && document.getElementById(element + "heal").value){
                            action = document.getElementById(element + "heal").value
                        } else {
                            possible = false
                        }
                        break;
                    case "mercenary":
                        if(document.getElementById(element + "mercenary") && document.getElementById(element + "mercenary").value){
                            action = document.getElementById(element + "mercenary").value
                        } else {
                            possible = false
                        }
                        break;
                }

                if(possible){
                    if(pouvoir == "mercenary") {
                        power += `${pouvoir} ${action} ${document.getElementById(element + "mercenaryfaction").value}\n`
                    } else {
                        power += `${pouvoir} ${action}\n`
                    }
                }
            });
        }

        switch (this.selectedFaction) {
            case 1 : playerArray = this.playerHomme; faction = "homme"; break;
            case 2 : playerArray = this.playerElfe; faction = "elfe"; break;
            case 3 : playerArray = this.playerNain; faction = "nain" ;break;
            case 4 : playerArray = this.playerMordor; faction = "mordor"; break;
            case 5 : playerArray = this.playerIsengard; faction = "isengard"; break;
            case 6 : playerArray = this.playerGobelin; faction = "gobelin"; break;
            case 7 : playerArray = this.playerAngmar; faction = "angmar"; break;
            default : console.log("No faction selected");
        }
        //Get data
        playerArray.forEach(element => {
            
            let select = document.getElementById(element.name + "arrive");
            let option = select.options[select.selectedIndex];
            
            if(option.text.includes("Sort de Vélocité")){
                power += `velocity ${element.name}\n`;
            }
            data += `${element.name} ${element.code}  ${option.value}\n`;
        });

        

        // this.addPlayer.forEach(element => {
        //     data += `spawn ${element.name.replace(/ /g, '_')} ${document.getElementById(element.name + "arrive").value} ${element.faction}\n`;
        // });
            
        //convert the text to BLOB
        
        const textToBLOB = new Blob([power + data], { type: "text/plain" });
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
                return "#09a4ff"
            case 2:
                return "#00ff7e"
            case 3:
                return "#fffc00"
            case 4:
                return "#ff3636"
            case 5:
                return "#ffffff"
            case 6:
                return "#FF6F00"
            case 7:
                return "#c500ff"
        }
    },

    factionsSelected(id) {
        switch (id) {
            case 1:
                return this.factions.homme
            case 2:
                return this.factions.elfe
            case 3:
                return this.factions.nain
            case 4:
                return this.factions.mordor
            case 5:
                return this.factions.isengard
            case 6:
                return this.factions.gobelin
            case 7:
                return this.factions.angmar
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
    },

    addPower(){
        this.nbPowers.push(this.nbPowers.length) 
    },
    
    removePower(index) {
        this.nbPowers = this.nbPowers.filter(power => power !== index)
        
    },
    updatePower(namePower, power) {
        this[namePower] = power
    },

  },
  computed: {
    isDisable() {
        return this.newPlayerName.length > 0;
    }
  },
  async fetch() {
    let testApi = await this.$http.$get(
    "https://api.npoint.io/185c3793f7c3cac5c1c0"
    ); //API
    let map = require(`~/static/gdav3/map.json`);

    function MergeRecursive(obj1, obj2) {
    //   console.log(obj1, obj2, "djeidje")
      for (var p in obj2) {
        try {
        //   console.log(obj2.p, p, "for")
          // Property in destination object set; update its value.
          if (obj2[p].constructor==Object ) {
            obj1[p] = MergeRecursive(obj1[p], obj2[p]);

          } else {
            obj1[p] = obj2[p];

          }

        } catch(e) {
          // Property in destination object not set; create it and set its value.
          obj1[p] = obj2[p];

        }
      }

      return obj1;
    }

    this.players = await MergeRecursive(map, testApi);

    console.log(this.players, "PLAYERS")
        for (const key in this.players) {

            const obj = this.players[key];

            if(key == "factions"){
                this.factions = obj;
            }
        
            if (true
            && key!== "riviere"
            && key!== "time"
            && key!== "factions"
            && key!== "La_Grande_Mer"
            && key!== "Rhovanion"
            && key!== "results"
            && key!== "Alliance") {
            
                let newRegion = {
                    "name": obj.name,
                    "code": key,
                    "adjacents": obj.adjacents,
                    "fortress" : obj.hasOwnProperty("fortress"),
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
                        "fortress": obj.fortress,
                        "code": key,
                        "adjacents":obj.adjacents,
                        "factionNumber": obj2[player]['faction'],
                        "faction":this.color(obj2[player]['faction']),
                        "withdrew": obj2[player]['withdrew'] ? obj2[player]['withdrew'] : false,
                        "handicap": obj2[player]['handicap']
                    };
                    this.playerList.push(_player)
                    switch (obj2[player]['faction']) {
                        case 1:
                            this.playerHomme.push(_player);
                            break;
                        case 2:
                            this.playerElfe.push(_player);
                            break;
                        case 3:
                            this.playerNain.push(_player);
                            break;
                        case 4:
                            this.playerMordor.push(_player);
                            break;
                        case 5:
                            this.playerIsengard.push(_player);
                            break;
                        case 6:
                            this.playerGobelin.push(_player);
                            break;
                        case 7:
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