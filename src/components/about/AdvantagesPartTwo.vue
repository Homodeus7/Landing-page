<template>
  <div
    class="flex flex-col xl:flex-row justify-between px-4 md:px-0 pt-3 xl:pt-[80px] w-full overflow-hidden pb-[100px] xl:pb-[180px]"
  >
    <div class="flex flex-col w-full relative mx-auto">
      <div class="w-full max-w-[690px]">
        <ul class="px-4 w-full">
          <li v-for="item in content" :key="item" class="w-full list-disc pt-3">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <div class="w-full mt-10 relative h-[750px] xl:h-auto">
      <BaseCard
        class="ml-auto mr-5 xl:mr-10 rotate-[3.89deg] relative w-[310px] xl:w-[449px] h-[370px] xl:h-[539px] mb-[100px] px-2 xl:px-5 card z-20"
      >
        <img
          src="@/assets/imgs/items/person12.png"
          class="rotate-[-3.89deg] absolute -bottom-3 left-[50%] translate-x-[-55%]"
        />
      </BaseCard>
      <div
        class="absolute top-[300px] xl:top-[420px] right-0 xl:-right-20 z-10 blur-[1px]"
      >
        <BaseCard
          class="ml-auto rotate-[13.63deg] relative w-[220px] h-[240px] xl:w-[360px] xl:h-[400px] px-1 xl:px-5 card"
        >
          <img
            src="@/assets/imgs/items/person15.png"
            class="rotate-[-13.63deg] absolute -bottom-3 left-[48%] translate-x-[-50%] block xl:hidden"
          />
          <img
            src="@/assets/imgs/items/person13.png"
            class="rotate-[-13.63deg] absolute -bottom-9 left-[48%] translate-x-[-55%] hidden xl:block"
          />
        </BaseCard>
      </div>
      <div class="absolute bottom-10 xl:bottom-[160px] right-24 blur-sm">
        <BaseCard
          class="ml-auto rotate-[-23.35deg] relative w-[210px] h-[230px] xl:w-[320px] xl:h-[400px] px-5 card"
        >
          <img
            src="@/assets/imgs/items/person14.png"
            class="rotate-[23.35deg] absolute -bottom-10 left-[50%] translate-x-[-47%]"
          />
        </BaseCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import BaseCard from '@/components/base/Card.vue'

const content = reactive([
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, id asperiores.',
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, id asperiores. Magnam quod sed rem dolor maiores ipsam pariatur.',
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, id asperiores.',
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, id asperiores. Magnam quod sed rem dolor maiores ipsam pariatur.',
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, id asperiores.',
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, id asperiores.',
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, id asperiores.',
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, id asperiores.',
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, id asperiores.',
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, id asperiores.',
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, id asperiores.',
])
</script>
