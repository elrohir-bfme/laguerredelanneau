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
      <div class="absolute inset-0 bg-gray-500 opacity-25"></div>
    </div>
    <button class="text-yellow fixed top-2 right-2 text-6xl" @click="handleClose">&cross;</button>
    <div class="bg-white rounded shadow-lg w-10/12 md:w-1/3 z-40">
      <!-- modal header -->
      <div class="border-b px-4 py-2 flex justify-between items-center">
        <h3 class="font-semibold text-lg">Détail</h3>
      </div>
      <div class="mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/2 w-full h-full object-cover object-center rounded transform transition duration-500 hover:scale-110 hover:drop-shadow-xl" :src="`https://api.laterredumilieu.fr${data.img.url}`">
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">{{data.title}}</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
        
        <p class="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          
        </div>
      </div>
    </div>
      <div class="flex justify-end items-center w-100 border-t p-3">
        <button class="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1 close-modal">Cancel</button>
        <button class="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white">Oke</button>
      </div>
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
