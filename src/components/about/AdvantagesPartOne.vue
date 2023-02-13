<template>
  <div
    class="flex flex-col xl:flex-row items-center justify-between px-4 md:px-0 pt-[80px] w-full"
  >
    <div class="w-full self-center xl:self-end xl:pb-[160px] mt-60 xl:mt-10 relative">
      <div class="absolute -top-60 xl:-top-[320px] -left-10 xl:-left-32 2xl:-left-44">
        <BaseCard
          class="rotate-[-4.49deg] relative w-[220px] xl:w-[346px] px-4 h-[320px] xl:h-[444px] card"
        >
          <img
            src="@/assets/imgs/items/person11.png"
            class="rotate-[4.49deg] absolute -bottom-2 xl:-bottom-3 left-[50%] translate-x-[-50%]"
          />
        </BaseCard>
      </div>

      <BaseCard
        class="rotate-[3.44deg] relative w-[320px] xl:w-[449px] h-[360px] xl:h-[544px] px-5 mx-auto xl:ml-10 card"
      >
        <img
          src="@/assets/imgs/items/person10.png"
          class="rotate-[-3.44deg] absolute -bottom-2 xl:-bottom-3 left-[50%] translate-x-[-53%]"
        />
      </BaseCard>
    </div>

    <div class="flex flex-col w-full relative">
      <p
        class="text-[32px] xl:text-[46px] font-medium mt-20 xl:mt-6 pb-5 xl:pb-10 text-center xl:text-left w-full max-w-[730px] mx-auto"
      >
        Advantages of Metaverse on Politics and Governments
      </p>
      <div class="w-full max-w-[690px] mx-auto">
        <ul class="px-4 w-full">
          <li v-for="item in content" :key="item" class="w-full list-disc pt-3">
            {{ item }}
          </li>
        </ul>
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
