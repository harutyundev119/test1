<template>
  <div class="contentTable">
    <div class="container">
      <div
        :class="[{ 'm-dark': isWhite }, { 'm-white': isDark }]"
        class="contentTable__title"
      >
        {{ content.title }}
      </div>
    </div>

    <div class="contentTable__table">
      <table-sku
        :items="content.skus"
        :is-white="isWhite"
        :is-dark="isDark"
      ></table-sku>
    </div>
  </div>
</template>

<script>
import TableSku from '@/components/global/table/TableSku.vue'
export default {
  name: 'ContentTable',
  components: {
    TableSku
  },
  props: {
    content: {
      type: Object,
      required: true
    },
    isDark: {
      type: Boolean,
      default: false
    },
    isWhite: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="postcss">
.contentTable {
  margin-bottom: 60px;
  @media (--s) {
    margin-bottom: 120px;
  }
  &__title {
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    margin-bottom: 24px;
    @media (--s) {
      font-size: 28px;
      line-height: 34px;
      margin-bottom: 50px;
    }
    @media (--l) {
      margin-bottom: 40px;
    }
    &.m-white {
      color: #ffffff;
    }
    &.m-dark {
      color: #23262c;
    }
  }
}
</style>
