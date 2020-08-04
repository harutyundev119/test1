<template>
  <u-animate-container class="catalogBrands">
    <u-animate
      :offset="0"
      :begin="false"
      v-if="brandID === null"
      delay="0s"
      name="fade"
      duration="1s"
      animate-class="animated fadeIn"
      class="catalogBrands__subtitle"
    >
      Выберите марку
    </u-animate>
    <u-animate
      :offset="0"
      :begin="false"
      v-if="brandID !== null && modelID === null"
      delay="0s"
      name="fade"
      duration="1s"
      animate-class="animated fadeIn"
      class="catalogBrands__subtitle"
    >
      Выберите модель
    </u-animate>
    <div v-if="brandID === null" class="catalogBrands__items">
      <u-animate
        v-for="(brand, index) in brands"
        :key="index"
        @click.native="addBrand(index, brand)"
        :offset="0"
        :begin="false"
        :delay="0.05 * index + 's'"
        name="fade"
        duration="1s"
        animate-class="animated slideInDownXs"
        class="catalogBrands__item"
      >
        <base-icon :name="`brand-${brand.code}`" />
      </u-animate>
    </div>
    <div
      v-if="
        brands.length > 0 &&
          brandID !== null &&
          modelID === null &&
          brandIndex !== null
      "
      class="catalogBrands__model"
    >
      <ui-drop
        :links="brands[brandIndex].models"
        @select="addModel"
        col="m-col-3"
        color="m-color-18191B"
        track="title"
      />
    </div>
  </u-animate-container>
</template>

<script>
import { mapState } from 'vuex'
import { UAnimateContainer, UAnimate } from 'vue-wow'

import BaseIcon from '@/components/base/BaseIcon.vue'
export default {
  name: 'CatalogBrands',
  components: {
    BaseIcon,
    UAnimateContainer,
    UAnimate
  },
  data: () => ({
    indexBrand: null,
    indexModel: null,
    brandId: null
  }),
  computed: {
    ...mapState('catalog/brands', ['brands']),
    ...mapState('catalog/filter', ['brandID', 'modelID']),
    brandIndex() {
      if (this.brandId && this.brands) {
        const index = this.brands.findIndex((el, i) => {
          return el.id === this.brandId
        })
        if (index < 0) return null
        return index
      } else return null
    }
  },
  created() {
    this.brandId = Number(this.$route.query.brand_id) || null
  },
  methods: {
    addBrand(index, brand) {
      this.brandId = brand.id
      this.$router.push({ name: 'catalog', query: { brand_id: brand.id } })
    },
    addModel(model) {
      this.$router.push({
        name: 'catalog',
        query: { brand_id: this.brands[this.brandIndex].id, model_id: model.id }
      })
    }
  }
}
</script>

<style lang="postcss">
.catalogBrands {
  &__model {
    position: relative;
  }
  &__items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 -13px;
    @media (--xsm) {
      width: 100%;
      margin: 0 -8px;
    }
  }
  &__subtitle {
    font-size: 12px;
    line-height: 14px;
    color: #555e65;
    margin-bottom: 24px;
    @media (--s) {
      margin-bottom: 16px;
    }
  }
  &__item {
    padding: 8px;
    cursor: pointer;
    &:hover,
    &.m-active {
      .svg {
        fill: $white;
      }
    }
    @media (--s) {
      padding: 13px;
    }
    .svg {
      fill: #555e65;
      transition: 0.4s;
      cursor: pointer;
    }
    .svg-mark-1 {
      font-size: 16px;
    }
    .svg-mark-2 {
      font-size: 16px;
    }
    .svg-mark-3 {
      font-size: 10px;
    }
    .svg-mark-4 {
      font-size: 10px;
    }
    .svg-mark-5 {
      font-size: 18px;
    }
    .svg-mark-6 {
      font-size: 18px;
    }
    .svg-mark-7 {
      font-size: 20px;
    }
    .svg-mark-8 {
      font-size: 10px;
    }
    .svg-mark-9 {
      font-size: 10px;
    }
    .svg-mark-10 {
      font-size: 12px;
    }
    .svg-mark-11 {
      font-size: 16px;
    }
  }
}
</style>
