<template>
  <div
    class="pt-[22px] xl:pb-[160px] w-full relative overflow-hidden xl:overflow-visible"
  >
    <img
      src="@/assets/imgs/items/person4.png"
      class="absolute -bottom-[30px] right-[150px] hidden xl:block"
    />
    <BaseCard
      class="card person-dialog py-4 px-6 max-w-[283px] !rounded-[10px] absolute -right-8 top-[340px] hidden xl:block"
      ><div class="text-gray">
        Here you can buy a necessary amount of crypto and then purchase the token on the
        tab “Buy for crypto”.
      </div>
    </BaseCard>
    <BaseCard
      class="card card-dialog hidden xl:block py-4 px-6 absolute top-10 left-8 !rounded-[10px] max-w-[356px] z-20"
    >
      <div class="">
        <span class="text-gray pt-1"
          >If you'd like to buy the token for BTCB you can get the necessary amount of
          BTCB on PanCake.</span
        >
        <div class="pt-1 flex items-center gap-2">
          <a href="https://pancakeswap.finance/" class="text-primary-base font-medium"
            >Buy on PanCake</a
          >
          <ArrowRightIcon />
        </div>
      </div>
    </BaseCard>
    <div class="relative">
      <iframe
        :src="query"
        height="660px"
        title="Onramper widget"
        frameborder="0"
        allow="accelerometer;
        autoplay; camera; gyroscope; payment"
        style="
          box-shadow: 11px 22px 57px rgba(35, 99, 159, 0.15);
          width: 100%;
          max-width: 480px;
          z-index: 10;
        "
        class="mx-auto relative bg-[#ffffff80] md:rounded-3xl pb-[120px] xl:pb-0 overflow-y-hidden"
      >
        <a href="https://widget.onramper.com" target="_blank">Buy crypto</a>
      </iframe>
      <div
        class="absolute bottom-4 z-20 w-full text-center max-w-[254px] left-[50%] translate-x-[-50%] block xl:hidden"
      >
        <span class="text-gray pt-1"
          >If you'd like to buy the token for BTCB you can get the necessary amount of
          BTCB on PanCake.</span
        >
        <div class="pt-1 flex justify-center items-center gap-2">
          <a href="https://pancakeswap.finance/" class="text-primary-base font-medium"
            >Buy on PanCake</a
          >
          <ArrowRightIcon />
        </div>
      </div>
    </div>

    <div class="relative block xl:hidden h-[400px] w-full">
      <BaseCard
        class="card-dialog !bg-white py-4 px-6 w-full max-w-[283px] !rounded-[10px] absolute top-4 right-[70px] block xl:hidden z-10"
        ><div class="text-gray text-xs">
          Here you can buy a necessary amount of crypto and then purchase the token on the
          tab “Buy for crypto”.
        </div>
      </BaseCard>
      <img
        src="@/assets/imgs/items/person4.png"
        class="w-[280px] absolute -bottom-10 -right-[100px]"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import BaseCard from '@/components/base/Card.vue'
import ArrowRightIcon from '@/components/icons/ArrowRightIcon.vue'

const baseQuery =
  'https://widget.onramper.com?color=3ba1fe&apiKey=pk_test_lDuGL6X15hAN7Bqi04rxTj9gNdnJ9TY0vOD0uMG_Kzg0'

const query = `${baseQuery}&onlyCryptos=USDT,BUSD,BNB,BTCB,ETH&onlyFiat=EUR,USD`
</script>

<style lang="scss" scoped>
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
