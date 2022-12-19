<template>
  <div
    :class="theme"
    @click="openModal"
    :draggable="true"
    @dragstart="onDragStart"
    @dragend="onDragEnd"
    @dragover.prevent
    @drop.prevent="onDrop"
  >
    <InventoryItem v-if="!isEmpty" :indexInStore="indexInStore" />
    <GhostImage v-if="isDragged" ref="ghost" :color="color" />
  </div>
</template>

<script setup>
import useTheme from "../composables/useTheme";
import { computed, nextTick, ref } from "vue";
import InventoryItem from "./InventoryItem.vue";
import GhostImage from "./GhostImage.vue";

import { useInventoryStore } from "@/stores/inventory";
import { useModalStore } from "@/stores/modal";

const inventoryStore = useInventoryStore();
const modalStore = useModalStore();

const props = defineProps({
  position: Number,
  indexInStore: Number,
});

const isDragged = ref(false);

const ghost = ref(null);

const theme = computed(() => useTheme());

const isEmpty = typeof props.indexInStore === "undefined";

const color = computed(() => {
  if (!isEmpty) {
    return inventoryStore.items[props.indexInStore].color;
  }
});

const openModal = () => {
  if (!isEmpty) {
    modalStore.passData(props.indexInStore);
    modalStore.switchModal(true);
  }
};

const onDragStart = (e) => {
  isDragged.value = true;

  e.dataTransfer.setData("indexInStore", props.indexInStore);

  nextTick(() => {
    e.dataTransfer.setDragImage(ghost.value.$el, 50, 50);
  });
};

const onDragEnd = () => {
  isDragged.value = false;

  const ghost = document.getElementById("ghost");

  if (ghost) {
    ghost.remove();
  }
};

const onDrop = (e) => {
  const droppedItemIndex = e.dataTransfer.getData("indexInStore");

  if (!isEmpty) {
    return;
  }

  inventoryStore.relocateItem(droppedItemIndex, props.position);
};
</script>

<style lang="scss" scoped>
div {
  &.light {
    background-color: #fff;
  }

  &.dark {
    background-color: #262626;
  }

  &:hover {
    &.light {
      background-color: #eee;
    }
    &.dark {
      background-color: #2f2f2f;
    }
  }
}
</style>
