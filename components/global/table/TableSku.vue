<template>
  <div class="tableSku">
    <div class="container">
      <div
        :class="[{ 'm-dark': isDark }, { 'm-white': isWhite }]"
        class="tableSku__row"
      >
        <table-sku-item
          :item="{
            title: 'Артикул',
            code: 'Наименование',
            price: 'Цена'
          }"
          :is-heading="true"
          :is-white="isWhite"
          :is-dark="isDark"
        />
      </div>
      <div
        v-for="item in items"
        :key="item.id"
        :class="checkRowStyle(item.id)"
        class="tableSku__row"
      >
        <div
          :class="[{ 'm-dark': isDark }, { 'm-white': isWhite }]"
          @mouseover="startHover(item.id)"
          @mouseleave="endHover(item.id)"
          @click="onClick(item.id)"
          class="tableSku__item"
        >
          <table-sku-item
            :id="item.id"
            :item="{
              code: item.code.code_full,
              title: item.title,
              prices: {
                price: item.price,
                special_price: item.special_price
              }
            }"
            :is-white="isWhite"
            :is-dark="isDark"
            :is-active="indexRow === item.id"
            :is-hover="indexHover === item.id"
          />
        </div>
        <transition name="fade">
          <table-sku-collapse
            v-if="indexRow === item.id"
            :item="item"
            :is-white="isWhite"
            :is-dark="isDark"
          />
        </transition>
      </div>
    </div>
    <client-only>
      <LightGallery
        :images="skuImages"
        :index="skuIndex"
        :disable-scroll="true"
        @close="setSkuImages({})"
      />
    </client-only>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import TableSkuItem from './components/TableSkuItem.vue'
import TableSkuCollapse from './components/TableSkuCollapse.vue'
export default {
  name: 'TableSku',
  components: {
    TableSkuItem,
    TableSkuCollapse
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    isDark: {
      type: Boolean,
      default: false
    },
    isWhite: {
      type: Boolean,
      default: false
    },
    indexRow: {
      type: Number,
      default: null
    }
  },
  data: () => ({
    indexHover: null
  }),
  computed: {
    ...mapState('global', ['skuImages', 'skuIndex'])
  },
  methods: {
    ...mapMutations('global', ['setSkuImages']),
    onClick(i) {
      if (this.indexRow === i) this.indexRow = null
      else this.indexRow = i
    },
    checkRowStyle(i) {
      return [
        { 'm-dark': this.isDark },
        { 'm-white': this.isWhite },
        { 'm-active': this.indexRow === i }
      ]
    },
    startHover(i) {
      this.indexHover = i
    },
    endHover(i) {
      this.indexHover = null
    }
  }
}
</script>

<style lang="postcss">
.tableSku {
  overflow: hidden;

  &__row.m-white {
    border-bottom: 1px solid #f0f2f2;
  }
  &__row.m-dark.m-active {
    position: relative;
    border-bottom: 1px solid #f0f2f2;
    &:after {
      position: absolute;
      content: '';
      top: 0;
      bottom: 0;
      left: -9999px;
      right: -9999px;
      z-index: 1;
      background: #ffffff;
    }
  }
  &__row.m-dark {
    border-bottom: 1px solid #2a2e31;
  }
  &__item {
    cursor: pointer;
    position: relative;
    &:after {
      position: absolute;
      content: '';
      top: 0;
      bottom: 0;
      left: -9999px;
      right: -9999px;
      z-index: 1;
    }
  }
  &__item.m-white:hover {
    &:after {
      background: #23262c;
    }
  }
  &__item.m-dark:hover {
    &:after {
      background: #ffffff;
    }
  }
}
</style>
