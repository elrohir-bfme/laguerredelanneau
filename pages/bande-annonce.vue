<template>
    <div class="mt-8 w-full bg-lotr max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto rounded-3xl text-white">
    <h1 class="text-3xl sm:text-4xl  text-white p-8 antialiased sm:subpixel-antialiased md:antialiased text-center">Bande Annonce 💙</h1>
    <h1 class="text-3xl sm:text-4xl  text-white p-8 antialiased sm:subpixel-antialiased md:antialiased text-center">En préparation par notre incroyable Eternal</h1>
    <!-- <div class="videoWrapper m-8 z-0">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/7e5LxENe88w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div> -->
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.bg-lotr {
  background-color: #18191c;
}

.videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}
.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
