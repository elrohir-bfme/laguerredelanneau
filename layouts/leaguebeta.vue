  <template>
  <div style="font-family: 'Albertus'">
    <header class="text-white">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-2xl justify-center bg-gray border-orange-500 border-2 border-opacity-75 hover:border-orange-600">
          <nuxt-link to="/"><img alt="League ROTWK" title="League ROTWK" class="w-16 m-4" src="~assets/league/logo.png"></nuxt-link>
          <nuxt-link class="p-4 text-orange-500 hover:text-white hover:bg-gray-900" :to="localePath('/les_archives_de_numenor/leaguebeta')">{{ $t('league.league') }}</nuxt-link>
          <nuxt-link class="p-4 text-orange-500 hover:text-white hover:bg-gray-900" :to="localePath('/les_archives_de_numenor/leaguebeta/matchs')">{{ $t('league.matchs') }}</nuxt-link>
          <nuxt-link class="p-4 text-orange-500 hover:text-white hover:bg-gray-900" :to="localePath('/les_archives_de_numenor/leaguebeta/players')">{{ $t('league.players') }}</nuxt-link>
          <nuxt-link class="p-4 text-orange-500 hover:text-white hover:bg-gray-900" :to="localePath('/les_archives_de_numenor/leaguebeta/factions')">{{ $t('league.factions') }}</nuxt-link>
          <nuxt-link class="p-4 text-orange-500 hover:text-white hover:bg-gray-900" :to="localePath('/les_archives_de_numenor/leaguebeta/maps')">{{ $t('league.maps') }}</nuxt-link>
          <nuxt-link class="p-4 text-orange-500 hover:text-white hover:bg-gray-900" :to="localePath('/les_archives_de_numenor/leaguebeta/regles')">{{ $t('league.rules') }}</nuxt-link>
          <a rel="noopener noreferrer" style="font-family: 'Albertus'" class="p-4 text-gray-600 hover:text-white hover:bg-gray-900" target="_blank" href="http://bit.ly/LaTerreduMilieu">
            <svg class="h-10 w-10 animate-pulse" width="71" height="55" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
              <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" fill="#5865F2"/>
              </g>
              <defs>
              <clipPath id="clip0">
              <rect width="71" height="55" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </a>
          <select @change="switchLang(lang)" v-model="lang" 
            class="form-select appearance-none px-3 py-1.5 mr-4 text-base font-normal focus-within:text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 text-gray-600 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
              <option 
                v-for="(locale, index) in this.$i18n.locales" 
                :key="index"
                :value="locale.code">
                <!-- <img :alt="locale.code" :src="require(`~/assets/lang/${locale.code}.svg`)"
                  class="mx-auto object-cover rounded-full h-12 w-12"/> -->
                {{ locale.name }}
              </option>
          </select>
        </nav>
      </div>
    </header>
    <Nuxt />
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      lang: ""
    }
  },
  created() {
    this.lang = this.$i18n.locale;
  },
  methods: {
    switchLang(lang) {
      this.$router.replace(this.switchLocalePath(lang));
    },
  },
}
</script>

<style>

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

html {
  background-color: #18191c;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  /* background-image: url('~assets/gde/fond.png') !important; */
  /* background-repeat: no-repeat;
  background-size: cover; */
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
  src: url('~assets/fonts/LOTR.TTF') format('truetype');
}

@font-face {
  font-family: 'Albertus';
  font-display: swap;
  src: url('~assets/fonts/Albertus.otf') format('truetype');
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
