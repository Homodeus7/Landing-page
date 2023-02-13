<template>
  <MainLayout class="image">
    <div class="pb-[100px] xl:pb-[180px] w-full">
      <div class="flex flex-col xl:flex-row items-center justify-between">
        <div class="flex flex-col w-full max-w-[615px] relative mx-auto">
          <p
            class="text-base xl:text-[28px] font-medium text-gray text-center xl:text-left"
          >
            The First
          </p>
          <h1
            class="text-[44px] xl:text-[60px] font-medium mt-2 xl:mt-6 pb-5 xl:pb-14 text-center xl:text-left"
          >
            Shop
          </h1>
          <p class="text-sm xl:text-base px-4 md:px-0">
            Lorem ipsum dolor sit amet consectetur. Rhoncus et consectetur proin amet
            facilisi condimentum. Egestas sed ut dictum adipiscing pellentesque parturient
            aliquam imperdiet pretium. Morbi sit neque eu turpis eget in nunc odio mi.
            Magna facilisis augue et morbi viverra.
          </p>
        </div>
        <div
          class="relative w-full flex justify-start overflow-hidden xl:overflow-visible pt-20 xl:pt-0"
        >
          <BaseCard
            class="!bg-[#ffffff] card-dialog p-3 xl:py-8 xl:px-6 max-w-[175px] xl:max-w-[283px] !rounded-[10px] absolute left-3 xl:left-24 top-12 xl:-top-1 z-10"
            ><div class="flex items-center gap-4">
              <img src="@/assets/imgs/money.svg" class="w-[26px] xl:w-[36px]" />
              <img src="@/assets/imgs/money.svg" class="w-[26px] xl:w-[36px]" />
              <img src="@/assets/imgs/money.svg" class="w-[26px] xl:w-[36px]" />
              <img src="@/assets/imgs/mouth-face.svg" class="w-[26px] xl:w-[36px]" />
            </div>
          </BaseCard>
          <img src="@/assets/imgs/hand.png" class="ml-auto hidden xl:block" />
          <img src="@/assets/imgs/hand-shop-mobile.png" class="ml-auto block xl:hidden" />
        </div>
      </div>
      <Persons />
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue'
import BaseCard from '@/components/base/Card.vue'
import Persons from '@/components/shop/Persons.vue'
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
  background-image: url('../assets/imgs/ellipse-shop-mobile.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  @media (min-width: 1280px) {
    background-position: top right;
    background-image: url('../assets/imgs/Ellipse1.svg');
    background-size: cover;
  }
}
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
</style>
