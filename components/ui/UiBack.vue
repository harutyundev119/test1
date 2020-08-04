<template>
  <div class="uiBack">
    <nuxt-link :to="to" class="uiBack__link">
      <ui-icon icon="arrow-left" class="uiBack__arrow m-w24"></ui-icon>
      Вернуться к списку <slot></slot>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'UiBack',
  props: {
    to: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="postcss">
.uiBack {
  display: flex;
  align-items: center;
  &.m-arrow-xs-nope {
    ^&__arrow {
      @media (--xsm) {
        display: none;
      }
    }
  }
  @media (--xsm) {
    padding: 24px 0;
  }

  &.m-dark {
    ^&__arrow {
      .svg {
        fill: $white;
      }
    }
    ^&__link {
      color: $white;
    }
  }
  &__link {
    font-size: 16px;
    line-height: 19px;
    color: $dark;
  }
  &__arrow {
    margin-right: 8px;
    .svg {
      font-size: 10px;
      fill: $dark;
    }
  }
}
</style>
