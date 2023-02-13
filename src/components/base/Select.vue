<template>
  <div class="w-full">
    <div id="selector" v-auto-animate class="card flex flex-col" tabindex="0">
      <div class="card__selector cursor-pointer" ref="dropdown" @click="active = !active">
        <div class="flex items-center mr-1">
          <component
            :is="
              cryptoLabels.filter((o) => o.label === props.modelValue)[0]?.component ??
              cryptoLabels[0].component
            "
            class="mr-1"
          />
          <span class="text-black">
            {{
              cryptoLabels.filter((o) => o.label === props.modelValue)[0]?.label ??
              cryptoLabels[0].label
            }}
          </span>
        </div>
        <ArrowUpIcon v-if="!active" />
        <ArrowUpIcon v-else class="rotate-180" />
      </div>

      <div v-if="active" class="options rounded-sm">
        <div
          v-for="option of cryptoLabels"
          :key="option.label"
          class="option"
          tabindex="0"
          @click="onSelect(option.label)"
          @keyup.enter="onSelect(option.label)"
        >
          <component
            :is="cryptoLabels.filter((o) => o.label === option.label)[0]?.component"
            class="mr-1"
          />
          {{ option.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, shallowRef } from 'vue'
import { onClickOutside } from '@vueuse/core'
import ArrowUpIcon from '@/components/icons/ArrowUpIcon.vue'
import UsdtIcon from '@/components/icons/crypto/UsdtIcon.vue'
import BusdIcon from '@/components/icons/crypto/BusdIcon.vue'
import BnbIcon from '@/components/icons/crypto/BnbIcon.vue'
import BtcIcon from '@/components/icons/crypto/BtcIcon.vue'
import ETHIcon from '@/components/icons/crypto/ETHIcon.vue'

const cryptoLabels = shallowRef([
  { label: 'USDT', currency: 0, component: UsdtIcon },
  { label: 'BUSD', currency: 1, component: BusdIcon },
  { label: 'WBNB', currency: 2, component: BnbIcon },
  { label: 'BTCB', currency: 3, component: BtcIcon },
  { label: 'WETH', currency: 4, component: ETHIcon },
])

interface SelectorProps {
  modelValue?: string
}

const props = defineProps<SelectorProps>()
const emit = defineEmits(['update:modelValue', 'active'])

const active = ref(false)
const dropdown = ref<HTMLElement | any>(null)

onClickOutside(dropdown, () => (active.value = false))

const onSelect = (value: string) => {
  emit('update:modelValue', value)
  active.value = false
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  width: 100%;
  &__selector {
    display: flex;
    align-items: center;
  }
}
.options {
  width: 100%;
  position: absolute;
  background-color: white;
  border-radius: 12px;
  box-shadow: 11px 22px 57px rgba(35, 99, 159, 0.15);
  top: 32px;
  left: 0;
  z-index: 1;
  max-height: 225px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
  .option {
    display: flex;
    width: 100%;
    padding: 6px 12px;
    transition-duration: 200ms;
    cursor: pointer;
    &:hover {
      background-color: rgba(35, 99, 159, 0.15);
    }
    &:focus {
      background-color: rgba(35, 99, 159, 0.3);
    }
  }
  .disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}
</style>
