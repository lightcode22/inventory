<template>
  <button @click="themeStore.switchMode" :class="theme">
    Переключить на {{ themeStore.mode === "dark" ? "светлую" : "темную" }} тему
  </button>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { useThemeStore } from "@/stores/theme";

const themeStore = useThemeStore();

const theme = computed(() => themeStore.mode);
</script>

<style lang="scss" scoped>
button {
  margin-top: 24px;
  padding: 8px 16px;

  &.dark {
    color: var(--dark-text);
    border: 1px solid var(--dark-border);
    background-color: #1e1e1e;
  }

  &.light {
    color: #000;
    border: 1px solid #000;
    background-color: #fff;
  }
}
</style>
