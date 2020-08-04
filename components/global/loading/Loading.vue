<template>
  <div class="loading">
    <span class="loading__item animate-dot-first"></span>
    <span class="loading__item animate-dot-second"></span>
    <span class="loading__item animate-dot-third"></span>
  </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style lang="postcss">
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  &__item {
    width: 12px;
    height: 12px;
    background-color: red;
    display: block;
    margin: 0 6px;
  }
}
</style>
