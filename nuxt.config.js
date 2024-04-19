// export default {
//   // Target: https://go.nuxtjs.dev/config-target
//   target: 'static',

//   // Global page headers: https://go.nuxtjs.dev/config-head
//   head: {
//     title: 'Side ID',
//     htmlAttrs: {
//       lang: 'en',
//     },
//     meta: [
//       { charset: 'utf-8' },
//       { name: 'viewport', content: 'width=device-width, initial-scale=1' },
//       { name: 'format-detection', content: 'telephone=no' },
//       {
//         name: 'description',
//         content:
//           "Saya seorang manusia yang suka melakukan kegiatan yang tidak biasa, dan suka dengan anime. Selain ingin menikah dengan anime saya juga ingin menjadi seorang fullstack developer.",
//       },
//       {
//         name: 'og:description',
//         content:
//           "Saya seorang manusia yang suka melakukan kegiatan yang tidak biasa, dan suka dengan anime. Selain ingin menikah dengan anime saya juga ingin menjadi seorang fullstack developer.",
//       },
//       { name: 'og:title', content: 'Side ID [he/they]' },
//       { name: 'og:image', content: '/favicon.png' },
//     ],
//     link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
//   },

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nyobaNuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@assets/css/font.css', '@assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: ['~/components', '~/components/icons'],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  colorMode: {
    classSuffix: '',
  },

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },
}
