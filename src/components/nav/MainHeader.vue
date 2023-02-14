<template>
  <header class="flex items-center justify-between w-full py-6">
    <img
      @click="$router.push('/')"
      class="cursor-pointer ml-10 w-20 md:w-32"
      src="@/assets/imgs/logo-image.svg"
    />
    <nav class="hidden md:flex">
      <ul class="flex items-center gap-6 xl:gap-[66px]">
        <li class="cursor-pointer" v-for="item in links" @click="$router.push(item.link)">
          {{ item.name }}
        </li>
      </ul>
    </nav>
    <div v-auto-animate class="flex md:hidden relative">
      <button v-if="!menu" @click="menu = true">
        <NavMenu />
      </button>
      <button v-else @click="menu = false">
        <CloseIcon />
      </button>
      <ul v-if="menu" class="md:hidden absolute top-10 right-0 z-40" ref="navmenu">
        <BaseCard class="flex flex-col gap-2 !rounded-xl py-4 px-6 justify-center">
          <li
            class="cursor-pointer text-xl"
            v-for="item in links"
            @click="$router.push(item.link)"
          >
            {{ item.name }}
          </li>
        </BaseCard>
      </ul>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core'
import { reactive, ref } from 'vue'

import CloseIcon from '@/components/icons/CloseIcon.vue'
import NavMenu from '@/components/icons/NavMenu.vue'

import BaseCard from '@/components/base/Card.vue'

const links = reactive([
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Shop', link: '/shop' },
  { name: 'News', link: '/news' },
  { name: 'Contact', link: '/contact' },
])

const menu = ref(false)
const navmenu = ref<HTMLElement | any>(null)
onClickOutside(navmenu, () => (menu.value = false))
</script>
