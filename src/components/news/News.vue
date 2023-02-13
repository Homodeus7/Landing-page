<template>
  <div
    class="w-full flex flex-col xl:flex-row items-center gap-4 pt-[80px] xl:pt-[120px]"
  >
    <BaseCard class="card">
      <div class="w-full">
        <img src="@/assets/imgs/emptyimage.svg" />
        <p class="font-medium text-[20px] pt-4">Article heading</p>
        <p class="p-3">
          Lorem ipsum dolor sit amet consectetur. Rhoncus et consectetur proin amet
          facilisi condimentum...
        </p>
      </div>
    </BaseCard>
    <BaseCard class="card">
      <div class="w-full">
        <img src="@/assets/imgs/emptyimage.svg" />
        <p class="font-medium text-[20px] pt-4">Article heading</p>
        <p class="p-3">
          Lorem ipsum dolor sit amet consectetur. Rhoncus et consectetur proin amet
          facilisi condimentum...
        </p>
      </div>
    </BaseCard>
    <BaseCard class="card">
      <div class="w-full">
        <img src="@/assets/imgs/emptyimage.svg" />
        <p class="font-medium text-[20px] pt-4">Article heading</p>
        <p class="p-3">
          Lorem ipsum dolor sit amet consectetur. Rhoncus et consectetur proin amet
          facilisi condimentum...
        </p>
      </div>
    </BaseCard>
  </div>
</template>

<script lang="ts" setup>
import BaseCard from '@/components/base/Card.vue'
</script>

<style lang="scss" scoped>
.card {
  padding: 16px 24px;
  width: 343px;
  height: 373px;
  border-radius: 20px !important;
  @media (min-width: 1280px) {
    width: 384px;
    height: 392px;
  }
}
</style>
