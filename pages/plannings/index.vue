<template>
    <vue-cal
        class="vuecal--yellow-theme"
        active-view="week"
        :disable-views="['years', 'year']"
        :min-date="minDate"
        locale="fr"
        today-button
        :events="events"
        style="width: 70%; margin: auto; margin-top: 30px;"
        :time-from="8 * 60" 
        :time-to="24 * 60" 
        :time-step="30"
    /> 
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/i18n/fr.js'
import 'vue-cal/dist/vuecal.css'

export default {
    components: { VueCal },
    computed: {
        minDate () {
            return new Date()
        },
    },
    async fetch() {
      this.events =  await this.$strapi.find('plannings')
    },
    data: () => ({
        events: [],
        // events: [
        //     {
        //     start: '2021-06-30 11:30',
        //     end: '2021-06-30 12:30',
        //     title: 'Need to go shopping',
        //     content: '<i class="v-icon material-icons">shopping_cart</i>',
        //     class: 'bfme'
        //     },
        //     {
        //     start: '2021-06-15 12:30',
        //     end: '2021-06-15 13:30',
        //     title: 'Golf with John',
        //     content: '<i class="v-icon material-icons">golf_course</i>',
        //     class: 'bfme2'
        //     },
        //     {
        //     start: '2021-06-16 14:30',
        //     end: '2021-06-17 15:30',
        //     title: 'Dad\'s birthday!',
        //     content: '<i class="v-icon material-icons">cake</i>',
        //     class: 'rotwk'
        //     },
        //     {
        //     start: '2021-06-16 14:30',
        //     end: '2021-06-17 15:30',
        //     title: 'Dad\'s birthday!',
        //     content: '<i class="v-icon material-icons">cake</i>',
        //     class: 'bfme'
        //     }
        // ]
    })
}
</script>

<style lang="scss">

.vuecal--yellow-theme {
    background-color: #18191c;
    .vuecal__header {background-color: rgba(255, 179, 0, 0.8);color: #fff;}
    .vuecal__now-line {color: #06c;}

    .vuecal__event.bfme {background-color: rgba(255, 102, 102, 0.9);border: 2px solid rgb(235, 82, 82);color: #fff;}
    .vuecal__event.bfme2 {background-color: rgba(59, 226, 59, 0.9);border: 2px solid rgb(2, 151, 46);color: #fff;}
    .vuecal__event.rotwk {background-color: rgba(102, 168, 255, 0.9);border: 2px solid rgb(51, 105, 255);color: #fff;}

    .month-view {font-size: 3em; color: #ffffff}
    .vuecal__cell--disabled {color: #97ebeb}
    .vuecal__cell--out-of-scope {color: #ca97eb}


    .vuecal__cell--today {background-color: rgba(182, 182, 182, 0.185)}

    
}

</style>
