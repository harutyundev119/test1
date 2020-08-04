<template>
  <div class="contentItem">
    <div class="contentItem__content">
      <div class="contentItem__top">
        <div class="contentItem__date page-text m-fs12">{{ dateParse }}</div>
        <div class="contentItem__title page-h2">
          {{ item.title }}
        </div>
      </div>
      <div class="contentItem__text page-text">
        {{ item.description }}
      </div>
    </div>
    <div class="contentItem__image">
      <div
        :style="{ backgroundImage: `url(${item.images.wide_image})` }"
        class="contentItem__img"
      ></div>
    </div>
  </div>
</template>

<script>
import { DateParse } from '@/helpers/dateParser'
export default {
  name: 'ContentItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    dateParse() {
      return DateParse({
        from: this.item.date,
        to: this.item.date,
        type: true
      })
    }
  }
}
</script>

<style lang="postcss">
.contentItem {
  display: flex;
  @media (--m) {
    align-items: stretch;
    min-height: 469px;
    justify-content: space-between;
  }
  @media (--sm) {
    flex-direction: column;
  }
  &__content {
    display: flex;
    flex-direction: column;
    @media (--m) {
      flex: 0 0 33.3333333%;
      margin-right: 40px;
      justify-content: space-between;
    }
    @media (--sm) {
      margin-bottom: 16px;
    }
  }
  &__date {
    color: $grey;
    margin-bottom: 16px;
    @media (--m) {
      margin-bottom: 24px;
    }
  }
  &__title {
    font-family: $f-2;
    @media (--m) {
      font-family: $f-1;
      font-size: 45px;
      line-height: 1;
      text-transform: uppercase;
    }
    @media (--sm) {
      margin-bottom: 16px;
    }
  }
  &__text {
    @media (--sm) {
      line-height: 1.5;
    }
  }

  &__image {
    @media (--m) {
      flex: 1 1 66.666666%;
    }
  }
  &__img {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-bottom: 56.363636363%;
    @media (max-width: 599px) {
      width: 100%;
      height: auto;
    }
    @media (min-width: 600px) {
      height: 349px;
    }
    @media (min-width: 1000px) {
      width: 749px;
      height: 422px;
    }
    @media (min-width: 1300px) {
      width: 825px;
      height: 465px;
    }
    @media (min-width: 1800px) {
      width: 1112px;
      height: 627px;
    }
  }
}
</style>
