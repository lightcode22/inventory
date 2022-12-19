import { ref } from "vue";
import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", () => {
  const mode = ref("dark");

  function switchMode() {
    mode.value = mode.value === "dark" ? "light" : "dark";
  }

  return { mode, switchMode };
});
