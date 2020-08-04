<template>
  <div class="catalogAdd">
    <div class="catalogAdd__text page-h3 m-medium m-upp">
      Показать еще 5 товаров
    </div>
    <div class="catalogAdd__icon">
      <ui-icon icon="plus" class="m-w32"></ui-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatalogAdd'
}
</script>

<style lang="postcss">
.catalogAdd {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f4f6f7;
  transition: 0.4s;
  &:hover {
    background: $dark;
    ^&__text {
      color: $white;
    }
  }
  &__text {
    text-align: center;
    color: #18191b;
  }
  &__icon {
    font-size: 27px;
    .svg {
      fill: $grey;
    }
  }
}
</style>
