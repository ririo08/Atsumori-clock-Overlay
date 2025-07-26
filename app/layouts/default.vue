<script setup lang="ts"></script>

<template>
  <div class="wrapper min-h-screen">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  background-color: #ede1b8 !important;
  background-image: radial-gradient(#f5ecc9 20%, transparent 20%),
    radial-gradient(#f5ecc9 20%, transparent 20%);
  background-size: 40px 40px;
  background-position: 0 0, 20px 20px;
}
</style>
