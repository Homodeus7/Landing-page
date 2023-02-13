<template>
  <div class="connect-dialog w-[311px] md:w-[440px] lg:w-[560px]">
    <div class="title">
      <div class="connect-text">Approve</div>
      <div class="small-text text-center mt-[16px]">
        You are going to transfer {{ props.amount }} from
      </div>
    </div>
    <div class="connect-buttons mt-[24px] md:mt-[40px]">
      <BaseButton
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
      </BaseButton>
      <BaseButton
        class="connect-button"
        primary
        @click="
          () => {
            props.onConfirm()
          }
        "
      >
        Approve
      </BaseButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import BaseButton from '@/components/base/Button.vue'

import { useDialogs } from '@/store/ui/dialogs'
import { ChainId } from '@/gotbit-tools/vue/types'
import { useToken } from '@/store/contracts/token'

export interface ApprovePopupProps {
  amount: number
  onCancel: () => any
  onConfirm: () => any
}
const props = defineProps<ApprovePopupProps>()

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
  flex-direction: row;
  gap: 16px;

  .connect-button {
    display: flex;
    flex-direction: row;

    gap: 8px;

    width: 156px;
    height: 52px;

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
