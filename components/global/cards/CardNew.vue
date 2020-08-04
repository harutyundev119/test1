<template>
  <ui-depth :depth="6">
    <div
      :style="{ backgroundColor: item.preview.data.background_color }"
      :class="[
        { 'm-dark': item.preview.data.font_color === 'dark' },
        { 'm-light': item.preview.data.font_color === 'light' }
      ]"
      class="cardNew"
    >
      <nuxt-link
        :to="{ name: 'news-slug', params: { slug: item.slug } }"
        class="cardNew__link"
      />
      <div class="cardNew__icon">
        <ui-icon icon="arrow" class="m-w16" />
      </div>
      <div class="cardNew__body">
        <div class="cardNew__date page-text m-ws-none">{{ dateParse }}</div>
        <div class="cardNew__title page-headline m-upp">
          {{ item.title }}
        </div>
      </div>
    </div>
  </ui-depth>
</template>

<script>
import { DateParse } from '@/helpers/dateParser'
export default {
  name: 'CardNew',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    dateParse() {
      return DateParse({ from: this.item.date, to: this.item.date, type: true })
    }
  }
}
</script>

<style lang="postcss">
.cardNew {
  position: relative;
  overflow: hidden;
  @media (--xsm) {
    height: 380px;
  }
  @media (--s) {
    padding-bottom: 100%;
    position: relative;
    &:hover &__icon {
      opacity: 1;
    }
  }
  &__icon {
    opacity: 0;
    position: absolute;
    top: 24px;
    right: 24px;
    transition: 0.4s;
    .svg {
      fill: $dark;
    }
  }
  &__body {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (--xsm) {
      padding: 24px 16px;
    }
    @media (--s) {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 24px;
    }
  }
  &__link {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }
  &__date {
    @media (--mm) {
      font-size: 12px;
      line-height: 14px;
    }
  }
  &__title {
    color: $dark;
    width: 248px;
    @media (--l) {
      width: 504px;
    }
  }
  &.m-dark {
    background: $yellow;
    ^&__date {
      color: $dark;
      opacity: 0.56;
    }
    ^&__title {
      color: $dark;
    }
    span {
      color: #b5942c;
    }
  }
  &.m-light {
    background: $purple;
    ^&__date {
      color: $white;
      opacity: 0.56;
    }
    ^&__title {
      color: $white;
    }
    span {
      color: #c7c4df;
    }
  }
}
</style>
