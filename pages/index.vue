<template>
  <article>
    <header>
      <h1>{{ `${$t('welcome')} ${$options.name}` }}</h1>
    </header>
    <section>
      <p>{{ $config.siteDescription }}</p>
    </section>
  </article>
</template>

<script>
export default {
  name: 'PageHome',
}
</script>
