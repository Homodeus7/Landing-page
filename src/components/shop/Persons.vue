<template>
  <div
    class="w-full grid grid-cols-2 xl:grid-cols-4 justify-center justify-items-center gap-4 pt-[80px] xl:pt-[120px]"
  >
    <BaseCard class="card">
      <img src="@/assets/imgs/items/person5.png" />
    </BaseCard>
    <BaseCard class="card">
      <img src="@/assets/imgs/items/person6.png" />
    </BaseCard>
    <BaseCard class="card">
      <img src="@/assets/imgs/items/person7.png" />
    </BaseCard>
    <BaseCard class="card">
      <img src="@/assets/imgs/items/person8.png" />
    </BaseCard>
  </div>
</template>

<script lang="ts" setup>
import BaseCard from '@/components/base/Card.vue'
</script>

<style lang="scss" scoped>
.card {
  width: 158px;
  height: 181px;
  border-radius: 16px !important;
  @media (min-width: 1280px) {
    width: 271px;
    height: 314px;
  }
}
</style>
