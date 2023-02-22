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
                <option v-for="region in orderedRegions" :value="region.code" v-bind:key="region.name">{{region.name}} {{region.velocity ? "- Sort de Vélocité" : ""}}</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            alliances: [
            [
                "#09a4ff",
                "#fffc00",
                "#FF6F00"
            ],
            [
                "#00ff7e",
                "#ff3636",
                "#ffffff",
                "#c500ff"
            ]
        ]
        }
    },
    methods: {
        handleClose() {
            this.$emit("close");
        },
        findRegion(regionname){
            for (let index = 0; index < this.regions.length; index++) {
                const element = this.regions[index];
                if(element.code === regionname){
                    return element
                }
            }
        },
        areAllied(factionA, factionB){
            let res = false;
            this.alliances.forEach(e => {
                if(e.includes(factionA) && e.includes(factionB)) {
                    res = true
                }
            });
            // console.log(res, "alliances ?", factionA, factionB)
            return res
        }
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
            let regionsAdjacents = [];

            if(!this.player.withdrew) {
                const adj = this.player.adjacents
                    .map(region => this.findRegion(region));

                const adj2 = adj
                    .filter(region => this.areAllied(this.player.faction, region.color))
                    .map(region => region.adjacents)
                    .flat(Infinity)
                    .map(region => this.findRegion(region))
                    .filter(region => this.areAllied(this.player.faction, region.color))

                if(this.player.fortress) {
                    const adj3 = adj2
                        .filter(region => this.areAllied(this.player.faction, region.color))
                        .map(region => region.adjacents)
                        .flat(Infinity)
                        .map(region => this.findRegion(region))
                        .filter(region => this.areAllied(this.player.faction, region.color))
                        .map(region => ({ ...region, velocity: true}))

                    let array = [... [this.findRegion(this.player.code)], ... adj, ... adj2];


                    function getDifference(array1, array2) {
                    return array1.filter(object1 => {
                        return !array2.some(object2 => {
                        return object1.name === object2.name;
                        });
                    });
                    }
                    
                    regionsAdjacents = [... [this.findRegion(this.player.code)], ... adj, ... adj2, ... adj3];
                } else {
                    regionsAdjacents = [... [this.findRegion(this.player.code)], ... adj, ... adj2];
                }

                
            } else {
                regionsAdjacents = [this.findRegion(this.player.code)]
            }

            return regionsAdjacents
                .filter((region, i, a) => i === a.findIndex(f => f.code === region.code))
                .map(region => ({name: region.name, code: region.code, velocity: region.velocity ? true : false}))
                .sort((a, b) => a.name.localeCompare(b.name))
                .sort((a, b) => Number(a.velocity) - Number(b.velocity));
        }
    }
}
</script>