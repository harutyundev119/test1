<template>
  <div
    :class="[
      { 'm-active': isActive },
      { 'm-white': isWhite },
      { 'm-dark': isDark }
    ]"
    class="uiLabelDrop"
  >
    <div class="uiLabelDrop__line m-movementInf">
      <span class="movementInfText">
        <span class="uiLabelDrop__line-text">{{ lineText }}</span>
        <span class="uiLabelDrop__icon">
          <ui-icon icon="arrow-empty-down" class="m-w16" />
        </span>
        <span class="uiLabelDrop__icon">
          <ui-icon icon="arrow-empty-down" class="m-w16" />
        </span>
        <span class="uiLabelDrop__icon">
          <ui-icon icon="arrow-empty-down" class="m-w16" />
        </span>
      </span>
      <span class="movementInf">
        <span class="uiLabelDrop__line-text">{{ lineText }}</span>
        <span class="uiLabelDrop__icon">
          <ui-icon icon="arrow-empty-down" class="m-w16" />
        </span>
        <span class="uiLabelDrop__icon">
          <ui-icon icon="arrow-empty-down" class="m-w16" />
        </span>
        <span class="uiLabelDrop__icon">
          <ui-icon icon="arrow-empty-down" class="m-w16" />
        </span>
      </span>
    </div>
    <div :class="{ 'm-active': isActive }" class="uiLabelDrop__container">
      <span class="uiLabelDrop__text"><slot /></span>
      <span class="uiLabelDrop__icon">
        <ui-icon icon="arrow-empty-down" class="m-w16" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiLabeldrop',
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    isDark: {
      type: Boolean,
      default: false
    },
    isWhite: {
      type: Boolean,
      default: false
    },
    lineText: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>

<style lang="postcss">
.uiLabelDrop {
  padding: 4px 8px;
  position: relative;
  cursor: pointer;
  @media (--s) {
    padding: 14px 32px;
    &:hover {
      ^&__container {
        opacity: 0;
      }
      ^&__line {
        opacity: 1;
      }
    }
  }
  &.m-dark {
    ^&__container {
      .svg {
        fill: #23262c;
      }
    }
    ^&__text {
      color: #23262c;
    }
    ^&__line {
      background-color: #23262c;
      .svg {
        fill: $white;
      }
    }
    ^&__line-text {
      color: $white;
    }
  }
  &.m-white {
    ^&__container {
      .svg {
        fill: #ffffff;
      }
    }
    ^&__text {
      color: #ffffff;
    }
    ^&__line {
      background-color: #ffffff;
      .svg {
        fill: #23262c;
      }
    }
    ^&__line-text {
      color: #23262c;
    }
  }
  &__container {
    display: flex;
    opacity: 1;
    pointer-events: none;
  }
  &__container.m-active &__icon {
    transform: rotate(180deg);
  }
  &__icon {
    margin-left: 4px;
    width: 16px;
    height: 16px;
    .svg {
      font-size: 9px;
    }
  }
  &__line {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    padding: 14px 32px;
  }
  &__line-text,
  &__text {
    font-size: 14px;
    line-height: 17px;
    @media (--s) {
      font-size: 16px;
      line-height: 19px;
    }
  }
}
</style>
