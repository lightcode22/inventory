<template>
  <BaseBlock>
    <div class="content">
      Mauris pellentesque pulvinar pellentesque habitant morbi.
    </div>

    <div class="icon-wrapper">
      <IconClose class="icon" />
    </div>
  </BaseBlock>
</template>

<script setup>
import BaseBlock from "./BaseBlock.vue";
import IconClose from "./icons/IconClose.vue";
</script>

<style lang="scss" scoped>
.content {
  padding-left: 18px;
  flex-grow: 1;
}

.icon-wrapper {
  position: absolute;
  top: 8px;
  right: 14px;
}
</style>
