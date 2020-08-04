<template>
  <div v-if="items !== null" class="catalogSlider">
    <slider-items :items="items">
      <template #left>
        Акции
      </template>
      <template #right>
        <ui-link
          :to="{ name: 'sales' }"
          :icon="'arrow-xs-right'"
          class="m-white"
          >Все акции</ui-link
        >
      </template>
      <template slot-scope="scope">
        <card-sale :item="scope.item"></card-sale>
      </template>
    </slider-items>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import SliderItems from '@/components/global/sliders/SliderItems.vue'
import CardSale from '@/components/global/cardSale/CardSale.vue'
export default {
  name: 'CatalogSlider',
  components: {
    SliderItems,
    CardSale
  },
  computed: {
    ...mapGetters('sales', {
      items: 'getTopOfActive'
    })
  }
}
</script>

<style lang="postcss">
.catalogSlider {
  .swiper-slide {
    @media (--xsm) {
      width: 231px;
    }
  }
  &__top {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  &__more {
    display: flex;
    align-items: center;
  }
  &__link {
    font-size: 14px;
    line-height: 17px;
    color: $white;
    @media (--s) {
      font-size: 16px;
      line-height: 19px;
    }
  }
  &__arrow {
    margin-left: 8px;
    .svg {
      fill: $white;
    }
  }
  &__title {
    margin-right: auto;
  }
  &__item {
    padding: 20px 0;
  }
}
</style>
