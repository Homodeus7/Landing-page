<template>
  <div class="flex items-center justify-between md:px-0">
    <div class="flex flex-col w-full max-w-[615px] relative mx-auto">
      <div class="hidden xl:block">
        <Politico
          class="absolute opacity-[15%] -right-[350px] top-[370px] blur-[1px]"
        />
      </div>

      <h1 class="text-base xl:text-[28px] font-medium text-gray text-center xl:text-left">
        The First
      </h1>
      <p
        class="text-[44px] xl:text-[60px] font-medium mt-2 xl:mt-6 pb-[30px] text-center xl:text-left"
      >
        Landing Page
      </p>
      <div class="relative w-full xl:hidden flex justify-start pb-[80px] overflow-hidden">
        <BaseCard class="w-[248px] h-[293px] rotate-[3.44deg] relative px-1 z-10">
          <img
            src="@/assets/imgs/items/person3.png"
            class="absolute -bottom-[10px] -rotate-[3.44deg] w-[240px]"
          />
        </BaseCard>
        <div class="absolute -right-8 top-[100px]">
          <BaseCard class="w-[186px] h-[220px] -rotate-[4.51deg] relative px-1">
            <img
              src="@/assets/imgs/items/person2.png"
              class="rotate-[4.51deg] absolute -bottom-2 right-3 w-[160px]"
            />
          </BaseCard>
        </div>
      </div>
      <div class="pb-[60px] px-4 xl:px-0">
        <p class="text-sm xl:text-base text-[#4D525A]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, quas doloribus quasi quam, et provident velit ad harum, minus quisquam nostrum cum ducimus ullam totam est autem accusantium fugiat eum.
          <p class="text-sm xl:text-base text-[#4D525A] pt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, quas doloribus quasi quam, et provident velit ad harum, minus quisquam nostrum cum ducimus ullam totam est autem accusantium fugiat eum.
</p> 
          <p class="text-sm xl:text-base text-[#4D525A] pt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore porro qui dolorum sunt praesentium quis?
          </p>
          
        </p>
      </div>

      <div class="flex gap-3 px-4 xl:px-0">
        <LineIcon />
        <p class="w-full max-w-[335px] text-sm xl:text-base text-[#4D525A]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div class="flex flex-col xl:flex-row items-center gap-5 mt-7 px-4 xl:px-0">
        <BaseButton class="w-full xl:max-w-[357px]">
          <div class="flex items-center justify-center gap-4">
            <CheckSquare />
            <span class="font-medium">Join US (coming soon)</span>
          </div>
        </BaseButton>
        <BaseButton outline class="w-full xl:max-w-[181px] font-medium"
          >Read more</BaseButton
        >
      </div>
    </div>
    <div class="relative w-full hidden xl:flex justify-center overflow-hidden">
      <BaseCard
        class="w-[408px] h-[482px] rotate-[2.5deg] relative px-8 z-10 mr-[120px]  overflow-hidden"
      >
        <img
          src="@/assets/imgs/items/person4.png"
          class="absolute -bottom-[37px] rotate-[2.5deg] ml-3"
        />
      </BaseCard>
      <div class="absolute -right-[10px] top-[160px]">
        <BaseCard class="w-[306px] h-[361px] -rotate-[4.51deg] relative px-1">
          <img
            src="@/assets/imgs/items/person2.png"
            class="rotate-[4.51deg] absolute -bottom-2 right-3"
          />
        </BaseCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LineIcon from '@/components/icons/LineIcon.vue'
import BaseCard from '@/components/base/Card.vue'
import Politico from '@/components/icons/PoliticoGroup.vue'
import BaseButton from '@/components/base/Button.vue'
import CheckSquare from '@/components/icons/CheckSquare.vue'
</script>

<style lang="scss" scoped></style>
