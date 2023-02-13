<template>
  <div class="relative">
    <input
      type="text"
      v-bind="props"
      v-model="value"
      class="input px-4 rounded-lg duration-300"
      :class="{ invalid: props.error, 'pb-4': props.parts }"
      :placeholder="props.placeholder"
      @keydown.enter="$emit('enter')"
    />
    <span
      v-if="props.errorMessage"
      class="absolute bottom-[-42%] left-0 text-[#ff0000] text-[12px]"
    >
      {{ props.errorMessage }}
    </span>
    <div v-if="props.parts" class="flex items-center gap-1 absolute bottom-[6px] right-4">
      <button class="parts-button" @click="getAmount('quarter')">25%</button>
      <button class="parts-button" @click="getAmount('half')">50%</button>
      <button class="parts-button" @click="getAmount('3quarters')">75%</button>
      <button class="parts-button" @click="getAmount('max')">Max</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import type { InputHTMLAttributes } from 'vue'
import { BigNumber } from 'ethers'
import { Currency } from '@/store/contracts/presale'
import { useToken } from '@/store/contracts/token'

const token = useToken()

interface InputProps extends Omit<InputHTMLAttributes, 'type'> {
  modelValue: string | number
  error?: boolean
  isValid?: boolean
  parts?: boolean
  errorMessage?: string
  validate?: 'float' | 'int'
  placeholder?: string
  currency: keyof typeof Currency
  maxAmount: BigNumber
}

const props = defineProps<InputProps>()
const emit = defineEmits(['update:modelValue', 'enter', 'getAmount'])

const balance = ref('0'.toBigNumber())

watch(
  () => token.balances[props.currency],
  (value) => (balance.value = value)
)

onMounted(() => (balance.value = token.balances[props.currency]))

type PartAmount = 'quarter' | 'half' | '3quarters' | 'max'
const getAmount = (part: PartAmount) => {
  let amount = 0
  switch (part) {
    case 'quarter':
      amount = props.maxAmount
        .div(BigNumber.from(4))
        .formatNumber(token.decimals[props.currency])
      emit('getAmount', amount)
      return amount
    case 'half':
      amount = props.maxAmount
        .div(BigNumber.from(2))
        .formatNumber(token.decimals[props.currency])
      emit('getAmount', amount)
      return amount
    case '3quarters':
      amount = props.maxAmount
        .mul(BigNumber.from(3))
        .div(BigNumber.from(4))
        .formatNumber(token.decimals[props.currency])
      emit('getAmount', amount)
      return amount
    case 'max':
      amount = props.maxAmount.formatNumber()
      emit('getAmount', amount)
      return amount
  }
}

if (props.modelValue) {
  emit('update:modelValue', props.modelValue)
}

const value = ref<string | number>(props.modelValue ?? '')

watch(
  () => props.modelValue,
  (newValue) => (value.value = newValue)
)
watch(value, (newValue, oldValue) => {
  if (props.validate) {
    let strValue = typeof value === 'string' ? value : (newValue as number).toString()
    const maxLength = 16
    switch (props.validate) {
      case 'float':
        if (strValue.toString().length >= maxLength) {
          value.value = oldValue
          break
        }
        if (strValue === '') {
          value.value = ''
        } else if (strValue.match(/^[0-9]*(\.[0-9]*)?$/)) {
          if (!strValue.match(/^[0-9]*\.[0-9]*0+$/) && !strValue.match(/^[0-9]*\.$/)) {
            emit('update:modelValue', parseFloat(strValue))
            value.value = parseFloat(strValue)
          }
        } else value.value = oldValue
        break
      case 'int':
        if (strValue.toString().length > maxLength) {
          value.value = oldValue
          break
        }
        if (strValue === '') {
          value.value = ''
        } else if (strValue.match(/^[0-9]*$/)) {
          emit('update:modelValue', parseInt(strValue))
          value.value = parseInt(strValue)
        } else value.value = oldValue
        if (props.max)
          if (+strValue > props.max) {
            value.value = props.max
          }
        if (props.min)
          if (+strValue < props.min) {
            value.value = props.min
          }
        break
    }
  } else emit('update:modelValue', newValue)
})
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  height: 60px;
  border: 1px solid #f4f6f9;
  outline: none;
  background-color: #f4f6f9;
  color: #63717e;
  text-align: right;
  &.invalid {
    border-color: #ff0000;
  }
}

.parts-button {
  padding-top: 2px;
  font-size: 8px;
  color: #3ba1fe;
  border: 1px solid #3ba1fe;
  border-radius: 4px;
  width: 33px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
