<template>
  <div :class="{ 'm-hover': isHover }" class="burgerCategories">
    <div
      v-for="(category, i) in categories"
      :key="category.id"
      class="burgerCategories__item"
    >
      <nuxt-link
        :to="{ name: 'categories', params: { slug: category.slug } }"
        :class="{ 'm-active': indexCategory === i }"
        @mouseover.native="startHover(i)"
        @mouseleave.native="endHover(i)"
        class="burgerCategories__link"
      >
        {{ category.title }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'BurgerCategories',
  props: {
    isHover: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    indexCategory: null
  }),
  computed: {
    ...mapState('global/categories', ['categories'])
  },
  methods: {
    startHover(i) {
      this.$emit('is-hover', true)
      this.indexCategory = i
    },
    endHover(i) {
      this.$emit('is-hover', false)
      this.indexCategory = null
    }
  }
}
</script>

<style lang="postcss">
.burgerCategories {
  column-count: 2;
  &__item {
    margin-bottom: 8px;
    @media (--l) {
      margin-left: 47px;
    }
  }
  &__link {
    font-size: 15px;
    line-height: 18px;
    color: $white;
    transition: 0.8s;
  }
  &.m-hover {
    ^&__link {
      color: #2c2f36;
    }
    ^&__link.m-active {
      color: $white;
    }
  }
}
</style>
