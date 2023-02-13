<template>
  <div class="ml-2">
    <MetamaskIcon v-if="web3.walletType === 'metamask'" size="24px" />
    <WalletConnectIcon v-if="web3.walletType === 'walletconnect'" size="24px" />
  </div>
</template>

<script lang="ts" setup>
import MetamaskIcon from '@/components/icons/MetamaskIcon.vue'
import WalletConnectIcon from '@/components/icons/WalletConnectIcon.vue'
import { useWeb3 } from '@/gotbit-tools/vue'

const web3 = useWeb3()
</script>

<style lang="scss" scoped></style>
