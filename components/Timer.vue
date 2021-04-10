<template>
    <div>
        <vue-countdown-timer
        :start-time="data.start"
        :end-time="data.end"
        :interval="1000"
        :start-label="`Lundi - Phase de construction 🏗️ | Le Tour ${data.tour} commence  dans `"
        :end-label="`Phase de combat ⚔️ | Le Tour ${data.tour} finit  dans `"
        label-position="begin"
        :end-text="`Tour ${data.tour + 1} en préparation`"
        :day-txt="'jours'"
        :hour-txt="'heures'"
        :minutes-txt="'minutes'"
        :seconds-txt="'secondes'">
        </vue-countdown-timer>
    </div>
</template>

<script >
export default {
    name: 'Timer',
    data() {
        return {
            data: []
        }
    },
    async fetch() {
        this.data = await this.$http.$get("https://api.npoint.io/38a2899b98818d89418c/time")
    },
};
</script>