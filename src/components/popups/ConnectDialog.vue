<template>
  <div class="connect-dialog">
    <div class="title">
      <div class="connect-text">Connect wallet</div>
      <div class="small-text">Choose a provider to connect wallet</div>
    </div>
    <div class="w-full mt-[24px] md:mt-[40px] flex flex-col items-center gap-4">
      <BaseButton
        class="w-[295px] md:w-[340px] h-[50px]"
        outline
        @click="
          () => {
            connectMetamask()
            dialogs.closeCurrentDialog()
          }
        "
      >
        <div
          class="flex items-center justify-center gap-2 font-jerseyM54 w-full h-full z-30 button-text"
        >
          <MetamaskIcon size="24px" />
          <span class="z-50">MetaMask</span>
        </div>
      </BaseButton>

      <div class="relative">
        <BaseButton
          outline
          class="w-[295px] md:w-[340px] h-[50px]"
          @click="
            () => {
              connectWalletconnect()
              dialogs.closeCurrentDialog()
            }
          "
        >
          <div
            class="flex items-center justify-center gap-2 font-jerseyM54 w-full h-full z-30 button-text"
          >
            <WalletConnectIcon size="24px" />
            WalletConnect
          </div>
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MetamaskIcon from '@/components/icons/MetamaskIcon.vue'
import WalletConnectIcon from '@/components/icons/WalletConnectIcon.vue'

import BaseButton from '@/components/base/Button.vue'

import { useWallet } from '@/gotbit-tools/vue'
import { useDialogs } from '@/store/ui/dialogs'

const { connectMetamask, connectWalletconnect } = useWallet()
const dialogs = useDialogs()
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
  font-weight: 600;
  font-size: 26px;
}

.small-text {
  font-weight: 400;
  font-size: 14px;
}

.button-text {
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 1px;
}
</style>
