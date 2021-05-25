<template>
  <MapboxMap
    v-if="accessToken"
    class="w-full h-full"
    style="min-height: 300px;"
    v-bind="{ accessToken, mapStyle, zoom, scrollZoom, pitch, pitchWithRotate, center }"
    @mb-created="handleInstance"
  >
    <MapboxNavigationControl />
    <slot v-bind="{ MapboxMarker }" />
  </MapboxMap>
</template>

<script>
import 'mapbox-gl/dist/mapbox-gl.css'

export default {
  name: 'BaseMap',
  components: {
    ...Object.fromEntries(['MapboxMap', 'MapboxNavigationControl']
      .map((entry) => [entry, () => import('@studiometa/vue-mapbox-gl').then((m) => m[entry]).catch()])),
  },
  props: {
    center: {
      type: Array,
      required: false,
      default: () => [0, 0],
    },
    accessToken: {
      type: String,
      required: false,
      default: 'pk.eyJ1IjoiaGFja251ZyIsImEiOiJjaW9vaGc1ZWMwMDAweGRrbmM2NnB1bXlwIn0.RC5ekDiHm4QjHr4BKnN2zQ',
    },
    mapStyle: {
      type: String,
      required: false,
      default: 'mapbox://styles/mapbox/light-v10',
    },
    zoom: {
      type: Number,
      required: false,
      default: 14,
    },
    scrollZoom: {
      type: Boolean,
      required: false,
      default: true,
    },
    pitch: {
      type: Number,
      required: false,
      default: 25,
    },
    pitchWithRotate: {
      type: Boolean,
      required: false,
      default: true,
    },

    onMounted: {
      type: Function,
      required: false,
      default: () => {},
    },
  },
  data: () => ({
    map: null,
    ...Object.fromEntries(['MapboxMarker']
      .map((entry) => [entry, () => import('@studiometa/vue-mapbox-gl').then((m) => m[entry]).catch()])),
  }),
  methods: {
    handleInstance (mapboxInstance) {
      this.onMounted(mapboxInstance)
      this.map = mapboxInstance
    },
  },
}
</script>

<style lang="postcss">
  .mapboxgl-ctrl-attrib-inner,
  .mapboxgl-ctrl-logo { @apply hidden !important; }

  /* .mapboxgl-marker g[fill="#3FB1CE"] { @apply text-gold-dark fill-current !important; } */
</style>
