<template>
  <div class="item-image">
    <div class="layer bottom" :style="primaryColor"></div>
    <div class="layer front" :style="secondaryColor"></div>
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { hexToRgba } from "../utils";

const props = defineProps(["color"]);

const primaryColor = `--primary: ${props.color}`;

// backdrop-filter: blur не применяется, если background-color задан в HEX
// поэтому необходимо преобразование HEX в RGBA
const secondaryColor = computed(() => {
  if (props.color) {
    const rgba = hexToRgba(props.color, 0.35);
    return `--secondary: ${rgba}`;
  }

  return;
});
</script>

<style lang="scss" scoped>
.item-image {
  position: relative;
  width: 100%;
  height: 100%;
}

.layer {
  width: 89%;
  height: 89%;

  &.front {
    position: absolute;
    top: 0;
    right: 0;
    backdrop-filter: blur(6px);
    background-color: var(--secondary);
    filter: brightness(120%);
  }

  &.bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: var(--primary);
  }
}
</style>
