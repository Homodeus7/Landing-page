<template>
  <BaseIcon v-bind="props">
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_82_2615)">
        <path
          d="M13.3333 6H7.33333C6.59695 6 6 6.59695 6 7.33333V13.3333C6 14.0697 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V7.33333C14.6667 6.59695 14.0697 6 13.3333 6Z"
          stroke="#A099A4"
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.33325 10H2.66659C2.31296 10 1.97382 9.85953 1.72378 9.60948C1.47373 9.35943 1.33325 9.02029 1.33325 8.66667V2.66667C1.33325 2.31305 1.47373 1.97391 1.72378 1.72386C1.97382 1.47381 2.31296 1.33334 2.66659 1.33334H8.66659C9.02021 1.33334 9.35935 1.47381 9.60939 1.72386C9.85944 1.97391 9.99992 2.31305 9.99992 2.66667V3.33334"
          stroke="#A099A4"
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_82_2615">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </BaseIcon>
</template>

<script setup lang="ts">
import type { IconProps } from '@/components/base/BaseIcon.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'

interface CopyIconProps extends IconProps {}
const props = defineProps<CopyIconProps>()
</script>
