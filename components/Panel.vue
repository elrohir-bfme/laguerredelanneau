<template>
    <!-- <div class="bottom-0 left-0 relative" >
        <img class="relative z-50 transform scale-125 w-40 h-40 right-10" :src="map[region] ? map[region].img : 'https://wallup.net/wp-content/uploads/2018/09/28/960672-art-artwork-fantasy-artistic-original-lord-rings-lotr.jpg'">
        <div class="relative regiontext">
            <p class="text-center text-yellow-500">KOK</p>
        </div>
        <img class="absolute top-0 left-0 z-40" src="~assets/palantir.png">
    </div> -->
    <div v-if="map[region]" class="container">
        <!-- <div class="pngcontainer1"> -->
            <!-- <img id="panel" src="~assets/panel/panel.png" /> -->
           <!-- <div class="wrapper">
                <div class="box box1">
                    <div class="nested">Territoire</div>
                    <div class="nested">Armée</div>
                    <div class="nested">Structure</div>
                </div>
                <div class="box box2">Deux</div>
                <div class="box box3">Trois</div>
                <div class="box box4">Quatre</div>
                <div class="box box5">Cinq</div>
            </div> -->

            <!-- <img id="region_img" :src="map[region] ? map[region].img : 'https://wallup.net/wp-content/uploads/2018/09/28/960672-art-artwork-fantasy-artistic-original-lord-rings-lotr.jpg'" />
            <img id="region_bg" src="~assets/bg.jpg" />
            <img id="region_faction" :src="map[region] ? `https://laguerredelanneau.vercel.app/factions/${factions(map[region].color)}` : '~assets/factions/isengard.png'" />  
            <img src="~assets/palantir.png" />
            <p id="region_name">{{map[region] ? map[region].name : "Région inconnu"}}</p>
            <p id="region_player">Map {{map[region] ? map[region].map : ""}} Joueur</p> -->
        <!-- </div> -->


        <!-- <div v-if="map[region].players && map[region].players.length > 0" class="px-6 py-4 flex flex-wrap pngcontainer1">
            <div class="mx-auto m-2" v-for="player in map[region].players" :key="player.name">
                <p>{{player.name}}</p> 
                <img class="w-4 h-4 inline-block" src="~assets/panel/player.png">
            </div>
        </div> -->
        <div class="grid-container">
            <div class="Territoire">Territoire</div>
            <div class="Armée"><button @click="addRow">Add row</button></div>
            <div class="Structure">Structure</div>
            <div class="Players"> 
                <div class="flex-container">
                        <button v-for="(input, index) in inputs" :key="index" @click="deleteRow(index)">{{input}}</button>
                </div> 
            </div>
        </div>
    </div>
</template>

<script >
export default {
    name: 'Hud',
    props: {
        map: {
            type: Object,
            required: true
        },
        region: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            inputs: []
        }
    },
    methods: {
        addRow() {
            console.log(this.inputs)
            this.inputs.push("ELEMENT")
        },
        deleteRow(index) {
            this.inputs.splice(index,1)
        }
    }
};
</script>

<style scoped>

.container {
    position: fixed;
    left: 21%;
    bottom: 0%;
    /* width: 50px; */
}

.pngcontainer1, .pngcontainer1 img {
    position: relative;
}
.pngcontainer1 img {
    z-index: 101;
}
.pngcontainer1 #panel {
    /* position: absolute; */
    bottom: 20px;
    left: 0px;
    z-index: 100;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 1em;
}

.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
}

.box2 {
  grid-column-start: 1;
  grid-row-start: 3;
  grid-row-end: 5;
}

.grid-container {
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 0.8fr 1.2fr;
    gap: 12px 20px;
    grid-template-areas:
        "Territoire Armée Structure"
        "Players Players Players"
        "Players Players Players";
}
.Territoire { grid-area: Territoire; background-color: rgb(45, 75, 65); }
.Armée { grid-area: Armée; background-color: blue; }
.Structure { grid-area: Structure; background-color: burlywood; }
.Players { grid-area: Players; background-color: blueviolet; }

.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  align-content: flex-start;
}



</style>