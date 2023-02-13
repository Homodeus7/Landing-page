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
        d="M16.3333 15.8011H19.25L20.4167 11.1344H16.3333V8.80107C16.3333 7.5994 16.3333 6.46773 18.6667 6.46773H20.4167V2.54773C20.0363 2.49757 18.6002 2.3844 17.0835 2.3844C13.916 2.3844 11.6667 4.31757 11.6667 7.86773V11.1344H8.16667V15.8011H11.6667V25.7177H16.3333V15.8011Z"
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
