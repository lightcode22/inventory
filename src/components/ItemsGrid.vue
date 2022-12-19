<template>
  <section :class="theme">
    <GridCell v-for="item in items" :key="item.id" v-bind="item" />
    <Modal />
  </section>
</template>

<script setup>
import useTheme from "../composables/useTheme";
import { useInventoryStore } from "@/stores/inventory";
import { computed } from "@vue/reactivity";
import GridCell from "./GridCell.vue";
import Modal from "./ModalWindow/Modal.vue";

const inventoryStore = useInventoryStore();

const theme = computed(() => useTheme());

const items = computed(() => {
  let storeItemCount = 0;

  return new Array(25).fill().map((_, index) => {
    const storeItem = inventoryStore.items[storeItemCount];

    const position = index;

    if (storeItem && storeItem.position == index) {
      return { id: storeItem.id, position, indexInStore: storeItemCount++ };
    }

    return { id: `empty-${position}`, position };
  });
});
</script>

<style lang="scss" scoped>
section {
  border-radius: 12px;
  overflow: hidden;
  width: 525px;
  height: 500px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 1px;

  &.light {
    border: 1px solid #000;
    background-color: #000;
  }

  &.dark {
    border: 1px solid var(--dark-border);
    background-color: var(--dark-border);
  }
}
</style>
