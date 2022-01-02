<template>
  <div class="gobelin">
    <div class="gobs border-b -2 border-gray-400">
      <nav
        class="
          container
          px-6
          py-4
          mx-auto
          md:flex md:justify-between md:items-center
        "
      >
        <div class="flex items-center justify-between">
          <router-link
            to="/"
            class="
              text-lg
              font-bold
              text-gray-800
              md:text-base
              hover:text-blue-400
            "
            >
            <img class="transform transition duration-500 hover:scale-110 hover:rotate-3" src="~assets/campagne_gobelins/logo.png" alt="lcdg">
          </router-link>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button
              type="button"
              class="
                text-gray-800
                hover:text-gray-400
                focus:outline-none focus:text-gray-400
              "
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>


        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="
            flex-col
            mt-8
            space-y-4
            md:flex
            md:space-y-0
            md:flex-row
            md:items-center
            md:space-x-10
            md:mt-0
          "
        >
          <nuxt-link class="text-4xl font-bold text-blue-200 hover:text-green-200 transition duration-500" to="/la-campagne-des-gobelins">La Campagne des Gobelins</nuxt-link>
          <nuxt-link class="text-4xl font-bold text-blue-200 hover:text-green-200 transition duration-500" to="/la-campagne-des-gobelins/cartes">Cartes</nuxt-link>
          <nuxt-link class="text-4xl font-bold text-blue-200 hover:text-green-200 transition duration-500" to="/la-campagne-des-gobelins/maps">Maps</nuxt-link>
          <nuxt-link class="text-4xl font-bold text-blue-200 hover:text-green-200 transition duration-500" to="/la-campagne-des-gobelins/donations">Donations</nuxt-link>
        </ul>
      </nav>
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>

<style>

@font-face {
  font-family: 'GIGI';
  font-display: swap;
  src: url('~assets/fonts/GIGI.ttf') format('truetype');
}

@font-face {
  font-family: 'Bodoni';
  font-display: swap;
  src: url('~assets/fonts/Bodoni_MT.ttf') format('truetype');
}

ul {
  font-family: 'Bodoni';
}

.gobelin {
  /* background-color: #18191c; */
  /* background-image: linear-gradient(to left top, #1d404b, #204b55, #23565f, #276168, #2c6d70, #347777, #3c807d, #458a83, #50948a, #5b9e91, #66a998, #72b39f); */
background: hsla(194, 44%, 20%, 1);

background: linear-gradient(360deg, hsla(194, 44%, 20%, 1) 0%, hsla(162, 30%, 57%, 1) 100%);

background: -moz-linear-gradient(360deg, hsla(194, 44%, 20%, 1) 0%, hsla(162, 30%, 57%, 1) 100%);

background: -webkit-linear-gradient(360deg, hsla(194, 44%, 20%, 1) 0%, hsla(162, 30%, 57%, 1) 100%);

filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#1D404B", endColorstr="#72B39F", GradientType=1 );
  font-family: 'Bodoni';
}


</style>
