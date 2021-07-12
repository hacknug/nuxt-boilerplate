import { join } from 'path'
import { startsWith } from 'lodash'
import flatten from 'flat'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'

export const fullConfig = resolveConfig(tailwindConfig)
export const FLATTEN_CONFIG = { delimiter: '-', maxDepth: 2 }

export const handleName = (className, base) => {
  const split = className.split(`${base}-`)
  const prefixedName = `${split[0] || ''}${split[1] ? prefixNegativeModifiers(base, split[1]) : base || ''}`
  return prefixedName.split('-default').join('')
}

export const prefixNegativeModifiers = (base, modifier) => {
  return startsWith(modifier, '-') ? `-${base}-${modifier.slice(1)}` : `${base}-${modifier}`
}

export const screens = Object.fromEntries(Object.entries(fullConfig.theme.screens).map(([name, w]) => ([name, Number(w.split('px').join(''))])))

export default {
  target: 'static',
  components: true,
  telemetry: false,

  loading: false,
  pageTransition: 'page',

  head: {
    title: process.env.npm_package_name,
    htmlAttrs: { lang: 'en' }, // TODO: Update for i18n
    meta: [
      { charset: 'utf-8' },
      { hid: 'format-detection', name: 'format-detection', content: 'telephone=no' },
      { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description },
      { hid: 'og:site_name', property: 'og:site_name', content: process.env.npm_package_name },
      { hid: 'og:type', property: 'og:type', content: 'website' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      // { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      // { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      // { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
    ],
  },

  build: {
    // transpile: ['vue-final-modal'],
    postcss: {
      plugins: {
        'tailwindcss': join(__dirname, 'tailwind.config.js'),
        'postcss-easing-gradients': {},
        'postcss-viewport-height-correction': {},
      },
      order: [
        'postcss-import',
        'tailwindcss',
        'postcss-easing-gradients',
        'postcss-preset-env',
        'postcss-viewport-height-correction',
        'cssnano',
      ],
    },
  },

  storybook: {
    addons: [
      '@storybook/addon-a11y',
      // '@storybook/addon-centered',
      'storybook-mobile',
      'storybook-addon-pseudo-states',
      'storybook-dark-mode/register',
      '@etchteam/storybook-addon-status/register',
    ],
    decorators: [
      "<div class='absolute inset-0 flex justify-center items-center flex-1 w-full h-full'><story /></div>",
    ],
    parameters: {
      // status: {
      //   statuses: {
      //     wonky: { color: '#fff', background: '#00f', description: 'Description of this custom status' },
      //   },
      // },
      options: {
        storySort: (a, b) => (a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })),
      },
      backgrounds: {
        default: 'transparent',
        values: Object.entries(flatten(fullConfig.theme.colors, FLATTEN_CONFIG)).map(([name, value]) => ({ name: handleName(name), value })),
        grid: { disable: true },
      },
      viewport: {
        viewports: Object.fromEntries(Object.entries(fullConfig.theme.screens).map(([name, width]) => [name, { name, styles: { width, height: '100%' } }])),
      },
    },
  },

  publicRuntimeConfig: {
    // NOTE: Works with Netlify but Vercel will mess with your env variables.
    siteName: process.env.npm_package_name,
    siteDescription: process.env.npm_package_description,
  },

  // server: {
  //   host: '0.0.0.0',
  //   port: '3333',
  // },
}
