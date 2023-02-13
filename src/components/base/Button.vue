<template>
  <button
    @click="onClick"
    v-bind="props"
    class="h-[52px] text-white rounded-full bg-primary-base border-2 border-primary-base hover:bg-primary-hover focus:bg-primary-active duration-200"
    :class="{
      'opacity-70 cursor-not-allowed': props.disabled,
      'text-primary-base !bg-[transparent] hover:!bg-secondary-hover focus:!bg-secondary-active':
        props.outline,
    }"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { ButtonHTMLAttributes } from 'vue'

interface ButtonProps extends ButtonHTMLAttributes {
  disabled?: boolean
  outline?: boolean
}

const props = defineProps<ButtonProps>()
const emit = defineEmits(['click'])

const onClick = () => {
  if (!props.disabled) emit('click')
}
</script>

<style lang="scss" scoped></style>
