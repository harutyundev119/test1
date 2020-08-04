<template>
  <div class="catalogSection m-gradient">
    <template v-if="index === 0">
      <div class="catalogSection__top">
        <div class="catalogSection__header">
          <div class="container">
            <div class="catalogSection__lists">
              <catalog-filter></catalog-filter>
            </div>
            <catalog-slider class="catalog__slider"></catalog-slider>
          </div>
        </div>
        <div class="catalogSection__title">
          <catalog-subtitle :category-id="category.id">
            {{ category.title }}
          </catalog-subtitle>
        </div>
      </div>
      <div class="catalogSection__group">
        <catalog-groups
          :groups="category.groups"
          :cat-slug="category.slug"
          :is-more="true"
        />
      </div>
    </template>

    <template v-else>
      <div class="catalogSection__title">
        <catalog-subtitle :category-id="category.id" is-gradient>
          {{ category.title }}
        </catalog-subtitle>
      </div>

      <div class="catalogSection__group">
        <catalog-groups
          :groups="category.groups"
          :cat-slug="category.slug"
          :is-more="true"
        />
      </div>
    </template>
  </div>
</template>

<script>
import CatalogSlider from '@/domains/catalog/components/CatalogSlider.vue'
import CatalogFilter from '@/domains/catalog/components/CatalogFilter.vue'

import CatalogSubtitle from '@/domains/catalog/components/CatalogSubtitle.vue'
import CatalogGroups from './CatalogGroups.vue'
export default {
  name: 'CatalogSection',
  components: {
    CatalogGroups,
    CatalogSlider,
    CatalogFilter,
    CatalogSubtitle
  },
  props: {
    category: {
      type: Object,
      default: () => {}
    },
    index: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="postcss">
.catalogSection {
  overflow: hidden;
  &__lists {
    margin-bottom: 80px;
    @media (--m) {
      margin-bottom: 160px;
    }
  }
  &__header {
    @media (--s) {
      margin-bottom: 160px;
    }
  }
  &__top {
    background: radial-gradient(
        72.08% 31.54% at 4.42% 80.91%,
        rgba(0, 190, 214, 0.07) 0%,
        rgba(24, 25, 27, 0) 100%
      ),
      radial-gradient(
        95.7% 28.57% at 92.07% 98.48%,
        rgba(0, 190, 214, 0.12) 0%,
        rgba(24, 25, 27, 0) 100%
      );
  }
  &__title {
    position: relative;
    z-index: 1;
  }
  &__group {
    position: relative;
    z-index: 2;
  }
}
</style>
