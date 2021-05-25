module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    // 'prettier',
    // 'prettier/vue',
    // 'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: [
    'prettier',
  ],
  rules: {
    'arrow-parens': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-cond-assign': ['error', 'except-parens'],
    'quote-props': ['warn', 'consistent-as-needed'],

    'no-unused-expressions': 'off',
    // 'babel/no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],

    'vue/attribute-hyphenation': [0],
    'vue/singleline-html-element-content-newline': [0],
    'vue/max-attributes-per-line': [0],
  },
}
