<template>
  <button
    @click="$emit('click')"
    :class="{ 'm-icon': icon !== null }"
    type="button"
    class="button"
  >
    <template v-if="icon === null">
      <slot></slot>
    </template>
    <template v-else>
      <span class="m-movementInf">
        <template v-if="iconPosition === 'right'">
          <span class="movementInf">
            <span><slot></slot></span>
            <ui-icon :icon="icon" class="m-w16"></ui-icon>
          </span>
          <span class="movementInfText">
            <span><slot></slot></span>
            <ui-icon :icon="icon" class="m-w16"></ui-icon>
          </span>
        </template>
        <template v-if="iconPosition === 'left'">
          <span class="movementInf">
            <ui-icon :icon="icon" class="m-w16"></ui-icon>
            <span><slot></slot></span>
          </span>
          <span class="movementInfText">
            <ui-icon :icon="icon" class="m-w16"></ui-icon>
            <span><slot></slot></span>
          </span>
        </template>
      </span>
    </template>
  </button>
</template>

<script>
export default {
  name: 'UiButton',
  props: {
    icon: {
      type: String,
      default: null
    },
    iconPosition: {
      type: String,
      default: 'right'
    }
  }
}
</script>

<style lang="postcss">
.button {
  font-family: $f-1;
  font-weight: normal;
  font-size: 16px;
  text-align: center;
  height: 48px;
  line-height: 14px;
  text-decoration: none;
  text-transform: none;
  color: transparent;
  background-color: transparent;
  border-radius: 0px;
  letter-spacing: 0px;
  display: inline-block;
  padding: 0 10px;
  width: auto;
  transition: 0.4s;
  border: 1px solid transparent;
  span {
    margin-right: 8px;
  }
  .icon svg {
    transition: 0s;
  }
  .m-movementInf {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100% + 22px);
    height: calc(100% + 2px);
    margin-left: -11px;
    margin-top: -1px;
    .movementInfText {
      visibility: visble;
    }
    .movementInf {
      visibility: hidden;
    }
    &:hover {
      .movementInf {
        visibility: visible;
      }
    }
  }
  &:disabled {
    cursor: default;
    cursor: not-allowed;
  }
  &.m-block {
    display: block;
    width: 100%;
  }
  &.m-upp {
    text-transform: uppercase;
  }
  &.m-white {
    border-color: $white;
    background-color: $white;
    color: $dark;
    &.m-grey {
      border-color: $grey-bg;
      background-color: $grey-bg;
    }
    &:hover {
      border-color: $dark;
      background-color: $dark;
      color: $white;
      .icon svg {
        transition: 0s;
        fill: $white;
      }
    }
    &:active,
    &:focus {
      border-color: #18191b;
      background-color: #18191b;
      color: $white;
      .icon svg {
        transition: 0s;
        fill: $white;
      }
    }
    &:disabled {
      border-color: transparent;
      background-color: transparent;
      color: $disabled;
      .icon svg {
        transition: 0s;
        fill: $disabled;
      }
    }
    &&.m-border {
      border-color: $dark;
      &:active,
      &:focus {
        border-color: #18191b;
      }
      &:disabled {
        border-color: #555e65;
      }
    }
    &.m-line {
      border: 1px solid transparent;
      background-color: transparent;
      &:disabled {
        color: $disabled;
        .icon svg {
          transition: 0s;
          fill: $disabled;
        }
      }
      .icon {
        .svg-arrow-empty-down,
        .svg-arrow-empty-up {
          width: 1em;
          height: 1em;
        }
      }
    }
  }

  &.m-dark {
    border-color: $dark;
    background-color: $dark;
    color: $white;
    .svg {
      fill: $white;
    }
    &:hover {
      border-color: $white;
      background-color: $white;
      color: $dark;
      .svg {
        fill: $dark;
      }
    }
    &:active,
    &:focus {
      border-color: #f0f2f2;
      background-color: #f0f2f2;
      color: $dark;
    }
    &:disabled {
      border-color: transparent;
      background-color: transparent;
      color: #555e65;
    }
    &&.m-border {
      border-color: $white;
      &:active,
      &:focus {
        border-color: #f0f2f2;
      }
      &:disabled {
        border-color: #555e65;
      }
    }
  }
}
</style>
