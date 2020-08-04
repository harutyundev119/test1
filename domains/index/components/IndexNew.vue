<template>
  <div :style="{ width: news.preview.width + 'px' }" class="indexNew">
    <nuxt-link
      :to="{ name: 'news-slug', params: { slug: news.slug } }"
      class="indexNew__link"
    />
    <nuxt-link
      :to="{ name: 'news-slug', params: { slug: news.slug } }"
      class="indexNew__top"
    >
      <div
        v-tilt="{ speed: 1000, perspective: 1000, max: 6 }"
        class="indexNew__image "
      >
        <img :src="news.images.square_image" alt="" />
      </div>
    </nuxt-link>

    <div class="indexNew__content">
      <div class="indexNew__date page-text m-fs12 m-ws-none">
        {{ dateParse }}
      </div>
      <div class="indexNew__text page-text">
        {{ news.title }}
      </div>
      <div class="indexNew__icon">
        <ui-icon icon="arrow" class="m-w16" />
      </div>
    </div>
  </div>
</template>

<script>
import { DateParse } from '@/helpers/dateParser'
export default {
  name: 'IndexNew',
  props: {
    news: {
      type: Object,
      required: true
    },
    width: {
      type: Number,
      default: 300
    }
  },
  computed: {
    dateParse() {
      return DateParse({ from: this.news.date, to: this.news.date, type: true })
    }
  }
}
</script>

<style lang="postcss">
.indexNew {
  position: relative;
  cursor: pointer;
  &:hover {
    ^&__date {
      @media (--s) {
        color: #23262c;
      }
    }
    ^&__text {
      @media (--s) {
        color: #23262c;
      }
    }
    ^&__image {
      img {
        filter: grayscale(0%);
      }
    }
  }
  &__link {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: '';
    z-index: 2;
  }
  &__top {
    display: block;
    z-index: 3;
    position: relative;
  }
  &__image {
    img {
      display: block;
      width: 100%;
      filter: grayscale(100%);
      transition: 0.4s;
    }
  }
  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 16px;
    @media (--s) {
      padding: 24px 25px 40px 0;
    }
  }
  &__date {
    color: #555e65;
    transition: 0.4s;
    @media (--xsm) {
      color: #23262c;
      order: 1;
    }
    @media (--s) {
      margin-bottom: 16px;
    }
  }
  &__text {
    color: #555e65;
    transition: 0.4s;
    @media (--xsm) {
      margin-bottom: 8px;
      font-family: $f-2;
    }
    @media (--s) {
      font-family: $f-1;
    }
  }
  &__icon {
    position: absolute;
    left: 0;
    bottom: 0;
    @media (--xsm) {
      display: none;
    }
  }
}
</style>
