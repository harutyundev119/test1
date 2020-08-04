<template>
  <div :class="mod" class="empty">
    <div class="empty__nope">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Empty',
  props: {
    mod: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="postcss">
.empty {
  max-width: 635px;
  @media (--sm) {
    display: flex;
    align-items: center;
  }
  @media (--m) {
    padding: 96px 0 164px;
  }

  &__nope {
    max-width: 635px;
    font-weight: 500;
    font-family: $f-2;
    font-size: 34px;
    line-height: 1.2;
    color: #000000;
    span {
      color: #c6cccf;
    }
    @media (--s) {
      font-size: 64px;
    }
  }
  &.m-dark {
    ^&__nope {
      color: #ffffff;
      span {
        color: #555e65;
      }
    }
  }
}
</style>
