<template>
  <div class="wait-dialog w-[311px] md:w-[440px] lg:w-[560px]">
    <div class="title gap-[16px]">
      <div v-if="loading" class="wait-text text-center">
        {{ props.waitingMsg }}
      </div>
      <div
        v-else-if="!loading && !success"
        class="wait-text__error flex items-center gap-[12px] text-2xl md:text-[32px] md:leading-[40px]"
      >
        <ErrorIcon :size="iconSize" />
        Error
      </div>
      <div
        v-else-if="!loading && success"
        class="wait-text__success flex items-center gap-[12px] text-2xl md:text-[32px] md:leading-[40px]"
      >
        <SuccessIcon :size="iconSize" />
        Success
      </div>
      <div v-if="loading && !success" class="small-text text-center">
        It will take some time for the transaction to be completed.
      </div>
      <div
        v-else-if="!loading && success"
        class="mb-6 text-sm small-text md:mt-4 md:text-base"
      >
        {{ props.successMsg }}
      </div>
      <div v-else-if="!loading && !success" class="mb-6 text-sm small-text md:text-base">
        {{ props.errorMsg }}
      </div>
    </div>
    <div
      v-if="props.hash"
      class="small-text flex gap-[5px] w-full justify-center mb-[15px]"
    >
      <a
        :href="scannersLink.getTx(chainId, props.hash)"
        target="_blank"
        class="hover:underline"
      >
        {{ props.hash.shortAddress(15, 10) }}
      </a>
      <span v-if="copied" v-auto-animate class="copied">Copied!</span>
      <CopyIcon class="cursor-pointer" @click="copyText()" />
    </div>

    <GLoader v-if="loading" />
    <BaseButton
      v-else
      primary
      size="md"
      class="mx-auto w-full md:w-[240px]"
      @click="dialogs.closeCurrentDialog"
    >
      Okay
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

import { useWallet } from '@/gotbit-tools/vue'
import { scannersLink } from '@/gotbit-tools/vue'

import BaseButton from '@/components/base/Button.vue'
import GLoader from '@/components/base/Loader.vue'
import ErrorIcon from '@/components/icons/ErrorIcon.vue'
import CopyIcon from '@/components/icons/CopyIcon.vue'
import SuccessIcon from '@/components/icons/SuccessIcon.vue'

import { useDialogs } from '@/store/ui/dialogs'

export interface WaitDialogProps {
  loading: boolean
  success: boolean
  waitingMsg: string
  waitingText: string
  errorMsg: string
  successMsg: string
  hash?: string
}

const props = defineProps<WaitDialogProps>()
const dialogs = useDialogs()

const { chainId } = useWallet()

const copied = ref(false)

const copyText = () => {
  if (props.hash) navigator.clipboard.writeText(props.hash)
  copied.value = true
  setTimeout(() => (copied.value = false), 2000)
}

const windowWidth = ref<number>(window.innerWidth)
const iconSize = computed((): string => {
  if (windowWidth.value < 768) return '40px'
  else return '48px'
})

const onWidthChange = () => (windowWidth.value = window.innerWidth)

onUnmounted(() => window.removeEventListener('resize', onWidthChange))
onMounted(() => window.addEventListener('resize', onWidthChange))
</script>

<style scoped lang="scss">
.tx-hash {
  margin-top: 16px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  .link {
    color: white;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
}
.wait-dialog {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: white;
}

.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
}

.wait-text {
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.5px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: black;

  &__error {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -0.5px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: red;
  }

  &__success {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -0.5px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: green;
  }
}

.small-text {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  color: gray;

  span {
    color: #3ba1fe;
  }
}

.wait-buttons {
  display: flex;
  justify-content: space-between;
}
</style>
