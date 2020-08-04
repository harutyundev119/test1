<template>
  <main class="catalog">
    <div class="container">
      <div class="page-top">
        <div class="page-bread">
          <bread></bread>
        </div>
        <div class="page-line">
          <div class="page-h2 m-white">{{ category.title }}</div>
          <div class="page-actions">
            <div class="catalog__actions">
              <div
                v-if="isSearchButton"
                @click="openSearch()"
                class="catalog__button"
              >
                <ui-button-square
                  class="m-w38 m-black m-circle"
                  icon="search"
                />
              </div>

              <ui-link
                :icon="'download'"
                :link="true"
                :href="config.CATALOG_URL"
                :new-tab="true"
                >Каталог PDF</ui-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="search-large">
      <div v-show="!isSearchButton" class="catalog__search">
        <search-large class="m-catalog"></search-large>
      </div>
    </transition>
    <div class="container">
      <div class="catalog__filter">
        <filter-brands :is-white="true" />
      </div>
    </div>
    <catalog-groups :groups="category.groups" :cat-slug="$route.params.slug" />
  </main>
</template>

<script>
import { mapState } from 'vuex'

import Bread from '@/components/global/bread/Bread.vue'
import FilterBrands from '@/components/global/filter/FilterBrands.vue'
import SearchLarge from '@/components/global/searchLarge/SearchLarge.vue'
import CatalogGroups from './components/CatalogGroups.vue'

export default {
  name: 'Catalog',
  components: {
    Bread,
    CatalogGroups,
    SearchLarge,
    FilterBrands
  },
  computed: {
    ...mapState('config', ['config']),
    ...mapState('catalog/category', ['category']),
    ...mapState('global', ['isSearchButton'])
  },
  async fetch({ store }) {
    await store.dispatch('catalog/getCatalogs')
    await store.dispatch('catalog/brands/getBrands')
  },
  methods: {
    openSearch() {
      this.$store.commit('global/setSearchButton', false)
    }
  }
}
</script>

<style lang="postcss">
.catalog {
  &__filter {
    padding-bottom: 82px;
    @media (--s) {
      padding-bottom: 50px;
    }
  }
}
</style>
