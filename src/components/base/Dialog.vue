<template>
  <Transition name="move">
    <div
      v-show="dialogs.currentDialog !== undefined && dialogs.show !== false"
      @click="dialogs.closeCurrentDialog()"
      class="custom-dialog"
    >
      <div class="gradient-border">
        <div @click.stop class="wrapper">
          <div class="dialog-form">
            <div v-if="hasCross" class="flex justify-end md:mt-[-16px] md:mr-[-6px]">
              <button @click="dialogs.closeCurrentDialog()">
                <CloseIcon />
              </button>
            </div>
            <component
              :is="dialogs.currentDialog?.name"
              v-bind="dialogs.currentDialog?.props"
            >
            </component>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import CloseIcon from '@/components/icons/CloseIcon.vue'

import { useDialogs } from '@/store/ui/dialogs'

const dialogs = useDialogs()

const hasCross = computed(
  () =>
    !(
      dialogs.currentDialog?.params?.notClosable || dialogs.currentDialog?.params?.noCross
    )
)
</script>

<style scoped lang="scss">
.move-enter-active,
.move-leave-active {
  transition: all 0.4s ease;
}
.move-enter-from,
.move-leave-to {
  opacity: 0;
  transform: translateY(50px);
}

.custom-dialog {
  position: fixed;
  top: -50px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 50;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
}

.wrapper {
  position: relative;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  background: white;
  border: 1px solid gray;
  box-shadow: 0px 32px 64px rgba(36, 37, 38, 0.12);
  border-radius: 16px;
}

.gradient-border {
  position: fixed;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  z-index: 0;
}

.dialog-form {
  padding: 16px;

  @media (min-width: 768px) {
    padding: 32px;
  }
}

.close-cross {
  position: absolute;
  align-self: flex-end;
  margin-bottom: 4px;
}
</style>
