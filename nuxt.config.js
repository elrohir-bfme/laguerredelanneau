export default {
  /*
  ** Nuxt target
  ** See https://events.laterredumilieu.fr//api/configuration-target
  */
  
  publicRuntimeConfig: {
    hostname: "https://events.laterredumilieu.fr",
  },

  target: 'static',
  modern: true,

  loading: {
    color: 'orange',
    height: '3px',
    continuous: true,
    duration: 1000,
  },
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
      { name: 'description', content: process.env.npm_package_description || '' },
      // Twitter
      // Test on: https://cards-dev.twitter.com/validator
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      { name: 'twitter:site', content: '@elrohir_bfme' },
      {
        name: 'twitter:url',
        content: 'https://events.laterredumilieu.fr/'
      },
      {
        name: 'twitter:title',
        content: 'Events de la Terre du Milieu'
      },
      {
        name: 'twitter:description',
        content:
          'Retrouvez les évènements de la Terre du Milieu, sur les jeux la Bataille pour la Terre du Milieu mais pas seulement'
      },
      {
        name: 'twitter:image',
        content: 'https://events.laterredumilieu.fr/eventsltdm.webp'
      },

      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      { property: 'og:site_name', content: 'La Terre du Milieu' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:url',
        content: 'https://events.laterredumilieu.fr/'
      },
      {
        property: 'og:title',
        content: 'Events de la Terre du Milieu'
      },
      {
        property: 'og:description',
        content:
          'Retrouvez les évènements de la Terre du Milieu, sur les jeux la Bataille pour la Terre du Milieu mais pas seulement'
      },
      {
        property: 'og:image',
        content: 'https://events.laterredumilieu.fr/eventsltdm.webp'
      },
      {
        property: 'og:image:secure_url',
        content: 'https://events.laterredumilieu.fr/'
      },
      {
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
  hostname: 'https://events.laterredumilieu.fr',
  gzip: true,
  defaults: {
      priority: 1,
      lastmod: new Date()
  },
},

robots: {
  UserAgent: '*',
  Allow: "/",
  Sitemap: 'https://events.laterredumilieu.fr/sitemap.xml',
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
    cache: true,
    babel:{
      plugins: [
        ["@babel/plugin-proposal-class-properties", { "loose": true }],
        ["@babel/plugin-proposal-private-methods", { "loose": true }],
        ["@babel/plugin-proposal-private-property-in-object", { "loose": true }]
      ]
    }  
  },

  generate: {
    fallback: true
},

  image: {
    domains: [
      'laguerredelanneau.vercel.app'
    ]
  },

}
