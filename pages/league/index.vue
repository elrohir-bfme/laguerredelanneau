<template>
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-4 mx-auto">
    <div class="flex flex-col text-center w-full mb-5">
      <h1 class="font-medium mb-4 text-red-500 text-8xl">{{ $t('league.title') }}</h1>
      <a href="https://discord.com/invite/aaAH56J" target="_blank" rel="noopener noreferrer">
        Discord ROTWK de la ligue
      </a>
        <!-- <div class="flex items-center justify-center">
            <img class="w-full h-full" src="~assets/league/LFA.webp" :title="$t('league.title')" :alt="$t('league.title')">
        </div> -->
    </div>
  </div>
</section>
</template>

<script>
export default {
  layout: "league",
}
</script>
<style>

</style>