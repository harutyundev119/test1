<template>
  <div class="searchAction">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SearchAction'
}
</script>

<style lang="postcss">
.searchAction {
  flex-basis: auto;
  flex-shrink: 2;
}
</style>
