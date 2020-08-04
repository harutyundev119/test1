<template>
  <main class="group">
    <div class="container">
      <div class="page-bread">
        <bread :links="breads" class="m-dark"></bread>
      </div>
      <div class="group__top">
        <mq-layout :mq="['s']" class="group__title page-h1">
          {{ group.title }}
        </mq-layout>
        <div class="group__slider">
          <group-images :images="group.images"></group-images>
        </div>
        <div class="group__description">
          <group-description :group="group"></group-description>
        </div>
      </div>
      <div class="group__filter">
        <filter-brands is-dark is-group />
      </div>
    </div>
    <div class="group__table">
      <table-sku :items="group.skus" :index-row="indexRow" is-white></table-sku>
    </div>
    <dealers-map class="m-pt" />
  </main>
</template>

<script>
import { mapState } from 'vuex'

import Bread from '@/components/global/bread/Bread.vue'
import FilterBrands from '@/components/global/filter/FilterBrands.vue'
import TableSku from '@/components/global/table/TableSku.vue'
import DealersMap from '@/components/global/dealers/DealersMap.vue'
import GroupImages from './components/GroupImages.vue'
import GroupDescription from './components/GroupDescription.vue'
export default {
  transition: 'page-light',
  name: 'Group',
  components: {
    Bread,
    GroupImages,
    GroupDescription,
    TableSku,
    FilterBrands,
    DealersMap
  },
  computed: {
    ...mapState('catalog/groups', ['group']),
    indexRow() {
      return this.$route.query.id ? this.$route.query.id : null
    },
    breads() {
      return [
        {
          to: { name: 'index' },
          title: 'Главная'
        },
        {
          to: { name: 'catalog', query: this.$route.query },
          title: 'Каталог продукции'
        },
        {
          to: {
            name: 'categories',
            params: { slug: this.group.category.slug },
            query: this.$route.query
          },
          title: this.group.category.title
        }
      ]
    }
  },
  mounted() {
    console.log(this.$route.query.id)
    this.$scrollTo(document.getElementById(this.$route.query.id), 300, {
      offset: -64
    })
  }
}
</script>

<style lang="postcss">
.group {
  &__top {
    margin-bottom: 64px;
    @media (--s) {
      display: flex;
      border: 1px solid #c6cccf;
      margin-bottom: 80px;
    }
  }
  &__slider {
    @media (--xsm) {
      margin-bottom: 16px;
    }
    @media (--s) {
      flex: 0 0 280px;
      border-right: 1px solid #c6cccf;
    }
    @media (--m) {
      flex: 0 0 400px;
      border-right: 1px solid #c6cccf;
    }
  }
  &__description {
    @media (--s) {
      flex: 1 1 100%;
    }
  }
  &__title {
    font-family: $f-2;
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    color: #23262c;
  }
  &__table {
    margin-top: 48px;
    margin-bottom: 64px;
  }
}
</style>
