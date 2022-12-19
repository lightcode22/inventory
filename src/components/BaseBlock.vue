<template>
  <section class="base-block" :class="theme">
    <slot></slot>
  </section>
</template>

<script setup>
import { computed } from "@vue/runtime-core";
import useTheme from "../composables/useTheme";

const theme = computed(() => useTheme());
</script>

<style lang="scss" scoped>
.base-block {
  position: relative;
  border-radius: 12px;
  padding: 14px;
  display: flex;
  align-items: center;

  &.light {
    color: #333;
    background-color: #fff;
    border: 1px solid #444;
  }

  &.dark {
    color: var(--dark-text);
    background-color: var(--dark-background);
    border: 1px solid var(--dark-border);
  }
}
</style>
