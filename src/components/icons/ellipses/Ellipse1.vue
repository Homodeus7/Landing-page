<template>
  <BaseIcon v-bind="props">
    <svg
      width="1134"
      height="1179"
      viewBox="0 0 1134 1179"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_2_52)">
        <circle cx="777" cy="402" r="494" fill="#A7C9FC" fill-opacity="0.26" />
      </g>
      <defs>
        <filter
          id="filter0_f_2_52"
          x="0"
          y="-375"
          width="1554"
          height="1554"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="141.5" result="effect1_foregroundBlur_2_52" />
        </filter>
      </defs>
    </svg>
  </BaseIcon>
</template>

<script lang="ts" setup>
import BaseIcon from '@/components/base/BaseIcon.vue'
import type { IconProps } from '@/components/base/BaseIcon.vue'

export interface IIcon extends IconProps {}

const props = defineProps<IIcon>()
</script>
