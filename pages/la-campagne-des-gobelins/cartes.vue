<template>
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="font-medium mb-4 text-green-200 text-8xl">Deck des tunnels</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-2xl text-yellow-200">Voici l'ensemble des cartes de la Campagne des Gobelins</p>
    </div>
    

  <!-- <button @click="sortBy" class="flex shadow w-32 block border-blue-600 border-2 rounded-full focus:outline-none focus:border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white">
      <svg class="inline-block h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387A7.731 7.731 0 007.1 19h5.8a7.68 7.68 0 001.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8zM12 8H8V5.199C8 3.754 8.797 3 10 3s2 .754 2 2.199V8z"/></svg>
      <span>Button</span>
  </button> -->

    <div class="flex flex-wrap -m-4" v-if="loading">
      <div v-for="card in cards" v-bind:key="card.id" @click="toggleModal(card)" class="p-4 lg:w-1/4 md:w-1/2 transform transition duration-500 hover:scale-110 hover:drop-shadow-xl">
        <div class="h-full flex flex-col items-center text-center">
          <img :alt="card.attributes.card_title" class="flex-shrink-0 rounded-lg w-full h-full object-cover object-center mb-4" :src="`https://api.laterredumilieu.fr${card.attributes.card_img.data.attributes.url}`" >    
        </div>
      </div>
    </div>
  </div>

  <ModalCard v-if="isShowModal" @close="toggleModal" :data="data"/>

</section>
</template>

<script>
const qs = require('qs');
export default {
  layout: "gobelin",
    data() {
        return {
        loading: false,
        cards: [],
        isShowModal: false,
        data: [],
        cardsdefault: []
        }
    },
    async asyncData({ $axios  }) {
      let loading = false;

      const query = qs.stringify({
        populate: '*',
        pagination: {
          page: 1,
          pageSize: 65,
        },
      }, {
        encodeValuesOnly: true,
      });

      const { data } = await $axios.$get(`https://api.laterredumilieu.fr/api/card-gobelines?${query}`); 
      console.log(data)

      let cards;
      let cardsdefault;
      cards = data
      cardsdefault = data
      loading = true;
      return { cards, loading, cardsdefault }
    },
    methods: {
      toggleModal(value) {
        this.data = value;
        this.isShowModal = !this.isShowModal;
      },
      sortBy(sortKey) {
        this.cards = this.cards.filter(c => c.attributes.card_category === "Artefact" );
      }, 
    }
}
</script>
<style>

</style>