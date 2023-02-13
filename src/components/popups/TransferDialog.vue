<template>
  <div class="connect-dialog w-[311px] md:w-[440px] lg:w-[560px]">
    <div class="title">
      <div class="connect-text">{{ props.title }}</div>
      <!-- <div class="small-text text-center mt-[16px]">
        You are going to presale {{ props.amount }} Tokens for {{ props.stableAmount }}
        {{ Currency[props.currency!] }}
      </div> -->
      <div class="small-text text-center mt-[16px]">
        {{ props.text }}
      </div>
    </div>
    <div class="connect-buttons mt-[24px] md:mt-[40px]">
      <BaseButtom
        class="connect-button"
        outline
        @click="
          () => {
            dialogs.closeCurrentDialog()
            props.onCancel()
          }
        "
      >
        Cancel
      </BaseButtom>
      <BaseButtom class="connect-button" primary @click="props.onConfirm()">
        {{ props.buttonText }}
      </BaseButtom>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useToken } from '@/store/contracts/token'
import { useDialogs } from '@/store/ui/dialogs'
import BaseButtom from '@/components/base/Button.vue'

import { Currency } from '@/store/contracts/presale'

export interface BuyProps {
  title: string
  buttonText: string
  text: string
  stableAmount?: number
  currency?: number
  amount?: number
  onCancel: () => any
  onConfirm: () => any
}
const props = defineProps<BuyProps>()

const dialogs = useDialogs()
const token = useToken()
</script>

<style scoped lang="scss">
.connect-dialog {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
}

.connect-text {
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;

  color: black;
}

.small-text {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;

  color: gray;
}

.connect-buttons {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 16px;

  .connect-button {
    width: 156px;
    height: 52px;
  }
}
</style>
