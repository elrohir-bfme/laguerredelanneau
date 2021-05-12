<template>
  <section class="p-8 container">
    <Scene v-if="isShowModal" @close="toggleModal" :video="video" />
      <div class="grid gap-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
        <div class="">
            <img class="border-solid border-2 border-orange-600" @click="toggleModal" @mouseover="getInfo" :id="data.video1" :src="data.videoimg1" alt="" srcset="">
            <!-- <p class="text-2xl text-center uppercase tracking-wider">Duel entre Gandalf et le Roi Sorcier</p> -->
        </div>
      <div><img class="border-solid border-2 border-orange-600" @click="toggleModal" @mouseover="getInfo" :id="data.video2" :src="data.videoimg2" alt="" srcset=""></div>

    </div>
      <div class="flex items-center justify-center pt-4">
          <iframe :src="data.pool" style="width:680px;height:420px;border:0;">Loading poll...</iframe>
    </div>

    <img class="w-3/6 border-solid border-2 border-gray-600 mx-auto mt-4" :src="data.surprise" alt="" srcset="">
    <p class="text-white text-center pt-4 text-4xl">PROCHAIN DUEL DEMAIN</p>
    
  </section>
</template>

<script>
export default {
    layout: 'movie',
    data() {
        return {
            data: [],
            isShowModal: false
        }
    },
    methods: {
        toggleModal() {
                this.isShowModal = !this.isShowModal;
        },
        getInfo(e) {
                this.video = e.target.id;
                console.log(this.data);
            },
        },
    async fetch() {
      this.data = await this.$http.$get('https://api.npoint.io/808e2e1884f749e97f0d');
    }
}
</script>

<style>

.flex-container {
  padding: 0;
  margin: 0;
  list-style: none;
  
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}

.flex-item {
  background: tomato;
  padding: 5px;
  width: 200px;
  height: 150px;
  margin-top: 10px;
  
  line-height: 150px;
  color: white;
  font-weight: bold;
  font-size: 3em;
  text-align: center;
}

</style>