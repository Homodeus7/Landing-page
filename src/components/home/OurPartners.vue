<template>
  <div class="w-full pb-[130px] pt-[100px] md:pt-[160px] px-4 md:px-0">
    <div class="flex items-center gap-4 justify-center md:justify-start">
      <h2 class="font-medium text-[32px] md:text-[48px]">Our partners</h2>
      <div class="block md:hidden">
        <img src="@/assets/imgs/handshake.svg" class="w-[44px]" />
      </div>
      <div class="hidden md:block">
        <img src="@/assets/imgs/handshake.svg" class="w-[56px]" />
      </div>
    </div>
    <div
      class="flex items-center justify-evenly md:justify-between py-[50px] flex-wrap gap-2"
    >
      <img src="@/assets/imgs/partners/hermes_256.png" />
      <img src="@/assets/imgs/partners/prada.png" />
      <img src="@/assets/imgs/partners/chanel.png" />
      <img src="@/assets/imgs/partners/hermes_256.png" />
      <img src="@/assets/imgs/partners/prada.png" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Handshake from '@/components/icons/Handshake.vue'
</script>
