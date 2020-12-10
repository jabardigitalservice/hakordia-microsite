export default {
  // passing env
  env: {
    baseUrl: process.env.NUXT_BASE_URL,
    baseApi: process.env.NUXT_BASE_API,
    siteKey: process.env.NUXT_SITE_KEY,
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'hakordia',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Kawal Jawa Barat Untuk Terus Maju Lawan Korupsi',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Defaults options
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
  },

  loading: { color: '#069550' },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // vendor: ['handTrack'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/axios',
    { src: '~/plugins/signaturePad', mode: 'client' },
    { src: '~/plugins/handTrack', ssr: false },
    '~/plugins/vee-validate',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // share media social
    'vue-social-sharing/nuxt',
    // clipboard
    'nuxt-clipboard',
    // toast
    '@nuxtjs/toast',
    // recaptcha
    '@nuxtjs/recaptcha',
  ],

  recaptcha: {
    hideBadge: true,
    siteKey: process.env.NUXT_SITE_KEY,
    version: 2,
  },

  toast: {
    position: 'bottom-center',
    duration: 2000,
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    retry: { retries: 3 },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['vee-validate/dist/rules'],
  },
}
