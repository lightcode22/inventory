import { ref } from "vue";
import { defineStore } from "pinia";
import { useInventoryStore } from "@/stores/inventory";

export const useModalStore = defineStore("modal", () => {
  const inventoryStore = useInventoryStore();

  const isShown = ref(false);
  const data = ref({});

  function passData(indexInStore) {
    data.value = inventoryStore.items[indexInStore];
  }

  function switchModal(value) {
    isShown.value = value;
  }

  return { data, isShown, passData, switchModal };
});
