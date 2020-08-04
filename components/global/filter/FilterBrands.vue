<template>
  <div class="filterBrands">
    <div class="filterBrands__item">
      <tags :mod="mod" />
    </div>
    <div v-if="brandID === null" class="filterBrands__item">
      <ui-dropdown
        :items="currentBrands"
        @select="selectBrand"
        :is-white="isWhite"
        :is-dark="isDark"
        :is-black="isBlack"
        :is-filter="true"
        placeholder="Выбрать марку"
        title="Выбрать бренд"
        track="title"
      ></ui-dropdown>
    </div>
    <div v-if="brandID !== null && modelID === null" class="filterBrands__item">
      <ui-dropdown
        :items="currentModel"
        @select="selectModel"
        :is-white="isWhite"
        :is-dark="isDark"
        :is-black="isBlack"
        :is-filter="true"
        title="Выбрать модель"
        track="title"
        placeholder="Выберите модель"
      ></ui-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Tags from '@/components/global/tags/Tags.vue'
export default {
  name: 'FilterBrands',
  components: {
    Tags
  },
  props: {
    isWhite: {
      type: Boolean,
      default: false
    },
    isDark: {
      type: Boolean,
      default: false
    },
    isBlack: {
      type: Boolean,
      default: false
    },
    isGroup: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    indexBrand: null
  }),
  computed: {
    ...mapState('catalog/filter', ['brandID', 'modelID']),
    ...mapState('catalog/brands', ['brands']),
    ...mapGetters('catalog/brands', [
      'getModels',
      'getFilteredBrands',
      'getModelsByGroup'
    ]),
    mod() {
      return this.isDark ? 'm-white' : null
    },
    currentBrands() {
      return this.isGroup ? this.getFilteredBrands : this.brands
    },
    currentModel() {
      return this.isGroup ? this.getModelsByGroup : this.getModels
    }
  },
  methods: {
    selectBrand(item) {
      const name = this.$route.name
      const params = this.$route.params
      this.$router.push({
        name,
        params,
        query: {
          brand_id: item.id
        }
      })
    },
    selectModel(item) {
      const name = this.$route.name
      const params = this.$route.params
      this.$router.push({
        name,
        params,
        query: { brand_id: this.brandID, model_id: item.id }
      })
    }
  }
}
</script>

<style lang="postcss">
.filterBrands {
  display: flex;
  align-items: center;
  &__item {
    .uiDropDown__drop {
      min-width: auto;
      width: 100%;
    }
  }
}
</style>
