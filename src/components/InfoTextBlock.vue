<template>
  <div>
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
  </div>
</template>

<script setup>
defineProps(["title", "text"]);
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  color: var(--dark-text);
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  height: 100%;
}

h3 {
  font-size: 18px;
  font-weight: bold;
  padding: 16px 0;
}

p {
  line-height: 28px;
  overflow: hidden;
}
</style>
