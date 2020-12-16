<template>
<div
  class="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center"
>
  <div class="fixed inset-0 transition-opacity" @click="handleClose" >
    <div
      class="absolute inset-0 bg-black opacity-25"
    ></div>
  </div>
  <div
    class="z-10 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-headline"
  >
    <div class="max-w-screen-xl rounded overflow-hidden shadow-lg">
      <div class="relative">
        <iframe width="600" height="300" :src="this.video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    methods: {
        handleClose() {
            this.$emit("close");
        }
    },
    props: {
        video: {
            type: String,
            required: true
        }
    }}
</script>


