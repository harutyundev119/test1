<template>
  <div class="catalogMore">
    <nuxt-link :to="to" class="catalogMore__link" />
    <div class="catalogMore__text page-h3 m-medium m-upp">
      Показать<br />
      еще
    </div>
    <div class="catalogMore__icon">
      <ui-icon icon="plus" class="m-w32"></ui-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatalogMore',
  props: {
    to: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="postcss">
.catalogMore {
  width: 100%;
  height: calc(100% + 1px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f4f6f7;
  transition: 0.4s;
  position: relative;
  &__link {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }
  &:hover {
    background: $dark;
    ^&__text {
      color: $white;
    }
  }
  &__text {
    text-align: center;
    color: #18191b;
    margin-bottom: 16px;
  }
  &__icon {
    font-size: 27px;
    .svg {
      fill: $grey;
    }
  }
}
</style>
