<template>
<section class="text-gray-400 body-font">
  <h1 class="text-center text-white text-3xl">Bienvenue sur les évènements de la Terre du Milieu</h1>
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="lg:w-2/3 mx-auto">
      <div class="flex flex-wrap w-full bg-gray-800 py-32 px-10 relative mb-4">
        <img alt="gallery" class="w-full object-cover h-full object-center block opacity-50 absolute inset-0" src="~assets/wotr/bg.jpg">
        <div class="text-center relative z-10 w-full">
          <h2 class="text-2xl text-white font-medium title-font mb-2">La Guerre d'Arnor</h2>
          <p class="leading-relaxed">Mod de Miraak</p>
          <nuxt-link style="font-family: 'Albertus'" to="/wotr" class="mt-3 text-indigo-300 inline-flex items-center">Voir plus d'informations
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </nuxt-link>
        </div>
      </div>
      <div class="flex flex-wrap -mx-2">
        <div class="px-2 w-1/2">
          <div class="flex flex-wrap w-full bg-gray-800 sm:py-24 py-16 sm:px-10 px-6 relative">
            <img alt="gallery" class="w-full object-cover h-full object-center block opacity-50 absolute inset-0" src="~assets/map.jpg">
            <div class="text-center relative z-10 w-full">
              <h2 class="text-xl text-white font-medium title-font mb-2">Shooting Stars</h2>
              <p class="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
              <nuxt-link style="font-family: 'Albertus'" to="/le_seigneur_d_or" class="mt-3 text-indigo-300 inline-flex items-center">Voir plus d'informations
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="px-2 w-1/2">
          <div class="flex flex-wrap w-full bg-gray-800 sm:py-24 py-16 sm:px-10 px-6 relative">
            <img alt="gallery" class="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="~assets/third_age/map.jpg">
            <div class="text-center relative z-10 w-full">
              <h2 class="text-xl text-white font-medium title-font mb-2">Third Age Total War</h2>
              <p class="leading-relaxed">Organiser par Kado !</p>
              <nuxt-link style="font-family: 'Albertus'" to="/third_age" class="mt-3 text-indigo-300 inline-flex items-center">Voir plus d'informations
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  layout: "home",
}
</script>

<style>

</style>