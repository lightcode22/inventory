<template>
  <div class="ghost-image">
    <div class="item-image">
      <div class="layer bottom" :style="'--color: ' + props.color"></div>
      <div class="layer front" :style="'--color: ' + props.color"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["color"]);
</script>

<style lang="scss" scoped>
.ghost-image {
  padding: 23px;
  position: absolute;
  border: 1px solid #4d4d4d;
  border-radius: 12px;
  transform: translateX(9999px);
}

.item-image {
  position: relative;
  width: 54px;
  height: 54px;
}

.layer {
  width: 48px;
  height: 48px;

  &.front {
    position: absolute;
    top: 0;
    right: 0;
    background-color: var(--color);
    filter: brightness(120%);
    opacity: 0.35;
  }

  &.bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: var(--color);
  }
}
</style>
