// Log variables to the terminal.
console.log('nuxt.config.js/process.env.BASE_URL =', process.env.BASE_URL)
console.log('nuxt.config.js/process.env.NUXT_ENV_REMOTE_API_BASE_URL =', process.env.NUXT_ENV_REMOTE_API_BASE_URL)

// import layout from './middleware/layout/axios'

export default {
  // Deployment targets
  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-target
  target: 'static', // default is 'server'

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Advnaced',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // Vue util plugins - run on both client and server sides.
    {
      src: '~/plugins/utils.nuxt.js'
    },

    // Vue util plugins - always client only whether you set the mode property or not.
    {
      src: '~/plugins/utils.vue.js'
    },

    // Sample plugins with the mode property.
    {
      src: '~/plugins/client-only.js',
      mode: 'client'
    },
    {
      src: '~/plugins/server-only.js',
      mode: 'server'
    },
    {
      src: '~/plugins/server-client.js',
    },

    // Sample mixins
    {
      src: '~/mixins/utils.methods.js',
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-windicss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // The env property defines environment variables that should be
  // available on the client side.
  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-env#the-env-property
  env: {
    // Set base URL, if it is not set in the .env file, then fallback.
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',

    // Set remote API base URL, if it is not set in the .env file, then fallback.
    remoteApiBaseUrl: process.env.REMOTE_API_BASE_URL || 'http://localhost:3004'
  },

  router: {
    // The layout middleware must be registered globally so that it can be
    // executed before the layout property in the component.
    middleware: ['layout']
  },

  static: {
    prefix: true
  }
}
