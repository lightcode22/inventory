<template>
  <div class="image-block">
    <img src="/image.jpg" alt="picture" />
  </div>
</template>

<style lang="scss" scoped>
.image-block {
  width: 208px;
  height: 240px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(6px);
}
</style>
