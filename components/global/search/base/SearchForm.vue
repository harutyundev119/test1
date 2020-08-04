<template>
  <div class="searchForm"><slot></slot></div>
</template>

<script>
export default {
  name: 'SearchForm'
}
</script>

<style lang="postcss">
.searchForm {
  flex-shrink: 1;
  flex-basis: 100%;
}
</style>
