<template>
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">OUR TEAM</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
    </div>
    <div class="flex flex-wrap -m-4" v-if="loading">
      <div v-for="card in cards" v-bind:key="card.title" @click="toggleModal" class="p-4 lg:w-1/4 md:w-1/2 transform transition duration-500 hover:scale-110 hover:drop-shadow-xl">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-full object-cover object-center mb-4" :src="`https://api.laterredumilieu.fr${card.img.url}`" >    
        </div>
      </div>
    </div>
  </div>

  <ModalCard v-if="isShowModal" @close="toggleModal"/>
</section>
</template>

<script>
export default {
    data() {
        return {
        loading: false,
        cards: [],
        isShowModal: false,
        }
    },
    async fetch() {
      this.loading = false;
      this.cards =  await this.$strapi.find('cards')
      this.loading = true;
    },
    methods: {
      toggleModal(e) {
        this.isShowModal = !this.isShowModal;
      },
    }
}
</script>
<style>

</style>