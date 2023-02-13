<template>
  <BaseIcon v-bind="props">
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.92898 4.77446L20.9155 5.4301C22.0146 5.47518 22.877 6.4113 22.8319 7.51038L22.3402 19.5003C22.2951 20.5994 21.359 21.4617 20.2599 21.4167L4.27334 20.761C3.17427 20.7159 2.3119 19.7798 2.35698 18.6807L2.84871 6.69083C2.89378 5.59175 3.82991 4.72938 4.92898 4.77446Z"
        stroke="#3BA1FE"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22.8328 7.51037L12.5544 14.0947L2.84961 6.69082"
        stroke="#3BA1FE"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
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
