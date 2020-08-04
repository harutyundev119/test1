<template>
  <div class="catalogGroups">
    <div v-if="groups.length !== 0" class="catalogGroups__items">
      <div v-for="group in groups" :key="group.id" class="catalogGroups__item">
        <catalog-group :group="group" :cat-slug="catSlug" />
      </div>
      <div
        v-if="isMore && groups.length >= 7"
        class="catalogGroups__item m-all"
      >
        <catalog-more :to="{ name: 'categories', params: { slug: catSlug } }" />
      </div>
    </div>
    <div v-else class="catalogGroups__empty">
      <div class="container">
        <empty
          >Товаров <span class="m-grey">по данному запросу</span> нет</empty
        >
      </div>
    </div>
  </div>
</template>

<script>
import Empty from '@/components/global/empty/Empty.vue'
import CatalogGroup from './CatalogGroup.vue'
import CatalogMore from './CatalogMore.vue'
export default {
  name: 'CatalogGroups',
  components: {
    CatalogGroup,
    CatalogMore,
    Empty
  },
  props: {
    groups: {
      type: Array,
      required: true
    },
    catSlug: {
      type: String,
      required: true
    },
    isMore: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="postcss">
.catalogGroups {
  &__items {
    background-color: $white;
    display: flex;
    flex-wrap: wrap;
  }
  &__item {
    flex: 0 0 50%;
    border-bottom: 1px solid #e3e6e8;
    border-right: 1px solid #e3e6e8;
    @media (--sm) {
      &:nth-child(even) {
        border-right: none;
      }
    }
    @media (--m) {
      flex: 0 0 25%;
      &:nth-child(4n) {
        border-right: none;
      }
    }
    &.m-all {
      @media (--xsm) {
        flex: 0 0 100%;
        min-height: 360px;
      }
    }
  }
  &__empty {
    font-weight: 500;
    font-family: $f-2;
    font-size: 34px;
    line-height: 1.2;
    color: #000000;
    background-color: $white;
    padding: 30px 0 30px;
    min-height: 414px;
    @media (--sm) {
      .m-grey {
        color: #c6cccf;
      }
    }
    @media (--s) {
      font-size: 64px;
    }
    @media (--m) {
      padding: 58px 0 202px;
    }
    &.m-dark {
      background-color: $dark;
    }
  }
}
</style>
