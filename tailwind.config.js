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
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
        serif: [...defaultTheme.fontFamily.serif],
      },
    },
  },

  variants: {
    extend: {},
  },

  plugins: [],
  purge: [],
}
