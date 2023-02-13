<template>
  <div class="w-full h-full page">
    <MainHeader class="w-full max-w-[1600px] mx-auto px-4 lg:px-[120px]" />
    <main class="w-full h-full main pt-4 max-w-[1600px] mx-auto lg:px-[120px]">
      <slot />
    </main>
    <MainFooter />
  </div>
</template>

<script setup lang="ts">
import MainHeader from '@/components/nav/MainHeader.vue'
import MainFooter from '@/components/nav/MainFooter.vue'
</script>

<style lang="scss" scoped>
.page {
  display: grid;
  grid-template-rows: min-content 1fr;
  width: 100%;
  min-height: 100vh;
}
</style>
