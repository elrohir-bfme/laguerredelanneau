<template>
    <div>
        <div id="hud" class="floating">
			<picture id="region_img" class="floating">
            	<img v-if="region" :src="region.img" />
				<img v-if="!region" src="~assets/img/pages/index/no region.jpg" />
			</picture>
            <div id="region_name" class="floating">{{ region ? region.name : "Région inconnue" }}</div>
            <p id="region_player" class="floating">{{ region && region.map ? `Map ${ region.map } Joueurs` : "" }}</p>

			<picture id="faction_img" class="floating">
            	<img v-if="region" :src="`/img/factions/${ region.faction }.png`" />
				<img v-if="!region" src="'~assets/img/pages/index/no faction.jpg'" />
			</picture>
            <!-- <img v-if="region" id="region_faction" :src="`https://laguerredelanneau.vercel.app/factions/${factions(map[region].color)}`"/>  -->

            <img id="hud_img" class="floating" src="~assets/img/pages/index/hud.png" />
        </div>

		<!--
		<div class="descriptionContainer">
			<img id="descprition" src="~assets/Interface_Description.png">
			<div id="territoryText">
				<p id="territorytitle">Territoire</p>
			</div>
			<div id="structureText">
				<p id="structuretitle">Structure</p>
			</div>
			<div id="armyText">
				<p id="armytitle">Armée</p>
			</div>
		</div>
		-->

		<!--
		ici il faut qu on sache appuyer sur les mots plus hauts et qu il hidden ou pas les bons contenaires

		<div class="territoryContainer">
			<img id="minimap" src="~static/minimap_img/carn_dum_minimap.jpg"/>
		</div>
		<div class="structureContainer">
		</div>
		<div class="territoryContainer">
		</div>
		-->
    </div>
</template>

<script>
export default {
    name: "Hud",
    props: {
        region: {
            type: [Object],
            required: false,
			default: null,
        },
    },
    methods: {
    }
};
</script>

<style scoped>
.floating {
	position: fixed;
}

#hud {
	height: min-content;
	width: min-content;
	left: calc(0px + 5px);
	bottom: calc(256px + 5px);
	user-select: none;
}

#hud > * {
	max-width: 100%;
	max-height: 100%;
}

#hud > picture {
	display: inline-block;
}

#hud > #region_img > * {
	width: 230px;
	height: 230px;
	border-radius: 230px;
	object-fit: cover;
}

#hud > #hud_img {
	width: 512px;
	max-width: unset;
	height: auto;
}

/*

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
    bottom: 9.2%;
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
*/
</style>
