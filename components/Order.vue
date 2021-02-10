<template>
    <div class="grid grid-cols-9 grid-flow-col gap-4 mb-4">
        <div class="col-span-2 md:col-span-2">
            <span class="h-10 px-5 text-base sm:text-xl text-gray-500 transition-colors duration-150 border border-gray-500 rounded-lg focus:shadow-outline hover:bg-gray-900 hover:text-gray-300">    
                {{player.name}}
            </span>
        </div>

        <div class="relative inline-block w-full text-gray-700 col-span-3 md:col-span-2">
            <span class="bg-white hover:bg-gray-800 h-10 pl-3 pr-6 text-base text-gray-700 hover:text-gray-200 md:text-xl border-gray-200 hover:border-gray-500 border rounded-lg appearance-none focus:shadow-outline">    
                {{player.region}}
            </span>
        </div>

        <div class="flex-1 flex items-center justify-center col-span-1">
            <svg class="fill-current text-orange-500 inline-block h-5 w-5"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 2h-7.229l7.014 7h-13.785v6h13.785l-7.014 7h7.229l10-10z"/></svg>
        </div>

        <div class="relative inline-block w-full text-gray-700 col-span-2 md:col-span-4">
            <select  class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input" :id="player.name+'arrive'">    
                <option v-for="region in orderedRegions" :value="region.code">{{region}}</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        handleClose() {
            this.$emit("close");
        },
        findRegion(regionname){
                switch(regionname){
                case "Mer_Forochel": regionname = "BateauA"; break; 
                case "Mer_Himling": regionname = "BateauB"; break; 
                case "Mer_Havres_Gris": regionname = "BateauC"; break; 
                case "Mer_Minhiriath": regionname = "BateauD"; break; 
                case "Mer_Enedwaith": regionname = "BateauE"; break; 
                case "Belegear": regionname = "BateauF"; break; 
                case "Mer_Andrast": regionname = "BateauG"; break; 
                case "Mer_Dol_Amroth": regionname = "BateauH"; break; 
                case "Mer_Tolfalas": regionname = "BateauI"; break; 
                case "Mer_Umbar": regionname = "BateauJ"; break; 
                case "Mer_Pelargir": regionname = "BateauK"; break;
                default : break;
            }

            for (let index = 0; index < this.regions.length; index++) {
                const element = this.regions[index];
                if(element.code === regionname){
                    return element
                }
            }
        },
    },
    props: {
        player: {
            type: Object,
            required: true
        },
        regions: {
            type: Array,
            required: true
        }
    },
    computed: {
        orderedRegions: function () {
            let regionsAdjacents=[]; 
            let regionsAdjacentsDetail=[];
            let result =[];

            /** TROUVER LES REGIONS  */
            for (let index = 0; index < (this.player.adjacents).length; index++) {
                regionsAdjacents.push(this.findRegion(this.player.adjacents[index]))
            }

            /** TROUVER LES REGIONS DES REGIONS ADJACENTES */
            for (let index = 0; index < (regionsAdjacents).length; index++) {
                for (let index2 = 0; index2 < regionsAdjacents[index].adjacents.length; index2++) {
                    regionsAdjacentsDetail.push(this.findRegion(regionsAdjacents[index].adjacents[index2]))
                }
            }

            /** TROUVER LES DEPLACEMENTS DE DEUX */
            for (let index = 0; index < regionsAdjacentsDetail.length; index++) {
                const element = regionsAdjacentsDetail[index]
                if(element.conquete === this.player.faction){
                    result.push(element.code);
                }
            }

            /** AJOUTER LES ADJACENTS */
           (this.player.adjacents).forEach(element => {
                result.push(element)
            });

            /** SUPPRIMER LES DOUBLONS */
            var finalResult = result.filter(function(elem, index, self) {
            return index === self.indexOf(elem);
})

            return finalResult.slice().sort(function(a, b){
                return (a.name > b.name) ? 1 : -1;
            });
        }
    }
}
</script>