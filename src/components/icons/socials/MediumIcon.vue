<template>
  <BaseIcon v-bind="props">
    <svg
      width="28"
      height="29"
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.25 7.05098C26.25 7.05098 25.2 7.05098 25.2 8.10098V20.001C25.2 20.001 25.2 21.051 26.25 21.051H26.6V23.851H18.2V21.051H19.6V8.03098H19.46L15.169 23.851H11.3918L7.13999 8.03098H6.99999V21.051H8.39999V23.851H1.39999V21.051H1.74999C1.74999 21.051 2.79999 21.051 2.79999 20.001V8.10098C2.79999 8.10098 2.79999 7.05098 1.74999 7.05098H1.39999V4.25098H10.6876L13.9454 16.375H14.0532L17.3404 4.25098H26.6V7.05098H26.25Z"
        fill="white"
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
