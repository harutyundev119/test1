<template>
  <div class="tableSkuCollapse">
    <mq-layout
      v-if="item.images"
      mq="l+"
      class="tableSkuCollapse__item m-images"
    >
      <table-sku-images :images="item.images" />
    </mq-layout>
    <div class="tableSkuCollapse__item">
      <table-sku-description :item="item" />
    </div>
    <div v-if="isNews" class="tableSkuCollapse__item m-button">
      <mq-layout mq="m+" class="tableSkuCollapse__button">
        <ui-button
          v-scroll-to="'#dealersSection'"
          class="m-dark"
          icon="mappoint"
        >
          Выбрать магазин
        </ui-button>
      </mq-layout>
      <mq-layout mq="s" class="tableSkuCollapse__button">
        <ui-button
          v-scroll-to="'#dealersSection'"
          class="m-dark m-block"
          icon="mappoint"
        >
          Выбрать магазин
        </ui-button>
      </mq-layout>
    </div>
  </div>
</template>

<script>
import TableSkuImages from './TableSkuImages.vue'
import TableSkuDescription from './TableSkuDescription.vue'
export default {
  name: 'TableSkuCollapse',
  components: {
    TableSkuImages,
    TableSkuDescription
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    isDark: {
      type: Boolean,
      default: false
    },
    isWhite: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isNews() {
      return this.$route.name !== 'news-slug'
    }
  }
}
</script>

<style lang="postcss">
.tableSkuCollapse {
  position: relative;
  z-index: 2;
  @media (--s) {
    display: flex;
    min-height: 250px;
  }
  &__item {
    @media (--s) {
      flex: none;
      width: 33.33333333333%;
      &:not(:last-child) {
        padding-right: 24px;
      }
    }
    @media (--m) {
      flex: 1 1 100%;
    }
    &.m-images {
      @media (--m) {
        flex: 0 0 265px;
      }
    }
    &.m-button {
      @media (--m) {
        flex: 0 0 24.95987159%;
      }
    }
  }
  &__button {
    height: 100%;
    display: flex;
    align-items: flex-end;
    padding: 8px 0 50px;
  }
}
</style>
