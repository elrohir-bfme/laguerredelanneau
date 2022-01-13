export default {
  /*
  ** Nuxt target
  ** See https://events.laterredumilieu.fr//api/configuration-target
  */
  
  publicRuntimeConfig: {
    hostname: "https://events.laterredumilieu.fr",
  },

  ssr: true,
  target: 'static',

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
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      // Twitter
      // Test on: https://cards-dev.twitter.com/validator
      // {
      //   hid: 'twitter:card',
      //   name: 'twitter:card',
      //   content: 'summary_large_image'
      // },
      // { hid: 'twitter:site', name: 'twitter:site', content: '@elrohir_bfme' },
      // {
      //   hid: 'twitter:url',
      //   name: 'twitter:url',
      //   content: 'https://events.laterredumilieu.fr/'
      // },
      // {
      //   hid: 'twitter:title',
      //   name: 'twitter:title',
      //   content: 'Events de la Terre du Milieu'
      // },
      // {
      //   hid: 'twitter:description',
      //   name: 'twitter:description',
      //   content:
      //     'Retrouvez les évènements de la Terre du Milieu, sur les jeux la Bataille pour la Terre du Milieu mais pas seulement'
      // },
      // {
      //   hid: 'twitter:image',
      //   name: 'twitter:image',
      //   content: 'https://events.laterredumilieu.fr/eventsltdm.webp'
      // },

      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      // { hid: 'og:site_name', property: 'og:site_name', content: 'La Terre du Milieu' },
      // { hid: 'og:type', property: 'og:type', content: 'website' },
      // {
      //   hid: 'og:url',
      //   property: 'og:url',
      //   content: 'https://events.laterredumilieu.fr/'
      // },
      // {
      //   hid: 'og:title',
      //   property: 'og:title',
      //   content: 'Events de la Terre du Milieu'
      // },
      // {
      //   hid: 'og:description',
      //   property: 'og:description',
      //   content:
      //     'Retrouvez les évènements de la Terre du Milieu, sur les jeux la Bataille pour la Terre du Milieu mais pas seulement'
      // },
      // {
      //   hid: 'og:image',
      //   property: 'og:image',
      //   content: 'https://events.laterredumilieu.fr/eventsltdm.webp'
      // },
      // {
      //   hid: 'og:image:secure_url',
      //   property: 'og:image:secure_url',
      //   content: 'https://events.laterredumilieu.fr/'
      // },
      // {
      //   hid: 'og:image:alt',
      //   property: 'og:image:alt',
      //   content: 'La Terre du Milieu'
      // }
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

  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/pwa',
    '@nuxtjs/strapi',
    '@nuxt/image',
    ['cookie-universal-nuxt', { alias: 'cookiz' }]
  ],

  /* url: 'http://api.laterredumilieu.fr' */
  strapi: {
    url: "https://api.laterredumilieu.fr/"
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
