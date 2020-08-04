<template>
  <u-animate-container class="catalogFilter">
    <div class="catalogFilter__top">
      <tags></tags>
    </div>
    <div class="catalogFilter__bottom">
      <div class="catalogFilter__left">
        <div class="catalogFilter__marks">
          <catalog-brands></catalog-brands>
        </div>
      </div>
      <div class="catalogFilter__right">
        <u-animate
          :offset="0"
          :begin="false"
          delay="0s"
          name="fade"
          duration="1s"
          animate-class="animated fadeIn"
          class="catalogFilter__subtitle"
          >Выберите категорию</u-animate
        >
        <div class="catalogFilter__categorys">
          <categories />
        </div>
      </div>
    </div>
  </u-animate-container>
</template>

<script>
import Tags from '@/components/global/tags/Tags.vue'
import Categories from '@/components/global/categories/Categories.vue'
import CatalogBrands from '@/domains/catalog/components/CatalogBrands.vue'

import { UAnimateContainer, UAnimate } from 'vue-wow'

export default {
  name: 'CatalogFilter',
  components: {
    Categories,
    CatalogBrands,
    Tags,
    UAnimateContainer,
    UAnimate
  }
}
</script>

<style lang="postcss">
.catalogFilter {
  @media (--s) {
    display: flex;
    flex-wrap: wrap;
  }
  &__top {
    margin-bottom: 83px;
    @media (--s) {
      flex: 0 0 100%;
      margin-bottom: 33px;
    }
  }
  &__bottom {
    @media (--s) {
      display: flex;
      width: 100%;
    }
  }
  &__left {
    @media (--xsm) {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    }
    @media (--s) {
      flex: 0 0 288px;
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
  &__marks {
    margin-bottom: 64px;
    @media (--xsm) {
      width: 100%;
      max-width: 288px;
      margin-bottom: 64px;
    }
  }
  &__right {
    flex: 1 1 100%;
    @media (--s) {
      padding-left: 30px;
    }
    @media (--m) {
      padding-left: 168px;
    }
  }
}
</style>
