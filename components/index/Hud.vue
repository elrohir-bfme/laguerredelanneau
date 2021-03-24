<template>
    <div :class="`opacity:${opacity};`">
        <div id="hud">

			<picture class="img_container" id="faction_img">
				<img class="rounded_img" src="~assets/img/pages/index/hud/no faction.jpg" />
            	<img class="rounded_img" v-if="region && (region.faction !== null) && (region.faction !== undefined)" :src="`/img/factions/${ region.faction }.png`" />
			</picture>

			<picture class="img_container" id="region_img">
            	<img class="rounded_img" v-if="region && region.img" :src="region.img" />
				<img class="rounded_img" v-if="!region" src="~assets/img/pages/index/hud/no region.jpg" />
			</picture>

            <div class="text_container" id="region_name">
				<span>{{ region ? region.name : "Région inconnue" }}</span>
			</div>

            <div class="text_container" id="region_player">
				<span>{{ region && region.map ? `Map ${ region.map } joueurs` : "" }}</span>
			</div>

            <img id="hud_img" class="" src="~assets/img/pages/index/hud/hud.png" />

            <!-- <img v-if="region" id="region_faction" :src="`https://laguerredelanneau.vercel.app/factions/${factions(map[region].color)}`"/>  -->

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
		opacity: {
			type: Number,
			required: false,
			default: 1,
		}
    },
    methods: {
    }
};
</script>

<style scoped>
.rounded_img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: inherit;
}

.img_container {
	position: absolute;
	border-radius: 1000px;
	z-index: 5;
}

.img_container > * {
	position: absolute;
}

.text_container {
	position: absolute;
	display: flex;
	z-index: 15;
	padding: 5%;
}

.text_container > * {
	margin: auto;
	color: white;
	text-align: center;
	text-shadow: 0px 0px 10px black;
}

#hud {
	position: fixed;

	height: min-content;
	width: min-content;

	left: 5px;
	bottom: 5px;

	user-select: none;
}

#region_img {
	width: 44%;
	height: 87%;

	left: calc(5px + ((100% - 44%) / 2) - 26%);
	bottom: calc(5px + ((100% - 87%) / 2) - 1.5%);
}

#faction_img {
	width: 33%;
	height: 65%;

	left: calc(5px + ((100% - 33%) / 2) + 5%);
	top: calc(5px + ((100% - 65%) / 2) + 6.5%);
}

#hud_img {
	width: 512px;
	max-width: unset;
	height: auto;
	z-index: 10;
	position: relative;
}

#region_name {
	width: 44%;
	height: 87%;

	left: calc(5px + ((100% - 44%) / 2) - 26%);
	bottom: calc(5px + ((100% - 87%) / 2) - 1.5%);

	font-size: 2em;
}

#region_player {
	width: 30%;
	height: 10%;

	left: calc(5px + ((100% - 30%) / 2) - 26%);
	bottom: calc(5px + ((100% - 10%) / 2) - 37.5%);

	font-size: 1em;
}


</style>
