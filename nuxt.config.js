import baseConfig from './assets/nuxt.base.config.js'

export default {
  ...baseConfig,

  css: [],
  plugins: [
    '~/plugins/_filters',
  ],

  buildModules: [
    ['@nuxtjs/eslint-module', { cache: false }], // https://go.nuxtjs.dev/eslint
    ['@nuxtjs/stylelint-module'], // https://go.nuxtjs.dev/stylelint

    ['@nuxtjs/svg'], // https://github.com/nuxt-community/svg-module
    ['@braid/vue-formulate/nuxt'], // https://vueformulate.com/guide/installation/#nuxt
    ['@nuxtjs/tailwindcss'], // https://go.nuxtjs.dev/tailwindcss

    ['nuxt-i18n', { // https://i18n.nuxtjs.org/
      locales: ['en', 'es'],
      defaultLocale: 'en',
      vueI18n: {
        fallbackLocale: 'en',
        messages: {
          en: { welcome: 'Welcome' },
          es: { welcome: 'Bienvenido' },
        },
      },
    }],

    ['@nuxt/image', {}], // https://image.nuxtjs.org/
    ['@nuxtjs/sanity/module', { // https://sanity.nuxtjs.org
      projectId: process.env.SANITY_PROJECT_ID,
      dataset: process.env.SANITY_DATASET || (process.env.NODE_ENV === 'development' ? 'staging' : 'production'),
      minimal: true, // https://sanity.nuxtjs.org/configuration#minimal
    }],

    ...(process.env.NODE_ENV !== 'production'
      ? ['@nuxtjs/html-validator']
      : []
    ),
  ],

  modules: [
    ['portal-vue/nuxt'],

    ['@nuxtjs/pwa', { // https://go.nuxtjs.dev/pwa
      manifest: { lang: 'en' },
    }],
    ['@nuxtjs/gtm', {
      id: undefined,
      pageTracking: true,
      // debug: true,
    }],

    ['@nuxtjs/sitemap', {
      hostname: 'https://example.com',
      // exclude: null,
      trailingSlash: true,
      gzip: true,
    }],
    ['@nuxtjs/robots', {
      UserAgent: '*',
      Sitemap: 'https://example.com/sitemap.xml',
      ...(process.env.DEPLOY_ENV === 'production'
        ? { Allow: '/', Disallow: '/secret-path/' }
        : { Disallow: '/' }
      ),
    }],
  ],
}
