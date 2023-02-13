<template>
  <div class="w-full h-full page">
    <MainHeader class="w-full max-w-[1600px] mx-auto px-4 xl:px-[80px]" />
    <main
      class="w-full h-full main pt-4 xl:pt-[82px] max-w-[1600px] mx-auto xl:px-[80px] 2xl:px-[120px] overflow-hidden"
    >
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
