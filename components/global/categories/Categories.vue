<template>
  <u-animate-container :class="{ 'm-hover': isHover }" class="categories">
    <u-animate
      v-for="(category, i) in getCategories"
      :key="i"
      :offset="0"
      :begin="false"
      :delay="0.05 * i + 's'"
      name="fade"
      duration="1s"
      animate-class="animated slideInDownXs"
      class="categories__item"
    >
      <div
        :class="{ 'm-active': indexCategory === i }"
        class="categories__icon"
      >
        <ui-icon :icon="`category-${i + 1}`" class="m-w24" />
      </div>
      <span
        @mouseover="startHover(i)"
        @mouseleave="endHover(i)"
        class="categories__name"
      >
        <nuxt-link
          :to="{
            name: 'categories',
            params: { slug: category.slug },
            query: {
              brand_id: $route.query.brand_id,
              model_id: $route.query.model_id
            }
          }"
          :class="{ 'm-active': indexCategory === i }"
          class=" page-text m-white"
        >
          {{ category.title }}
        </nuxt-link>
        <transition v-if="category.groups.length !== 0" name="slide-fade">
          <ui-drop
            v-if="indexCategory === i"
            :links="category.groups"
            @select="select"
            track="title"
            color="m-color-18191B m-top"
          />
        </transition>
      </span>
      <template v-if="isBlock">
        <sup class="categories__num">
          ({{ category.meta.groups_amount.total }})
        </sup>
      </template>
      <template v-else>
        <sup v-if="brandID === null" class="categories__num">
          ({{ category.meta.groups_amount.total }})
        </sup>
        <sup v-else class="categories__num">
          (<span class="m-active">{{
            category.meta.groups_amount.matched
          }}</span
          >/{{ category.meta.groups_amount.total }})
        </sup>
      </template>
    </u-animate>
  </u-animate-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { UAnimateContainer, UAnimate } from 'vue-wow'

export default {
  name: 'Categories',
  components: {
    UAnimateContainer,
    UAnimate
  },
  props: {
    isBlock: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    isHover: false,
    indexCategory: null
  }),
  computed: {
    ...mapState('global/categories', ['categories']),
    ...mapState('catalog/filter', ['brandID', 'modelID']),
    ...mapGetters('catalog/filteredCategories', ['getGroups']),
    getCategories() {
      return this.isBlock ? this.categories : this.getGroups
    }
  },
  methods: {
    startHover(i) {
      this.isHover = true
      this.indexCategory = i
    },
    endHover(i) {
      this.isHover = false
      this.indexCategory = null
    },
    select(item) {
      this.$router.push({
        name: 'group',
        params: {
          cat_slug: this.getGroups[this.indexCategory].slug,
          slug: item.slug
        },
        query: {
          brand_id: this.$route.query.brand_id,
          model_id: this.$route.query.model_id
        }
      })
    }
  }
}
</script>

<style lang="postcss">
.categories {
  @media (--m) {
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    display: flex;
    align-items: center;
    padding: 7px 0 1px;
    margin-bottom: 9px;
    position: relative;
    &.m-disabled {
      opacity: 0.4;
    }
    @media (--m) {
      flex: 0 0 50%;
    }
    @media (--l) {
      flex: 0 0 33.33333%;
    }
  }
  &__icon {
    margin-right: 8px;
    .svg {
      fill: #555e65;
      transition: 0.4s;
    }
    &.m-active {
      .svg {
        fill: #555e65 !important;
      }
    }
  }
  &__name {
    cursor: pointer;
    .page-text {
      transition: 0.4s;
    }
  }
  &__num {
    font-size: 12px;
    line-height: 14px;
    color: #555e65;
    margin-left: 5px;
    transition: 0.4s;
    .m-active {
      color: $white;
      transition: 0.4s;
    }
  }
  &.m-hover {
    .page-text.m-white {
      color: #2c2f36;
    }
    .page-text.m-white.m-active {
      color: #ffffff;
    }
    ^&__icon .svg {
      fill: #2c2f36;
    }
    ^&__num {
      color: #2c2f36;
      .m-active {
        color: #2c2f36;
      }
    }
  }
}
</style>
