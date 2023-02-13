<template>
  <div class="w-full relative pb-[240px] overflow-hidden xl:overflow-visible">
    <img
      src="@/assets/imgs/contacts-pencil.svg"
      class="absolute left-5 bottom-0 -top-[84px] hidden xl:block"
    />
    <div
      class="flex flex-col gap-4 xl:flex-row items-center justify-between pt-7 xl:pt-20"
    >
      <BaseCard class="w-full max-w-[327px] xl:max-w-[608px]">
        <div>
          <div class="flex items-center pb-7">
            <MapPin />
            <span class="text-primary-base title">Address</span>
          </div>

          <span class="text-[32px] xl:text-[48px] w-full max-w-[249px] xl:max-w-[528]"
            >Moscow, Green St, 56, apt. 12
          </span>
        </div>
      </BaseCard>
      <BaseCard class="w-full block xl:hidden max-w-[327px] rotate-[-2deg]">
        <div>
          <div class="flex items-center pb-7">
            <PhoneIcon />
            <span class="text-primary-base title">Phone</span>
          </div>
          <a class="font-medium text-[32px] w-full" href="tel:+7 111 234 56 78"
            >+7 111 234 56 78</a
          >
        </div>
      </BaseCard>
      <BaseCard class="w-full max-w-[327px] xl:max-w-[440px] rotate-[2.35deg]">
        <div>
          <div class="flex items-center pb-7">
            <MailIcon class="rotate-[-2.35deg]" />
            <span class="text-primary-base title">Social networks</span>
          </div>
          <div class="w-full flex items-center justify-center gap-5">
            <TwitterIcon />
            <TelegramIcon />
          </div>
        </div>
      </BaseCard>
    </div>
    <BaseCard
      class="w-full hidden xl:block max-w-[327px] xl:max-w-[608px] rotate-[-2deg] absolute left-[50%] translate-x-[-40%] bottom-32"
    >
      <div>
        <div class="flex items-center pb-7">
          <PhoneIcon />
          <span class="text-primary-base title">Phone</span>
        </div>
        <a
          class="font-medium text-[32px] xl:text-[48px] w-full"
          href="tel:+7 111 234 56 78"
          >+7 111 234 56 78</a
        >
      </div>
    </BaseCard>
    <div class="relative bottom-0 w-full block xl:hidden">
      <img
        src="@/assets/imgs/pensil-vector.png"
        class="absolute top-[70px] right-[160px]"
      />
      <img src="@/assets/imgs/pensil.png" class="absolute right-10 -top-20" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import BaseCard from '@/components/base/Card.vue'
import MapPin from '@/components/icons/MapPin.vue'
import MailIcon from '@/components/icons/MailIcon.vue'
import PhoneIcon from '@/components/icons/PhoneIcon.vue'
import TwitterIcon from '@/components/icons/socials/TwitterBlack.vue'
import TelegramIcon from '@/components/icons/socials/TelegramBlack.vue'
</script>

<style lang="scss" scoped>
.card {
  background-color: white !important;
  padding: 32px 24px;
  @media (min-width: 1280px) {
    padding: 32px 40px;
  }
}
.title {
  font-size: 16px;
  transform: rotate(2.34deg);
  padding-left: 4px;
  @media (min-width: 1280px) {
    font-size: 20px;
    transform: rotate(0);
    padding-left: 8px;
  }
}
</style>
