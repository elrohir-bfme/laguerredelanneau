<template>
<div class="text-orange-400 bg-gray-900 border-2 py-2 px-8 focus:outline-none hover:bg-gray-800
          rounded text-lg transform transition duration-500 hover:scale-110 border-orange-400">
  <p>{{type ? $t('gde.fin') : $t('gde.debut') }} TOUR {{ tour }} </p>
  <!-- <p v-if="type !== 0">COMBATS</p> -->
  <p v-if="message.length == 0">Tour {{ tour + 1 }} dans</p>
  <div v-if="message.length == 0" class="text-xs text-center flex w-full items-center justify-center">
    <div class="w-auto mx-1 p-2 text-yellow-500 rounded-lg border-2 border-orange-400 bg-gray-900">
        <div class="font-mono leading-none" x-text="days"><span class="text-base">{{days}}</span> jours</div>
    </div>
    <div class="w-auto mx-1 p-2 text-yellow-500 rounded-lg border-2 border-orange-400 bg-gray-900">
        <div class="font-mono leading-none" x-text="hours"><span class="text-base">{{hours}}</span> heures</div>
    </div>
    <div class="w-auto mx-1 p-2 text-yellow-500 rounded-lg border-2 border-orange-400 bg-gray-900">
        <div class="font-mono leading-none" x-text="minutes"><span class="text-base">{{minutes}}</span> minutes</div>
    </div>
    <div class="w-auto mx-1 p-2 text-yellow-500 rounded-lg border-2 border-orange-400 bg-gray-900">
        <div class="font-mono leading-none" x-text="seconds"><span class="text-base">{{seconds}}</span> secondes</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  layout: "gda",
  data() {
  	return{
      interval: "",
      days:"",
      minutes:"",
      hours:"",
      seconds:"",
      message:"",
    
    };
  },
  async fetch() {
    let time = await this.$http.$get(
        "https://www.npoint.io/docs/3161305ced8bd4e9d70c/time"
    ); //API

    this.start = new Date().getTime();
    this.end = new Date(time.end).getTime();
    this.timerCount(this.end);
    this.timerCount(this.start,this.end);
    this.interval = setInterval(() => {
        this.timerCount(this.start,this.end);
    }, 1000);
  },
  props: {
    tour: {
      type: Number,
      required: true
    },
    type: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    timerCount(start, end){
        var now = new Date().getTime();
        var passTime =  end - now;

        if(passTime < 0){
            this.message = "DJEIJDEIJID"
        }else if(passTime > 0){
            this.calcTime(passTime);
        } 
    },
    calcTime(dist){
        this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
    }
  },
}
</script>