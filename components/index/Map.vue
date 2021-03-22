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

		this.loading = false;

		this.regionHovered = this.regions[0];
	}
}
</script>

<style scoped>
#map {
  	width: 100%;
}
</style>
