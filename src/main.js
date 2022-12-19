import { createApp } from "vue";
import { createPinia } from "pinia";
import { useInventoryStore } from "@/stores/inventory";
import inventoryItems from "./inventory-items.json";
import App from "./App.vue";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());

const inventoryStore = useInventoryStore();

const itemsInStorage = localStorage.items;

if (itemsInStorage) {
  inventoryStore.items = JSON.parse(itemsInStorage);
} else {
  localStorage.setItem("items", JSON.stringify(inventoryItems));
  inventoryStore.items = inventoryItems;
}

app.mount("#app");
