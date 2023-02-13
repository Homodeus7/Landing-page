<template>
  <div class="flex flex-col xl:flex-row items-center justify-between">
    <div class="flex flex-col w-full max-w-[690px] relative mx-auto">
      <h1 class="text-base xl:text-[28px] font-medium text-gray text-center xl:text-left">
        The First
      </h1>
      <p
        class="text-[44px] xl:text-[60px] font-medium mt-2 xl:mt-6 pb-5 xl:pb-14 text-center xl:text-left"
      >
        About
      </p>
      <p class="text-sm xl:text-base px-4 md:px-0">
        Repellendus quae animi, omnis assumenda distinctio rem saepe officia officiis?
        Accusantium quam debitis eveniet distinctio atque velit, praesentium similique
        esse!
      </p>
      <div
        class="relative w-full flex xl:hidden h-[540px] overflow-hidden justify-start pt-12 pb-24"
      >
        <BaseCard
          class="!bg-[#ffffff] card-dialog p-3 w-full max-w-[126px] !rounded-[10px] absolute right-[230px] top-24 z-10"
          ><div class="flex items-center gap-1">
            <img src="@/assets/imgs/red-heart.svg" class="w-[26px]" />
            <img src="@/assets/imgs/call-me-hand.svg" class="w-[26px]" />
            <img src="@/assets/imgs/call-me-hand.svg" class="w-[26px]" />
          </div>
        </BaseCard>
        <div class="absolute -right-5">
          <BaseCard
            class="rotate-[-3.56deg] py-1 px-4 ml-auto relative w-[340px] h-[360px] mt-6 !bg-[#ffffff]"
          >
            <img
              src="@/assets/imgs/items/person9.png"
              class="rotate-[3.56deg] absolute -bottom-2 left-[50%] translate-x-[-48%] w-[280px]"
            />
            <img
              src="@/assets/imgs/pencil-about.png"
              class="absolute -bottom-10 left-4 w-[85px]"
            />
          </BaseCard>
        </div>
      </div>
      <p class="text-sm xl:text-base pt-3 px-4 md:px-0">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, minima?
        Repellendus quae animi, omnis assumenda distinctio rem saepe officia officiis?
        Accusantium quam debitis eveniet distinctio atque velit, praesentium similique
        esse! Repellendus quae animi, omnis assumenda distinctio rem saepe officia
        officiis? Accusantium quam debitis eveniet distinctio atque velit, praesentium
        similique esse!
      </p>
      <p class="text-sm xl:text-base pt-7 xl:pt-3 px-4 md:px-0">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, minima?
        Repellendus quae animi, omnis assumenda distinctio rem saepe officia officiis?
        Accusantium quam debitis eveniet distinctio atque velit, praesentium similique
        esse! Repellendus quae animi, omnis assumenda distinctio rem saepe officia
        officiis?
      </p>
    </div>
    <div class="relative w-full hidden xl:flex justify-start">
      <BaseCard
        class="!bg-[#ffffff] card-dialog py-8 px-6 max-w-[283px] !rounded-[10px] absolute left-10 top-28 z-10"
        ><div class="flex items-center gap-4">
          <img src="@/assets/imgs/red-heart.svg" class="w-[36px]" />
          <img src="@/assets/imgs/call-me-hand.svg" class="w-[36px]" />
          <img src="@/assets/imgs/call-me-hand.svg" class="w-[36px]" />
        </div>
      </BaseCard>
      <BaseCard class="rotate-[-3.56deg] px-4 ml-auto relative w-[480px] h-[480px] mt-10">
        <img
          src="@/assets/imgs/items/person9.png"
          class="rotate-[3.56deg] absolute -bottom-2 left-[50%] translate-x-[-50%]"
        />
        <img src="@/assets/imgs/pencil-about.png" class="absolute -bottom-20 left-4" />
      </BaseCard>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BaseCard from '@/components/base/Card.vue'
</script>

<style lang="scss" scoped>
.card-dialog {
  &:after {
    content: '';
    position: absolute;
    right: 0;
    transform: rotate(90deg);
    bottom: -11px;
    border: 10px solid transparent;
    border-top: 10px solid rgba(255, 255, 255);
  }
}
.card {
  background: rgba(255, 255, 255, 0.6) !important;
}
</style>
