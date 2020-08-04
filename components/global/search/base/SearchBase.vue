<template>
  <div class="searchBase">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SearchBase'
}
</script>

<style lang="postcss">
.searchBase {
  display: flex;
  height: 100%;
}
</style>
