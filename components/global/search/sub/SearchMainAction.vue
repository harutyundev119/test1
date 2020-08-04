<template>
  <div class="searchMainAction">
    <button
      @click="$emit('update-search')"
      type="button"
      class="searchMainAction__button m-m"
    >
      Искать
    </button>
    <ui-button-square
      @click="$emit('update-search')"
      class="searchMainAction__button m-xs m-full"
      icon="search"
    />
  </div>
</template>

<script>
export default {
  name: 'SearchMainAction'
}
</script>

<style lang="postcss">
.searchMainAction {
  height: 100%;
  width: 48px;
  border-left: 1px solid $dark;
  @media (--m) {
    width: 216px;
  }

  &__button {
    color: $dark;
    font-size: 16px;
    .svg {
      fill: $dark;
    }
    &:hover {
      background-color: $dark;
      color: $white;
      .svg {
        fill: $white;
      }
    }
    &.m-xs {
      @media (--m) {
        display: none;
      }
    }
    &.m-m {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (--sm) {
        display: none;
      }
    }
  }
}
</style>
