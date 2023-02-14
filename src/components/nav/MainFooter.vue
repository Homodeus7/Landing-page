<template>
  <footer class="w-full bg-black bg py-4 md:py-0 z-10">
    <div class="w-full max-w-[1600px] mx-auto py-10 px-4 lg:px-[120px] hidden md:block">
      <ul class="w-full hidden md:flex items-center justify-between">
        <li
          v-for="item in links"
          :key="item.name"
          class="text-white text-base lg:text-[20px] cursor-pointer"
          @click="$router.push(item.link)"
        >
          {{ item.name }}
        </li>
      </ul>
      <div class="flex items-center justify-between">
        <div class="flex flex-col self-end">
          <div class="w-full flex items-center justify-center gap-5 pt-12">
            <li v-for="(item, i) in socialLinks">
              <a :href="item.link" target="_blank">
                <component :is="socialIcons[i]" size="20px" />
              </a>
            </li>
          </div>
          <p class="text-[#ffffff90] font-normal w-full max-w-[148px] pt-8">
            Moscow, Green St, 56, apt. 12
          </p>
          <p class="text-[#ffffff90] pt-6">+7 111 234 56 78</p>
        </div>
        <div class="flex flex-col items-center pt-[65px]">
          <img
            @click="$router.push('/')"
            class="cursor-pointer w-40"
            src="@/assets/imgs/logo-image-white.svg"
          />
          <p class="text-[#ffffff90] pt-8 w-full max-w-[178px] text-sm text-center">
            2023 © Rocket All Rights Reserved
          </p>
        </div>
        <div class="flex flex-col items-end self-end">
          <a href="/privacy.pdf" target="_blank" class="text-sm text-[#ffffff90] py-2"
            >Privacy Policy</a
          >
          <a href="/privacy.pdf" target="_blank" class="text-sm text-[#ffffff90] py-2"
            >Terms of Use</a
          >
          <!-- <a
            href=""
            target="_blank"
            class="text-sm text-[#ffffff90] py-2 pt-4"
          >
            Developed by
            <span class="text-primary-base text-sm"></span>
          </a> -->
        </div>
      </div>
    </div>
    <div class="flex md:hidden items-center justify-center gap-14">
      <a href="/privacy.pdf" target="_blank" class="text-sm text-[#ffffff90] py-2"
        >Privacy Policy</a
      >
      <a href="/termsofuse.pdf" target="_blank" class="text-sm text-[#ffffff90] py-2"
        >Terms of Use</a
      >
    </div>
    <div class="flex md:hidden justify-center pt-4">
      <a href="#" target="_blank" class="text-sm text-[#ffffff90] text-center">
        Developed by
        <span class="text-primary-base text-sm"></span>
      </a>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { reactive, shallowRef } from 'vue'
import { socials } from '@/components/icons/socials'

const links = reactive([
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Shop', link: '/shop' },
  { name: 'News', link: '/news' },
  { name: 'Contact', link: '/contact' },
])
const socialLinks = reactive([
  { name: 'Twitter', link: '#' },
  // { name: 'Discord', link: '' },
  { name: 'Insta', link: '#' },
  { name: 'Telegram', link: '#' },
  { name: 'Facebook', link: '#' },
  // { name: 'Medium', link: '' },
])

const socialIcons = shallowRef([
  socials.Twitter,
  // socials.Discord,
  socials.Insta,
  socials.Facebook,
  // socials.Medium,
  socials.Telegram,
])
</script>

<style scoped>
.bg {
  width: 100%;
  background-image: url('../../assets/imgs/Ellipse-white.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 60%;
}
</style>
