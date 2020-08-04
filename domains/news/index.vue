<template>
  <main class="news">
    <div class="container">
      <news-top></news-top>
      <masonry
        v-infinite-scroll="infiniteHandler"
        :infinite-scroll-throttle-delay="1000"
        :cols="{ default: 2, 1024: 1, 320: 1 }"
        :gutter="{ default: '144px', 1280: '70px', 320: '' }"
        class="news__items"
      >
        <div v-for="(item, index) in newsList" :key="index" class="news__item">
          <div :is="isTypeCard(item)" :item="item"></div>
        </div>
      </masonry>
      <div v-if="IsScrollPagination" class="news__loading">
        <loading></loading>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

import Loading from '@/components/global/loading/Loading.vue'
import CardNewImage from '@/components/global/cards/CardNewImage.vue'
import CardNew from '@/components/global/cards/CardNew.vue'
import UiCalendar from '@/components/ui/UiCalendar'
import ClickOutside from 'vue-click-outside'

import NewsTop from './components/NewsTop.vue'
export default {
  transition: 'page-light',
  name: 'News',
  directives: {
    ClickOutside
  },
  components: {
    Loading,
    /* eslint-disable vue/no-unused-components */
    CardNew,
    CardNewImage,
    UiCalendar,
    NewsTop
  },
  data: () => ({}),
  computed: {
    ...mapState('news', { newsList: 'items' }),
    ...mapState({
      DefaultLimit: (state) => state.news.defaultLimit,
      IsLoading: (state) => state.news.isLoading,
      DateFrom: (state) => state.news.dateFrom,
      DateTo: (state) => state.news.dateTo
    }),
    ...mapGetters({
      IsScrollPagination: 'news/isScrollPagination'
    })
  },
  methods: {
    ...mapMutations({
      setLoading: 'news/setLoading'
    }),
    isTypeCard(item) {
      if (item.preview.type === 'special') return 'CardNew'
      else return 'CardNewImage'
    },
    infiniteHandler() {
      if (!this.IsScrollPagination) return null
      if (this.IsLoading) return null
      this.setLoading(true)
      const currentOffset = Number(this.$route.query.offset) || 0
      const query = {
        offset: currentOffset + this.DefaultLimit
      }
      if (this.DateFrom) query.date_from = this.DateFrom
      if (this.DateTo) query.date_to = this.DateTo
      this.$router.push({
        name: 'news',
        query
      })
    }
  }
}
</script>

<style lang="postcss">
.news {
  &__items > div:nth-child(2) {
    @media (--s) {
      margin-top: 170px;
    }
  }
  &__item {
    margin-bottom: 40px;
    @media (--s) {
      margin-bottom: 90px;
    }
    @media (--l) {
      margin-bottom: 144px;
    }
  }
  &__title {
    &.m-mobile {
      @media (--s) {
        display: none;
      }
    }
    &.m-desktop {
      @media (--xsm) {
        display: none;
      }
    }
    &.fade-enter-active,
    &.fade-leave-active {
      transition: opacity 0.5s;
    }
    &.fade-enter,
    &.fade-leave-to {
      opacity: 0;
    }
  }
  &__actions {
    &.fade-enter-active,
    &.fade-leave-active {
      transition: opacity 0.5s;
    }
    &.fade-enter,
    &.fade-leave-to {
      opacity: 0;
    }
  }
  &__search-line {
    max-width: 100%;
    &.main-search-enter-active,
    &.main-search-leave-active {
      transition: all 0.5s;
    }
    &.main-search-enter,
    &.main-search-leave-to {
      max-width: 310px;
    }
  }
  .button.m-white.m-line {
    &:hover,
    &:focus,
    &:active {
      color: #23262c;
      .icon .svg {
        fill: #23262c;
      }
    }
    .icon {
      .svg {
        font-size: 9px;
      }
      &:hover .svg {
        fill: #23262c;
      }
    }
  }
}
</style>
