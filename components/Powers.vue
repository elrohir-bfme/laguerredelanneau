<template>
    <div class="grid grid-cols-9 grid-flow-col gap-4 mb-4">

        <div class="col-span-2 md:col-span-2">
            <select v-model="selectedPower" class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input" :id="index+'power'">    
                <option v-for="power in powersFilter" :value="power.name" v-bind:key="index+power.name">{{power.realName}}</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
            </div>
        </div>

        <div class="col-span-3 md:col-span-2">
            <span class="bg-white hover:bg-gray-800 h-10 pl-3 pr-6 text-base text-gray-700 hover:text-gray-200 md:text-xl border-gray-200 hover:border-gray-500 border rounded-lg appearance-none focus:shadow-outline">    
                {{power.length > 0 && power[0].price}}
            </span>
        </div>

        <div class="flex-1 flex items-center justify-center col-span-1">
            <svg class="fill-current text-orange-500 inline-block h-5 w-5"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 2h-7.229l7.014 7h-13.785v6h13.785l-7.014 7h7.229l10-10z"/></svg>
        </div>

        <div v-if="power.length > 0 && power[0].name == 'taintedland'" class="relative inline-block w-full text-gray-700 col-span-2 md:col-span-4">
            <div v-if="taintedlandInfo">
            <select  class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input" :id="index+'taintedland'">    
                <option v-for="region in taintedLand" :value="region.code" v-bind:key="region.name">{{region.name}}</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
            </div>
            </div>
            <div v-else class="text-center">
                <span class="h-10 px-5 text-base sm:text-xl text-gray-500 transition-colors duration-150 border border-gray-500 rounded-lg focus:shadow-outline hover:bg-gray-900 hover:text-gray-300">    
                    Impossible supprimez-moi (Prix)
                </span>
            </div>
        </div>

        <div v-if="power.length > 0 && power[0].name == 'heal'" class="relative inline-block w-full text-gray-700 col-span-2 md:col-span-4">
            <div v-if="healInfo">
                <select  class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input" :id="index+'heal'">    
                    <option v-for="player in heal" :value="player.name" v-bind:key="player.name">{{player.name}}</option>
                </select>
                <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                </div>
            </div>
            <div v-else class="text-center">
                <span class="h-10 px-5 text-base sm:text-xl text-gray-500 transition-colors duration-150 border border-gray-500 rounded-lg focus:shadow-outline hover:bg-gray-900 hover:text-gray-300">    
                    Impossible supprimez-moi (Aucun joueur dans la forteresse et avec un handicap)
                </span>
            </div>
        </div>

        <div v-if="power.length > 0 && power[0].name == 'banner'" class="relative inline-block w-full text-gray-700 col-span-2 md:col-span-4">
            <div v-if="bannerInfo">
                <select  class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input" :id="index+'banner'">    
                    <option v-for="player in banner" :value="player.name" v-bind:key="player.name">{{player.name}}</option>
                </select>
                <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                </div>
            </div>
            <div v-else class="text-center">
                <span class="h-10 px-5 text-base sm:text-xl text-gray-500 transition-colors duration-150 border border-gray-500 rounded-lg focus:shadow-outline hover:bg-gray-900 hover:text-gray-300">    
                    Impossible supprimez-moi (Aucun joueur dans la forteresse)
                </span>
            </div>
        </div>

        <div v-if="power.length > 0 && power[0].name == 'velocity'" class="relative inline-block w-full text-gray-700 col-span-2 md:col-span-4">
            <div v-if="velocityInfo">
                <select  class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input" :id="index+'velocity'">    
                    <option v-for="player in velocity" :value="player.name" v-bind:key="player.name">{{player.name}}</option>
                </select>
                <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                </div>
            </div>
            <div v-else class="text-center">
                <span class="h-10 px-5 text-base sm:text-xl text-gray-500 transition-colors duration-150 border border-gray-500 rounded-lg focus:shadow-outline hover:bg-gray-900 hover:text-gray-300">    
                    Impossible supprimez-moi (Aucun joueur dans la forteresse)
                </span>
            </div>
        </div>

        <div v-if="!selectedPower" class="col-span-2 md:col-span-4">
            <!-- <svg class="fill-current text-orange-500 inline-block h-5 w-5"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 2h-7.229l7.014 7h-13.785v6h13.785l-7.014 7h7.229l10-10z"/></svg> -->
        </div>

        <div class="relative inline-block w-full text-gray-700 col-span-1">
            <button
                v-on:click="removePower"
                class="mb-4 px-4 rounded-lg bg-red-600  text-gray-800 font-bold p-2 uppercase border-red-500">
                    <svg class="fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>
        </div>




    </div>
</template>

<script>
export default {
    data() {
      return {
        selectedPower: null,
        powers: [
            {name: "taintedland", price: 3000, realName: "Terre souillée"}, 
            {name: "velocity", price: 400, realName: "Sort de Vélocité"}, 
            {name: "banner", price: 1000, realName: "Porte-Étendard"},
            {name: "heal", price: 400, realName: "Toucher guérisseur"}
        ],
        power: [],
        impossible: false,
        taintedLandInfo: false,
        velocityInfo: false,
        bannerInfo: false,
        healInfo: false
      }
    },
    methods: {
        removePower() {
            this.$parent.removePower(this.$props.index);
        },
        color(id) {
            switch (id) {
                case "#ff85ee":
                    return 1
                case "#093aff":
                    return 2
                case "#0bff00":
                    return 3
                case "#00e3ff":
                    return 4
                case "#fffc00":
                    return 5
                case "#ff3636":
                    return 6
                case "#ffffff":
                    return 7
                case "#ff6f00":
                    return 8
                case "#c500ff":
                    return 9
            }
        },
    },
    props: {
        index: {
            type: Number,
            required: true
        },
        money: {
            type: Number,
            required: true
        },
        regions: {
            type: Array,
            required: true
        },
        selectedFaction: {
            type: Number,
            required: true
        },
        playerList: {
            type: Array,
            required: true
        }
    },
    watch: {
        selectedPower: function () {
            this.power = this.powers.filter(p => {
                return p.name === this.selectedPower
            })
        },
    },
    computed: {
        powersFilter: function () {
            return this.powers
                .filter(power => power.price <= this.$props.money)
        },
        taintedLand: function () {
            let taintedLand = this.$props.regions
                .filter(region => region.fortress == false)
                .map(region => ({name: region.name, code: region.code}))
                .sort((a, b) => a.name.localeCompare(b.name));
            
            if(taintedLand.length > 0 && this.$props.money >= 3000){
                this.taintedLandInfo = false
                this.$parent.updatePower("taintedLandInfo", this.taintedLandInfo);
            } else {
                this.taintedLandInfo = true
                this.$parent.updatePower("taintedLandInfo", this.taintedLandInfo);
            }
            return taintedLand
        },
        heal: function () {
            let forteresse = this.$props.regions
                .filter(region => region.fortress == true && this.color(region.color) == this.$props.selectedFaction)

            let heal = this.$props.playerList
                .filter(player => player.factionNumber == this.$props.selectedFaction && player.handicap > 0 && player.code === forteresse[0].code)

            if(heal.length > 0){
                this.healInfo = false
                this.$parent.updatePower("healInfo", this.healInfo);
            } else {
                this.healInfo = true
                this.$parent.updatePower("healInfo", this.healInfo);
            }
            return heal
        },
        banner: function () {
            let forteresse = this.$props.regions
                .filter(region => region.fortress == true && this.color(region.color) == this.$props.selectedFaction)

            let banner = this.$props.playerList
                .filter(player => player.factionNumber == this.$props.selectedFaction && player.code === forteresse[0].code)

            if(banner.length > 0){
                this.bannerInfo = false
                this.$parent.updatePower("banner", this.bannerInfo);
            } else {
                this.bannerInfo = true
                this.$parent.updatePower("banner", this.bannerInfo);
            }
            return banner
        },
        velocity: function () {
            let forteresse = this.$props.regions
                .filter(region => region.fortress == true && this.color(region.color) == this.$props.selectedFaction)
                
            let velocity = this.$props.playerList
                .filter(player => player.factionNumber == this.$props.selectedFaction && player.code === forteresse[0].code)

            if(velocity.length > 0){
                this.velocityInfo = false
                this.$parent.updatePower("velocityInfo", this.velocityInfo);
            } else {
                this.velocityInfo = true
                this.$parent.updatePower("velocityInfo", this.velocityInfo);
            }
            return velocity
        }
    }
}
</script>