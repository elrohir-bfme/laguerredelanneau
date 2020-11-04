<template>
  <section class="p-8 container">
    <Scene v-if="isShowModal" @close="toggleModal" :video="video" />
      <div class="grid grid-cols-3   gap-2">
        <div class="">
            <img class="border-solid border-2 border-orange-600" @click="toggleModal" @mouseover="getInfo" :id="data.video1" :src="data.videoimg1" alt="" srcset="">
            <!-- <p class="text-2xl text-center uppercase tracking-wider">Duel entre Gandalf et le Roi Sorcier</p> -->
        </div>
      <div>
        <img class="border-solid border-2 border-gray-600" :src="data.surprise" alt="" srcset="">
        </div>
      <div><img class="border-solid border-2 border-orange-600" @click="toggleModal" @mouseover="getInfo" :id="data.video2" :src="data.videoimg2" alt="" srcset=""></div>

    </div>
      <div class="flex items-center justify-center pt-4">
          <iframe :src="data.pool" style="width:680px;height:420px;border:0;">Loading poll...</iframe>
    </div>

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

.container {
  margin: 15px auto !important;
  max-width: 1280px !important;
  font-family: 'kenyan coffee rg' !important;
}

</style>