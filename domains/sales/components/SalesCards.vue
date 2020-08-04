<template>
  <u-animate-container class="salesCards">
    <div v-if="items !== null" class="salesCards__items">
      <u-animate
        v-for="(item, i) in items"
        :key="i"
        :offset="0"
        :begin="true"
        :delay="0.2 * i + 's'"
        name="fade"
        duration="1s"
        animate-class="animated slideInDownXs"
        class="salesCards__item"
      >
        <card-sale :item="item"></card-sale>
      </u-animate>
    </div>
    <div v-else>
      пусто
    </div>
  </u-animate-container>
</template>

<script>
import { UAnimateContainer, UAnimate } from 'vue-wow'
import { mapGetters } from 'vuex'

import CardSale from '@/components/global/cardSale/CardSale.vue'
export default {
  name: 'SalesCards',
  components: {
    CardSale,
    UAnimateContainer,
    UAnimate
  },
  computed: {
    ...mapGetters('sales', {
      items: 'getActiveSales'
    })
  }
}
</script>

<style lang="postcss">
.salesCards {
  &__items {
    display: flex;
    slign-item: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: -12px;
    margin-bottom: 64px;
    @media (-m) {
      margin-bottom: 100px;
    }
  }
  &__item {
    flex: 0 0 100%;
    padding: 12px;
    @media (--s) {
      flex: 0 0 50%;
    }
    @media (--m) {
      flex: 0 0 33.33333%;
    }
  }
}
</style>
