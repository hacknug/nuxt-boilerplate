<template>
  <div :class="[!isProduction && 'debug-screens', 'flex flex-col items-center min-h-screen']">
    <SiteHeader />

    <main class="container">
      <Nuxt />
    </main>

    <SiteFooter class="mt-auto" />

    <PortalTarget name="modal" />
    <PortalTarget name="debug" slim />
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault',
  head () {
    return {
      htmlAttrs: {
        class: [
          'text-black bg-white',
          'dark:text-white dark:bg-black',
        ],
      },
    }
  },
  computed: {
    isProduction () {
      return process.env.NODE_ENV === 'production'
    },
  },
}
</script>
