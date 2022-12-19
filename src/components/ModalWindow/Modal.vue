<template>
  <div class="modal" :class="`${modalWindowState} ${theme}`">
    <div class="imageBlock">
      <div class="icon-wrapper">
        <IconClose @click="closeModal" />
      </div>
      <div class="image-wrapper">
        <ItemImage :color="modalStore.data.color" />
      </div>
    </div>

    <div class="infoblock-wrapper">
      <InfoTextBlock
        :title="modalStore.data.title"
        :text="modalStore.data.description"
      />
    </div>

    <Controls class="controls" :itemId="modalStore.data.id" />
  </div>
</template>

<script setup>
import { useModalStore } from "@/stores/modal";
import useTheme from "../../composables/useTheme";
import { computed } from "@vue/runtime-core";
import IconClose from "../icons/IconClose.vue";
import InfoTextBlock from "../InfoTextBlock.vue";
import ItemImage from "../ItemImage.vue";
import Controls from "./Controls.vue";

const modalStore = useModalStore();

const theme = computed(() => useTheme());

const modalWindowState = computed(() =>
  modalStore.isShown ? "opened" : "closed"
);

const closeModal = () => {
  modalStore.switchModal(false);
};
</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 250px;
  height: 100%;

  position: absolute;
  right: 0;

  transition: right 1s;

  &.light {
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    background: #fff;
    border-left: 1px solid #000;
  }

  &.dark {
    background: rgba(38, 38, 38, 0.5);
    backdrop-filter: blur(8px);
    border-left: 1px solid #4d4d4d;
  }
}

.opened {
  right: 0;
}

.closed {
  right: -250px;
}

.icon {
  position: absolute;
  right: 0;
  left: 0;
}

.icon-wrapper {
  text-align: right;
  padding: 8px 14px 0;
  height: 22px;
}

.imageBlock {
  height: 216px;
  width: 100%;
}
.image-wrapper {
  height: 190px;
  width: 100%;

  padding: 30px 60px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.infoblock-wrapper {
  height: 208px;
  border-top: 1px solid #4d4d4d;
  border-bottom: 1px solid #4d4d4d;
  width: 220px;
}

.controlsBlock {
  min-height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.controls {
  position: absolute;
  bottom: 0;
}
</style>

<!-- box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); -->
