<template>
    <div class="fixed left-0 bottom-0 text-white text-center">
        <div class="pngcontainer1">
            <img class="object-cover" id="region_img" :src="map[region] ? map[region].img : 'https://wallup.net/wp-content/uploads/2018/09/28/960672-art-artwork-fantasy-artistic-original-lord-rings-lotr.jpg'" />
            <img id="region_bg" src="~assets/bg.webp" />
            <img v-if="map[region] && map[region].color && map[region].color !== '#3300000'" id="region_faction" :src="require(`~/assets/gde/factions/${factions(map[region].color)}.webp`)"/>  
            <img src="~assets/palantir.png" />
            <p id="region_player" class="text-xs"> {{map[region] ? map[region].map ? `Map ${map[region].map} Joueurs` : "" : ""}}</p>
            <div id="region_txt">
                <p id="region_name">{{map[region] ? map[region].name : "Région inconnue"}}</p>
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
.pngcontainer1, .pngcontainer1 img , .descriptionContainer{
    position: relative;
}
.pngcontainer1 img , .descriptionContainer {
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
    bottom: 11%;
    left: 0%;
    right: 50%;
    z-index: 105;
    font-size: 1.0vw;
    color: #eada24;
}

.pngcontainer1 #region_txt {
    position: absolute;
    top: 30%;
    left: -2%;
    right: 57%;
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

.descriptionContainer{
    position : absolute;
    width : 170%;
    top: 50px;
    left: 330px;
    z-index: 98;
}

.descriptionContainer #territoryText{
    position : absolute;
    top:12px;
    left:153px;
}

.descriptionContainer #structureText{
    position : absolute;
    top:12px;
    left:420px;
}

.descriptionContainer #armyText{
    position : absolute;
    top:12px;
    left:687px;
}

.territoryContainer{
    position : absolute;
    width : 15%;
    top: 105px;
    left: 445px;
    z-index: 102;
}
</style>