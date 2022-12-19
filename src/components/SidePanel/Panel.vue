<template>
  <BaseBlock>
    <ImageBlock />
    <div class="text-block">
      <InfoTextBlock :title="title" :text="text" />
    </div>
  </BaseBlock>
</template>

<script setup>
import BaseBlock from "../BaseBlock.vue";
import ImageBlock from "./ImageBlock.vue";
import InfoTextBlock from "../InfoTextBlock.vue";

const title = "Some title";
const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Excepteur sint occaecat cupidatat non proident.`;
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 18px 14px;

  width: 236px;
  height: 500px;

  background: #262626;
  border: 1px solid #4d4d4d;
  border-radius: 12px;

  margin-right: 24px;
}

.text-block {
  height: 225px;
}
</style>
