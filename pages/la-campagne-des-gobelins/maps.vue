<template>
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">Deck des tunnels</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Voici l'ensemble des cartes de la Campagne des Gobelins</p>
    </div>
    <div class="flex flex-wrap -m-4" v-if="loading">
      <div v-for="card in cards" v-bind:key="card.title" @click="toggleModal(card)" class="p-4 lg:w-1/4 md:w-1/2 transform transition duration-500 hover:scale-110 hover:drop-shadow-xl">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-full object-cover object-center mb-4" :src="`https://api.laterredumilieu.fr${card.img.url}`" >    
        </div>
      </div>
    </div>
  </div>

  <ModalCard v-if="isShowModal" @close="toggleModal" :data="data"/>
</section>
</template>

<script>
export default {
  layout: "gobelin",
    data() {
        return {
        loading: false,
        cards: [],
        isShowModal: false,
        data: []
        }
    },
    async fetch() {
      this.loading = false;
      this.cards =  await this.$strapi.find('cards')
      this.loading = true;
    },
    methods: {
      toggleModal(value) {
        this.data = value;
        this.isShowModal = !this.isShowModal;
      },
    }
}
</script>
<style>

</style>