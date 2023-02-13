<template>
  <div class="rounded-[39px] card">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.card {
  background: rgba(255, 255, 255, 0.57);
  box-shadow: 11px 22px 57px rgba(35, 99, 159, 0.15);
  backdrop-filter: blur(16px);
}
</style>
