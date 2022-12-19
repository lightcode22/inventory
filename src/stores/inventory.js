import { ref, watch } from "vue";
import { defineStore } from "pinia";

export const useInventoryStore = defineStore("inventory", () => {
  const items = ref();

  function removeItems(id, quantity) {
    const index = items.value.findIndex((item) => item.id === id);

    const calculatedQuantity = items.value[index].quantity - quantity;

    if (calculatedQuantity >= 0) {
      items.value[index].quantity = calculatedQuantity;
    }
  }

  function relocateItem(from, to) {
    items.value[from].position = to;
    items.value.sort((a, b) => a.position - b.position);
  }

  watch(
    () => items.value,
    (store) => {
      localStorage.setItem("items", JSON.stringify(store));
    },
    { deep: true }
  );

  return { items, relocateItem, removeItems };
});
