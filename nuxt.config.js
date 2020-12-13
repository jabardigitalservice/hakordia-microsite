export default {
  // passing env
  env: {
    baseUrl: process.env.NUXT_BASE_URL,
    baseApi: process.env.NUXT_BASE_API,
    siteKey: process.env.NUXT_SITE_KEY,
  },
  mode: 'universal',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Jabar Juara tanpa Korupsi',
    meta: [
      { name: 'google', content: 'notranslate' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'url', name: 'url', content: process.env.NUXT_BASE_URL },
      {
        hid: 'description',
        name: 'description',
        content: 'Kawal Jabar Juara tanpa Korupsi',
      },
      // OG meta
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Jabar Juara tanpa Korupsi',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Kawal Jabar Juara tanpa Korupsi',
      },
      { hid: 'og:url', property: 'og:url', content: process.env.NUXT_BASE_URL },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${process.env.NUXT_BASE_URL}/icon.png`,
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Jabar Juara tanpa Korupsi',
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
  generate: {
    fallback: true,
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/axios',
    { src: '~/plugins/signaturePad', mode: 'client' },
    { src: '~/plugins/handTrack', ssr: false },
    { src: '~/plugins/popover', ssr: false },
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
