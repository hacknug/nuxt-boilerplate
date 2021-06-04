<template>
  <header class="w-full">
    <div :class="['container', 'flex items-center justify-between']">
      <div class="space-x-2">
        <NuxtLink class="text-[blue] dark:text-[lime]" to="/">{{ $config.siteName }}</NuxtLink>
      </div>
      <div class="space-x-2">
        <template v-for="item in $i18n.locales">
          <NuxtLink :key="item" :to="switchLocalePath(item)" :class="[$i18n.locale === item && 'opacity-50']">{{ item }}</NuxtLink>
        </template>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader',
}
</script>
