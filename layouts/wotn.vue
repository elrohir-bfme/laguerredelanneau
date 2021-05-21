<template>
  <div style="font-family: 'Albertus'">
    <header class="text-white">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-2xl justify-center bg-gray border-orange-500 border-2 border-opacity-75 hover:border-orange-600">
          <h1 style="font-family: 'Albertus'" class="p-4 hover:text-white hover:bg-gray-900">La Guerre du Nord</h1>
          <nuxt-link style="font-family: 'Albertus'" class="p-4 text-pink-400 hover:text-white hover:bg-gray-900" to="/wotn/matchs">Matchs</nuxt-link>
          <nuxt-link style="font-family: 'Albertus'" class="p-4 text-red-400 hover:text-white hover:bg-gray-900" to="/wotn/statistiques">Statistiques</nuxt-link>
          <nuxt-link style="font-family: 'Albertus'" class="p-4 text-blue-400 hover:text-white hover:bg-gray-900" to="/wotn/regles">Règles</nuxt-link>
          <nuxt-link style="font-family: 'Albertus'" class="p-4 text-green-400 hover:text-white hover:bg-gray-900" to="/wotn/videos">Vidéos</nuxt-link>
          <a style="font-family: 'Albertus'" class="p-4 hover:text-white hover:bg-gray-900" target="_blank" href="http://bit.ly/LaTerreduMilieu">Discord</a>
        </nav>
      </div>
    </header>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-image: url('~assets/rematch.webp');
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  cursor: url("~assets/cursor1.png"),auto;
}

@font-face {
  font-family: 'LOTR';
  font-display: swap;
  src: url('~assets/font/LOTR.TTF') format('truetype');
}

@font-face {
  font-family: 'Albertus';
  font-display: swap;
  src: url('~assets/font/Albertus.otf') format('truetype');
}

.tooltip .tooltip-text {
  visibility: hidden;
  text-align: center;
  padding: 2px 6px;
  position: absolute;
  z-index: 100;
}

.tooltip:hover .tooltip-text {
  visibility: visible;
}

.bg-gray {
  background-color: #18191c;
}

</style>
