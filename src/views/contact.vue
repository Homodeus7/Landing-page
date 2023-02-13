<template>
  <MainLayout class="image">
    <div class="pb-[100px] xl:pb-[180px] w-full">
      <h1 class="text-base xl:text-[28px] font-medium text-gray text-center xl:text-left">
        Have questions?
      </h1>
      <p
        class="text-[44px] xl:text-[60px] font-medium mt-2 xl:mt-6 pb-1 xl:pb-14 text-center xl:text-left"
      >
        Contact us
      </p>
      <Contacts />
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue'
import Contacts from '@/components/contacts/Contacts.vue'
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
  background-image: url('../assets/imgs/buypage-mobile.svg');
  background-repeat: no-repeat;
  background-position: bottom right;
  @media (min-width: 1280px) {
    background-image: url('../assets/imgs/Ellipse1.svg');
    background-position: top right;
  }
}
.card-dialog {
  &:after {
    content: '';
    position: absolute;
    right: 0;
    transform: rotate(90deg);
    bottom: -11px;
    border: 10px solid transparent;
    border-top: 10px solid rgba(255, 255, 255);
  }
}
</style>
