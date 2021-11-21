<template>
  <section class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
    <nuxt-link title="Archives de Numenor"  to="/les_archives_de_numenor/" class="text-purple-400 inline-flex items-center mb-10 text-3xl hover:text-purple-500">Retour vers les Archives de Nùmenor
    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14"></path>
        <path d="M12 5l7 7-7 7"></path>
    </svg>
    </nuxt-link>
    <NuxtImg
        src="tournois/coupe_rotwk_2019.jpg"
        class="mx-auto mb-10 object-cover object-center rounded"
        alt="Tournoi ROTWK : 1vs1"
        loading="lazy"
    />
    <iframe 
        class="max-w-screen max-h-screen mx-auto"
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/csjE4saU_d0" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
    <iframe
        src="https://challonge.com/fr/worlds19/module"
        width="100%"
        height="800"
        frameborder="0"
        scrolling="auto"
        allowtransparency="true"
    ></iframe>
  </div>
</section>
</template>

<script>
export default {
    layout: "home",
}
</script>

<style scoped>

.bg {
  background-color: #18191c;
}

</style>