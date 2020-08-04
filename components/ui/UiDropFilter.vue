<template>
  <div
    :class="[
      { 'm-white': isWhite },
      { 'm-dark': isDark },
      { 'm-color-18191B': isBlack }
    ]"
    class="uiDropFilter"
  >
    <div class="uiDropFilter__top">
      <span class="uiDropFilter__title">{{ placeholder }}</span>
      <ui-button-square
        @click="$emit('close', true)"
        class="m-w32 m-white"
        icon="delete"
      />
    </div>
    <div
      :class="[
        { 'm-white': isWhite },
        { 'm-dark': isDark },
        { 'm-color-18191B': isBlack }
      ]"
      class="uiDropFilter__content scrollContainer"
    >
      <ul :class="col" class="uiDropFilter__items">
        <li v-for="(link, i) in links" :key="i" class="uiDropFilter__item">
          <span @click="handleClick(link)" class="uiDropFilter__link">
            {{ link[track] }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiDropFilter',
  props: {
    color: {
      type: String,
      default: ''
    },
    col: {
      type: String,
      default: ''
    },
    links: {
      type: Array,
      default: () => []
    },
    track: {
      type: String,
      default: null
    },
    isWhite: {
      type: Boolean,
      default: false
    },
    isDark: {
      type: Boolean,
      default: false
    },
    isBlack: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick(item) {
      this.$emit('select', item)
    }
  }
}
</script>

<style lang="postcss">
.uiDropFilter {
  background-color: transparent;
  z-index: 2;
  position: absolute;
  top: 80%;
  left: 0;
  background-color: #fff;
  width: 100%;
  @media (--xsm) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    min-height: 100vh;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 8px;
    background: #fff;
  }
  .m-top {
    top: 0;
  }
  &__top {
    background-color: $white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 12px;
    @media (--s) {
      display: none;
    }
  }
  &__title {
    font-size: 16px;
    line-height: 19px;
    color: #23262c;
  }

  &__content {
    height: 100%;
    max-height: 200px;
    padding: 10px 32px;
    border: 1px solid #555e65;
    @media (--xsm) {
      max-height: none;
      padding: 20px 24px;
      border-color: $white;
    }
  }
  &__items {
    &.m-col-3 {
      column-count: 3;
    }
  }
  &__item {
    padding: 12px 0;
  }
  &__link {
    font-size: 14px;
    line-height: 17px;
    color: $dark;
    border-bottom: 1px solid transparent;
    transition: 0.4s;
    cursor: pointer;
    &:hover {
      border-color: $dark;
    }
  }
  &.m-white {
    background-color: $dark;
    ^&__link {
      color: #f0f2f2;
      &:hover {
        border-color: #f0f2f2;
      }
    }
  }
  &.m-dark {
    background-color: #ffffff;
    ^&__link {
      color: $dark;
      &:hover {
        border-color: $dark;
      }
    }
  }
  &.m-color-18191B {
    background-color: #18191b;
    ^&__link {
      color: #f0f2f2;
      &:hover {
        border-color: #f0f2f2;
      }
    }
  }
  &.m-block {
    width: 100%;
  }
  &.m-center {
    @media (--s) {
      text-align: center;
    }
  }
}
</style>
