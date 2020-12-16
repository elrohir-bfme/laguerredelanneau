
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  ssr: false,
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
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
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxt/http',
    'vue-scrollto/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    ["nuxt-social-meta",
      {
        url: "https://laguerredelanneau.vercel.app/",
        title: "La Guerre de l'Anneau",
        site_name: "La Guerre de l'Anneau",
        description: "La Guerre de l'Anneau est un évènement se déroulant sur le jeux : La Bataille pour la Terre du Milieu 2.",
        img: "/GDA.png",
        locale: "fr",
        twitter: "@Elrohir_bfme",
        twitter_card: "summary_large_image",
        themeColor: "#3E7A4A",
      },
    ],
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },

  sitemap: {
    hostname: 'https://laguerredelanneau.vercel.app/',
  },
}
