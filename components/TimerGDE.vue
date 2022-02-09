<template>
<div class="text-orange-400 bg-gray-900 border-2 py-2 px-8 focus:outline-none hover:bg-gray-800
          rounded text-lg transform transition duration-500 hover:scale-110 border-orange-400">
  <p>TOUR {{ tour }} </p>
  <p v-if="message.length == 0">Prochain tour dans</p>
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
  layout: "gde",
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
        "https://api.npoint.io/2eeb1bea715cd907d7bc/time"
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