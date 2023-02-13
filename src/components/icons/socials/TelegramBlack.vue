<template>
  <BaseIcon v-bind="props">
    <svg
      width="43"
      height="43"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.1613 4.26362C24.1613 4.26362 26.4277 3.37987 26.2388 5.52612C26.1759 6.40988 25.6093 9.50301 25.1686 12.8487L23.6576 22.7593C23.6576 22.7593 23.5317 24.2112 22.3985 24.4637C21.2652 24.7162 19.5655 23.5799 19.2506 23.3274C18.9988 23.1381 14.529 20.2974 12.955 18.9087C12.5143 18.5299 12.0107 17.7724 13.018 16.8886L19.6284 10.5762C20.3839 9.81865 21.1394 8.05115 17.9915 10.1974L9.17764 16.1943C9.17764 16.1943 8.17034 16.8255 6.28168 16.2574L2.1895 14.9949C2.1895 14.9949 0.67854 14.048 3.25975 13.1011C9.55541 10.1342 17.299 7.10422 24.1613 4.26362Z"
        fill="#222831"
      />
    </svg>
  </BaseIcon>
</template>

<script lang="ts" setup>
import BaseIcon from '@/components/base/BaseIcon.vue'
import type { IconProps } from '@/components/base/BaseIcon.vue'

export interface IIcon extends IconProps {}

const props = defineProps<IIcon>()
</script>
