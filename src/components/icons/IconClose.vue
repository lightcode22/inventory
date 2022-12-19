<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="#fff"
    :stroke="color"
    stroke-width="3"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-x"
  >
    <line x1="24" y1="0" x2="0" y2="24" />
    <line x1="0" y1="0" x2="24" y2="24" />
  </svg>
</template>

<script setup>
import { computed } from "@vue/runtime-core";
import useTheme from "../../composables/useTheme";

const color = computed(() => {
  const theme = useTheme();
  return theme === "dark" ? "#fff" : "#000";
});
</script>

<style lang="scss" scoped>
svg:hover {
  stroke: #0d99ff;
}
</style>
