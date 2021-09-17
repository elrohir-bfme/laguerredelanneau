export default {
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  ssr: false,
  
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        hid: "canonical",
        rel: "canonical",
        href: "https://laguerredelanneau.vercel.app",
      },
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
        url: "https://laguerredelanneau.vercel.app",
        title: "Events de la Terre du Milieu",
        site_name: "Events de la Terre du Milieu",
        description: "Retrouvez les évènements de la Terre du Milieu, sur les jeux la Bataille pour la Terre du Milieu mais pas seulement",
        img: "/eventsltdm.webp",
        img_size: { width: "1200", height: "800" },
        locale: "fr",
        twitter: "@Elrohir_bfme",
        twitter_card: "summary_large_image",
        themeColor: "#3E7A4A",
      },
    ],
    '@nuxtjs/pwa',
    '@nuxtjs/strapi',
    '@nuxtjs/apollo',
    '@nuxt/image',
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
  hostname: 'https://laguerredelanneau.vercel.app',
  path: '/sitemap.xml',
  cacheTime: 1000 * 60 * 15, // La durée avant que le sitemap soit regénéré. Ici 15mn.
  gzip: true,
},

robots: {
  Sitemap: 'https://laguerredelanneau.vercel.app/sitemap.xml',
},

  pwa: {
    meta: {
      /* meta options */
      lang: 'fr',
      ogHost: 'https://laguerredelanneau.vercel.app',
      twitterCard: "Events de la Terre du Milieu",
      twitterCreator: "@Elrohir_bfme",
      theme_color: '#3E7A4A'
    },
    manifest: {
      name: "Events de la Terre du Milieu",
      description : "Retrouvez les évènements de la Terre du Milieu, sur les jeux la Bataille pour la Terre du Milieu mais pas seulement",
      lang: 'fr',
      useWebmanifestExtension: false,
    }
  },

  tailwindcss: {
    viewer: true
  },

  build: {
    babel:{
      plugins: [
        ["@babel/plugin-proposal-class-properties", { "loose": true }],
        ["@babel/plugin-proposal-private-methods", { "loose": true }],
        ["@babel/plugin-proposal-private-property-in-object", { "loose": true }]
      ]
    }  
  },

  image: {
    dir: 'assets/'
  }
}
