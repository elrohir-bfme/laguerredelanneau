<template>
    <span class="          flex
          mx-auto
          text-orange-400
          bg-gray-900
          border-2
          py-2
          px-8
          focus:outline-none
          hover:bg-gray-800
          rounded
          text-lg
          transform
          transition
          duration-500
          hover:scale-110
          border-orange-400">TOUR {{ tour }} 
          <!-- <br/> -->
          <!-- Prochain tour dans {{days}} jours {{ hours }} heures {{ minutes }} minutes {{ seconds }} secondes
          -->
          
          </span>
</template>

<script>
export default {
  layout: "gde",
  data() {
  	return{
      endtime:"2022-02-07 00:00:00",
      wordString: {},
      start: "",
      end: "",
      interval: "",
      days:"",
      minutes:"",
      hours:"",
      seconds:"",
      message:"",
      statusType:"",
      statusText: "",
    
    };
  },
  mounted(){
    this.start = new Date().getTime();
    this.end = new Date(this.endtime).getTime();
    // Update the count down every 1 second
    this.timerCount(this.start,this.end);
    this.interval = setInterval(() => {
        this.timerCount(this.start,this.end);
    }, 1000);
  },
  props: {
    tour: {
        type: Number,
        required: true
    }
  },
  methods: {
    timerCount(start,end){
        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = start - now;
        var passTime =  end - now;

        if(distance < 0 && passTime < 0){
            this.message = this.wordString.expired;
            this.statusType = "expired";
            clearInterval(this.interval);
            return;

        }else if(distance < 0 && passTime > 0){
            this.calcTime(passTime);
            this.message = this.wordString.running;
            this.statusType = "running";

        } else if( distance > 0 && passTime > 0 ){
            this.calcTime(distance); 
            this.message = this.wordString.upcoming;
            this.statusType = "upcoming";
        }
    },
    calcTime(dist){
      // Time calculations for days, hours, minutes and seconds
        this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
    }
  },
}
</script>