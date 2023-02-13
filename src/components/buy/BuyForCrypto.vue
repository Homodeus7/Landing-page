<template>
  <div class="pt-[22px] xl:pt-[60px] xl:pb-[180px] w-full">
    <div
      class="flex flex-col w-full items-center relative overflow-hidden xl:overflow-visible px-6 xl:px-0"
    >
      <img
        src="@/assets/imgs/items/person3.png"
        class="absolute -bottom-[220px] right-[20px] hidden xl:block"
      />
      <BaseCard
        class="bg-[#ffffff95] person-dialog py-4 px-6 max-w-[283px] !rounded-[10px] absolute -right-10 top-40 hidden xl:block"
        ><div class="text-gray">
          You can buy a project token only for a certain crypto: USDT, BUSD, BNB, BTCB,
          ETH. If you don't have any you can buy some on the next tab "Buy via card".
        </div>
      </BaseCard>
      <BaseCard
        class="card px-4 py-8 xl:pt-[60px] xl:pb-[74px] xl:px-[96px] w-full max-w-[569px] relative !rounded-xl xl:!rounded-[39px]"
      >
        <BaseCard
          class="card card-dialog hidden xl:block py-4 px-6 absolute -top-8 -left-32 !rounded-[10px]"
        >
          <div class="">
            <div class="flex items-center gap-2">
              <span class="text-primary-base uppercase font-medium">
                {{ presale.tokenAmount.formatNumber(18, 3) }}
                POLITICO
              </span>
              <RotateIcon class="cursor-pointer" @click="presale.updateTokenAmount()" />
            </div>
            <span class="text-gray pt-1">Available for purchase</span>
          </div>
        </BaseCard>
        <div class="w-full flex flex-col items-center">
          <h2 class="font-medium text-[20px] xl:text-[28px]">Buy for crypto</h2>
          <div class="flex xl:hidden flex-col items-center mt-4">
            <div class="flex items-center gap-2">
              <span class="text-primary-base uppercase font-medium">
                {{ presale.tokenAmount.formatNumber(18, 3) }}
                Token
              </span>
              <RotateIcon class="cursor-pointer" @click="presale.updateTokenAmount()" />
            </div>
            <span class="text-gray pt-1">Available for purchase</span>
          </div>
          <div class="w-full mt-7">
            <!-- ====== -->
            <!-- <div class="w-full flex justify-between">
              <span>
                maxAmount:
                {{
                  token.maxAmounts[realCurrency].formatNumber(
                    token.decimals[realCurrency]
                  )
                }}
              </span>
              <span>№ round: {{ min }} </span>
            </div> -->
            <!-- ====== -->

            <div class="flex items-center justify-between w-full pb-[6px]">
              <BaseSelect v-model="currency" class="max-w-[106px]" />
              <div>
                Balance:
                {{
                  token.balances[realCurrency].formatNumber(token.decimals[realCurrency])
                }}
              </div>
            </div>

            <BaseInput
              v-model="crypto"
              class="w-full"
              parts
              :error="!isValid"
              :errorMessage="errorMessage"
              placeholder="0.0"
              :maxAmount="maxValue"
              :currency="realCurrency"
              @getAmount="(amount:number) => crypto = amount.toString()"
            />
          </div>

          <TokenReadInput
            :amount="crypto ? Number(amountTokens) : 0"
            :currency="realCurrency"
          />

          <div class="w-full flex justify-between items-center mt-[30px]">
            <span class="text-gray">Price</span>
            <span class="text-gray">{{ price }} POLITICO for 1 {{ currency }}</span>
          </div>
          <BaseButton
            v-if="!login"
            class="w-[181px] mt-[30px]"
            @click="dialogs.openDialog('connectDialog', {})"
          >
            Connect wallet
          </BaseButton>
          <BaseButton
            v-else
            class="w-[181px] mt-[30px]"
            :disabled="
              token.allowances[realCurrency] ? !isValid || !crypto : presale.isFinished
            "
            @click="token.allowances[realCurrency] ? buyCrypto() : approve(realCurrency)"
          >
            {{ token.allowances[realCurrency] ? 'Buy' : 'Enable' }}
          </BaseButton>
          <!-- <BaseButton
            v-else
            class="w-[181px] mt-[30px]"
            :disabled="true"
            @click="token.allowances[realCurrency] ? buyCrypto() : approve(realCurrency)"
          >
            {{ token.allowances[realCurrency] ? 'Buy' : 'Enable' }}
          </BaseButton> -->
          <div v-if="presale.isFinished" class="text-[#ff0000] text-[14px]">
            No presale now
          </div>
        </div>
      </BaseCard>
      <div class="relative block xl:hidden h-[400px] w-full">
        <BaseCard
          class="bg-[#ffffff95] card-dialog p-4 w-full max-w-[280px] !rounded-[10px] absolute top-6 right-[30px] block xl:hidden z-10"
        >
          <div class="text-gray text-xs">
            You can buy a project token only for a certain crypto: USDT, BUSD, BNB, BTCB,
            ETH. If you don't have any you can buy some on the next tab "Buy via card".
          </div>
        </BaseCard>
        <img
          src="@/assets/imgs/items/person3.png"
          class="w-[340px] absolute -bottom-5 -right-[150px]"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import BaseButton from '@/components/base/Button.vue'
import BaseCard from '@/components/base/Card.vue'
import BaseInput from '@/components/base/Input.vue'
import BaseSelect from '@/components/base/Select.vue'
import TokenReadInput from '@/components/buy/TokenReadInput.vue'
import RotateIcon from '@/components/icons/RotateIcon.vue'
import { useWallet } from '@/gotbit-tools/vue'
import { usePresaleWrite } from '@/store/business/presale'
import { Currency, usePresale } from '@/store/contracts/presale'
import { useToken } from '@/store/contracts/token'
import { useDialogs } from '@/store/ui/dialogs'

const presale = usePresale()

const min = computed(() => {
  if (presale.round) return Number(presale.round[0]) + 1
  else return 0
})

const dialogs = useDialogs()
const { login } = useWallet()
const token = useToken()
const { buy, approve } = usePresaleWrite()

const realCurrency = ref<keyof typeof Currency>('USDT')
const currency = ref('USDT')
const crypto = ref('')

watch(
  () => currency.value,
  (newValue) => {
    if (newValue === 'WBNB') realCurrency.value = 'WBNB'
    else if (newValue === 'BUSD') realCurrency.value = 'BUSD'
    else if (newValue === 'BTCB') realCurrency.value = 'BTCB'
    else if (newValue === 'USDT') realCurrency.value = 'USDT'
    else if (newValue === 'WETH') realCurrency.value = 'ETH'
  }
)

const buyCrypto = () => {
  if (currency.value === 'BNB') realCurrency.value = 'WBNB'
  else if (currency.value === 'BUSD') realCurrency.value = 'BUSD'
  else if (currency.value === 'BTC') realCurrency.value = 'BTCB'
  else if (currency.value === 'USDT') realCurrency.value = 'USDT'

  console.log('cur', Currency[realCurrency.value], 'crypto', crypto.value)
  buy(Currency[realCurrency.value], amountTokens.value, crypto.value)
  crypto.value = ''
}

const amountTokens = computed(
  () =>
    //  return BigNumber.from(crypto.value)
    (Number(crypto.value) * price.value).toFixed(4)
  // .toString()
  // .toBigNumber(token.decimals[realCurrency.value])
  // .mul(token.currencies[realCurrency.value])
  // .formatNumber(token.decimals[realCurrency.value])
  // .toFixed(1)
)

const price = computed(() => {
  return token.currencies[realCurrency.value].formatNumber(
    token.decimals[realCurrency.value],
    5
  )
})

const maxValue = computed(() => {
  if (token.balances[realCurrency.value].lt(token.maxAmounts[realCurrency.value]))
    return token.balances[realCurrency.value]
  else return token.maxAmounts[realCurrency.value]
})

const isValid = computed(
  () =>
    (Number(crypto.value) > 0 &&
      Number(crypto.value) <=
        token.balances[realCurrency.value].formatNumber(
          token.decimals[realCurrency.value]
        ) &&
      Number(crypto.value) <=
        token.maxAmounts[realCurrency.value].formatNumber(
          token.decimals[realCurrency.value]
        ) &&
      !presale.isFinished &&
      (crypto.value.toString().split('.').length === 2
        ? crypto.value.toString().split('.')[1].length <=
          token.decimals[realCurrency.value]
        : true)) ||
    !crypto.value
)

const errorMessage = computed(() => {
  if (crypto.value) {
    if (Number(crypto.value) === 0) return 'Enter the amount more than zero'
    else if (
      Number(crypto.value) >
        token.balances[realCurrency.value].formatNumber(
          token.decimals[realCurrency.value]
        ) &&
      !presale.isFinished
    )
      return 'Not enought balance'
    else if (
      Number(crypto.value) >
        token.maxAmounts[realCurrency.value].formatNumber(
          token.decimals[realCurrency.value]
        ) &&
      !presale.isFinished
    )
      return `${presale.tokenAmount.formatNumber(18, 3)} tokens left`
    else if (presale.isFinished) return 'No presale now'
    else if (
      crypto.value.toString().split('.').length === 2 &&
      crypto.value.toString().split('.')[1].length > token.decimals[realCurrency.value]
    )
      return `Supported only ${token.decimals[realCurrency.value]} numbers after '.'`
  }
})
</script>

<style lang="scss" scoped>
.card {
  background: rgba(255, 255, 255, 0.76) !important;
}
.person-dialog {
  &:after {
    content: '';
    position: absolute;
    left: 0;
    transform: rotate(-90deg);
    bottom: -10px;
    border: 10px solid transparent;
    border-top: 10px solid rgba(255, 255, 255, 0.8);
  }
}
.card-dialog {
  &:after {
    content: '';
    position: absolute;
    right: 0;
    transform: rotate(90deg);
    bottom: -10px;
    border: 10px solid transparent;
    border-top: 10px solid rgba(255, 255, 255, 0.8);
  }
}
</style>
