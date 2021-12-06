export default {
  /*
  ** Nuxt target
  ** See https://events.laterredumilieu.fr//api/configuration-target
  */
  ssr: true,
  
  target: 'static',
  /*
  ** Headers of the page
  ** See https://events.laterredumilieu.fr//api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      // Twitter
      // Test on: https://cards-dev.twitter.com/validator
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@elrohir_bfme' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://events.laterredumilieu.fr/'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Events de la Terre du Milieu'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Retrouvez les évènements de la Terre du Milieu, sur les jeux la Bataille pour la Terre du Milieu mais pas seulement'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://events.laterredumilieu.fr/eventsltdm.webp'
      },

      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      { hid: 'og:site_name', property: 'og:site_name', content: 'La Terre du Milieu' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://events.laterredumilieu.fr/'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Events de la Terre du Milieu'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Retrouvez les évènements de la Terre du Milieu, sur les jeux la Bataille pour la Terre du Milieu mais pas seulement'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://events.laterredumilieu.fr/eventsltdm.webp'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://events.laterredumilieu.fr/'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'La Terre du Milieu'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        hid: 'canonical',
        rel: 'canonical',
        href: `https://events.laterredumilieu.fr/`
      }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['node_modules/lite-youtube-embed/src/lite-yt-embed.css'],

  /*
  ** Plugins to load before mounting the App
  ** https://events.laterredumilieu.fr//guide/plugins
  */
  plugins: [
    { src: '~/plugins/vue-good-table', ssr: false },
    { src: '~/plugins/vuejs-countdown-timer', ssr: false},
    { src: '~/plugins/youtube.client', ssr: false}
  ],
  /*
  ** Auto import components
  ** See https://events.laterredumilieu.fr//api/configuration-components
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
    // ["nuxt-social-meta",
    //   {
    //     url: "https://laguerredelanneau.vercel.app",
    //     title: "Events de la Terre du Milieu",
    //     site_name: "Events de la Terre du Milieu",
    //     description: "Retrouvez les évènements de la Terre du Milieu, sur les jeux la Bataille pour la Terre du Milieu mais pas seulement",
    //     img: "/eventsltdm.webp",
    //     img_size: { width: "1200", height: "800" },
    //     locale: "fr",
    //     twitter: "@Elrohir_bfme",
    //     twitter_card: "summary_large_image",
    //     themeColor: "#3E7A4A",
    //   },
    // ],
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
  ** See https://events.laterredumilieu.fr//api/configuration-build/
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
    domains: [
      'laguerredelanneau.vercel.app'
    ]
  },

}
