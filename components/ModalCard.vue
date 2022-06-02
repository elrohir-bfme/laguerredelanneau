<template>
  <!-- <div class="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0  sm:items-center sm:justify-center">
    <div class="fixed inset-0 transition-opacity" @click="handleClose">
      <div class="absolute inset-0 bg-gray-500 opacity-25"></div>
    </div>
    <div class="z-40 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all" role="dialog"
      aria-modal="true" aria-labelledby="modal-headline">
      <div class="max-w-lg rounded overflow-hidden shadow-lg">
        deijdije
      </div>
    </div>
  </div> -->
  <div class="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center" >
    <!-- modal -->
    <div class="fixed inset-0 transition-opacity" @click="handleClose">
      <div class="absolute inset-0 bg-black opacity-75"></div>
    </div>
    <button class="text-yellow fixed top-2 right-2 text-6xl" @click="handleClose">&cross;</button>
    <div class="rounded shadow-lg w-10/12 md:w-1/3 z-40">
      <!-- modal header -->
      <!-- <div class="border-b px-4 py-2 flex justify-between items-center">
        <h3 class="font-semibold text-lg">Détail</h3>
      </div> -->
      <div class="mx-auto flex flex-wrap">
      <img alt="ecommerce" class="p-8 w-full h-full object-cover object-center rounded transform transition duration-500 hover:scale-110 hover:drop-shadow-xl" :src="`https://api.laterredumilieu.fr${data.attributes.card_img.data.attributes.url}`">
      <!-- <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h3 class="text-gray-200 uppercase text-3xl title-font font-medium mb-1">{{data.attributes.card_category}}</h3>
        <h4 class="text-2xl title-font text-white tracking-widest">{{data.attributes.card_title}}</h4>
        
        <p class="leading-relaxed text-xl text-green-400">{{data.attributes.card_description}}</p>
        <div class="flex mt-6 items-center pb-5 border-b-2 border-green-200 mb-5">
          
        </div>
        <p class="leading-relaxed text-lg text-yellow-400">{{data.attributes.card_effect}}</p>
      </div> -->
    </div>
      <!-- <div class="flex justify-end items-center w-100 border-t p-3">
        <button class="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1 close-modal">Cancel</button>
        <button class="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white">Oke</button>
      </div> -->
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        data: [],
      }
    },
    methods: {
      handleClose() {
        this.$emit("close");
      },
    },
    props: {
      data: {
          type: Object,
          required: true
      }
    }
  }

</script>
