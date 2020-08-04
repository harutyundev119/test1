<template>
  <div :class="mod" class="uiTag">
    <div v-if="icon !== null" class="uiTag__icon">
      <base-icon :name="icon" />
    </div>
    <div class="uiTag__name"><slot></slot></div>
    <ui-button-square class="m-w16 uiTag__remove" icon="close" />
  </div>
</template>

<script>
import BaseIcon from '@/components/base/BaseIcon.vue'
export default {
  name: 'UiTag',
  components: {
    BaseIcon
  },
  props: {
    icon: {
      type: String,
      default: null
    },
    mod: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="postcss">
.uiTag {
  border: 1px solid #555e65;
  padding: 14px 14px 10px 14px;
  display: flex;
  align-items: center;
  &__icon {
    margin-right: 8px;
    .svg {
      fill: #969fa3;
    }
  }
  &__name {
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
  }
  &__remove {
    margin-left: 8px;
    .svg {
      fill: #555e65;
      transition: 0.4s;
    }
    &:hover {
      .svg {
        fill: $white;
      }
    }
  }
  &.m-white {
    border-color: #c6cccf;
    ^&__name {
      color: #23262c;
    }
    ^&__remove {
      .svg {
        fill: #969fa3;
      }
      &:hover {
        .svg {
          fill: #23262c;
        }
      }
    }
  }
}
</style>
