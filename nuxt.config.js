export default {
  target: 'static',

  head: {
    title: 'Dimas Fajar Katon Prayogo',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        name: 'description',
        content:
          'Saya seorang manusia yang suka melakukan kegiatan yang tidak biasa, dan suka dengan anime. Selain ingin menikah dengan anime saya juga ingin menjadi seorang fullstack developer.',
      },
      {
        name: 'og:description',
        content:
          'Saya seorang manusia yang suka melakukan kegiatan yang tidak biasa, dan suka dengan anime. Selain ingin menikah dengan anime saya juga ingin menjadi seorang fullstack developer.',
      },
      {
        name: 'keywords',
        content:
          'fullstack developer, Dimas Fajar Katon Prayogo, anime, Dicoding Indonesia, Dicoding, Backend Developer, Frontend Developer, Web Developer, Software Engineer, Software Developer, Programmer, Developer, Dimas Fajar, Dimas Katon, Dimas Prayogo, Dimas Fajar Katon, Dimas Fajar Prayogo, Dimas',
      },
      {
        name: 'author',
        content: 'Dimas Fajar Katon Prayogo, SideID',
      },
      { name: 'og:title', content: 'Dimas Fajar Katon Prayogo [he/they]' },
      { name: 'og:image', content: '/favicon.png' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://www.sideid.tech' },
      { name: 'og:site_name', content: 'Dimas Fajar Katon Prayogo' },
      { name: 'og:locale', content: 'id_ID' },
      { name: 'og:locale:alternate', content: 'en_US' },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    script: [
      {
        type: 'application/ld+json',
        json: {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Dimas Fajar Katon Prayogo',
          url: 'https://www.sideid.tech',
          jobTitle: 'Fullstack Developer',
          image: 'https://www.sideid.tech/favicon.png',
          sameAs: [
            'https://www.facebook.com/sideid.dev/',
            'https://www.instagram.com/side__id/',
            'https://www.linkedin.com/in/dimas-fajar-katon-prayogo',
            'https://www.linkedin.com/in/sideid/',
            'https://github.com/SideeID',
          ],
          alumniOf: {
            '@type': 'Organization',
            name: 'Dicoding Indonesia',
          },
          worksFor: {
            '@type': 'Organization',
            name: 'SideID',
          },
          description:
            'Saya seorang manusia yang suka melakukan kegiatan yang tidak biasa, dan suka dengan anime. Selain ingin menikah dengan anime saya juga ingin menjadi seorang fullstack developer.',
        },
      },
    ],
    __dangerouslyDisableSanitizers: ['script'],
  },

  css: ['@assets/css/font.css', '@assets/css/main.css'],

  plugins: [],

  components: {
    dirs: ['~/components', '~/components/icons'],
  },

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/fontawesome',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxt/image',
    '@nuxtjs/toast',
    // '@nuxtjs/auth-next',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

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
