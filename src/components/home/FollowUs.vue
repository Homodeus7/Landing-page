<template>
  <div class="w-full pt-[102px] xl:pt-[160px] relative overflow-hidden xl:px-1">
    <img
      src="@/assets/imgs/rupor.png"
      class="absolute top-9 -left-[90px] xl:left-0 z-10 w-[300px] xl:w-[400px]"
    />
    <div
      class="w-full max-w-[1200px] h-[676px] xl:h-[646px] bg relative flex flex-col items-center justify-center"
    >
      <img
        src="@/assets/imgs/follow-group-mobile.svg"
        class="absolute top-64 z-10 block xl:hidden"
      />
      <p
        class="text-white text-center text-[28px] xl:text-[48px] font-medium -mt-[16px] xl:-mt-24"
      >
        Follow us
      </p>
      <ul
        class="w-full xl:max-w-[580px] max-w-[180px] xl:flex xl:items-center xl:justify-center gap-[40px] rotate-[-0.87deg] mt-20 grid grid-cols-2 justify-items-center"
      >
        <li v-for="(item, i) in links" class="">
          <a
            :href="item.link"
            target="_blank"
            class="w-[64px] h-[64px] rounded-full bg-[#ffffff30] flex items-center justify-center shadow"
          >
            <component :is="icons[i]" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, shallowRef } from 'vue'
import { socials } from '@/components/icons/socials'

const icons = shallowRef([
  socials.Twitter,
  // socials.Discord,
  socials.Insta,
  socials.Telegram,
  socials.Facebook,
  // socials.Medium,
])
const links = reactive([
  { name: 'Twitter', link: '#' },
  // { name: 'Discord', link: '' },
  { name: 'Insta', link: '#' },
  { name: 'Telegram', link: '#' },
  { name: 'Facebook', link: '#' },
  // { name: 'Medium', link: '' },
])
</script>

<style lang="scss" scoped>
.shadow {
  box-shadow: 11px 22px 57px rgba(232, 154, 39, 0.7);
}
.bg {
  background-image: url('../../assets/imgs/follow-bg-mobile.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
@media (min-width: 1280px) {
  .bg {
    background-image: url('../../assets/imgs/bg-follow-us.png');
    background-size: contain;
  }
}
</style>
