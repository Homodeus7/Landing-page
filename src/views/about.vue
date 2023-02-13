<template>
  <MainLayout class="image">
    <div class="w-full pensil-vector">
      <FirstAbout />

      <AdvantagesPartOne />

      <AdvantagesPartTwo />
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import AdvantagesPartOne from '@/components/about/AdvantagesPartOne.vue'
import AdvantagesPartTwo from '@/components/about/AdvantagesPartTwo.vue'
import FirstAbout from '@/components/about/FirstAbout.vue'
import MainLayout from '@/components/layouts/MainLayout.vue'
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
  background-image: url('../assets/imgs/ellipses-about-mobile.svg');
  background-repeat: no-repeat;
  background-position: top right;
  background-size: cover;
  @media (min-width: 1280px) {
    background-image: url('../assets/imgs/ellipses-about.svg');
  }
}
.pensil-vector {
  width: 100%;
  background-repeat: no-repeat;
  background-position: top 560px right -18px;
  @media (min-width: 1280px) {
    background-image: url('../assets/imgs/pencil-vector-about.svg');
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
.card {
  background: rgba(255, 255, 255, 0.6) !important;
}
</style>
