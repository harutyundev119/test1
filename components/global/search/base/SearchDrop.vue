<template>
  <div class="searchDrop">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SearchDrop'
}
</script>

<style lang="postcss">
.searchDrop {
  position: absolute;
  top: 100%;
  left: -1px;
  right: -1px;
  z-index: 4;
  max-height: 300px;
  overflow: hidden;
  transition: max-height 0.6s;
  &.m-hidden {
    transition: max-height 0.6s;
    max-height: 0;
  }
}
</style>
