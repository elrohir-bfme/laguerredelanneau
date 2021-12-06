<template>
    <div>
        <vue-cal
            class="vuecal--yellow-theme"
            active-view="week"
            :disable-views="['years', 'year']"
            :min-date="minDate"
            locale="fr"
            today-button
            :events="events"
            style="width: 70%; margin: auto; margin-top: 30px;"
            :time-from="7 * 60" 
            :time-step="30"
            :on-event-click="onEventClick"
        />
        This example requires Tailwind CSS v2.0+
        <div v-if="showDialog" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div @click="handleClose" class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"></span>

                <div v-if="selectedEvent.contentFull === 'live'" class="ease-out duration-300 inline-block align-bottom bg-gray-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div>
                        <img class="w-full" src="~assets/plannings/twitch.jpg">
                    </div>
                    <div class="bg-gray-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <a href="https://www.twitch.tv/elrohir_bfme" target="_blank" type="button"
                        class="w-full flex-auto grid justify-center rounded-md border border-purple-400 border-transparent shadow-sm px-4 py-2 bg-purple-600 text-base font-medium text-white hover:bg-purple-700 sm:ml-3 sm:w-auto sm:text-sm">
                            <img class="w-10 h-10 rounded-full" src="~assets/plannings/bobby.png">
                            Twitch
                        </a>
                        <a href="https://www.youtube.com/channel/UC3v6035rOvbIdX23SnrdyNw" target="_blank" type="button" 
                        class="w-full flex-auto grid justify-center rounded-md border border-red-400 shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700  sm:ml-3 sm:w-auto sm:text-sm">
                            <img class="w-10 h-10 rounded-full" src="~assets/plannings/elro.jpg">
                            Youtube
                        </a>
                    </div>
                </div>

                <div v-if="selectedEvent.contentFull === 'match'" class="ease-out duration-300 inline-block align-bottom bg-gray-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div>
                        <img class="w-full" src="~assets/plannings/match.jpg">
                    </div>
                    <div class="bg-gray-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        
                        <!-- <a href="https://www.twitch.tv/elrohir_bfme" target="_blank" type="button"
                        class="w-full flex-auto grid justify-center rounded-md border border-purple-400 border-transparent shadow-sm px-4 py-2 bg-purple-600 text-base font-medium text-white hover:bg-purple-700 sm:ml-3 sm:w-auto sm:text-sm">
                            <img class="w-10 h-10 rounded-full" src="~assets/plannings/bobby.png">
                            Soit en direct sur Twitch
                        </a>
                        <a href="https://www.youtube.com/channel/UC3v6035rOvbIdX23SnrdyNw" target="_blank" type="button" 
                        class="w-full flex-auto grid justify-center rounded-md border border-red-400 shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700  sm:ml-3 sm:w-auto sm:text-sm">
                            <img class="w-10 h-10 rounded-full" src="~assets/plannings/elro.jpg">
                            Soit en redif sur Youtube
                        </a> -->
                        <a href="https://discord.gg/NPzB9Yke5h" target="_blank" type="button"
                        class="w-full flex-auto grid justify-center rounded-md border border-indigo-400 border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 sm:ml-3 sm:w-auto sm:text-sm">
                            <img class="w-3/4 mx-auto rounded-full" src="~assets/plannings/discord.png">
                            Regarder ici en direct le match dans "live match" sur Discord
                        </a>
                    </div>
                </div>
            </div>
            </div>
    </div>
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
        selectedEvent: {},
        showDialog: false,
        // events: [
        //     {
        //     start: '2021-06-30 11:30',
        //     end: '2021-06-30 12:30',
        //     title: 'Need to go shopping',
        //     content: '<i class="v-icon material-icons">shopping_cart</i>',
        //     class: 'bfme'
        //     },
        //     {
        //     start: '2021-07-01 10:30',
        //     end: '2021-07-01 14:30',
        //     title: 'Golf with John',
        //     content: '<i class="v-icon material-icons">golf_course</i>',
        //     class: 'bfme2',
        //     contentFull: 'My shopping list is rather long:<br><ul><li>Avocados</li><li>Tomatoes</li><li>Potatoes</li><li>Mangoes</li></ul>', // Custom attribute.
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
    }),
    methods: {
        onEventClick (event, e) {
            console.log(event)
            if(event.contentFull) {
                console.log(e)
                this.selectedEvent = event
                this.showDialog = true

                // Prevent navigating to narrower view (default vue-cal behavior).
                e.stopPropagation()
            }

        },
        handleClose() {
            this.showDialog = false
        },
    }
}
</script>
