// const _ = require('lodash')
// const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

const pxToRem = (px, base = 16) => `${px / base}rem`
const buildScaleFromArray = (I, cb) => I.reduce((a, i) => ({ ...a, [i]: cb ? cb(i) : i }), {})
const buildScaleFromSteps = (step = 4, limit = 64, _cb = pxToRem) => {
  const scale = { 0: '0px' }
  Array(limit / step).fill()
    .map((value, key) => _cb((key + 1) * step))
    .forEach((value, key) => { scale[(key + 1) * step] = value })
  return scale
}

module.exports = {
  mode: 'jit',
  darkMode: 'media', // or 'media' or 'class'

  theme: {
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
        serif: [...defaultTheme.fontFamily.serif],
      },
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
        lg: '3rem',
        xl: '4rem',
      },
    },
  },

  variants: {
    extend: {},
  },

  plugins: [
    ...process.env.NODE_ENV !== 'production'
      ? [require('tailwindcss-debug-screens')]
      : [],

    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    // require('tailwindcss-padding-safe')(),
  ],
  purge: [],
}
