<template>
    <div class="mt-8 bg-lotr container mx-auto rounded-3xl text-white">
    <h1 class="text-3xl sm:text-4xl  text-white p-8 antialiased sm:subpixel-antialiased md:antialiased text-center">Bande Annonce 💙</h1>
    <h2 class="text-3xl sm:text-4xl  text-white p-8 antialiased sm:subpixel-antialiased md:antialiased text-center">Incroyable réalisation d'Eternal !</h2>

    <div class="videoWrapper m-8 z-0">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/XCe84pFT_SI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <!-- <div class="videoWrapper m-8 z-0">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/7e5LxENe88w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div> -->

    <h3 class="text-2xl sm:text-3xl  text-white p-8 antialiased sm:subpixel-antialiased md:antialiased text-center">BANDE ANNONCE DES ELFES</h3>
    <div class="videoWrapper m-8 z-0">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/EjE0rTCj93g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <h3 class="text-2xl sm:text-3xl  text-white p-8 antialiased sm:subpixel-antialiased md:antialiased text-center">BANDE ANNONCE DE L'ANGMAR</h3>
    <div class="videoWrapper m-8 z-0">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/byFQ0Q9Ys0g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div class="videoWrapper m-8 z-0">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/valuTOJq6zo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    

    <h3 class="text-2xl sm:text-3xl  text-white p-8 antialiased sm:subpixel-antialiased md:antialiased text-center">BANDE ANNONCE DU GONDOR</h3>
    <div class="videoWrapper m-8 z-0">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/3dzgilTe_H0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <h3 class="text-2xl sm:text-3xl  text-white p-8 antialiased sm:subpixel-antialiased md:antialiased text-center">BANDE ANNONCE DES NAINS</h3>
    <div class="videoWrapper m-8 z-0">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/LzVyI4V4R8c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>


    <div class="videoWrapper m-8 z-0">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/m1Uer6Ki_Q0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div class="videoWrapper m-8 z-0">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/OIHHOVdSym8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div class="videoWrapper m-8 z-0">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/_YywU1QGHOo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    
    <h3 class="text-2xl sm:text-3xl  text-white p-8 antialiased sm:subpixel-antialiased md:antialiased text-center">BANDE ANNONCE DES GOBELINS</h3>
    <div class="videoWrapper m-8 z-0">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/08jagT__o00" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <h3 class="text-2xl sm:text-3xl  text-white p-8 antialiased sm:subpixel-antialiased md:antialiased text-center">BANDE ANNONCE DU ROHAN</h3>
    <div class="videoWrapper m-8 z-0">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/7iQpc1kQfw8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    
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
