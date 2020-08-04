<template>
  <div class="groupTable">
    <div class="container">
      <div class="groupTable__item m-top">
        <mq-layout class="groupTable__col" mq="l+">
          Артикул
        </mq-layout>
        <div class="groupTable__col">Наименование</div>
        <div class="groupTable__col">Цена</div>
      </div>
    </div>
    <div
      v-for="(item, i) in items"
      :key="i"
      :class="{ 'm-active': i === indexRow }"
      class="groupTable__row"
    >
      <div @click="onClick(i)" class="groupTable__row-content">
        <div class="container">
          <div class="groupTable__item">
            <mq-layout class="groupTable__col" mq="l+">
              {{ item.code.code_full }}
            </mq-layout>
            <div class="groupTable__col">{{ item.title }}</div>
            <div class="groupTable__col">{{ item.price }}</div>
            <div
              :class="{ 'm-active': i === indexRow }"
              class="groupTable__arrow"
            >
              <ui-icon icon="arrow-empty-down"></ui-icon>
            </div>
          </div>
        </div>
      </div>
      <transition name="fade">
        <div v-if="i === indexRow" class="groupTable__collapse">
          <group-table-collapse :item="item"></group-table-collapse>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import GroupTableCollapse from './GroupTableCollapse.vue'
export default {
  components: { GroupTableCollapse },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    indexRow: null
  }),
  methods: {
    onClick(i) {
      if (this.indexRow === i) {
        this.indexRow = null
      } else {
        this.indexRow = i
      }
    }
  }
}
</script>

<style lang="postcss">
.groupTable {
  &__item {
    display: flex;
    padding: 18px 0;
    position: relative;

    @media (--s) {
      padding: 24px 0;
    }
  }
  &__row,
  &__item.m-top {
    border-bottom: 1px solid #f0f2f2;
  }
  &__row.m-active {
    @media (--xsm) {
      background: #23262c;
      ^&__col {
        color: $white;
      }
      ^&__arrow {
        .svg {
          fill: $white;
        }
      }
    }
  }
  &__row-content {
    @media (--s) {
      cursor: pointer;
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
        color: $white;
        ^^&__col {
          color: $white;
        }
        ^^&__arrow {
          .svg {
            fill: $white;
          }
        }
        &:after {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          content: '';
          background-color: #23262c;
          z-index: 1;
        }
      }
    }
  }
  &__col {
    flex: none;
    width: 50%;
    font-size: 16px;
    line-height: 19px;
    color: #23262c;
    position: relative;
    z-index: 2;
    transition: 0.6s;
    @media (--s) {
      width: 33.333333333333%;
    }
    @media (--xsm) {
      font-size: 12px;
      line-height: 14px;
    }
  }
  &__arrow {
    position: absolute;
    top: calc(50% - 10px);
    right: 0;
    z-index: 2;
    transition: 0.6s;
    .svg {
      font-size: 10px;
      fill: #23262c;
    }
    &.m-active {
      transform: rotate(180deg);
    }
  }
}
</style>
