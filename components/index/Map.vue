<template>
	<div>

		<object type="image/svg+xml" :data="`${ this.mapFolder }map.svg`" id="map" />

		<IndexMapLegend
			v-if="showLegend"
			:hoveredRegion="regionHovered"
			:playerCount="this.getPlayerCount()"
			:mapFolder="this.mapFolder"
		/>

		<IndexHud
			v-if="showHud"
			:region="this.regionHovered"
		/>

	</div>
</template>

<script>
export default {
	name: "Map",
	props: {
		mapFolder: {
			type: String,
			required: true,
		},
		apiPath: {
			type: String,
			required: true,
		},
		showLegend: {
			type: Boolean,
			required: false,
			default: true,
		},
		showHud: {
			type: Boolean,
			required: false,
			default: true,
		},
	},
	data() {
		return {
			loading: false,
			isShowModal: false,
			regionMobile: "",

			players: [],
			factions: [],
			regions: [],

			svgmap: {},

			regionHovered: {},
			regionSelected: {},
		};
	},
	methods: {
		toggleModal(e) {
			if (e && e.target.getAttribute("aria-valuetext")) {
				this.regionMobile = e.target.getAttribute("aria-valuetext");
				this.isShowModal = !this.isShowModal;
			} else {
				this.isShowModal = !this.isShowModal;
			}
		},
		getPlayerCount() {
			return this.regions.reduce((total, region) => total + region.players.length, 0);
		},
	},
	async fetch() {
		this.loading = true;

		this.factions = (await this.$http.$get(`${this.apiPath}factions.json`));
		this.players = (await this.$http.$get(`${this.apiPath}players.json`));
		this.regions = (await this.$http.$get(`${this.apiPath}regions.json`));

		this.svgmap = document.getElementById("map").contentDocument.getElementById("svgmap");

		const style = this.svgmap.ownerDocument.createElementNS("http://www.w3.org/2000/svg", "style");
		style.innerHTML = this.factions.reduce((style, faction) => {
			return `${style}.faction-${ faction.id } { fill: ${ faction.color }; }\n`;
		}, "");
		this.svgmap.appendChild(style);


		this.regions.forEach(region => {
			const path = this.svgmap.getElementById(region.id);
			if(!path) {
				return;
			}

			path.addEventListener("mouseenter", (event) => this.regionHovered = this.regions.find(r => r.id == event.target.id));
			path.addEventListener("click", (event) => this.regionSelected = this.regions.find(r => r.id == event.target.id));
			path.classList.add(`faction-${ region.faction }`);
		});

		this.regionHovered = this.regions[1];

		this.loading = false;
	}
}
</script>

<style scoped>
#map {
  	width: 100%;
}
</style>
