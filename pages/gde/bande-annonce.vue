<template>
    <div class="mt-8 bg-lotr container mx-auto rounded-3xl text-white">
    <h1 class="text-3xl sm:text-4xl  text-white p-8 antialiased sm:subpixel-antialiased md:antialiased text-center">{{ $t('videos.title') }} 💙</h1>
    <!-- <h2 class="text-3xl sm:text-4xl  text-white p-8 antialiased sm:subpixel-antialiased md:antialiased text-center">Incroyable réalisation d'Eternal !</h2> -->

    <div class="videoWrapper m-8 z-0">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/sfUly-xvu0A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <h3 class="text-2xl sm:text-3xl  text-white p-8 antialiased sm:subpixel-antialiased md:antialiased text-center">{{ $t('videos.angmar') }}</h3>
    <div class="videoWrapper m-8 z-0">
     <iframe src="https://drive.google.com/file/d/1Rq_INEqVf9sU6QOo22eoStnvmB-h83gW/preview" width="640" height="480" allow="autoplay"></iframe>
    </div>

        <h3 class="text-2xl sm:text-3xl  text-white p-8 antialiased sm:subpixel-antialiased md:antialiased text-center">{{ $t('videos.gondor') }}</h3>
    <div class="videoWrapper m-8 z-0">
     <iframe width="560" height="315" src="https://www.youtube.com/embed/mHL-J8VPt2g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

        <h3 class="text-2xl sm:text-3xl  text-white p-8 antialiased sm:subpixel-antialiased md:antialiased text-center">{{ $t('videos.arnor') }}</h3>
    <div class="videoWrapper m-8 z-0">
     <iframe width="560" height="315" src="https://www.youtube.com/embed/sS1AV8oia1Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <h3 class="text-2xl sm:text-3xl  text-white p-8 antialiased sm:subpixel-antialiased md:antialiased text-center">{{ $t('videos.nain') }}</h3>
    <div class="videoWrapper m-8 z-0">
     <iframe src="https://drive.google.com/file/d/1D91xmfcpJUwYbwIkZjoiit7rTUzBmy8X/preview" width="640" height="480" allow="autoplay"></iframe>
    </div>

        <h3 class="text-2xl sm:text-3xl  text-white p-8 antialiased sm:subpixel-antialiased md:antialiased text-center">{{ $t('videos.nain') }}</h3>
    <div class="videoWrapper m-8 z-0">
     <iframe width="560" height="315" src="https://www.youtube.com/embed/eeM_J_lVN4s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <h3 class="text-2xl sm:text-3xl  text-white p-8 antialiased sm:subpixel-antialiased md:antialiased text-center">{{ $t('videos.isengard') }}</h3>
    <div class="videoWrapper m-8 z-0">
     <iframe src="https://drive.google.com/file/d/1-LglGZs2JXn_O7rn6uIojdO0EJ6-te9v/preview" width="640" height="480" allow="autoplay"></iframe>
    </div>


    

    </div>
</template>

<script>
export default {
  layout: "gde"
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
