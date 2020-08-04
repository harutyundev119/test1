<template>
  <main class="index">
    <template v-if="!isPreloader && isLoadDDD">
      <div class="index__hero">
        <index-hero></index-hero>
      </div>
      <div class="index__body">
        <div class="index__search">
          <search-large></search-large>
        </div>
        <div class="container">
          <index-brands></index-brands>
          <slider-sale :is-all="true" class="index__slider"></slider-sale>
        </div>
        <div class="index__map">
          <dealers-map map-class="m-home" class="m-home" />
        </div>
        <index-news></index-news>
      </div>
    </template>

    <transition name="fade-up">
      <preloader v-if="isPreloader" v-scroll-lock="isPreloader"></preloader>
    </transition>
  </main>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import SliderSale from '@/components/global/sliders/SliderSale.vue'
import SearchLarge from '@/components/global/searchLarge/SearchLarge.vue'
import Preloader from '@/components/global/preloader/Preloader.vue'

import DealersMap from '@/components/global/dealers/DealersMap.vue'

import IndexHero from '@/domains/index/components/IndexHero.vue'
import IndexNews from './components/IndexNews.vue'
import IndexBrands from './components/IndexBrands.vue'

export default {
  name: 'IndexPage',
  components: {
    SliderSale,
    SearchLarge,
    IndexHero,
    IndexNews,
    IndexBrands,
    Preloader,
    DealersMap
  },
  computed: {
    ...mapState('catalog/brands', ['brands']),
    ...mapState('global', ['isPreloader', 'isLoadDDD']),
    ...mapGetters('sales', ['getActiveSales', 'getPassiveSales'])
  },
  watch: {
    $route() {
      this.setStyles()
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('sales/getSales')
    await store.dispatch('news/getNews', { offset: null, limit: null })
    await store.dispatch('catalog/filteredCategories/getCategories')
    await store.dispatch('catalog/brands/getBrands')
  },
  created() {
    this.setStyles()
  },
  methods: {
    setStyles() {
      if (this.$store.state.global.isPreloader) {
        this.$store.commit('global/setPreloader', true)
      }
    }
  }
}
</script>

<style lang="postcss">
.index {
  position: relative;
  &__loading {
    display: none;
  }
  &__conva {
    overflow: hidden;
    position: absolute;
    top: -144px;
    left: 0;
    right: 0;
    z-index: 1;
  }
  &__body {
    position: relative;
    z-index: 2;
  }
  &__slider {
    margin-bottom: 90px;
    @media (--m) {
      margin-bottom: 100px;
    }
    @media (--l) {
      margin-bottom: 239px;
    }
  }
  &__search {
    margin-bottom: 40px;
  }
  &__map {
    margin: 0;
    padding: 0;
    width: 100%;
    position: relative;
  }
}
</style>
