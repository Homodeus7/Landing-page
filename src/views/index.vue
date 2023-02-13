<template>
  <MainLayout class="image">
    <TheFirstPolit />
    <JoinUS />
    <FollowUs />
    <OurPartners class="atlas" />
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue'
import TheFirstPolit from '@/components/home/FirstPolit.vue'
import JoinUS from '@/components/home/JoinUS.vue'
import FollowUs from '@/components/home/FollowUs.vue'
import OurPartners from '@/components/home/OurPartners.vue'
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
  background-image: url('../assets/imgs/ellipses-mobile.svg'),
    url('../assets/imgs/atlas.svg');
  background-repeat: no-repeat, no-repeat;
  background-position: center, bottom 100px right -40px;
  background-size: cover, 120%;
}
@media (min-width: 1280px) {
  .image {
    background-image: url('../assets/imgs/ellipses.svg'), url('../assets/imgs/atlas.svg');
    background-position: center, bottom 160px right -40px;
    background-size: cover, 60%;
  }
}
// .atlas {
//   width: 100%;
//   background-image: url('../assets/imgs/atlas.svg');
//   background-repeat: no-repeat;
//   background-position: bottom right -200px;
// }
</style>
