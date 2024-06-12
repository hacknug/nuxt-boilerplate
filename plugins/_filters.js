import Vue from 'vue'
import slugify from 'slugify'
import { filesize } from 'filesize'
import kebabCase from 'lodash/kebabCase'

// NOTE: https://github.com/freearhey/vue2-filters#currency

Vue.filter('filesize', (val) => filesize(val))
Vue.filter('kebab', (string) => kebabCase(string))
Vue.filter('slugify', (string) => slugify(string.toLowerCase()))
Vue.filter('capitalize', (string) => string && (string[0].toUpperCase() + string.slice(1)))

Vue.filter('number', (val, params = {}) => (val ?? 0).toLocaleString(null, { ...params }))
Vue.filter('percent', (val, params = {}) => (val ?? 0).toLocaleString(null, { style: 'percent', ...params }))
Vue.filter('currency', (val, params = {}) => (val ?? 0).toLocaleString(null, { style: 'currency', ...params }))
Vue.filter('date', (val, params = {}) => new Date(val).toLocaleDateString(null, { ...params }))
