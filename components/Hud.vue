<template>
    <div class="fixed left-0 bottom-0 text-white text-center">
        <div class="flex flex-row flex-nowrap">
            <div class="pngcontainer1">
                <img class="object-cover" id="region_img" :src="map[region] ? map[region].img : 'https://wallup.net/wp-content/uploads/2018/09/28/960672-art-artwork-fantasy-artistic-original-lord-rings-lotr.jpg'" />
                <img id="region_bg" src="~assets/bg.webp" />
                <img v-if="map[region] && map[region].color && map[region].color !== '#3300000'" id="region_faction" :src="require(`~/assets/gde/factions/${factions(map[region].color)}.webp`)"/>  
                <img src="~assets/palantir.png" />
                <p  class="text-base absolute text-center bottom-4 z-50 text-yellow-400"> {{map[region] ? map[region].map ? `Map ${map[region].map} Joueurs` : "" : ""}}</p>
                <div id="region_txt">
                    <p id="region_name">{{map[region] ? map[region].name : "Région inconnue"}}</p>
                </div>
            </div>

            
            <div class="text-center place-self-end">
                <div v-if="map[region]" class="flex flex-wrap-reverse gap-4">
                    <div v-for="(player, index) in map[region].players" :key="index">
                        <img class="border-2 rounded-full w-14 h-14 object-cover" :class="colors(player.faction)" :src="player.img ? player.img : require(`~/assets/gde/icons/${icons(player.faction)}.png`)" :alt="player.name">
                        <span class="text-sm">{{player.name}}</span>
                    </div>
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
            required: true,
            default: "montagne"
        },
    },
    methods: {
        icons(value) {
            let info = "";
            switch(value) {
                case 1:
                    info = "arnor"
                break;
                case 2:
                    info = "gondor"
                break;
                case 3:
                    info = "rohan"
                break;
                case 4:
                    info = "elfe"
                break;
                case 5:
                    info = "nain"
                break;
                case 6:
                    info = "mordor"
                break;
                case 7:
                    info = "isengard"
                break;
                case 8:
                    info = "gobelin"
                break;
                case 9:
                    info = "angmar"
                break;
            }
            return info
        },
        colors(value) {
            let info = "";
            switch(value) {
                case 1:
                    info = "border-indigo-600"
                break;
                case 2:
                    info = "border-blue-600"
                break;
                case 3:
                    info = "border-green-600"
                break;
                case 4:
                    info = "border-teal-600"
                break;
                case 5:
                    info = "border-yellow-600"
                break;
                case 6:
                    info = "border-red-600"
                break;
                case 7:
                    info = "border-gray-900"
                break;
                case 8:
                    info = "border-orange-600"
                break;
                case 9:
                    info = "border-purple-600"
                break;
            }
            return info
        },
        factions(color) {
            let faction = "";
            switch (color) {
          case "#ff85ee":
          case "#FF85EE":
            faction = "arnor";
            break;
          case "#0bff00":
          case "#0BFF00":
            faction = "rohan";
            break;

          case "#00e3ff":
          case "#00E3FF":
            faction = "elfe";
            break;

          case "#093aff":
          case "#093AFF":
            faction = "gondor";
            break;

          case "#fffc00":
          case "#FFFC00":
            faction = "nain";
            break;

          case "#ff3636":
          case "#FF3636":
            faction = "mordor";
            break;

          case "#ffffff":
          case "#FFFFFF":
            faction = "isengard";
            break;

          case "#ff6f00":
          case "#FF6F00":
            faction = "gobelin";
            break;

          case "#c500ff":
          case "#C500FF":
            faction = "angmar";
            break;
          default:
            break;
          }
          return faction;
        }
    }
};
</script>

<style scoped>
.pngcontainer1, .pngcontainer1 img {
    position: relative;
}
.pngcontainer1 img {
    z-index: 101;
}
.pngcontainer1 #region_img {
    position: absolute;
    top: 20px;
    left: 12px;
    z-index: 100;
    width: 226px;
    height: 226px;
    border-radius: 100px;
}

.pngcontainer1 #region_faction {
    position: absolute;
    top: 72px;
    left: 211px;
    z-index: 99;
    width: 155px;
    height: 155px;
    border-radius: 100px;
}

.pngcontainer1 #region_bg {
    position: absolute;
    top: 72px;
    left: 211px;
    z-index: 98;
    width: 155px;
    height: 155px;
    border-radius: 100px;
}

.pngcontainer1 #region_name {
    font-size: 1.4vw;
    text-shadow: 1px 1px 2px black;
}

.pngcontainer1 #region_player {
    position: absolute;
    bottom: 10%;
    left: 0%;
    right: 50%;
    z-index: 105;
    /* font-size: 1.0vw; */
    color: #eada24;
}

.pngcontainer1 #region_txt {
    position: absolute;
    top: 30%;
    left: -2%;
    right: 40%;
    bottom: 54%;
    margin: 19px 11px 16px 39px;
    z-index: 117;
    word-break: break-word;
    text-align: center;
}

.responsive {
  width: 100%;
  height: auto;
}

.territoryContainer{
    position : absolute;
    width : 15%;
    top: 105px;
    left: 445px;
    z-index: 102;
}
</style>