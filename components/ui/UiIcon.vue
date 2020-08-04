<template lang="html">
  <span class="icon">
    <base-icon :name="icon" />
  </span>
</template>

<script>
import BaseIcon from '@/components/base/BaseIcon.vue'
export default {
  name: 'UiIcon',
  components: {
    BaseIcon
  },
  props: {
    icon: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="postcss">
.icon {
  flex: none;
  position: relative;
  vertical-align: middle;
  display: inline-block;
  .svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.4s;
  }
  .svg-minus {
    font-size: 3px;
  }
  &.m-w12 {
    width: 12px;
    height: 12px;
  }
  &.m-w16 {
    width: 16px;
    height: 16px;
  }
  &.m-w24 {
    width: 24px;
    height: 24px;
  }
  &.m-w26 {
    width: 26px;
    height: 26px;
  }
  &.m-w32 {
    width: 32px;
    height: 32px;
  }
  &.m-w48 {
    width: 48px;
    height: 48px;
  }
  &.m-dark {
    .svg {
      fill: $dark;
    }
  }
  &.m-grey {
    .svg {
      fill: $grey;
    }
  }
  &.m-yellow {
    .svg {
      fill: $yellow;
    }
  }
}
</style>
