<template>
  <main class="sale">
    <div class="container">
      <div class="sale__back">
        <ui-back :to="{ name: 'sales' }" class="m-dark">акций</ui-back>
      </div>
      <div class="sale__top">
        <sale-top :item="currentSale" />
      </div>
    </div>
    <content-sections :components="currentSale.components" is-dark />
    <dealers-map />
  </main>
</template>

<script>
import { mapState } from 'vuex'
import SaleTop from '@/domains/sale/components/SaleTop.vue'
import ContentSections from '@/components/global/content/ContentSections.vue'
import DealersMap from '@/components/global/dealers/DealersMap.vue'

export default {
  name: 'Sale',
  components: {
    SaleTop,
    DealersMap,
    ContentSections
  },
  computed: {
    ...mapState('sales', ['currentSale'])
  },
  async fetch({ store, params }) {
    if (params.slug && params.slug !== store.state.sales.slug) {
      store.commit(`sales/setSlug`, params.slug)
      await store.dispatch('sales/getCurrentSale')
    }
  },
  methods: {
    type(type) {
      switch (type) {
        case 'sku-table':
          return 'ContentTable'
      }
    }
  }
}
</script>

<style lang="postcss">
.sale {
  &__back {
    @media (--s) {
      margin-bottom: 80px;
    }
  }
  &__top {
    margin-bottom: 64px;
    @media (--m) {
      margin-bottom: 128px;
    }
  }
  &__subtitle {
    margin-bottom: 24px;
  }
}
</style>
