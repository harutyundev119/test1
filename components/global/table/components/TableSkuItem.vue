<template>
  <div :class="isItemStyle" class="tableSkuItem">
    <div
      v-for="(col, i) in cols"
      :key="i"
      :class="[i === 0 ? 'm-artical' : '', i === 2 ? 'm-price' : '']"
      class="tableSkuItem__col"
    >
      <span v-if="col === 'prices'">
        <span v-if="item[col].special_price === null">
          {{ cost(item[col].price) }} р.
        </span>
        <span v-else
          >{{ cost(item[col].special_price) }}р.
          <span class="page-text m-grey m-line m-ml16"
            >{{ cost(item[col].price) }} р.
          </span>
        </span>
      </span>
      <span v-else-if="col === 'title' && i !== 0">
        <span class="tableSkuItem__title">{{ item[col] }}</span>
        <span
          v-if="item.prices.special_price !== null"
          class="tableSkuItem__tag"
        >
          Акция
        </span>
      </span>
      <span v-else>{{ item[col] }}</span>
    </div>
    <div v-if="!isHeading" :class="isArrowStyle" class="tableSkuItem__arrow">
      <ui-icon icon="arrow-empty-down" class="m-w16"></ui-icon>
    </div>
  </div>
</template>

<script>
import Cost from '@/helpers/cost.js'
export default {
  name: 'TableSkuItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    isHeading: {
      type: Boolean,
      default: false
    },
    isActive: {
      type: Boolean,
      default: false
    },
    isHover: {
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
    }
  },
  computed: {
    colsMobile() {
      return Object.keys(this.item).filter((el, i) => i !== 0)
    },
    cols() {
      return this.$mq !== 's' ? Object.keys(this.item) : this.colsMobile
    },
    isItemStyle() {
      return [
        { 'm-heading': this.isHeading },
        { 'm-dark': this.isDark },
        { 'm-white': this.isWhite },
        { 'm-active': this.isActive },
        { 'm-hover': this.isHover }
      ]
    },
    isArrowStyle() {
      return [
        { 'm-dark': this.isDark },
        { 'm-white': this.isWhite },
        { 'm-active': this.isActive },
        { 'm-hover': this.isHover }
      ]
    }
  },
  methods: {
    cost(item) {
      return Cost(item)
    }
  }
}
</script>

<style lang="postcss">
.tableSkuItem {
  font-size: 12px;
  line-height: 14px;
  display: flex;
  position: relative;
  padding: 18px 0;
  z-index: 2;
  @media (--s) {
    font-size: 16px;
    line-height: 19px;
    padding: 24px 0;
  }
  &.m-heading {
    font-family: $f-2;
    font-weight: 500;
    font-size: 11px;
    line-height: 14px;
    padding: 8px 0;
    @media (--s) {
      font-size: 12px;
      padding: 16px 0;
    }
  }
  &.m-heading.m-white {
    color: #6f7b82;
  }
  &.m-heading.m-dark {
    color: #555e65;
  }

  &.m-white {
    color: #23262c;
  }
  &.m-white.m-hover {
    color: #ffffff;
    ^&__tag:after {
      background-color: #ffffff;
    }
  }
  &.m-dark {
    color: #ffffff;
    ^&__tag:after {
      background-color: #ffffff;
    }
  }
  &.m-dark.m-hover,
  &.m-dark.m-active {
    color: #23262c;
    ^&__tag:after {
      background-color: $dark;
    }
  }
  &__col {
    flex: none;
    width: 50%;
    color: inherit;

    @media (--s) {
      width: 33.3333333333333%;
    }
    @media (--m) {
      flex: 1 1 100%;
      width: auto;
    }
    &:not(:last-child) {
      padding-right: 12px;
    }
    &.m-artical {
      @media (--m) {
        flex: 0 0 265px;
      }
    }
    &.m-price {
      @media (--m) {
        flex: 0 0 24.95987159%;
        margin-left: auto;
      }
    }
  }

  &__arrow {
    position: absolute;
    right: 0;
    top: calc(50% - 5px);
    transition: 0.4s;
    display: block;
    width: 16px;
    height: 16px;
    .svg {
      font-size: 7px;
      @media (--s) {
        font-size: 10px;
      }
    }
    &.m-active {
      transform: rotate(180deg);
    }
  }
  &__arrow.m-white {
    .svg {
      fill: #23262c;
    }
  }
  &__arrow.m-white.m-hover {
    .svg {
      fill: #ffffff;
    }
  }
  &__arrow.m-dark {
    .svg {
      fill: $white;
    }
  }
  &__arrow.m-dark.m-hover,
  &__arrow.m-dark.m-active {
    .svg {
      fill: #23262c;
    }
  }
  &__title {
    @media (--s) {
      padding-right: 10px;
    }
  }
  &__tag {
    color: #e4002c;
    position: relative;
    padding-left: 10px;
    display: block;
    @media (--s) {
      display: inline-block;
    }
    &:after {
      content: '';
      position: absolute;
      height: 4px;
      width: 4px;
      background: $dark;
      top: 3px;
      left: 0;
      @media (--s) {
        height: 5px;
        width: 5px;
        top: 4px;
      }
    }
    &.m-red {
      color: $red;
    }
    &.m-green {
      color: $green;
    }
    @media (--xsm) {
      font-size: 12px;
    }
  }
}
</style>
