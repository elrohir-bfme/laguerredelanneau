<template>
    <div>
		<!--
        <vue-countdown-timer
        	:start-time="this.getCurrentTourStart()"
        	:end-time="this.getCurrentTourEnd()"
        	:interval="1000"
        	:start-label="`Le ${ this.getCurrentTourName() } commence dans `"
        	:end-label="`Le ${ this.getCurrentTourName() } finit dans `"
        	label-position="begin"
        	day-txt="jours"
        	hour-txt="heures"
        	minutes-txt="minutes"
        	seconds-txt="secondes">
        </vue-countdown-timer>
		-->
		<div v-if="!loading">{{ this.getText(this.getCurrentTour()) }}</div>
    </div>
</template>

<script >
export default {
    name: "Timer",
    data() {
		return {
			locale: new Intl.RelativeTimeFormat("fr-FR", {
				numeric: "always",
				style: "long",

				day: "2-digit",
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
			}),
			loading: true,
			tours: [],
			interval: {},
		}
	},
	methods: {
		getCurrentTour() {
			return this.tours.find(tour => new Date(tour.end) > new Date());
		},
		isTourStarted(tour) {
			return new Date(`${this.getCurrentTour().start} UTC+1`) < new Date();
		},
		getText(tour) {
			switch(new Date().getDay()) {
				case 1:
					return `Phase de préparation`;
				case 2:
					// return `Phase de déplacement`;
				case 3:
				case 4:
				case 5:
					// return `Phase de combat`;
				case 6:
				case 0:
					return `Fin du ${tour.name} ${this.locale.format((new Date(tour.end) - new Date()) / 1000, "seconds")}`;
			}
		},
	},
    async fetch() {
        this.tours = (await this.$http.$get("/api/tours.json"))
			.sort((a, b) => new Date(a.start) - new Date(b.start));
			this.loading = false;
    },
};
</script>

<style scoped>

</style>
