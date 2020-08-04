<template>
  <div :class="color" class="uiDrop">
    <div :class="color" class="uiDrop__content scrollContainer">
      <ul :class="col" class="uiDrop__items">
        <li v-for="(link, i) in links" :key="i" class="uiDrop__item">
          <span @click="handleClick(link)" class="uiDrop__link">
            {{ link[track] }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiDrop',
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
.uiDrop {
  background-color: transparent;
  z-index: 2;
  position: absolute;
  top: 80%;
  left: 0;
  .m-top {
    top: 0;
  }

  &__content {
    height: 100%;
    max-height: 200px;
    padding: 10px 32px;
    border: 1px solid #555e65;
  }
  &__items {
    &.m-col-3 {
      column-count: 3;
    }
  }
  &__item {
    padding: 4px 0;
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
