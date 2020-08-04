<template>
  <main class="sales">
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
          <bread class="m-dark"></bread>
        </u-animate>
        <u-animate
          :offset="0"
          :begin="false"
          delay="0s"
          name="fade"
          duration="1s"
          animate-class="animated slideInDownXs"
          class="page-line"
        >
          <div class="dealers__title page-h2 m-white">Акции</div>
        </u-animate>
      </div>
      <slider-sale class="sales__hero"></slider-sale>
      <sales-cards></sales-cards>
      <sales-table></sales-table>
    </u-animate-container>
  </main>
</template>

<script>
import { UAnimateContainer, UAnimate } from 'vue-wow'

import Bread from '@/components/global/bread/Bread.vue'
import SliderSale from '@/components/global/sliders/SliderSale.vue'

import SalesCards from './components/SalesCards.vue'
import SalesTable from './components/SalesTable.vue'

export default {
  name: 'Sales',
  components: {
    Bread,
    SliderSale,
    SalesCards,
    SalesTable,
    UAnimateContainer,
    UAnimate
  }
}
</script>

<style lang="postcss">
.sales {
  &__subtitle {
    margin-bottom: 24px;
    @media (--s) {
      margin-bottom: 40px;
    }
  }
  &__hero {
    margin-bottom: 32px;
    @media (--s) {
      margin-bottom: 70px;
    }
  }
}
</style>
