export default {
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['node_modules/lite-youtube-embed/src/lite-yt-embed.css'],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '~/plugins/vue-good-table', ssr: false },
    { src: '~/plugins/vuejs-countdown-timer', ssr: false},
    '~/plugins/youtube.client.js'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'vue-scrollto/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    ["nuxt-social-meta",
      {
        url: "https://events.laterredumilieu.fr",
        title: "La Guerre de l'Anneau",
        site_name: "La Guerre de l'Anneau",
        description: "Evènement se déroulant sur le jeux : La Bataille pour la Terre du Milieu 2. Vous pouvez rejoindre une faction et combattre au fur est à mesure des tours pour devenir le maitre de la Terre du Milieu",
        img: "/GDA.png",
        locale: "fr",
        twitter: "@Elrohir_bfme",
        twitter_card: "summary_large_image",
        themeColor: "#3E7A4A",
      },
    ],
    '@nuxtjs/pwa',
    '@nuxtjs/strapi',
    '@nuxtjs/apollo',
    '@nuxt/image'
  ],

  /* url: 'http://api.laterredumilieu.fr' */
  strapi: {
    url: "https://api.laterredumilieu.fr/"
  },

  apollo: {  
    clientConfigs: {
      default: {
        httpEndpoint: "https://api.laterredumilieu.fr/graphql"
      }
    }
  },

  env: {
    strapiBaseUri: "https://api.laterredumilieu.fr"
  },

  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
 build: {},

  sitemap: {
    hostname: 'https://events.laterredumilieu.fr',
  },

  pwa: {
    meta: {
      /* meta options */
      lang: 'fr',
      ogHost: 'https://events.laterredumilieu.fr',
      twitterCard: "La Guerre de l'Anneau",
      twitterCreator: "@Elrohir_bfme",
      theme_color: '#3E7A4A'
    },
    manifest: {
      name: "La Guerre de l'Anneau",
      description : "Evènement se déroulant sur le jeux : La Bataille pour la Terre du Milieu 2. Vous pouvez rejoindre une faction et combattre au fur est à mesure des tours pour devenir le maitre de la Terre du Milieu",
      lang: 'fr',
      useWebmanifestExtension: false,
    }
  },

  tailwindcss: {
    viewer: true
  }
}
