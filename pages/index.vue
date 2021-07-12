<template>
  <article>
    <header>
      <h1>{{ `${$t('welcome')} ${$options.name}` }}</h1>
    </header>
    <section>
      <p>Mobile Safari detection is included in case you need to handle things differently for those users.</p>
      <p>The code included on <code>safari.client.js</code> will add <code>maximum-scale=1</code> to your <code>viewport</code> meta-tag, preventing the browser from automatically zooming in on form controls with a font-size smaller than 16px.</p>
    </section>
  </article>
</template>

<script>
export default {
  name: 'PageHome',
  computed: {
    isSafariMobile () {
      return this.$isSafariMobile
    },
  },
}
</script>
