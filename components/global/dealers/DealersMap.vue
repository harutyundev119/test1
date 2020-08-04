<template>
  <div id="dealersSection" class="dealersMap">
    <dealer-block
      ref="dealersBlock"
      @open-balloon="handleOpenBalloon"
      @update-map="$refs.yaMap.updateMap()"
    >
    </dealer-block>
    <ya-map ref="yaMap" @click="handleMapClick" :class="mapClass"></ya-map>
  </div>
</template>

<script>
import YaMap from '@/components/global/dealersYaMap/YaMap.vue'
import DealerBlock from '@/components/global/dealerBlock/DealerBlock.vue'
export default {
  name: 'DealersMap',
  components: {
    DealerBlock,
    YaMap
  },
  props: {
    mapClass: {
      type: String,
      default: '',
      required: false
    }
  },
  methods: {
    handleMapClick() {
      if (innerWidth < 768) this.$refs.dealersBlock.handleClickOutside()
    },
    handleOpenBalloon(event) {
      if (innerWidth < 768) this.$refs.dealersBlock.handleClickOutside()
      this.$refs.yaMap.openBalloon(event)
    }
  }
}
</script>

<style lang="postcss">
.dealersMap {
  margin: 0;
  padding: 0;
  width: 100%;
  position: relative;

  @media (--xsm) {
    display: flex;
    flex-direction: column;
  }
  &.m-pt {
    .dealerBlock {
      @media (--xsm) {
        padding-top: 64px;
      }
    }
  }
  &.m-home {
    .dealerBlock {
      @media (--xsm) {
        background-color: #18191b;
      }
    }
    .dealerList {
      @media (--xsm) {
        background-color: #18191b;
      }
    }
  }
}
</style>
