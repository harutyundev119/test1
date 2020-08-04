<template>
  <main class="dealers">
    <u-animate-container class="dealers-container">
      <dealer-block
        @open-balloon="$refs.yaMap.openBalloon($event)"
        @update-map="$refs.yaMap.updateMap()"
        class="m-full"
      >
        <u-animate
          :offset="0"
          :begin="false"
          delay="0s"
          name="fade"
          duration="0.5s"
          animate-class="animated slideInDownXs"
          class="dealerBlock__body"
        >
          <bread class="m-dark"></bread>
        </u-animate>
      </dealer-block>
      <ya-map ref="yaMap" class="m-network"></ya-map>
    </u-animate-container>
  </main>
</template>

<script>
import { UAnimateContainer, UAnimate } from 'vue-wow'

import Bread from '@/components/global/bread/Bread.vue'
import DealerBlock from '@/components/global/dealerBlock/DealerBlock.vue'
import YaMap from '@/components/global/dealersYaMap/YaMap.vue'

export default {
  name: 'Dealers',
  components: {
    Bread,
    DealerBlock,
    YaMap,
    UAnimateContainer,
    UAnimate
  },
  data: () => ({}),
  mounted() {},
  methods: {
    openBalloon(id) {
      this.$refs.yaMap.openBalloon(id)
    }
  }
}
</script>

<style lang="postcss">
.dealers {
  &-container {
    margin: 0;
    padding: 0;
    width: 100%;
    position: relative;
  }
  &__top {
    margin-bottom: 40px;
    @media (--s) {
      margin-bottom: 24px;
    }
  }
  &__bread {
    margin-bottom: 8px;
  }
}
</style>
