<template>
  <main>
    <div class="content">
      <SidePanel />
      <ItemsGrid />
    </div>
    <Footer />
    <ThemeToggler />
  </main>
</template>

<script setup>
import { computed, watch } from "vue";
import SidePanel from "./components/SidePanel/Panel.vue";
import ItemsGrid from "./components/ItemsGrid.vue";
import Footer from "./components/Footer.vue";
import ThemeToggler from "./components/ThemeToggler.vue";
import useTheme from "./composables/useTheme";

const theme = computed(() => useTheme());

watch(theme, (value) => {
  if (value === "dark") {
    document.body.style.backgroundColor = "#1e1e1e";
    return;
  }

  document.body.style.backgroundColor = "#fff";
});
</script>

<style scoped>
.content {
  display: flex;
  margin-bottom: 24px;
}
</style>
