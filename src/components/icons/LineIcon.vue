<template>
  <BaseIcon v-bind="props">
    <svg
      width="14"
      height="42"
      viewBox="0 0 14 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="11.0561"
        y="0.458759"
        width="2.98157"
        height="41.6089"
        rx="1.49079"
        transform="rotate(15 11.0561 0.458759)"
        fill="#3BA1FE"
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
