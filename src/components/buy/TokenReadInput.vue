<template>
  <div class="w-full mt-7">
    <div class="flex items-center justify-between w-full pb-[6px]">
      <div class="flex items-center gap-1">
        <!-- <div class="h-5 w-5 rounded-full bg-[#D9D9D9]"></div> -->
        <img class="cursor-pointer w-5 h-5" src="@/assets/imgs/logo.svg" />

        <span class="uppercase">POLITICO</span>
        <!-- <div class="relative">
          <span v-if="copied" v-auto-animate class="absolute text-sm -top-5 -left-2"
            >Copied!</span
          >
          <CopyIcon class="cursor-pointer pl-2" @click="copyText()" />
        </div> -->
        <WalletType />
      </div>
      <div class="">Bought: {{ presale.bought.formatNumber(18, 3) }}</div>
    </div>

    <div class="token px-4 rounded-lg relative">
      <div class="flex h-full items-center justify-end">
        {{ props.amount }}
      </div>
      <!-- <button class="parts-button absolute bottom-[6px] right-4" @click="getAmount()">
        Max
      </button> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import WalletType from '@/components/base/WalletType.vue'
import CopyIcon from '@/components/icons/Copy.vue'
import { Currency } from '@/store/contracts/presale'
import { useToken } from '@/store/contracts/token'
import { usePresale } from '@/store/contracts/presale'

interface TokenInput {
  amount: number
  currency: keyof typeof Currency
}
const props = defineProps<TokenInput>()

const token = useToken()
const emit = defineEmits(['update:modelValue', 'getAmount'])

const presale = usePresale()

//     crypto.value <=
//       token.balances[realCurrency.value].formatNumber(
//         token.decimals[realCurrency.value]
//       ) &&
//     crypto.value <=
//       token.maxAmounts[realCurrency.value].formatNumber(
//         token.decimals[realCurrency.value]
//       )

const getAmount = () => {
  let amount = 0
  const balance = token.balances[props.currency].formatNumber(
    token.decimals[props.currency]
  )
  const maxAmount = token.maxAmounts[props.currency].formatNumber(
    token.decimals[props.currency]
  )
  if (balance <= maxAmount) amount = balance
  else amount
  emit('getAmount', amount)
}

const copied = ref(false)

const copyText = () => {
  // if (props.hash) navigator.clipboard.writeText(props.hash)
  copied.value = true
  setTimeout(() => (copied.value = false), 2000)
}
</script>

<style lang="scss" scoped>
.token {
  width: 100%;
  height: 60px;
  border: 1px solid #f4f6f9;
  outline: none;
  background-color: #f4f6f9;
  color: #63717e;
  text-align: right;
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
