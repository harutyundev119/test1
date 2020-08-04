<template>
  <button @click="handleClick" type="button" name="button" class="buttonSquare">
    <span class="buttonSquare__icon">
      <base-icon :name="icon" />
    </span>
  </button>
</template>

<script>
import BaseIcon from '@/components/base/BaseIcon.vue'
export default {
  name: 'UiButtonSquare',
  components: {
    BaseIcon
  },
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style lang="postcss">
.buttonSquare {
  background-color: transparent;
  border-radius: 0px;
  display: block;
  padding: 0;
  transition: 0.4s;
  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    .svg {
      transition: 0.4s;
    }
  }
  &.m-full {
    width: 100%;
    padding-bottom: 100%;
    position: relative;
    ^&__icon {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .svg {
      font-size: 10px;
    }
    .svg-menu {
      font-size: 20px;
    }
  }
  &.m-w16 {
    width: 16px;
    height: 16px;
    .svg {
      font-size: 12px;
    }
  }
  &.m-w24 {
    width: 24px;
    height: 24px;
    .svg {
      font-size: 14px;
    }
    .svg-arrow-left,
    .svg-arrow-right {
      font-size: 9px;
    }
  }
  &.m-w32 {
    width: 32px;
    height: 32px;
    .svg {
      font-size: 17px;
    }
    .svg-play {
      font-size: 10px;
    }
    .svg-delete {
      font-size: 15px;
      @media (--m) {
        font-size: 24px;
      }
    }
  }
  &.m-w38 {
    width: 38px;
    height: 38px;
    .svg {
      font-size: 16px;
    }
    .svg-search {
      font-size: 12px;
    }
  }
  &.m-w48 {
    width: 48px;
    height: 48px;
    .svg {
      font-size: 10px;
    }
  }
  &.m-white {
    background-color: $white;
    border-color: $white;
    .svg {
      fill: $dark;
    }
    .svg-calendar {
      fill: $dark;
    }
    &:hover {
      background-color: $dark;
      border-color: $dark;
      .svg {
        fill: $white;
      }
      .svg-calendar {
        fill: $white;
      }
    }
  }
  &.m-black {
    background-color: $black;
    border-color: $black;
    .svg {
      fill: $white;
    }
    .svg-calendar {
      fill: $white;
    }
    &:hover {
      background-color: $white;
      border-color: $white;
      .svg {
        fill: $black;
      }
      .svg-calendar {
        fill: $black;
      }
    }
  }
  &.m-dark {
    background-color: $dark;
    border-color: $dark;
    .svg {
      fill: $white;
    }
    .svg-calendar {
      fill: $white;
    }
    &:hover {
      background-color: $white;
      border-color: $white;
      .svg {
        fill: $dark;
      }
      .svg-calendar {
        fill: $dark;
      }
    }
  }
  &.m-grey {
    background-color: #555e65;
    border-color: #555e65;
    .svg {
      fill: $white;
    }
    &:hover {
      background-color: #23262c;
      border-color: #23262c;
    }
  }
  &.m-circle {
    border-radius: 50%;
  }
}
</style>
