<template>
  <main class="catalog">
    <u-animate-container class="container">
      <div class="page-top">
        <u-animate
          :offset="0"
          :begin="false"
          delay="0s"
          name="fade"
          duration="0.5s"
          animate-class="animated slideInDownXs"
          class="page-bread"
        >
          <bread></bread>
        </u-animate>
        <div class="page-line">
          <u-animate
            :offset="0"
            :begin="false"
            delay="0s"
            name="fade"
            duration="1s"
            animate-class="animated slideInDownXs"
            class="catalog__title page-h2 m-white"
            >Каталог продукции</u-animate
          >
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
              <u-animate
                :offset="0"
                :begin="false"
                delay="0s"
                name="fade"
                duration="1s"
                animate-class="animated fadeIn"
              >
                <ui-link
                  :icon="'download'"
                  :link="true"
                  :href="config.CATALOG_URL"
                  :new-tab="true"
                  >Каталог PDF</ui-link
                >
              </u-animate>
            </div>
          </div>
        </div>
      </div>
    </u-animate-container>
    <transition name="search-large">
      <div v-show="!isSearchButton" class="catalog__search">
        <search-large class="m-catalog"></search-large>
      </div>
    </transition>
    <catalog-section
      v-for="(category, index) in categories"
      :key="category.id"
      :category="category"
      :index="index"
    />
  </main>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import { UAnimateContainer, UAnimate } from 'vue-wow'

import Bread from '@/components/global/bread/Bread.vue'
import SearchLarge from '@/components/global/searchLarge/SearchLarge.vue'

import CatalogSection from './components/CatalogSection.vue'
export default {
  name: 'Catalog',
  components: {
    Bread,
    SearchLarge,
    CatalogSection,
    UAnimateContainer,
    UAnimate
  },
  computed: {
    ...mapGetters('catalog', {
      categories: 'AllCatalogs'
    }),
    ...mapState('config', ['config']),
    ...mapState('global', ['isSearchButton'])
  },
  async fetch({ store }) {
    await store.dispatch('catalog/getCatalogs')
    await store.dispatch('catalog/brands/getBrands')
    await store.dispatch('sales/getSales')
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
  &__actions {
    display: flex;
    align-items: center;
  }
  &__button {
    margin-right: 30px;
    @media (--l) {
      margin-right: 82px;
    }
    @media (--xsm) {
      display: none;
    }
  }
}
</style>
