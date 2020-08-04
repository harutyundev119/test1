<template>
  <div class="searchLargeDrop">
    <div v-if="isEmpty" class="searchLargeDrop__empty page-text m-grey">
      По вашему запросу <span>ничего не найдено</span>
    </div>
    <div v-else class="searchLargeDrop__items scrollContainer m-white">
      <div
        v-for="(item, i) in items"
        :key="i"
        @click="handleClick(item)"
        class="searchLargeDrop__item"
      >
        <div class="container">
          <div class="searchLargeDrop__link">
            <span v-if="track === null">{{ item }}</span>
            <span v-else> {{ item[track] }}</span>
            <ui-icon icon="arrow-xs-right" class="m-w16"></ui-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchLargeDrop',
  props: {
    items: {
      type: Array,
      required: true
    },
    track: {
      type: String,
      default: null
    },
    isEmpty: {
      type: Boolean,
      default: false
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
.searchLargeDrop {
  &__items {
    max-height: 450px;
  }
  &__item {
    position: relative;
    &:after {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      content: '';
      background-color: transparent;
      z-index: 1;
      transition: 0.6s;
    }
    &:hover {
      color: #23262c;
      &:after {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        content: '';
        background-color: $white;
        z-index: 1;
      }
      .svg {
        fill: #23262c;
      }
    }
  }
  &__link {
    font-size: 12px;
    line-height: 14px;
    color: #969fa3;
    padding: 14px;
    cursor: pointer;
    border-top: 1px solid #555e65;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 2;
    @media (--s) {
      font-size: 18px;
      line-height: 22px;
      padding: 16px 20px;
    }
    .svg {
      transition: 0.6s;
      fill: #6f7b82;
    }
    span {
      transition: 0.6s;
      padding-right: 10px;
    }
  }
  &__empty {
    text-align: center;
    padding: 10px 10px 20px;
    @media (--s) {
      padding: 10px 20px 64px;
    }
    span {
      color: $white;
    }
  }
}
</style>
