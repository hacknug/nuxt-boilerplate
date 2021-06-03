<template>
  <header class="w-full">
    <div :class="['container', 'flex items-center justify-between']">
      <div>
        <NuxtLink to="/">{{ $config.siteName }}</NuxtLink>
      </div>
      <div>
        <NuxtLink to="/">{{ $config.siteDescription }}</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader',
}
</script>
