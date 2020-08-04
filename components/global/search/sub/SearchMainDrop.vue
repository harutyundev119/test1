<template>
  <div class="searchMainDrop scrollContainer">
    <div
      ref="resultList"
      v-if="items.length >= 0"
      class="searchMainDrop__items"
    >
      <div v-for="item in items" :key="item.id" class="searchMainDrop__item">
        <nuxt-link
          :to="{ name: routeName, params: { slug: item.slug } }"
          class="searchMainDrop__link page-text"
        >
          {{ item.title }}
        </nuxt-link>
        <div class="page-text m-grey m-fs12">{{ dateParse(item.date) }}</div>
      </div>
      <div v-if="items.length === 0" class="searchMainDrop__item">
        <div class="searchMainDrop__empty">Ничего не найдено</div>
      </div>
    </div>
  </div>
</template>

<script>
import { DateParse } from '@/helpers/dateParser'
export default {
  name: 'SearchMainDrop',
  props: {
    items: {
      type: Array,
      required: true
    },
    routeName: {
      type: String,
      default: 'news-slug',
      required: true
    }
  },
  methods: {
    dateParse(date) {
      return DateParse({ from: date, to: date, type: true })
    }
  }
}
</script>

<style lang="postcss">
.searchMainDrop {
  background-color: #f4f4f4;
  border: 1px solid $dark;
  max-height: 300px;
  transition: max-height 0.6s;
  overflow-y: scroll;
  &__items {
    padding: 32px 24px;
  }
  &__item {
    display: block;
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
  &__link {
    margin-bottom: 8px;
    display: inline-block;
    &:hover {
      text-decoration: underline;
    }
  }
  &.m-hidden {
    transition: max-height 0.6s;
    overflow: hidden;
    max-height: 0;
  }
}
</style>
