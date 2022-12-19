<template>
  <div class="inventory-item">
    <ItemImage :color="item.color" />
    <div class="quantity-box" :class="theme">{{ item.quantity }}</div>
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import useTheme from "../composables/useTheme";
import { useInventoryStore } from "@/stores/inventory";
import ItemImage from "./ItemImage.vue";

const { indexInStore } = defineProps({ indexInStore: Number });

const inventoryStore = useInventoryStore();

const theme = computed(() => useTheme());

const item = inventoryStore.items[indexInStore];
</script>

<style lang="scss" scoped>
.inventory-item {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  pointer-events: none;
  background-color: transparent;

  width: 100%;
  height: 100%;

  padding: 22px 25px;
}

.quantity-box {
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 10px;

  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0 -1px -1px 0;

  width: 16px;
  height: 16px;

  border-radius: 6px 0px 0px 0px;

  &.light {
    color: #333;
    border: 1px solid #444;
  }

  &.dark {
    color: #7d7d7d;
    border: 1px solid var(--dark-border);
  }
}
</style>
