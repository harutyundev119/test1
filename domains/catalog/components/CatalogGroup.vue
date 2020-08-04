<template>
  <div class="catalogGroup">
    <nuxt-link :to="genRoute" class="catalogGroup__link"></nuxt-link>
    <div class="catalogGroup__body">
      <div v-if="group.meta.price.has_special" class="catalogGroup__tags">
        <div class="catalogGroup__tag page-text m-medium m-red">Акция</div>
      </div>
      <div v-if="group.images.length !== 0" class="catalogGroup__image">
        <img :src="group.images[0].path" alt="" />
      </div>
      <div class="catalogGroup__content">
        <div class="catalogGroup__title page-text m-medium">
          {{ group.title }}
        </div>
        <div
          :class="{ 'm-red': group.meta.price.has_special }"
          class="catalogGroup__cost page-text"
        >
          {{ group.meta.comment }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatalogGroup',
  props: {
    group: {
      type: Object,
      default: () => {}
    },
    catSlug: {
      type: String,
      required: true
    }
  },
  computed: {
    genRoute() {
      return this.$route.name === 'categories'
        ? {
            name: 'group',
            params: { cat_slug: this.catSlug, slug: this.group.slug },
            query: this.$route.query
          }
        : {
            name: 'group',
            params: { cat_slug: this.catSlug, slug: this.group.slug }
          }
    }
  }
}
</script>

<style lang="postcss">
.catalogGroup {
  position: relative;
  padding-bottom: 133.125%;
  @media (--s) {
    padding-bottom: 125%;
  }
  &__link {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }
  &__body {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    padding: 22px 24px 79px 24px;
    @media (--s) {
      padding: 80px 69px 148px 69px;
    }
  }
  &__image {
    padding-bottom: 100%;
    position: relative;
    img {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      max-height: 100%;
      max-width: 100%;
    }
  }
  &__content {
    position: absolute;
    left: 16px;
    bottom: 16px;
    right: 16px;
    @media (--s) {
      left: 40px;
      bottom: 40px;
      right: 56px;
    }
  }
  &__cost {
    &.m-red {
      color: #e4002c;
    }
    &.m-grey {
      color: #969fa3;
      text-decoration: line-through;
    }
    @media (--xsm) {
      font-size: 12px;
      line-height: 14px;
    }
    @media (--s) {
      &:first-child {
        margin-right: 8px;
      }
    }
  }
  &__title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 8px;
    @media (--xsm) {
      font-size: 12px;
      line-height: 14px;
    }
  }
  &__tags {
    position: absolute;
    top: 16px;
    left: 16px;
    padding-left: 12px;
    z-index: 1;
    @media (--s) {
      padding-left: 13px;
      top: 40px;
      left: 40px;
    }
  }

  &__tag {
    color: #e4002c;
    &:before {
      content: '';
      position: absolute;
      height: 4px;
      width: 4px;
      background: $dark;
      top: 3px;
      left: 0;
      @media (--s) {
        height: 5px;
        width: 5px;
        top: 4px;
      }
    }
    &.m-red {
      color: $red;
    }
    &.m-green {
      color: $green;
    }
    @media (--xsm) {
      font-size: 12px;
    }
  }
}
</style>
