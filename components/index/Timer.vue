<template>
    <div>
        <vue-countdown-timer
        :start-time="this.getCurrentTourStart()"
        :end-time="this.getCurrentTourEnd()"
        :interval="1000"
        :start-label="`Le Tour ${ this.getCurrentTourId() } commence dans `"
        :end-label="`Le Tour ${ this.getCurrentTourId() } finit dans `"
        label-position="begin"
        :end-text="`Tour ${ this.getNextTourId() } en préparation`"
        :day-txt="'jours'"
        :hour-txt="'heures'"
        :minutes-txt="'minutes'"
        :seconds-txt="'secondes'">
        </vue-countdown-timer>
    </div>
</template>

<script >
export default {
    name: "Timer",
    data() {
		return {
			data: {},
		}
	},
	methods: {
		getCurrentTour() {
			return this.data?.tours?.find(tour => tour.id === this.data.current);
		},
		getCurrentTourId() {
			return this.getCurrentTour()?.id;
		},
		getCurrentTourStart() {
			return this.getCurrentTour()?.start;
		},
		getCurrentTourEnd() {
			return this.getCurrentTour()?.end;
		},
		getNextTourId() {
			return (this.data.current || 0) + 1;
		}
	},
    async fetch() {
        this.data = await this.$http.$get("/api/tours.json");
    },
};
</script>
