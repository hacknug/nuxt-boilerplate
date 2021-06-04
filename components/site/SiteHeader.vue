<template>
  <header class="w-full">
    <div :class="['container', 'flex items-center justify-between']">
      <div class="space-x-2">
        <NuxtLink to="/">{{ $config.siteName }}</NuxtLink>
      </div>
      <div class="space-x-2">
        <p>{{ $config.siteDescription }}</p>
      </div>
      <div class="space-x-2">
        <NuxtLink v-for="item in $i18n.locales" :key="item" :to="switchLocalePath(item)">{{ item }}</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader',
}
</script>
