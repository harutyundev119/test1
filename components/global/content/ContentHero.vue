<template>
  <div class="contentHero">
    <div class="container">
      <div class="contentHero__back">
        <ui-back :to="{ name: 'events' }">мероприятий</ui-back>
      </div>
      <div class="contentHero__content">
        <div class="contentHero__event page-h2">
          {{ item.title }}
        </div>
        <div class="contentHero__info">
          <div class="contentHero__item page-text">
            <span>Дата:</span> {{ dateParse }}
          </div>
          <div class="contentHero__item">
            <span>Место:</span> {{ item.place }}
          </div>
          <div class="contentHero__item">
            <span>Участники:</span> {{ item.participants_limit }}
          </div>
        </div>
      </div>
    </div>
    <div
      :style="{ backgroundImage: `url(${item.images.wide_image})` }"
      class="contentHero__image"
    ></div>
  </div>
</template>

<script>
import { DateParse } from '@/helpers/dateParser'
export default {
  name: 'ContentHero',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    dateParse() {
      return DateParse({
        from: this.item.date_from,
        to: this.item.date_to,
        type: true
      })
    }
  }
}
</script>

<style lang="postcss">
.contentHero {
  .container {
    @media (--s) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 500px;
    }
    @media (--m) {
      min-height: 720px;
    }
  }

  @media (--s) {
    position: relative;
    padding-top: 80px;
    padding-bottom: 48px;
  }
  &__content {
    position: relative;
    z-index: 2;
    @media (--xsm) {
      margin-bottom: 32px;
    }
    @media (--s) {
      background: #f4f4f4;
      padding: 24px 49px 24px 24px;
      display: flex;
      justify-content: space-between;
    }
  }
  &__back {
    position: relative;
    z-index: 2;
  }
  &__event {
    font-family: $f-2;
    @media (--xsm) {
      margin-bottom: 24px;
    }
    @media (--s) {
      max-width: 500px;
    }
    @media (--m) {
      font-size: 45px;
      font-family: $f-1;
      text-transform: uppercase;
    }
  }
  &__info {
    @media (--s) {
      padding-left: 30px;
      padding-bottom: 6px;
      align-self: flex-end;
    }
  }
  &__image {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @media (--xsm) {
      padding-bottom: 100%;
    }

    @media (--s) {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
  &__item {
    @media (--xsm) {
      margin-bottom: 16px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    span {
      font-family: $f-2;
      @media (--xsm) {
        display: block;
      }
    }
  }
}
</style>
