<template>
  <div
    class="flex flex-col xl:flex-row items-center justify-between w-full pt-[80px] xl:pt-[140px]"
  >
    <div class="flex flex-col w-full">
      <h2 class="text-[32px] xl:text-[48px] font-medium text-center xl:text-left">
        Join US
      </h2>
      <p
        class="w-full xl:max-w-[623px] text-center xl:text-left text-[#4D525A] text-sm xl:text-base px-4 xl:px-0"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, ad incidunt
        sapiente cum nulla repudiandae?
      </p>
      <BaseButton @click="$router.push('/buy')" class="w-[181px] mt-14 hidden xl:block">
        Join
      </BaseButton>
    </div>
    <div
      class="w-full relative flex items-end min-h-[500px] overflow-hidden xl:overflow-visible"
    >
      <img
        src="@/assets/imgs/roket.png"
        class="absolute top-[160px] xl:top-20 -left-4 lg:left-0 xl:left-16 2xl:left-18 w-[300px] xl:w-[500px]"
      />
      <BaseCard
        class="w-[288px] xl:w-[339px] h-[254px] xl:h-[280px] rotate-[5deg] p-7 absolute right-2 xl:right-12 top-9"
      >
        <div class="flex flex-col items-center">
          <p class="font-medium text-gray">Lorem ipsum dolor sit amet.</p>
          <p class="py-3 text-xl">Lorem ipsum dolo</p>
          <ul class="w-full">
            <li v-for="item in cardData" class="w-full flex justify-between py-2">
              <span class="text-base xl:text-xl">{{ item.date }}</span>
              <span class="text-base xl:text-xl text-gray">{{ item.price }}</span>
            </li>
          </ul>
        </div>
      </BaseCard>
      <BaseButton
        class="w-full block xl:hidden mx-4 mt-auto"
        @click="$router.push('/buy')"
      >
        Pre Sale
      </BaseButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import BaseButton from '@/components/base/Button.vue'
import BaseCard from '@/components/base/Card.vue'

const cardData = reactive([
  { date: 'Dec 1th - Dec 15th', price: '1$' },
  { date: 'Dec 16th - Dec 22nd', price: '1.25$' },
  { date: 'Dec 23rd - Dec 28th', price: '1.5$' },
])
</script>
